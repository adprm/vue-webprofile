<template>
  <div id="app">
    <Topbar></Topbar>
    <Carousel></Carousel>
    <Aboutme></Aboutme>
    <Skills></Skills>
    <Educations></Educations>
    <WorkExperience></WorkExperience>
    <Certificate></Certificate>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Carousel from "@/components/Carousel.vue";
import Aboutme from "@/components/Aboutme.vue";
import Skills from "@/components/Skills.vue";
import Educations from "@/components/Educations.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import Certificate from "@/components/Certificate.vue";

export default {
  components: {
    Topbar,
    Carousel,
    Aboutme,
    Skills,
    Educations,
    WorkExperience,
    Certificate
  }
};
</script>

