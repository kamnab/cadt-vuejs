<template>
  <div class="hero_area">
    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="images/hero-bg.png" alt="" />
      </div>
    </div>

    <!-- header section strats -->
    <HeaderSection />
    <!-- end header section -->

    <!-- slider section -->
    <SliderSection />
    <!-- end slider section -->
  </div>

  <!-- service section -->
  <ServiceSection />
  <!-- end service section -->
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import SliderSection from "@/components/SliderSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    SliderSection,
    ServiceSection,
  },
};
</script>
