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
    <ul class="nav-links">
      <li><NuxtLink to="/">HOME</NuxtLink></li>
      <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
      <li><NuxtLink to="/phases">PHASES</NuxtLink></li>
      <li><NuxtLink to="/give">GIVE</NuxtLink></li>
      <li><NuxtLink to="/visit">VISIT</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// No script logic needed for now
</script>

<style scoped>
@font-face {
  font-family: 'Grava SemiBold';
  src: url('~/assets/fonts/grava/Grava SemiBold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
 
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: flex-start; */
  gap: 2.5rem;

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
  display: none;
}



.menu-btn img {
  /* height: 28px; */
  width: 38px;
}
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  letter-spacing: 0.02em;
}
.nav-links li {
  display: flex;
  align-items: center;
}
.nav-links li a {
  font-family: 'Grava SemiBold', Arial, sans-serif;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav-links li a:hover {
  color: #ffd700;
}
/* @media (max-width: 900px) {
  .nav-links {
    display: none;
  }
} */

@media (max-width: 768px) {
  .menu-btn {
    display: flex; /* Show only on mobile */
  }
  .navbar-logo .logo-svg {
    height: 40px;
  }
  .nav-links {
    display: none;
  }
}
</style>
