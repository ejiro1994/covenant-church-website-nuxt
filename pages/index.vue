<template>
  <div>
    <WebglBackground :color1="bgColor1" :color2="bgColor2" />
    <div class="container">
      <Navbar />
      <div class="content">
        <!-- <h1 class="hero-header">No More<br>Wilderness.<br>Welcome to<br>Promise 🎉</h1> -->
         
        <HeroHeader />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

const fadeOverlay = ref<HTMLElement | null>(null)
let lenis: any

// Track scroll for background color
const bgColor1 = ref('#5D32F7')
const bgColor2 = ref('#0FACB2')

import chroma from 'chroma-js'

function handleScroll() {
  if (window.scrollY > 300) {
    // Use white as the target color
    bgColor1.value = '#FFFFFF';
    bgColor2.value = '#FFFFFF';
  } else {
    bgColor1.value = '#5D32F7'
    bgColor2.value = '#0FACB2'
  }
}

onMounted(() => {
  lenis = new Lenis({
    lerp: 0.08, // smoothness
    infinite: false,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  if (lenis) {
    lenis.destroy()
  }
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.hero-header {
  font-family: 'MyCustomFont';
  font-weight: bold;
  font-size: 1.5rem;
  margin: 10rem 0 1rem 2rem;
  text-align: left;
  color: #fff;
}
.content {
  /* margin-top: 10px; */
  height: 200vh;
  position: relative;
  z-index: 1;
}

.white-fade-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 35%);
  pointer-events: none;
  z-index: 5;
}

.top-fade-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 120px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
  z-index: 5;
}
</style>
