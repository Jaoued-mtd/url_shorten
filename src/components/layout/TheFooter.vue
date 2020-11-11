<template>
  <footer class="secondary-grey">
    <div class="footer-content">
      <div class="footer-brand">
        <h1>Shortly</h1>
      </div>
      <div class="footer-flex">
        <div class="footer-grid">
          <div class="footer-col">
            <ul class="footer-list">
              <li>Features</li>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div class="footer-col">
            <ul class="footer-list">
              <li>Resources</li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div class="footer-col">
            <ul class="footer-list">
              <li>Company</li>
              <li>About</li>
              <li>Our Team</li>
              <li>Carrers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div class="footer-icons">
          <img src="../../assets/images/icon-instagram.svg" />
          <img src="../../assets/images/icon-facebook.svg" />
          <img src="../../assets/images/icon-twitter.svg" />
          <img src="../../assets/images/icon-pinterest.svg" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: hsl(260, 8%, 14%);
}

.footer-content {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 3rem;
}

.footer-flex {
  display: flex;
  justify-content: space-between;
}

.footer-grid {
  display: flex;
  margin-right: 2rem;
  padding: 1rem;
}

.footer-list {
  list-style: none;
}

li:hover {
  color: hsl(180, 66%, 49%);
  cursor: pointer;
}

li:first-child {
  color: white;
  margin-bottom: 2rem;
}

li:not(:first-child) {
  margin-bottom: 0.7rem;
}

.footer-icons img {
  margin: 2rem 1rem;
  width: 1.2rem;
}

.footer-icons img:hover {
  color: hsl(180, 66%, 49%);
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  .footer-content {
    text-align: center;
    width: 100%;
    padding: 0;
  }
  .footer-icons img {
    flex-direction: column;
  }
  .footer-grid {
    flex-direction: column;
  }
  .footer-content {
    flex-direction: column;
  }
  .footer-flex {
    flex-direction: column;
  }
}
@media screen and (max-width: 1050px) {
  .footer-content {
    display: flex;
  }
}
</style>