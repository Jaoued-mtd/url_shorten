<template>
  <div class="cta-content">
    <div class="left">
      <h1 class="cta-title">More than just shorter links</h1>
      <p class="secondary-grey cta-text">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <BaseButton mode="btn-blue cta-button" title="Get Started" />
    </div>
    <div class="right">
      <img src="../../assets/images/illustration-working.svg" class="image" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>

<style  scoped>
.cta-content {
  margin: 2rem 0;
  display: grid;
  grid-gap: 4rem;
  width: 80%;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
}

.left {
  grid-row: 2 / 3;
}

.cta-title {
  font-size: 3.5rem;
  margin: 0;
}
.cta-text {
  margin: 1.3rem 0;
}

.right {
  grid-row: 1 / 3;
}
.image {
  width: 100%;
}

@media screen and (max-width: 930px) {
  .cta-content {
    display: flex;
    text-align: center;

    flex-direction: column;
    align-items: center;
  }
  .image {
    position: relative;
  }
}

@media screen and (min-width: 1400px) {
  .image {
    width: 80%;
  }
}

@media screen and (min-width: 1850px) {
  .image {
    width: 60%;
  }
}
</style>