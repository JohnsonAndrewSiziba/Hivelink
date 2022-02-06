<template>
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-1 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <div style="background-color: rgba(255,255,255,0.8); border-radius: 10px" class="p-3">
            <h1 data-aos="fade-down">Hivelink</h1>
            <v-typical
                data-aos="fade-up" data-aos-delay="400"
                class="blink text-secondary"
                style="height: 155px; font-weight: bolder"
                :steps="[
                  // 'Our enthusiasm and skill motivates us to deliver cutting edge software solutions premised on state of the art technology 🚀, thereby adding value to our clients.', 300,
                  'From small enterprises to large corporations 🏢, digital transformation is a necessity. Organizations that are unable to adapt to rapidly changing digital technologies risk becoming obsolete 😔. Facilitate the transformation 🚀 and success of your organization by contacting us today 👍. ', 1000,
                  ]"
                :loop="Infinity"
                :wrapper="'h2'"
            ></v-typical>
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <router-link class="btn-get-started scrollto shadow" to="/contact">Contact Us</router-link>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-in" data-aos-delay="200">
          <img style="border-radius: 10px" src="../../assets/images/austin.jpg" class="img-fluid animated shadow-sm" alt="">
        </div>
      </div>
      <particles-bg type="cobweb" :canvas="{backgroundColor:'#FFF'}" :bg="true"/>
    </div>

  </section><!-- End Hero -->
</template>

<script>

import {VTypical} from "vue-typical";
import {ParticlesBg} from "particles-bg-vue";

export default {
  name: "Hero",
  components: {
    VTypical,
    ParticlesBg
  }
}
</script>

<style scoped>



.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}



/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 60vh;
  margin-top: 70px;
}
#hero h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: black;
}
#hero h2 {
  color: #484848;
  margin-bottom: 50px;
  font-size: 24px;
}
#hero .btn-get-started {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #7C8484;
  border: 2px solid #7C8484;
}
#hero .btn-get-started:hover {
  background: #7C8484;
  border: 2px solid #7C8484;
  color: #fff;
}
#hero .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}
@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}
@media (max-width: 991px) {
  #hero {
    height: 100vh;
  }
  #hero .animated {
    -webkit-animation: none;
    animation: none;
  }
  #hero .hero-img {
    text-align: center;
  }
  #hero .hero-img img {
    width: 50%;
  }
}
@media (max-width: 768px) {
  #hero {
    margin-top: 20px;
  }
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  #hero .hero-img img {
    width: 70%;
  }
}
@media (max-width: 575px) {
  #hero .hero-img img {
    width: 80%;
  }
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>