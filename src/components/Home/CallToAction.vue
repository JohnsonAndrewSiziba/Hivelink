<template>
  <!-- ======= Call To Action Section ======= -->
  <section id="call-to-action" data-aos="fade-up" data-aos-delay="400">
    <div class="container">
      <div class="row">
        <div class="container p-3 shadow-sm" style="background-color: rgba(255,255,255,0.95); border-radius: 12px">
          <div class="col-lg-9 text-center text-lg-start">
            <h3 class="cta-title text-black">Get In Touch</h3>
            <p class="cta-text text-secondary">
              You have a vision. We have a way to get you there. Get in touch with us today and tell us what you need. If you can explain it, we can make it happen.
            </p>
          </div>
          <div class="col-lg-3">
<!--            <router-link class="btn-outline-secondary btn rounded" to="/contact">Get In Touch</router-link>-->
            <router-link to="/contact">
              <button type="submit" title="Send Message">Get In Touch</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End Call To Action Section -->
</template>

<script>

export default {
  name: "CallToAction",
  components: {

  }
}
</script>

<style scoped>
button {
  background: linear-gradient(45deg, #5194DF, #10BEE4);
  border: 0;
  border-radius: 20px;
  padding: 8px 30px;
  color: #fff;
}
</style>