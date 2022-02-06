<template>
  <MainLayout page_name="Our Work" :banner_image="banner_image">
    <div class="section-header mt-3" data-aos="fade-up" >
      <h3 class="section-title mt-2">Some of our Finest work</h3>
      <span class="section-divider"></span>
      <p class="section-description">
        We Have Built High Impact Solutions Across Industries. <br>
        We have completed many of projects. Here are some od them
      </p>
    </div>
    <ProjectsList />
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/Layouts/MainLayout";
import banner_image from '@/assets/images/banner_images/projects.jpg'
import ProjectsList from "@/components/Projects/ProjectsList";

export default {
  name: "OurWork",
  components: {ProjectsList, MainLayout},
  data(){
    return {
      banner_image
    }
  },
  created() {
    document.title = "Hivelink - Our Work";
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>