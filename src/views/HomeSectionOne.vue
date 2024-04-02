<template>
  <div class="max">
    <div class="main-container one">
      <div class="sub-container one">
        <h1 class="join"><a href="https://discord.gg/ydYSDNjE">JOIN US, GUARDIANS</a></h1>
        <div class="line"></div>

        <h2>ABOUT US</h2>
        <div class="text-box">
          <p>
            Lorem ipsum dolor sit amet. Eum impedit animi ut aliquid voluptas sed molestiae
            laboriosam! Est neque provident et fugit incidunt et maiores omnis sed nihil vero sed
            iusto quae eum accusantium enim. Qui veniam enim ut voluptas galisum et veritatis dicta!
          </p>
        </div>

        <h2>THE VANGUARDS</h2>
        <div class="profile-pics">
          <img src="C:\Users\44730\FullWeb\src\assets\images\image3-removebg-preview.png" />
          <img src="C:\Users\44730\FullWeb\src\assets\images\image3-removebg-preview.png" />
        </div>

        <h2>OUR RULES</h2>
        <div class="rule">- Jfsjkf djkgdhg</div>
        <div class="rule">- Ofsjfn Jdadnna</div>
        <div class="rule">- IIdkas fsesfjsje</div>
        <div class="rule">- Jgdkg</div>
        <div class="rule">- JfJNF Nndnnnf</div>
        <div class="rule">- Jfsjkf djkgdhg</div>
      </div>
    </div>

    <div class="main-container two">
      <!--
        <img
        class="image one"
        src="C:\Users\44730\FullWeb\src\assets\images\image3-removebg-preview.png"
        />
    --></div>
  </div>
</template>

<script></script>

<style>
@font-face {
  font-family: 'Linked';
  src: url('../src/assets/fonts/Futura Light/linked.otf'); /* Modern Browsers */
}

.max {
  display: flex;
  flex-direction: row;
}

.main-container {
  display: flex;
  padding: 0;
  margin: 0;
  height: 100vh;
  text-align: center;
}

.main-container.one {
  background: linear-gradient(#161616, #151716, #14161d);
  width: 50%;

  border-right: 2px solid rgb(202, 202, 202);
}

.main-container.two {
  background-image: url(C:\Users\44730\FullWeb\src\assets\images\image3.jpg);
  background-size: cover; /* Cover the entire page, maintain aspect ratio */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the image */
  width: 50%;
}

.image.one {
  margin-top: auto;
  width: 600px;
  height: 400px;
  margin-left: auto;
}

h1 {
  margin: 0;
  padding: 0;
}

.sub-container {
  width: 56%;
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

.profile-pics {
  flex-direction: row;
}

.profile-pics img {
  width: 250px;
}

.sub-container:hover {
  .line {
    transform: scaleX(0);
  }
  cursor: pointer;
}

.text-box {
  font-family: 'Linked', sans-serif;
  font-size: 20px;
  color: rgb(202, 202, 202);
  background-color: rgb(#3a3737f8);
}

h2 {
  font-family: 'Linked', sans-serif;
  font-size: 40px;
  color: rgb(202, 202, 202);
}

.rule {
  font-size: 20px;
  color: rgb(202, 202, 202);
  margin-top: 10px;
}
</style>
