<template>
  <div class="col-md-4">
    <div class="box">
      <div class="img-box">
        <img :src="item.image" alt="" />
      </div>
      <div class="detail-box">
        <h5>
          {{ item.title }}
        </h5>
        <p>
          {{ item.description }}
        </p>
        <a href=""> Read More </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemSection",
  props: {
    item: {
      image: "images/s1.png",
      title: "CURRENCY WALLET",
      description: "CURRENCY WALLET",
    },
  },
  data: () => {},
};
</script>
