<template>
  <div class="stats">
    <div class="stats-content">
      <div class="stats-header">
        <h1 class="stats-title">Advanced Statistics</h1>
        <p class="stats-text secondary-grey">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div class="stats-grid">
        <div class="stats-card">
          <img
            src="../../assets/images/icon-brand-recognition.svg"
            class="card-icon"
          />
          <h4 class="stats-grid-title">Brand Recognition</h4>
          <p class="stats-grid-text secondary-grey">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div class="stats-card detailed">
          <img
            src="../../assets/images/icon-detailed-records.svg"
            class="card-icon"
          />
          <h4 class="stats-grid-title">Detailed Records</h4>
          <p class="stats-grid-text secondary-grey">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div class="stats-card fully">
          <img
            src="../../assets/images/icon-fully-customizable.svg"
            class="card-icon"
          />
          <h4 class="stats-grid-title">Fully Customizable</h4>
          <p class="stats-grid-text secondary-grey">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
        <span class="card-separator"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  background: hsl(0, 5%, 96%);
  padding: 4rem;
}
.stats-content {
  width: 80%;
  margin: auto;
}
.stats-header {
  text-align: center;
  width: 50%;
  margin: 4rem auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat (3, 1fr);
  grid-gap: 1.5rem;
  position: relative;
}

.stats-card {
  background: white;
  width: 15rem;
  padding: 2rem;
  grid-row: 1 / 3;
  position: relative;
  z-index: 2;
  max-height: 15vh;
}
.stats-grid-text {
  font-size: 0.9rem;
}

.detailed {
  margin-top: 2rem;
}

.fully {
  margin-top: 4rem;
}

.card-icon {
  background: hsl(257, 27%, 26%);
  padding: 1rem;
  border-radius: 3rem;
  width: 2rem;
  position: absolute;
  top: -2rem;
}

.card-separator {
  border-bottom: 0.5rem solid hsl(180, 66%, 49%);
  width: 66rem;

  position: absolute;

  top: 8rem;
  z-index: 1;
}

@media screen and (max-width: 1520px) {
  .card-separator {
    width: 46rem;
  }
}
@media screen and (max-width: 1200px) {
  .stats-content {
    width: 100%;
    margin: auto;
  }
  .stats-grid {
    display: flex;

    flex-direction: column;
    align-items: center;
  }
  .card-separator {
    transform: rotate(90deg);
    width: 40rem;
    top: 20rem;
  }
  .card-icon {
    left: 7.6rem;
  }
}
</style>

