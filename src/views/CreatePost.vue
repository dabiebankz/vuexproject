<template>
  <div>
    <h1>Http Request</h1>
    <form @submit="PostForm">
        <label>Email: </label>
        <input type="text" id="email" v-model="PostForm.email">
        <br> <br>
        <label>Password: </label>
        <input type="password" id="password" v-model="PostForm.password">
        <br> <br>
        <label>Country: </label>
        <select v-model="PostForm.country">
          <option>India</option>
          <option>USA</option>
          <option>Nigeria</option>
          <option>Cyprus</option>
          <option>South Africa</option>
          <option>Tanzania</option>
        </select>
    </form>
    <button @click="createPost()">Create Post</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'CreatePage',
  data(){
    return{
      PostForm: {
        email: '',
        password: '',
        country: ''
      }
    }
  },
  methods:{
    createPost(){
      axios.post('https://jsonplaceholder.typicode.com/posts',this.PostForm)
          .then(response=>console.log(response))
    }
  }
}
</script>

<style scoped>
</style>