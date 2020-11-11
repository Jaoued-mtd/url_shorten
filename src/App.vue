<template>
  <TheHeader />
  <HomeCta />
  <HomeInput />
  <HomeStats />
  <HomeBottomCta />
  <TheFooter />
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import HomeCta from "./components/content/HomeCta";
import HomeInput from "./components/content/HomeInput.vue";
import HomeStats from "./components/content/HomeStats";
import HomeBottomCta from "./components/content/HomeBottomCta";
import TheFooter from "./components/layout/TheFooter";
export default {
  name: "App",
  components: {
    TheHeader,
    HomeCta,
    HomeInput,
    HomeStats,
    HomeBottomCta,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");

html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  color: hsl(255, 11%, 22%);
}

#app {
  margin: 0;
  padding: 0;
}

.primary-cyan {
  color: hsl(180, 66%, 49%);
}

.primary-violet {
  color: hsl(257, 27%, 26%);
}

.secondary-red {
  color: hsl(0, 87%, 67%);
}

.secondary-grey {
  color: hsl(0, 0%, 75%);
}
</style>



