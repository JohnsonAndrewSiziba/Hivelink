<template>
  <section class="r-bg-x  sec-pad">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 text-center" data-aos-delay="100" data-aos="fade-up">
          <div class="page-headings">
            <h3 class="section-title">Our Transparency and Ethics</h3>
            <p class="mt15">A software development company full of expertise guided by the key pillars of Ethics.</p>
          </div>
        </div>
      </div>
      <div class="row mt30">

        <div class="col-lg-4 col-sm-6" data-aos="fade-in" data-aos-delay="100">
          <div class="ree-card r-bg-c mt60">
            <div class="ree-card-img"><img src="../../assets/images/target.svg" alt="services"> </div>
            <div class="ree-card-content mt40">
              <h3 class="mb15">Client-centric Approach</h3>
              <p>Quality begins and ends with the customer and we strive to always satisfy their needs.</p>

            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6" data-aos="fade-in" data-aos-delay="200">
          <div class="ree-card r-bg-c mt60">
            <div class="ree-card-img"><img src="../../assets/images/fast-time.svg" alt="services"> </div>
            <div class="ree-card-content mt40">
              <h3 class="mb15">Service Delivered in Time</h3>
              <p>Hivelink is known for delivering projects within stipulated time. So we always manage our turn arounnd time</p>

            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6" data-aos="fade-in" data-aos-delay="300">
          <div class="ree-card r-bg-c mt60">
            <div class="ree-card-img"><img src="../../assets/images/united.svg" alt="services"> </div>
            <div class="ree-card-content mt40">
              <h3 class="mb15">Effective Collaboration</h3>
              <p>Our software house operate based on a collaborative approach starting from the team members to the clients.</p>

            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6" data-aos="fade-in" data-aos-delay="400">
          <div class="ree-card r-bg-c mt60">
            <div class="ree-card-img"><img src="../../assets/images/team.svg" alt="services"> </div>
            <div class="ree-card-content mt40">
              <h3 class="mb15">Relationships</h3>
              <p>We build mutually beneficial relationships with customers, suppliers and any other stakeholder to foster business continuity.</p>

            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6" data-aos="fade-in" data-aos-delay="500">
          <div class="ree-card r-bg-c mt60">
            <div class="ree-card-img"><img src="../../assets/images/partnership.svg" alt="services"> </div>
            <div class="ree-card-content mt40">
              <h3 class="mb15">Team Work</h3>
              <p>Hivelink respect team work and totla inclusion, hence always manage to come up with quality, effective and solid solutions</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6" data-aos="fade-in" data-aos-delay="600">
          <div class="ree-card r-bg-c mt60">
            <div class="ree-card-img"><img src="../../assets/images/qualitys.svg" alt="services"> </div>
            <div class="ree-card-content mt40">
              <h3 class="mb15">Quality of Service</h3>
              <p>Work in partnership with all stakeholders (customers, suppliers, regulators, partners and shareholders) for mutual benefit</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!--company keypoints end-->
</template>

<script>
export default {
  name: "KeyPoints"
}
</script>

<style scoped>

h3 {
  font-weight: bolder;
}

.ree-card {
  height: 255px;
}

html .mt30{margin-top: 30px;}
html .mt35{margin-top: 35px;}
html .mt40{margin-top: 40px;}
html .mt45{margin-top: 45px;}
html .mt50{margin-top: 50px;}
html .mt55{margin-top: 55px;}
html .mt60{margin-top: 60px;}
html .mb15{margin-bottom: 15px;}


/*home servies*/

.home-services .ree-card {min-height: 330px; background-color: #fff;}
.ree-card{
  background: #fff;
  position: relative;
  place-items: start;
  display: grid;
  border-radius: 14px;
  padding: 40px 30px;
  -webkit-box-shadow:0 10px 15px -2px rgb(82 0 57 / 8%);
  box-shadow:0 10px 15px -2px rgb(82 0 57 / 8%);
}
.light-grdnt{
  background: linear-gradient(180deg, #fff5f9 50%, #f2fcff 100%);}
.ree-card-img {
  background: #fff;
  box-shadow: 0 15px 30px -10px rgb(0 0 0 / 14%);
  padding: 15px;
  border-radius: 14px;
  position: absolute;
  width: 80px;
  height: 80px;
  top: -30px;
  left: 30px;
}
.ree-card-img img{ width: 100%; }
.ree-card-content h3{
  font-size: 28px;
  line-height: 38px;
}
.ree-card-link{
  display: block;
  color: #110a32;
  font-size: 18px;
}
.ree-card-link:hover { color: #ffcc00;}
/*cta block*/
.cta-heading-wide-bt{
  display: inline-flex;
  align-items: center;
}
.cta-heading-wide-bt h3{margin-right: 20px;}
.ctablock{
  padding: 50px;
  border-radius: 14px;
  overflow: hidden;
}
.cta-block-a{background: #fff;}




/*bg classes*/
body .r-bg-x{background: #fff;}
body .r-bg-a{background: #efeff1;}
body .r-bg-b{background: #ffcc00;}
body .r-bg-c{background: #f7f7f7;}
body .r-bg-d{background: #c9bf99;}
body .r-bg-e{background: #5a428e;}
body .r-bg-f{background: #452650;}
.ree-text1{
  background: #ffcc00;
  border-radius: 4px;
  padding: 0 4px;
  color: #fff;}

.sec-pad{padding-top: 120px; padding-bottom: 120px;}
</style>