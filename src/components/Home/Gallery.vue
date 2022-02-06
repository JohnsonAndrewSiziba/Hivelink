<template>
  <section>
    <section id="portfolio" class="py-5" data-aos="fade-up">
      <div class="section-header">
        <h3 class="section-title">Our Work</h3>
        <span class="section-divider"></span>
        <p class="section-description">
          These are some of the projects we've completed.
        </p>
      </div>
      <div class="container">
        <div class="row filtr-container">
          <div data-aos="zoom-in" data-aos-delay="100" class="col-sm-12 col-md-6 col-lg-6 col-xl-6 filtr-item" data-category="1,2">
            <router-link to="/our-work">
              <div><img src="../../assets/images/mockups/tarisa.png"></div>
              <h4 class="text-secondary mt-5 text-center">TARISA WEBSITE</h4>
            </router-link>
          </div>

          <div data-aos="zoom-in" data-aos-delay="300" class="col-sm-12 col-md-6 col-lg-6 col-xl-6 filtr-item" data-category="3,1">
            <router-link to="/out-work">
              <div><img src="../../assets/images/mockups/evicare.png"></div>
              <h4 class="text-secondary mt-5 text-center">EVICARE, E-COMMERCE</h4>
            </router-link>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200" class="col-sm-12 col-md-6 col-lg-6 col-xl-6 filtr-item" data-category="2,3">
            <router-link to="/our-work">
              <div><img src="../../assets/images/mockups/client.png"></div>
              <h4 class="text-secondary mt-5 text-center">CLIENT MANAGEMENT SYSTEM</h4>
            </router-link>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" class="col-sm-12 col-md-6 col-lg-6 col-xl-6 filtr-item" data-category="1,2,3">
            <router-link to="/our-work">
              <div><img src="../../assets/images/mockups/incidents.png"></div>
              <h4 class="text-secondary mt-5 text-center">INCIDENT REPORT SYSTEM</h4>
            </router-link>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" class="col-sm-12 col-md-6 col-lg-6 col-xl-6 filtr-item" data-category="1,2,3">
            <router-link to="/our-work">
              <div><img src="../../assets/images/mockups/roster.png"></div>
              <h4 class="text-secondary mt-5 text-center">CLIENT ROSTERING SOFTWARE</h4>
            </router-link>
          </div>
          <div data-aos="zoom-in" data-aos-delay="600" class="col-sm-12 col-md-6 col-lg-6 col-xl-6 filtr-item" data-category="1,2,3">
            <router-link to="/our-work">
              <div><img src="../../assets/images/mockups/clever_care.png"></div>
              <h4 class="text-secondary mt-5 text-center">CLEVER CARE WEBSITE</h4>
            </router-link>
          </div>
        </div>
        <br>
        <br>
        <div class="text-center" data-aos="zoom-in" data-aos-delay="700">
          <router-link to="/our-work">
            <button type="submit" title="Send Message">Read More</button>
          </router-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Gallery"
}
</script>

<style scoped>
button {
  background: linear-gradient(45deg, #5194DF, #10BEE4);
  border: 0;
  border-radius: 20px;
  padding: 8px 30px;
  color: #fff;
}


.filtr-item {
  padding-top: 30px;
}

.filtr-controls span {
  cursor: pointer;
}

.filtr-controls span.active {
  left: 0;
  background-color: #ffffff !important;
}

.filtr-loading {
  border: 5px solid #333;
  position: relative;
  border-radius: 40px;
  height: 40px;
  left: 50%;
  margin: 80px 0;
  opacity: 0;
  top: 0;
  width: 40px;
  z-index: 2;
  -webkit-animation: pulsate 1s ease-out infinite;
  animation: pulsate 1s ease-out infinite;
}

@keyframes pulsate {
}

#portfolio {
  background-color: #FFDD99;
  text-align: center;
}

#portfolio .container span {
  background: #ebc985;
  padding: 0px 18px;
  border-radius: 5px;
  margin-bottom: 5px;
}

#portfolio .container .filtr-container img {
  width: 90%;
}

.gallery-pt--body {
  display: inline-block;
  padding: 0;
  margin: 0;
}

.gallery-pt--filter-container {
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
  text-decoration: none;
  /*color: #ccc;*/
}

.gallery-pt--filter-container a {
  color: #ccc;
  text-decoration: none;
}

.gallery-pt--filter-container .list-item {
  padding: 0;
  margin: 0;
}

.gallery-pt--filter-container li:after {
  content: " / ";
  color: #ddd;
}

.gallery-pt--filter-container li:last-child:after {
  content: "";
}

.gallery-pt--filter-container li a:hover {
  color: rgb(76,177,249);
}

.gallery-pt--filter-container li.active a {
  color: lightgreen;
}

.gallery-pt--body .thumbnail {
  border: none;
}

.gallery-pt--body .item {
  padding: 0;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#portfolio p {
  color: #25231e;
}

#portfolio h2 {
  font-weight: 700;
  margin-bottom: 40px;
  padding-top: 40px;
  color: #393939;
}

#portfolio h2::after {
  background-color: #e5c37f;
  width: 100px;
  height: 3px;
  display: block;
  content: '';
  text-align: center;
  margin: auto;
  margin-top: 15px;
}

#portfolio .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

#portfolio .into p {
  margin-bottom: 0;
}


</style>