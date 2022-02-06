<template>
  <MainLayout page_name="Contact Us" :banner_image="banner_image">

    <section class="contact" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out">
      <div class="container">
        <div class="section-header">
          <h3 class="section-title mt-5">Contact Us</h3>
          <span class="section-divider"></span>
          <p class="section-description">
            Fill in the form below to get in touch with us. We will get back to you ASAP.
          </p>
        </div>
        <div class="row">

          <div class="col-lg-6">

            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <img src="https://img.icons8.com/pastel-glyph/64/4a90e2/worldwide-location--v1.png"/>
                  <h3>Our Address</h3>
                  <p>Campbelltown NSW</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <img src="https://img.icons8.com/fluency/48/4a90e2/email-open.png"/>
                  <h3>Email Us</h3>
                  <p>enquiries@hivelink.com.au</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/call-male.png"/>
                  <h3>Call Us</h3>
                  <p>+61 404 406 937</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">
            <form method="post"  role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" id="message" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <br>
              <div class="mt-2"><button type="submit" title="Send Message">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

    <!-- ======= Map Section ======= -->
    <section class="map mt-2">
      <div class="container-fluid p-0">
        <iframe src="https://maps.google.com/maps?q=Campbelltown%20NSW&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
    </section><!-- End Map Section -->


  </MainLayout>
</template>

<script>
import MainLayout from "@/components/Layouts/MainLayout";
import banner_image from '@/assets/images/banner_images/contact.jpg'
export default {
  name: "ContactUs",
  components: {MainLayout},
  data(){
    return {
      banner_image
    }
  },
  created() {
    document.title = "Hivelink - Contact Us";
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact {
  padding-bottom: 30px;
}
.contact .info-box {
  color: #444;
  text-align: center;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 20px 0 30px 0;
  margin-bottom: 30px;
}
.contact .info-box i {
  font-size: 32px;
  color: #68A4C4;
  border-radius: 50%;
  padding: 8px;
  border: 2px dotted #a2cce3;
}
.contact .info-box h3 {
  font-size: 20px;
  color: #666;
  font-weight: 700;
  margin: 10px 0;
}
.contact .info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}
.contact .php-email-form {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 30px;
  margin-bottom: 30px;
}
.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contact .php-email-form input, .contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.contact .php-email-form input::focus, .contact .php-email-form textarea::focus {
  background-color: #68A4C4;
}
.contact .php-email-form input {
  padding: 10px 15px;
}
.contact .php-email-form textarea {
  padding: 12px 15px;
}
button {
  background: linear-gradient(45deg, #5194DF, #10BEE4);
  border: 0;
  border-radius: 20px;
  padding: 8px 30px;
  color: #fff;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



/*--------------------------------------------------------------
# Map
--------------------------------------------------------------*/
.map {
  padding: 0;
  margin-bottom: -6px;
}
.map iframe {
  width: 100%;
  height: 380px;
}
</style>