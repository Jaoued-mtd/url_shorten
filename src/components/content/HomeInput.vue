<template>
  <div class="shorten">
    <div class="shorten-content">
      <form @submit.prevent="onSubmit" class="shorten-bar">
        <input
          class="shorten-input secondary-grey"
          placeholder="Shorten a link here..."
          v-model="url"
        />

        <BaseButton
          type="submit"
          title="Shorten it!"
          mode="btn-blue shorten-btn"
        />
      </form>
      <p class="invalid" v-if="invalid">Please add a link or check it.</p>
    </div>
    <BaseSpinner v-if="isLoading" />
    <div class="shorten-result" v-if="linkResult">
      <div class="link">
        <p>{{ url }}</p>
      </div>
      <div class="link-shortened">
        <p class="primary-cyan link-text" id="link">
          <span class="shorten-span"> Your shortened url : </span>
          {{ linkResult }}
        </p>
        <BaseButton @click="copyUrl" title="Copy" mode="btn-blue shorten-btn" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      linkResult: false,
      invalid: false,
      url: "",
      isLoading: false,
    };
  },
  methods: {
    onSubmit() {
      this.invalid = false;
      this.isLoading = true;
      var requestOptions = {
        method: "POST",
        redirect: "follow",
      };

      fetch(`https://api.shrtco.de/v2/shorten?url=${this.url}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.linkResult = result.result.full_short_link;
          this.isLoading = false;
        })
        .catch(() => {
          this.invalid = true;
          this.isLoading = false;
        });
    },
    copyUrl() {
      var dummy = document.createElement("input");
      //dummy.style.display = 'none'
      document.body.appendChild(dummy);
      //$(dummy).css('display','none');
      dummy.setAttribute("id", "dummy_id");
      //dummy.setAttribute('value', document.URL + '; ' + document.title)
      dummy.setAttribute("value", this.linkResult); //TEXTX is the value of variable
      //document.getElementById("dummy_id").value=val;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
  },
};
</script>



<style scoped>
.shorten {
  background: hsl(0, 5%, 96%);
  padding-bottom: 1rem;
}
.shorten-content {
  width: 73%;
  margin: 8rem auto 0 auto;
  background: url("../../assets/images/bg-shorten-desktop.svg");
  padding: 3rem;
  border-radius: 1rem;
  background-color: hsl(257, 27%, 26%);
}

.shorten-bar {
  display: flex;
  justify-content: space-between;
}

.shorten-input {
  width: 80%;
  padding: 0.8rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  outline: none;
}

.shorten-result {
  background: hsl(0, 5%, 96%);
  width: 77.5%;
  background: white;
  border-radius: 1rem;
  margin: 1rem auto;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
}

.link-shortened {
  display: flex;
  justify-content: space-between;
}
.link-text {
  margin-right: 2rem;
}

.invalid {
  color: hsl(0, 87%, 67%);
  font-size: 0.9rem;
  font-style: italic;
}

.invalid:focus {
  color: red;
  outline: red;
}
.shorten-span {
  color: black;
}

@media screen and (max-width: 930px) {
  .shorten-result {
    flex-direction: column;
    text-align: center;
    width: 80%;
  }
  .link-shortened {
    flex-direction: column;
  }
  .shorten-bar {
    flex-direction: column;
  }
  .shorten-content {
    width: 70%;
  }
  .shorten-input {
    width: 93%;
    margin-bottom: 1.5rem;
  }
  .link-text {
    margin: auto;
  }
}

@media screen and (min-width: 1650px) {
  .shorten {
    margin-top: 10rem;
  }
}
</style>