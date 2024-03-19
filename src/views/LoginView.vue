<template>
  <!-- Ensure #app spans 100% of the viewport -->
  <div class="login-container">
    <h1 class="login-title">This is a login page</h1>

    <input class="username" placeholder="Username:" v-model="username" />
    <input class="lastname" placeholder="lastname" v-model="lastname" />
    <input class="dob" placeholder="dob" v-model="dob" />
    <button @click="createUser">Create Account</button>
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
.login-container {
  background-color: bisque;
  padding: 0;
  margin: 0;
}

.login-title {
  margin: 0; /* Ensure no margin for the login title */
  margin-block-start: 0; /* Override margin-block-start */
  margin-block-end: 0; /* Override margin-block-end */
}

/* Reset browser styles */
html,
body {
  margin: 0;
  padding: 0;
}
</style>
