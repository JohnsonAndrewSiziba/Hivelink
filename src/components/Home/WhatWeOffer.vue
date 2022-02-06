<template>
  <!-- ======= Featuress Section ======= -->
  <section id="features">
    <div class="container" data-aos="fade-up">

      <div class="row">

        <div class="col-lg-8 offset-lg-4">
          <div class="section-header">
            <h3 class="section-title">What We Offer</h3>
            <span class="section-divider"></span>
          </div>
        </div>

        <div class="col-lg-4 col-md-5 features-img">
          <img src="../../assets/images/offer.png" alt="" data-aos="fade-up">
        </div>

        <div class="col-lg-8 col-md-7 ">

          <div class="row">

            <div class="col-lg-6 col-md-6 box" data-aos="fade-right">
              <div class="icon"><i class="bi bi-pc-display"></i></div>
              <h4 class="title"><router-link to="/services">Custom Software</router-link></h4>
              <p class="description">
                We are keen on building amazing custom software solutions that meet all the modern requirements and best practices in terms of functionality, security, scalability, etc.
              </p>
            </div>

            <div class="col-lg-6 col-md-6 box" data-aos="fade-left">
              <div class="icon"><i class="bi bi-phone-fill"></i></div>
              <h4 class="title"><router-link to="/services">Mobile App Development</router-link></h4>
              <p class="description">
                Our mobile team has experience in building both native and hybrid apps as well as cross-platform ones. The mobile applications we deliver are operating faster with the boosted scalability and functionality.
              </p>
            </div>
            <div class="col-lg-6 col-md-6 box" data-aos="fade-right" dat-aos-delay="100">
              <div class="icon"><i class="bi bi-graph-up-arrow"></i></div>
              <h4 class="title"><router-link to="/services">Data Analytics</router-link></h4>
              <p class="description">
                Using our big data and analytics, you can collect massive amounts of information and utilize it productively. Big data is used for properly optimizing your business process.
              </p>
            </div>
            <div class="col-lg-6 col-md-6 box" data-aos="fade-left" data-aos-delay="100">
              <div class="icon"><i class="bi bi-lightbulb-fill"></i></div>
              <h4 class="title"><router-link to="/services">Digital Transformation</router-link></h4>
              <p class="description">
                We can help you drive a digital change agenda and future-proof technology landscape to deliver compelling experiences and implement a modern digital backbone.
              </p>
            </div>
          </div>

          <br>
          <div class="text-center" data-aos="fade-up" data-aos-delay="100">
            <router-link to="/services">
              <button type="submit" title="Send Message">Read More</button>
            </router-link>
          </div>

          <br>
          <br>

        </div>

      </div>

    </div>

  </section><!-- End Featuress Section -->
</template>

<script>
export default {
  name: "WhatWeOffer"
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