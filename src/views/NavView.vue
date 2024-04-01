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
      <div class="menui home">
        <RouterLink to="/">HOME</RouterLink>
      </div>
      <div class="menui login">
        <RouterLink to="/login">LOGIN</RouterLink>
      </div>
      <div class="menui about">
        <RouterLink to="/about">ABOUT</RouterLink>
      </div>
      <div class="menui settings">
        <RouterLink to="/">SETTINGS</RouterLink>
      </div>
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
  if (isNavbarOpen.value) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
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
  background: linear-gradient(to right, #c0c0c0, #cccccc); /* Define your gradient */
  -webkit-background-clip: text;
  color: transparent;
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
  z-index: 999;
  padding-top: 75px; /* Ensure sliding menu is behind menu icon */
}

.menu-slide-active {
  left: 0; /* Slide in when active */
}

.menu-icon .line {
  width: 28px;
  height: 3px;
  background-color: rgb(202, 202, 202);
  margin: 5px 0;
  margin-right: 20px;
  border-radius: 2px;
}

.menu-icon.rotated {
  position: relative;
  z-index: 1000;
}

.rotated .rotated-line {
  width: 28px;
  height: 3px;
  background-color: rgb(202, 202, 202);
  margin: 5px 0;
  margin-right: 20px;
  border-radius: 2px;
}

.rotated .rotated-line:nth-child(1) {
  width: 0px;
}

.rotated .rotated-line:nth-child(2) {
  width: 0px; /* Assuming you want to keep this child as is */
}

.rotated .rotated-line:nth-child(3) {
  /* Align the rotation origin to the bottom right */
  transform-origin: bottom right;
  /* Rotate 45 degrees */
  transform: rotate(45deg);
}

.rotated .rotated-line:nth-child(3):after {
  content: ''; /* Ensures the pseudo-element is rendered */
  display: block; /* Treats the pseudo-element like a block element */
  width: 28px; /* Example width */
  height: 3px; /* Example height */
  background-color: rgb(255, 255, 255); /* Gives a visible color */
  transform: rotate(90deg);
  position: absolute; /* Positioning might be needed based on your layout */
  border-radius: 2px;
}

.menui {
  margin-bottom: 5px;
  width: 100%;
  height: 35px;
}

.menui a {
  display: inline-block; /* or 'block', depending on your layout needs */
  margin-top: 9.5px;
  margin-left: 28px;
  text-wrap: wrap;
  color: azure;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Seb Thin', sans-serif;
}

.menui:hover {
  background: grey;
}

.no-scroll {
  overflow: hidden;
}

.home {
}
</style>
