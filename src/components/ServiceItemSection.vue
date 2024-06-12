<template>
  <div class="col-md-4">
    <div class="box">
      <div class="img-box">
        <img :src="props.item.image" alt="" />
      </div>
      <div class="detail-box">
        <h5>
          {{ props.title }}
        </h5>
        <p>
          {{ props.item.description }}
        </p>
        <a href=""> Read More </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  item: {
    image: String,
    title: String,
    description: String,
  },
});

// export default {
//   name: "ItemSection",
//   props: {
//     item: {
//       image: "images/s1.png",
//       title: "CURRENCY WALLET",
//       description: "CURRENCY WALLET",
//     },
//   },
//   data: () => {},
// };
</script>
