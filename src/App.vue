<template>
  <div id="app">
    <div class="navbar">
      <nav>
        <div class="navitem">
          <RouterLink to="/Login">Login</RouterLink>
        </div>
        <div class="navitem">
          <RouterLink to="/About">About</RouterLink>
        </div>
      </nav>
    </div>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.navbar {
  background-color: yellow;
  width: 100%;
}

.navitem {
  display: inline-block;
}
</style>
