<template>
  <button class="btn" :class="mode">{{ title }}</button>
</template>

<script>
export default {
  props: ["title", "mode"],
};
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 0px solid;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

.btn:hover {
  opacity: 90%;
}

.link {
  color: hsl(0, 0%, 75%);
  font-weight: 700;
  background: transparent;
}

.btn-blue {
  background: hsl(180, 66%, 49%);
  color: white;
}

.cta-button {
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  border-radius: 1.5rem;
}

.shorten-btn {
  border-radius: 0.3rem;
  font-size: 1rem;
  padding: 0.7rem 2rem;
  white-space: nowrap;
}

.mobile {
  font-size: 1.5rem;
}
</style>