<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about" style="margin-bottom: 0px; padding-bottom: 0px">

    <div class="container" data-aos="fade-up">
      <div class="row gx-0">
        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div class="content section-bg" style="margin-bottom: 0px">
            <h3 class="section-title">Who we are</h3>
            <h2 class="section-title">Hivelink, A digital solutions, service provider</h2>
            <p>
              Based in Sydney, HiveLink is recognized as one of the Top Digital Solutions Provider in Australia. Bringing Digital Transformation Solutions to Startups,  Enterprises and Government Agencies, HiveLink offers a wide array of expertise to ensure clients achieve sustainable competitive advantage by developing innovative and intelligent Products and Solutions in several industries.
            </p>
            <p>
              Leveraging a deep technical acumen & highly refined development processes, HiveLink provides a ultra rapid & cost effective delivery cycle, a key success factor in such a rapidly evolving market place. We have consulted and developed over 100+ Applications.
            </p>
          </div>
        </div>

        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
          <img src="../../assets/images/team.jpeg" class="img-fluid" alt="">
        </div>

      </div>
    </div>
  </section><!-- End About Section -->
</template>

<script>
export default {
  name: "AboutSection"
}
</script>

<style scoped>
/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .content {

  padding: 40px;
}


.about p {
  margin: 15px 0 30px 0;
  line-height: 24px;
}
.about .btn-read-more {
  line-height: 0;
  padding: 15px 40px;
  border-radius: 4px;
  transition: 0.5s;
  color: #fff;
  background: #4154f1;
  box-shadow: 0px 5px 25px rgba(65, 84, 241, 0.3);
}
.about .btn-read-more span {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
}
.about .btn-read-more i {
  margin-left: 5px;
  font-size: 18px;
  transition: 0.3s;
}
.about .btn-read-more:hover i {
  transform: translateX(5px);
}
</style>