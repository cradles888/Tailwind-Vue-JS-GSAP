import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import './fonts.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import FlipTrigger from "gsap/FlipTrigger";

gsap.registerPlugin(ScrollTrigger);

createApp(App).mount('#app')