<template>
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
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.navbar {
  background-color: yellow;
  width: 100%;
  margin: 0;
  height: 50px;
}

.navitem {
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
}
</style>
