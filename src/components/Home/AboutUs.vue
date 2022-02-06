<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="section-bg">
    <div class="container-fluid" data-aos="fade-up">
      <div class="section-header">
        <h3 class="section-title">About Us</h3>
        <span class="section-divider"></span>
        <p class="section-description">
          Get To know about Hivelink
        </p>
      </div>

      <div class="row">
        <div class="col-lg-6 about-img" data-aos="fade-right" dat-aos-delay="100">
          <img src="../../assets/images/about_image.jpg" alt="">
        </div>

        <div class="col-lg-6 content" data-aos="fade-left" dat-aos-delay="100">

          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <p>
                Hivelink joined the software development community in 2018. It originated from Australia and it is exapnding to all corners of the world as now having offices in Zimbabwe apart from Asutralia. As Hivelink, our main Domain is Web and web app development, mobile App(IOS and android) Development, Digital Marketing, Product Design and Cloud Services.
              </p>
              <p>
                Customer Satisfaction and the Highest rate of Customer involvement and respect make us one of the best upcoming software development company to work with. So, what are you waiting for? Let us discuss your ideas and our innovative team help you because catering your requirement and converting it into a final product within a stipulated time is our main goal.
              </p>
              <div class="">
                <router-link to="/about">
                  <button type="submit" title="Send Message">Read More</button>
                </router-link>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>

        </div>
      </div>

    </div>
  </section><!-- End About Section -->
</template>

<script>
export default {
  name: "AboutUs"
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