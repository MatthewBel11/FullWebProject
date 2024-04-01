<template>
  <div class="main-container">
    <div class="sub-container">
      <h1 class="join"><a href="https://discord.gg/ydYSDNjE">JOIN US, GUARDIANS.</a></h1>
      <div class="line"></div>
    </div>
  </div>
</template>

<script></script>

<style>
@font-face {
  font-family: 'Linked';
  src: url('../src/assets/fonts/Futura Light/linked.otf'); /* Modern Browsers */
}

.main-container {
  display: flex;
  padding: 0;
  margin: 0;
  background: linear-gradient(#161616, #151716, #14161d);
  width: 100%;
  height: 100vh;
  text-align: center;
}

h1 {
  margin: 0;
  padding: 0;
}

.sub-container {
  height: 75px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
}

.join a {
  text-decoration: none;
  color: rgb(202, 202, 202);
  font-size: 50px;
  font-family: 'Linked', sans-serif;
}

.line {
  width: 100%;
  height: 3px;
  background-color: rgb(202, 202, 202);
  margin: 5px 0;
  margin-right: 20px;
  border-radius: 2px;
  transform-origin: center; /* Ensures scaling occurs from the center */
  transition: transform 0.5s ease; /* Smooth transition for the transform */
}

.sub-container:hover {
  .line {
    transform: scaleX(0);
  }
  cursor: pointer;
}
</style>
