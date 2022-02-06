<template>
  <MainLayout page_name="About Us" :banner_image="banner_image">


  <div class="section-header mt-3" data-aos="fade-up" >
    <h3 class="section-title mt-2">About Hivelink</h3>
    <span class="section-divider"></span>
    <p class="section-description">
      Get To know about Hivelink
    </p>
  </div>


    <div class="container text-center" data-aos="fade-up" data-aos-delay="200" >
      <h3>We are a client centric and creative digital solutions provider based in Australia</h3>
      <h4>We are a team of top talent delivering enterprise solutions globally. We evolve with the advancement in technology because we believe in making our technology as your innovation. Your wishes, our main concern.</h4>
    </div>

  <AboutSection />

  <Counters />

  <VisionMission />

  <KeyPoints />

  </MainLayout>
</template>
<script>
import MainLayout from "@/components/Layouts/MainLayout";
import banner_image from '@/assets/images/banner_images/about.jpg'
import AboutSection from "@/components/About/AboutSection";
import Counters from "@/components/About/Counters";
import VisionMission from "@/components/About/VisionMission";
import KeyPoints from "@/components/About/KeyPoints";
export default {
  name: 'About',
  components: {KeyPoints, VisionMission, Counters, AboutSection, MainLayout},
  data(){
    return {
      banner_image
    }
  },
  created() {
    document.title = "Hivelink - About Us";
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>


<style scoped>

</style>
