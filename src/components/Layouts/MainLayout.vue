<template>
  <main>
    <div style="height: 60px"></div>
    <section data-aos="fade-in" class="banner_area" :style="{backgroundPosition: 'center', backgroundImage: `linear-gradient(to bottom, rgba(16, 190, 228, 0.41) 0%, rgba(255, 221, 153, 0.38) 100%), url(${banner_image})`}">
      <br>
      <br>
      <br>
      <span class="mask bg-gradient-dark opacity-7"></span>
      <div class="banner_inner d-flex align-items-center" data-aos="fade-up">
        <div class="container">
          <div class="banner_content">
            <h2>{{ page_name }}</h2>
            <div class="page_link font-weight-bold">
              <router-link to="/">Home</router-link>
              <a href="">{{ page_name }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <slot></slot>
  </main>


  <ContactSection />
  <Footer/>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-chevron-up"></i></a>
</template>

<script>
import ContactSection from "@/components/Layouts/ContactSection";
import Footer from "@/components/Layouts/Footer";
export default {
  name: "MainLayout",
  components: {Footer, ContactSection},
  props: ['page_name', 'banner_image'],
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.blog_banner {
  min-height: 780px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-bottom: 0px;
}

.blog_banner .banner_inner {
  background: #04091e;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 780px;
  z-index: 1;
}

.blog_banner .banner_inner .overlay {
  /*background: url(../images/banner-2.jpg) no-repeat scroll center center;*/
  opacity: .5;
  height: 125%;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: -1;
}

.blog_banner .banner_inner .blog_b_text {
  max-width: 700px;
  margin: auto;
  color: #fff;
  margin-top: 40px;
}

.blog_banner .banner_inner .blog_b_text h2 {
  font-size: 60px;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  line-height: 66px;
  margin-bottom: 15px;
}

.blog_banner .banner_inner .blog_b_text p {
  font-size: 16px;
  margin-bottom: 35px;
}

.blog_banner .banner_inner .blog_b_text .white_bg_btn {
  line-height: 42px;
  padding: 0px 45px;
}

.banner_box {
  max-width: 1620px;
  margin: auto;
}

.banner_area {
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  height: 350px;
  /*background-image: linear-gradient(to bottom, rgba(37, 150, 190, 0.23) 0%, rgba(37, 150, 190, 0.38) 100%), url('@/assets/images/banner_images/newspaper.jpg');*/
}

.banner_area .banner_inner {
  position: relative;
  overflow: hidden;
  width: 100%;
  z-index: 1;
  padding-top: 40px;
  padding-bottom: 40px;
}

.banner_area .banner_inner .banner_content {
  max-width: 655px;
  background: #fff;
  padding: 50px 65px;
  position: relative;
  border-radius: 5px;
}

.banner_area .banner_inner .banner_content:before {
  content: "";
  width: 313px;
  height: 216px;
  background: rgb(37, 150, 190);
  position: absolute;
  left: -50px;
  top: -30px;
  z-index: -1;
}

.banner_area .banner_inner .banner_content h2 {
  color: #000000;
  font-size: 36px;
  margin-bottom: 0px;
  display: inline-block;
  text-transform: uppercase;
}

.banner_area .banner_inner .banner_content .page_link {
  display: inline-block;
  float: right;
  padding-top: 5px;
}

.banner_area .banner_inner .banner_content .page_link a {
  font-size: 14px;
  color: #666666;
  font-family: "Raleway", sans-serif;
  margin-right: 32px;
  font-weight: 300;
  position: relative;
  text-transform: uppercase;
}

.banner_area .banner_inner .banner_content .page_link a:before {
  content: ">";
  font: normal normal normal 14px/1 FontAwesome;
  position: absolute;
  right: -25px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.banner_area .banner_inner .banner_content .page_link a:last-child {
  margin-right: 0px;
}

.banner_area .banner_inner .banner_content .page_link a:last-child:before {
  display: none;
}

/* End Home Banner Area css
============================================================================================ */
</style>