<template>
  <!-- This loads the content for HOME page for single page application -->
  <div class="hidden" v-show="$route.path === '/about'">
    <div class="background-about">
      <NavView />
    </div>
    <AboutView />
  </div>

  <!-- This loads the content for ABOUT page for single page application -->
  <div v-show="$route.path === '/'">
    <div class="background-home">
      <NavView />
    </div>
  </div>

  <div v-show="$route.path === '/login'">
    <div class="background-login">
      <NavView />
    </div>
  </div>
</template>

<script setup>
import NavView from '@/views/NavView.vue'
import AboutView from '@/views/AboutView.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = route.path
</script>

<style scoped>
.hidden {
  margin: 0;
  padding: 0;
}

.background-home,
.background-about,
.background-login {
  margin: 0;
  width: 100%;
  height: 100vh;
}

.background-login {
  background-image: url('../src/assets/images/1.jpg');
}

.background-home {
  background-image: url('../src/assets/images/1.jpg');
}

.background-about {
  background-image: url('../src/assets/images/image.jfif');
  width: 100%;
}
</style>
