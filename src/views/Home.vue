<template>
  <div>
    <!-- ======= Header ======= -->
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->

    <Hero />

    <main id="main">

      <AboutUs />

      <WhatWeOffer />

      <CallToAction />
      <Technologies />
      <ProjectTimeline />
      <FAQ />
      <Gallery />

    </main><!-- End #main -->
    <ContactSection />

    <!-- ======= Footer ======= -->
    <Footer/>
    <!-- End  Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-chevron-up"></i></a>

  </div>
</template>

<script>
// @ is an alias to /src

import ContactSection from "@/components/Layouts/ContactSection";
import Footer from "@/components/Layouts/Footer";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import ProjectTimeline from "@/components/Home/ProjectTimeline";
import Technologies from "@/components/Home/Technologies";
import CallToAction from "@/components/Home/CallToAction";
import FAQ from "@/components/Home/FAQ";
import Gallery from "@/components/Home/Gallery";
export default {
  name: 'Home',
  components: {
    Gallery,
    FAQ,
    CallToAction,
    Technologies,
    ProjectTimeline,
    WhatWeOffer,
    AboutUs,
    Hero,
    Footer,
    ContactSection

  },
  created() {
    document.title = "Hivelink - Get Ready for Digital Transformation\n";
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
