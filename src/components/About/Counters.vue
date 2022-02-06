<template>
  <!-- ======= Counts Section ======= -->
  <section id="counts" class="counts" style="margin-top: 0px; margin-bottom: 0px; padding-bottom: 0px; ">
    <div class="container" data-aos="fade-up">

      <div class="row gy-4">

        <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
          <div class="count-box">
            <i class="bi bi-emoji-smile" style="color: #ebc985"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter">70 +</span>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
          <div class="count-box">
            <i class="bi bi-journal-richtext" style="color: #ebc985;"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter">48 +</span>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
          <div class="count-box">
            <i class="bi bi-calendar" style="color: #ebc985;"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter">5 +</span>
              <p>Success Years</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
          <div class="count-box">
            <i class="bi bi-people" style="color: #ebc985;"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">27 +</span>
              <p>Expert Team</p>
            </div>
          </div>
        </div>



      </div>

    </div>
  </section><!-- End Counts Section -->
</template>

<script>



export default {
  name: "Counters",
  components: {

  }
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  padding: 50px 0 50px;
}
.counts .count-box {
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
}
.counts .count-box i {
  font-size: 42px;
  line-height: 0;
  margin-right: 20px;
  color: #4154f1;
}
.counts .count-box span {
  font-size: 36px;
  display: block;
  font-weight: 600;
  color: #5194DF;
}
.counts .count-box p {
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
}
</style>