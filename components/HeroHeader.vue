<template>
  <div class="hero-bg">
    <section class="hero-container">
      <div class="hero-image-side"></div>
      <div class="hero-content-side">
        <div class="headline">
          <h1 class="hero-header">No More<br>Wilderness.<br>Welcome to<br>Promise 🎉</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for static hero
</script>

<style scoped>
.hero-bg {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: none;
  overflow: hidden;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  box-sizing: border-box;
}

.hero-container {
  width: 100%;
  max-width: 1600px;
  aspect-ratio: 16 / 7;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transition: aspect-ratio 0.2s, width 0.2s;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  background: #fff;
  cursor: pointer;
}

.hero-image-side {
  flex: 1 1 50%;
  background-color: white;
  background: url('/public/images/pastor.jpg') center center/cover no-repeat, white;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  transition: transform 400ms cubic-bezier(.4,0,.2,1), opacity 400ms;
  will-change: transform;
  transform: scale(1.05);
  /* min-height: 350px; */
  position: relative;
  z-index: 2;
  margin-left: -1rem;
}

@media (max-width: 600px) {
  .hero-container {
    flex-direction: column;
    aspect-ratio: unset;
  }
  .hero-image-side {
    min-height: 200px;
    clip-path: none;
    /* margin-left: 0; */
    /* margin: auto    ; */
  }
}


@media (hover: hover) and (pointer: fine) and (min-width: 601px) {
  .hero-container:hover .hero-image-side {
    transform: scale(1.10) translateX(-2%);
  }
}

.hero-content-side {
  flex: 1 1 50%;
  background: #fff;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 350px; */
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}





@media (max-width: 600px) {
  .hero-container {
    width: 100%;
    aspect-ratio: unset;
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
  .hero-image {
    min-height: 140px;
    clip-path: none;
    border-radius: 0 0 18px 18px;
  }
  .hero-content {
    min-height: 100px;
  }
}




.hero-container:hover .hero-image {
  transform: scale(1.10);
  cursor: pointer;
}

.hero-content {
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  /* min-height: 350px; */
  position: relative;
  z-index: 2;
}

.headline {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

.line {
  font-family: 'MyCustomFont';
  /* font-weight: bold; */
  font-size: 25rem;
  margin: 10rem 0 1rem 2rem;
  text-align: left;
}

.teal {
  color: #00b3b0;
}
.dark-teal {
  color: #008080;
}
.navy {
  color: #2b3990;
}
.orange {
  color: #ff9000;
  font-weight: 900;
}

/* @media (max-width: 900px) {
  .hero-image {
    clip-path: none;
  }
  .hero-container {
    flex-direction: column;
    min-height: 60vh;
  }
  .hero-image,
  .hero-content {
    flex: unset;
    min-height: 220px;
    width: 100%;
    clip-path: none;
  }
  .hero-content {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  .headline .line {
    font-size: 1.4rem;
  }
} */
</style>
