<template>
  <div>
    <Navbar />
    <WebglBackground />
    <!-- <div class="white-fade-overlay" ref="fadeOverlay"></div> -->
    <!-- <div class="top-fade-overlay"></div> -->
    <!-- <HeroSection /> -->
    <!-- <BulgeImageWithText src="/image-1.png" text="Discover" :radius=".9" :width="300" :height="400"/>
    <BulgeImageWithText src="/image-2.webp" text="Discover" :radius=".9" :width="300" :height="400"/>
    <BulgeImageWithText src="/image-3.jpg" text="Discover" :radius=".9" :width="300" :height="400"/>
    <BulgeImageWithText src="/image-4.jpg" text="Discover" :radius=".9" :width="300" :height="400"/>
    <BulgeImageWithText src="/image-5.jpg" text="Discover" :radius=".9" :width="300" :height="400"/>
    <BulgeImageWithText src="/image-6.jpg" text="Discover" :radius=".9" :width="300" :height="400"/>
    <BulgeImageWithText src="/image-7.jpg" text="Discover" :radius=".9" :width="300" :height="400"/>
    <BulgeImageWithText src="/image-8.jpg" text="Discover" :radius=".9" :width="300" :height="400"/> -->
    <div class="content">
      <h1 class="hero-header">No More<br>Wilderness.<br>Welcome to<br>Promise 🎉</h1>
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
})

onBeforeUnmount(() => {
  if (lenis) {
    lenis.destroy()
  }
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
