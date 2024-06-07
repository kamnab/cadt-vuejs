<template>
  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Our <span>Services</span></h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>

        <div class="row">
          <ServiceItemSection
            v-for="(el, index) in items"
            :item="el"
            :key="index"
          />
        </div>

        <div class="btn-box">
          <a href=""> View All </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItemSection from "@/components/ServiceItemSection.vue";

export default {
  components: {
    ServiceItemSection,
  },
  data() {
    return {
      items: [
        {
          image: "images/s1.png",
          title: "CURRENCY WALLET",
          description: "CURRENCY WALLET",
        },
        {
          image: "images/s2.png",
          title: "CURRENCY WALLET",
          description: "CURRENCY WALLET",
        },
        {
          image: "images/s3.png",
          title: "CURRENCY WALLET",
          description: "CURRENCY WALLET",
        },
      ],
    };
  },
};
</script>
