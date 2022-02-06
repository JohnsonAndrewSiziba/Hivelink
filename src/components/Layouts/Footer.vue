<template>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-lg-start text-center">
          <div class="copyright">
            &copy; Copyright 2022 <strong>Hivelink</strong>. All Rights Reserved
          </div>
<!--          <div class="credits">-->
<!--            Designed by <a href=""></a>-->
<!--          </div>-->
        </div>
        <div class="col-lg-6">
          <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/our-work">Our Work</router-link>
            <router-link to="/contact">Contact</router-link>
          </nav>
        </div>
      </div>
    </div>
  </footer><!-- End  Footer -->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>