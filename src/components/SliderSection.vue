<template>
  <section class="slider_section">
    <div id="customCarousel1" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h1>
                    {{ $t("message.hello") }}
                    Crypto <br />
                    Currency {{ count }}
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum
                    eaque magnam fugiat hic? Esse dicta aliquid error
                    repudiandae earum suscipit fugiat molestias, veniam, vel
                    architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <div class="btn-box">
                    <button @click="increment" class="btn1">Add Money</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img src="images/slider-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h1>
                    Crypto <br />
                    Currency
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum
                    eaque magnam fugiat hic? Esse dicta aliquid error
                    repudiandae earum suscipit fugiat molestias, veniam, vel
                    architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <div class="btn-box">
                    <a href="" class="btn1"> Read More </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img src="images/slider-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h1>
                    Crypto <br />
                    Currency
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum
                    eaque magnam fugiat hic? Esse dicta aliquid error
                    repudiandae earum suscipit fugiat molestias, veniam, vel
                    architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <div class="btn-box">
                    <a href="" class="btn1"> Read More </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img src="images/slider-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol class="carousel-indicators">
        <li
          data-target="#customCarousel1"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#customCarousel1" data-slide-to="1"></li>
        <li data-target="#customCarousel1" data-slide-to="2"></li>
      </ol>
    </div>
  </section>
</template>

<script>
import { useCounterStore } from "@/store/counter";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(useCounterStore, ["count"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment", "decrement"]),
  },
};
</script>