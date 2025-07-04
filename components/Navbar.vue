<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <NuxtLink to="/">
        <object
          type="image/svg+xml"
          data="/Covenant-White-Logo.svg"
          class="logo-svg"
        >
          Logo
        </object>
      </NuxtLink>
    </div>
    <button class="menu-btn" aria-label="Open menu">
      <img src="/menu-icon-white.svg" alt="Menu" />
    </button>
    <!-- Add nav links here if needed -->
  </nav>
</template>

<script setup lang="ts">
// No script logic needed for now
</script>

<style scoped>
.navbar {
  position: relative;
  /* position: fixed; */
  /* top: 8px; */
  /* left: 0; */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  height: 72px;
  display: flex;
  align-items: center;
  /* background: rgba(255,255,255,0.95); */
  z-index: 10;
}
.navbar-logo {
  display: flex;
  align-items: center;
  height: 100%;
  /* margin-left: 1rem; */
}
.navbar-logo .logo-svg {
  height: 40px;
  width: auto;
}

@media (max-width: 768px) {
  .navbar-logo .logo-svg {
    height: 40px;
  }
}
.menu-btn {
  background: none;
  border: none;
  outline: none;
  margin-left: auto;
  cursor: pointer;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.menu-btn img {
  /* height: 28px; */
  width: 38px;
}
</style>
