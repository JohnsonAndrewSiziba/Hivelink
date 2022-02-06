<template>
  <!-- ======= Features Section ======= -->
  <section id="features" class="features">
    <div class="container" data-aos="fade-up">
      <!-- Feature Tabs -->
      <div class="row feture-tabs" data-aos="fade-up">
        <div class="col-lg-6">
          <h3 class="section-title">Our Business Philosophy</h3>

          <!-- Tabs -->
          <ul class="nav nav-pills mb-3">
            <li>
              <a class="nav-link active" data-bs-toggle="pill" href="#tab1">Our Vision</a>
            </li>
            <li>
              <a class="nav-link" data-bs-toggle="pill" href="#tab2">Our Mission</a>
            </li>
            <li>
              <a class="nav-link" data-bs-toggle="pill" href="#tab3">Our Commitment</a>
            </li>
            <li>
              <a class="nav-link" data-bs-toggle="pill" href="#tab4">Our Values</a>
            </li>
          </ul><!-- End Tabs -->


          <div class="tab-content">

            <div class="tab-pane fade show active" id="tab1">
              <p>
                Our vision is to help clients achieve an ultra-rapid and cost efficient solutions delivery cycle that reduces their time to market. Through expertise, highly refined processes, and a vast code repository, we position our client for success and offer a complete range of services designed to minimize technical overhead, increase productivity and maximize ROI.
              </p>
            </div><!-- End Tab 1 Content -->

            <div class="tab-pane fade show" id="tab2">
              <p>
                HiveLink mission is to maintain and be a dominant thought-leader  in digital solutions by facilitating client success through superior expertise and a full range of digital services. Our aim is to offer significant value to our clients by  maximizing productivity and ROI.
              </p>
            </div><!-- End Tab 2 Content -->

            <div class="tab-pane fade show" id="tab3">
              <p>
                To create a digitally enaled work place and commmunity through our innovative digital solutions and client centric motive.
              </p>
              <p>
                Our commitment is to come up with easy and reliable ways of doing businesses.
              </p>
            </div><!-- End Tab 3 Content -->

            <div class="tab-pane fade show" id="tab4">
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-check2"></i>
                <h6>Innovative</h6>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-check2"></i>
                <h6>Digitalise</h6>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-check2"></i>
                <h6>Team Work</h6>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-check2"></i>
                <h6>Respect</h6>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-check2"></i>
                <h6>Client Centric</h6>
              </div>
            </div><!-- End Tab 3 Content -->

          </div>

        </div>

        <div class="col-lg-6">
          <img data-aos="fade-left" data-aos-delay="200" src="../../assets/images/tech.jpg" class="img-fluid" alt="">
        </div>

      </div><!-- End Feature Tabs -->

      <!-- Feature Icons -->


    </div>

  </section><!-- End Features Section -->
</template>

<script>
export default {
  name: "VisionMission"
}
</script>

<style scoped>

/*--------------------------------------------------------------
# Features
--------------------------------------------------------------*/
.features .feature-box {
  padding: 24px 20px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  height: 100%;
}

.features .feature-box i {
  line-height: 0;
  background: #ecf3ff;
  padding: 4px;
  margin-right: 10px;
  font-size: 24px;
  border-radius: 3px;
  transition: 0.3s;
}
.features .feature-box:hover i {
  background: #5194DF;
  color: #fff;
}
.features .feture-tabs {
  margin-top: 120px;
}

@media (max-width: 768px) {
  .features .feture-tabs h3 {
    font-size: 28px;
  }
}
.features .feture-tabs .nav-pills {
  border-bottom: 1px solid #eee;
}
.features .feture-tabs .nav-link {
  background: none;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  color: #5194DF;
  padding: 12px 0;
  margin-right: 25px;
  margin-bottom: -2px;
  border-radius: 0;
}
.features .feture-tabs .nav-link.active {
  color: #5194DF;
  border-bottom: 3px solid #5194DF;
}
.features .feture-tabs .tab-content h4 {
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  color: #5194DF;
}
.features .feture-tabs .tab-content i {
  font-size: 24px;
  line-height: 0;
  margin-right: 8px;
  color: #4154f1;
}
.features .feature-icons {
  margin-top: 120px;
}
.features .feature-icons h3 {
  color: #012970;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}
@media (max-width: 768px) {
  .features .feature-icons h3 {
    font-size: 28px;
  }
}
.features .feature-icons .content .icon-box {
  display: flex;
}
.features .feature-icons .content .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #5194DF;
}
.features .feature-icons .content .icon-box i {
  font-size: 44px;
  line-height: 44px;
  color: #5194DF;
  margin-right: 15px;
}
.features .feature-icons .content .icon-box p {
  font-size: 15px;
  color: #848484;
}

</style>