<template>
  <header id="header" class="fixed-top d-flex align-items-center shadow-sm">
    <div class="container d-flex justify-content-between align-items-center">
      <div id="logo" class="d-flex flex-row">
        <img src="../../assets/images/image_only.png" style="height: 35px; margin-top: 4px" alt="">
        <h1><router-link class="text-black" style="font-weight: bolder" to="/">Hivelink</router-link></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link active-class="active" class="nav-link scrollto text-black" to="/">Home</router-link></li>
          <li><router-link active-class="active" class="nav-link scrollto text-black" to="/about">About</router-link></li>
          <li><router-link active-class="active" class="nav-link scrollto text-black" to="/services">Services</router-link></li>
          <li><router-link active-class="active" class="nav-link scrollto text-black" to="/our-work">Our Work</router-link></li>
          <li><router-link active-class="active" class="nav-link scrollto text-black" to="/contact">Contact Us</router-link></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style scoped>
  #header {
    height: 60px;
  }
  .active {
    color: #5194DF;
    font-family: "Montserrat", sans-serif;
  }
</style>