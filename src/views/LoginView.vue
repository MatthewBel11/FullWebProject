<template>
  <!-- Ensure #app spans 100% of the viewport -->
  <div class="main-container">
    <h1 class="login-title">This is a login page</h1>

    <div class="login-container">
      <input class="username" placeholder="Username:" v-model="username" />
      <input class="lastname" placeholder="lastname" v-model="lastname" />
      <input class="dob" placeholder="dob" v-model="dob" />
      <button @click="createUser">Create Account</button>
    </div>
  </div>
</template>

<script setup>
import db from '@/firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'
import { ref } from 'vue'
</script>

<script>
const username = ref('')
const lastname = ref('')
const dob = ref('')

export default {
  methods: {
    createUser() {
      const colRef = collection(db, 'users')
      const dataObj = {
        firstName: username.value, // corrected to use this.username
        lastName: lastname.value, // corrected to use this.lastname
        dob: dob.value // corrected to use this.dob
      }

      const docRef = addDoc(colRef, dataObj)
      console.log('Document generated with ID: ', docRef.id)
      console.log('Username:', username.value)
      console.log('Lastname:', lastname.value)
      console.log('DOB:', dob.value)
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 30%;
  background-color: black;
  margin: auto;
  height: 50%;
  border-radius: 20px;
}

.login-container {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 80%;
  background-color: grey;
  border-radius: 20px;
  padding: 20px; /* Adding padding for better appearance */
  margin: 0 auto; /* Center horizontally */
}

.login-title {
  margin: 0 auto; /* Ensure no margin for the login title */
  color: azure; /* Override margin-block-end */
  text-align: center;
}

/* Reset browser styles */
</style>
