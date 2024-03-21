<template>
  <!-- This loads the content for HOME page for single page application -->
  <div class="hidden" v-show="$route.path === '/'">
    <div class="background-home">
      <NavView />
    </div>
    <TestView />
  </div>

  <!-- This loads the content for ABOUT page for single page application -->
  <div v-show="$route.path === '/about'">
    <div class="background-about">
      <NavView />
    </div>
  </div>
</template>

<script setup>
import NavView from '../src/views/NavView.vue'
import TestView from '../src/views/TestView.vue'
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
.background-about {
  margin: 0;
  width: 100%;
  height: 100vh;
}

.background-home {
  background-image: url('../src/assets/images/1.jpg');
}

.background-about {
  background-image: url('../src/assets/images/image.jfif');
}
</style>
