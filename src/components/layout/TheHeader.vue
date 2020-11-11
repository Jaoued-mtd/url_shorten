<template>
  <div class="navbar">
    <div class="navbar-left">
      <h1>Shortly</h1>
      <ul class="navbar-list secondary-grey desktop">
        <li class="navbar-links">Features</li>
        <li class="navbar-links">Pricing</li>
        <li class="navbar-links">Resources</li>
      </ul>
    </div>
    <div class="navbar-right desktop">
      <BaseButton mode="link" title="Login" />
      <BaseButton mode="btn-blue" title="Sign up" />
    </div>
    <div @click="openMenu = !openMenu" class="toogle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <transition name="fade">
    <div class="mobile-navbar" v-if="openMenu">
      <ul class="navbar-mobile-list secondary-grey">
        <li class="navbar-mobile-links">Features</li>
        <li class="navbar-mobile-links">Pricing</li>
        <li class="navbar-mobile-links">Resources</li>
      </ul>
      <hr class="navbar-mobile-hr" />
      <div class="navbar-mobile-button">
        <BaseButton mode="link mobile" title="Login" />
        <BaseButton mode="btn-blue mobile" title="Sign up" />
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      openMenu: false,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  align-items: center;
}

.navbar-left {
  display: flex;
}

.navbar-list {
  display: flex;
  list-style: none;
  align-items: center;
}

li:hover {
  color: hsl(255, 11%, 22%);
  cursor: pointer;
}

.navbar-links {
  margin-left: 2rem;
}

.mobile-navbar {
  background: hsl(257, 27%, 26%);
  border-radius: 0.6rem;
  margin: 0.6rem;
}

.navbar-mobile-list {
  padding: 1rem;
  list-style: none;
  color: white;
  text-align: center;
  font-size: 1.5rem;
}

.navbar-mobile-links {
  margin: 2rem;
}
.navbar-mobile-button {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 2rem;
}
.navbar-mobile-hr {
  width: 80%;
  margin: auto;
  opacity: 40%;
}

.toogle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
}

@media screen and (max-width: 930px) {
  .desktop {
    display: none;
  }
}

@media screen and (min-width: 931px) {
  .toogle {
    display: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>