<template>
  <!-- This loads the content for HOME page for single page application -->
  <div class="hidden" v-show="$route.path === '/about'">
    <div class="background-about">
      <NavView />
    </div>
  </div>

  <!-- This loads the content for ABOUT page for single page application -->
  <div v-show="$route.path === '/'">
    <div class="background-home">
      <NavView />
      <div class="title-background">
        <h1 class="text main">POSTON BEA TARTY</h1>
      </div>
    </div>
    <HomeSecOne />
  </div>

  <div v-show="$route.path === '/login'">
    <div class="background-login">
      <NavView />
    </div>
  </div>
</template>

<script setup>
import NavView from '@/views/NavView.vue'
import HomeSecOne from '@/views/HomeSectionOne.vue'
import AboutView from '@/views/AboutView.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = route.path
</script>

<style scoped>
@font-face {
  font-family: 'Futura';
  src: url('../src/assets/fonts/Futura Light/Futura Light.otf'); /* Modern Browsers */
}

@font-face {
  font-family: 'Linked';
  src: url('../src/assets/fonts/Futura Light/linked.otf'); /* Modern Browsers */
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');

.hidden {
  margin: 0;
  padding: 0;
}

.background-home,
.background-about,
.background-login {
  text-align: center;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-size: cover; /* Cover the entire page, maintain aspect ratio */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the image */
}

.background-login {
  background-image: url('../src/assets/images/image.png');
}

.background-home {
  background-image: url('../src/assets/images/image1.jpg');
}

.background-about {
  background-image: url('../src/assets/images/image.png');
  width: 100%;
}

.title-background {
  background-color: rgba(0, 4, 5, 0.288);
}

.text {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}

.text.main {
  color: transparent;
  margin: 0;
  font-size: 150px;
  font-family: 'Linked', sans-serif;
  margin-top: 0%;
  -webkit-text-stroke: rgb(202, 202, 202) 3px;
}

.body {
  margin: 0;
  padding: 0;
}
</style>
