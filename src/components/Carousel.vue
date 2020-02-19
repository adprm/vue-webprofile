<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="WELCOME!"
        text="This Website Make With VueJs"
        img-src="../assets/bg1.jpg"
      >
        <b-button class="button" variant="primary" href="#aboutme">Lets Go!</b-button>
      </b-carousel-slide>
      <b-carousel-slide
        caption="My Name Is Aditiya Permana"
        text="I'm a JavaScript Enthusiast"
        img-src="../assets/bg2.jpg"
      >
      </b-carousel-slide>
      <b-carousel-slide
        caption="My Jobs is a Programmer"
        text="I'm Use Framework VueJs"
        img-src="../assets/bg3.jpg"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
.button {
  border: none;
  border-radius: 25px;
  padding-right: 25px;
  padding-left: 25px;
  background-color: #f05f40;
  margin-top: 40px;
}
</style>