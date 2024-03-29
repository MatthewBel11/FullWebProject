<template>
  <header class="header">
    <div v-if="!isNavbarOpen" class="menu-icon" @click="toggleNavbar">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <!-- Rotated menu icon -->
    <div v-if="isNavbarOpen" class="menu-icon rotated" @click="toggleNavbar">
      <div class="rotated-line"></div>
      <div class="rotated-line"></div>
      <div class="rotated-line"></div>
    </div>

    <div class="menu-slide" :class="{ 'menu-slide-active': isNavbarOpen }">
      <!-- Content for the sliding menu -->
    </div>

    <div class="navbar">
      <nav class="nav">
        <div class="navitem">
          <RouterLink to="/">HOME</RouterLink>
        </div>
        <div class="navitem">
          <RouterLink to="/login">LOGIN</RouterLink>
        </div>
        <div class="navitem">
          <RouterLink to="/about">ABOUT</RouterLink>
        </div>
      </nav>
    </div>
    <div class="logo-container">
      <RouterLink to="/">
        <img class="logo" src="C:\Users\44730\FullWeb\src\assets\images\logo.png" />
      </RouterLink>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isNavbarOpen = ref(false)

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value
}
</script>

<style scoped>
/* Your existing styles */

@font-face {
  font-family: 'Seb Thin';
  src: url('../src/assets/fonts/SebneueThin-a3GK.otf'); /* Modern Browsers */
}

.header {
  display: flex;
  flex-direction: row; /* Align children in a row */ /* Spread children apart */
  align-items: flex-start; /* Align items at the top */
  padding: 10px;
  background-color: rgba(0, 0, 0, 0);
}

.logo-container {
  margin-left: auto; /* Align logo to the end */
}

.navbar {
  display: flex;
}

.logo {
  padding: 20px;
  height: 150px;
  object-fit: contain;
}

.nav {
  display: flex;
  flex-direction: row; /* Stack nav items horizontally */
}

.navitem {
  margin-left: 5px;
  margin-top: 15px;
  margin-right: 20px; /* Add spacing between nav items */
}

.navitem a {
  color: #ffffff; /* Set text color */
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Seb Thin', sans-serif;
}

.menu-icon {
  margin-top: 9px;
  margin-left: 10px;
}

.menu-slide {
  position: fixed;
  top: 0;
  left: -300px; /* Offscreen initially */
  width: 300px;
  height: 100%;
  background-color: #333; /* Adjust background color as needed */
  transition: left 0.2s ease-in-out; /* Smooth transition for sliding */
  z-index: 1; /* Ensure sliding menu is behind menu icon */
}

.menu-slide-active {
  left: 0; /* Slide in when active */
}

.menu-icon .line {
  width: 28px;
  height: 3px;
  background-color: #ffffff;
  margin: 5px 0;
  margin-right: 20px;
  border-radius: 2px;
}

.menu-icon:active .line:nth-child(1) {
  transform-origin: 75% 75%;
  transform: rotate(-45deg);
}

.menu-icon:active .line:nth-child(2) {
  width: 0px;
}

.menu-icon:active .line:nth-child(3) {
  transform-origin: 100% 100%;
  transform: rotate(45deg);
}

.menu-icon.rotated {
  position: relative;
  z-index: 2;
}

.rotated .rotated-line {
  width: 28px;
  height: 3px;
  background-color: #ffffff;
  margin: 5px 0;
  margin-right: 20px;
  border-radius: 2px;
}

.rotated .rotated-line:nth-child(1) {
  transform-origin: 75% 75%;
  transform: rotate(-45deg);
}

.rotated .rotated-line:nth-child(2) {
  width: 0px;
}

.rotated .rotated-line:nth-child(3) {
  transform-origin: 100% 100%;
  transform: rotate(45deg);
}
</style>
