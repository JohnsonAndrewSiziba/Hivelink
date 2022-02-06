<template>
  <!-- ======= Details Section ======= -->
  <section id="details" class="details">
    <div>

      <div class="section-bg content py-5" data-aos="fade-in">
        <div class="container">
          <div class="row">
            <div class="col-md-7" data-aos="fade-right">
              <img src="../../assets/images/mockups/clever_care.png" class="img-fluid" alt="">
            </div>

            <div class="col-md-5 pt-4" data-aos="fade-up">
              <h3 class="section-title">Clever care website</h3>
              <p>
                We have developed a website for Clevercare NDIS
              </p>
              <p>
                <a href="#" class="">
                  <button>
                    Live view <i class="bi bi-link"></i>
                  </button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-7 order-1 order-md-2" data-aos="fade-left">
              <img src="../../assets/images/mockups/client.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-5 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3 class="section-title">Client management System</h3>
              <p>
                We have a created a client management system which is being used by highly profiled NDIS service providers
              </p>
              <p>
                This is a software which can help NDIS service providers to manage their clients including recording clients information as well as tracing the progress.
              </p>
              <p>
                <a href="#" >
                  <button>
                    Live view <i class="bi bi-link"></i>
                  </button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-bg content py-5" data-aos="fade-in">
        <div class="container">
          <div class="row">
            <div class="col-md-7" data-aos="fade-right">
              <img src="../../assets/images/mockups/evicare.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-5 pt-5" data-aos="fade-up">
              <h3 class="section-title">Web Development, E-commerce, PHP</h3>
              <p>We are also involved in the development of websites</p>
              <p>
                This is one of the websites we have developed. For more information about it click the link below and see.
              </p>
              <p>
                <button>
                  Live view <i class="bi bi-link"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-7 order-1 order-md-2" data-aos="fade-left">
              <img src="../../assets/images/mockups/incidents.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-5 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3 class="section-title">Incident report management system</h3>
              <p>
                We have developed a centralised incident report and management system which is being used by the NDIS service providers in reporting any incident.
              </p>
              <p>
                <button>
                  Live view <i class="bi bi-link"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-bg content py-5" data-aos="fade-in">
        <div class="container">
          <div class="row">
            <div class="col-md-7" data-aos="fade-right">
              <img src="../../assets/images/mockups/roster.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-5 pt-5" data-aos="fade-up">
              <h3 class="section-title">Client Rostering software</h3>
              <p>
                Due to confusion and excessive work in trying to allocate work slots to individuals, we have developed a roster application which is being used by highly reconsied NDIS service providers. This has improved their working routines.
              </p>
              <p>
                <button>
                  Live view <i class="bi bi-link"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-7 order-1 order-md-2" data-aos="fade-left">
              <img src="../../assets/images/mockups/tarisa.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-5 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3 class="section-title">Tarisa</h3>
              <p>
                We have created a website for Tarisa.
              </p>
              <p>
                <button>
                  Live view <i class="bi bi-link"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <br>
    <br>
    <br>
  </section><!-- End Details Section -->
</template>

<script>
export default {
  name: "ProjectsList"
}
</script>

<style scoped>

.port-links{
  display: block;
  font-size: 20px;
  letter-spacing: .5px;
  color: #52525d;
}

/*--------------------------------------------------------------
# Details
--------------------------------------------------------------*/
.details .content + .content {
  margin-top: 100px;
}
.details .content h3 {
  color: #5194DF;
}
.details .content ul {
  list-style: none;
  padding: 0;
}
.details .content ul li {
  padding-bottom: 10px;
}
.details .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #1acc8d;
}
.details .content p:last-child {
  margin-bottom: 0;
}

button {
  background: linear-gradient(45deg, #5194DF, #10BEE4);
  border: 0;
  border-radius: 20px;
  padding: 8px 30px;
  color: #fff;
}
</style>