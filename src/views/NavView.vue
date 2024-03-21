<template>
  <header class="header">
    <div class="menu-icon" @click="toggleNavbar">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="navbar">
      <nav class="nav">
        <div class="navitem">
          <RouterLink to="/" @click="toggleNavbar">HOME</RouterLink>
        </div>
        <div class="navitem">
          <RouterLink to="/login" @click="toggleNavbar">LOGIN</RouterLink>
        </div>
        <div class="navitem">
          <RouterLink to="/about" @click="toggleNavbar">ABOUT</RouterLink>
        </div>
      </nav>
    </div>
    <div class="logo-container">
      <img class="logo" src="C:\Users\44730\FullWeb\src\assets\images\logo.png" />
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
</script>

<style scoped>
@font-face {
  font-family: 'Seb Thin';
  src: url('C:\Users\44730\FullWeb\src\assets\fonts\SebneueThin-a3GK.otf');
}

.header {
  display: flex;
  flex-direction: row; /* Align children in a row */ /* Spread children apart */
  align-items: flex-start; /* Align items at the top */
  padding: 10px;
  background-color: rgba(0, 0, 0, 0);
}

.menu-icon {
  cursor: pointer;
  padding: 10px;
}

.line {
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 5px 0;
  margin-right: 20px;
  border-radius: 2px;
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
  margin-left: 20px;
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
</style>
