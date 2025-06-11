<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="/Covenant-White-Logo.svg" alt="Logo" />
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
  position: fixed;
  top: 20px;
  left: 0;
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  height: 64px;
  display: flex;
  align-items: center;
  /* background: rgba(255,255,255,0.95); */
  z-index: 10;
  padding: 0 2rem;
}
.navbar-logo {
  display: flex;
  align-items: center;
  height: 100%;
}
.navbar-logo img {
  height: 40px;
  width: auto;
}

@media (max-width: 768px) {
  .navbar-logo img {
    height: 40px;
  }
}
.menu-btn {
  display: none;
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