<template>
  <!-- ======= Services Section ======= -->
  <section id="services" class="services">
    <div class="container">

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="icon-box" data-aos="fade-up">
            <div class="icon"><i class="bi bi-briefcase"></i></div>
            <h4 class="title"><a href="">Lorem Ipsum</a></h4>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><i class="bi bi-card-checklist"></i></div>
            <h4 class="title"><a href="">Dolor Sitema</a></h4>
            <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><i class="bi bi-bar-chart"></i></div>
            <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><i class="bi bi-binoculars"></i></div>
            <h4 class="title"><a href="">Magni Dolores</a></h4>
            <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon"><i class="bi bi-brightness-high"></i></div>
            <h4 class="title"><a href="">Nemo Enim</a></h4>
            <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon"><i class="bi bi-calendar4-week"></i></div>
            <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
            <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End Services Section -->
</template>

<script>
export default {
  name: "Solutions"
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services .icon-box {
  padding: 50px 20px;
  margin-top: 35px;
  margin-bottom: 25px;
  text-align: center;
  border: 1px solid #ebe6e4;
  height: 200px;
  position: relative;
  background: #faf9f8;
}
.services .icon {
  position: absolute;
  top: -36px;
  left: calc(50% - 36px);
  transition: 0.2s;
  border-radius: 50%;
  border: 6px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 72px;
  height: 72px;
  background: #f03c02;
}
.services .icon i {
  color: #fff;
  font-size: 24px;
  line-height: 0;
}
.services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
  text-transform: uppercase;
}
.services .title a {
  color: #343a40;
}
.services .icon-box:hover .icon {
  background: #fff;
  border: 2px solid #f03c02;
}
.services .icon-box:hover .icon i {
  color: #f03c02;
}
.services .icon-box:hover .title a {
  color: #f03c02;
}
.services .description {
  line-height: 24px;
  font-size: 14px;
}

</style>