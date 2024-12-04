<template>
    <section ref="myElement" class="heart"></section>
</template>



<style scoped>
    .heart {
        width: 200px;
        height: 200px;
        background: linear-gradient(317.42deg, #fdd8fb 50.4%, #ff96f9 83.03%), url(../../../public/noise.png);
        transform: rotate(45deg);
        position: absolute;
        background-blend-mode: color-dodge;
        z-index: -1;
    }

    .heart::after,
    .heart::before {
        content: '';
        display: flex;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: linear-gradient(317.42deg, #fdd8fb 50.4%, #ff96f9 83.03%), url(../../../public/noise.png);
        background-blend-mode: color-dodge;
        position: absolute;
        /* background: linear-gradient(317.42deg, #d9f0ff 10.4%, #ecd6e8 83.03%), url(../../../public/noise.png); */
    }

    .heart::after {
        margin-top: -100px;
    }
    .heart::before {
        margin-left: -100px;
    }
</style>

<script>

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Heart',
  mounted() {
    gsap.fromTo(
      this.$refs.myElement,
      { opacity: 0, y: -250 },
      {
        duration: 1,
        y: 0,
        x: 0,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: this.$refs.myElement,
          start: '-150',
          end: '-100',
          scrub: true
        }
      }
    );
  }
}
</script>


