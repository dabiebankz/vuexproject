<template>
<h1>Call API and Fetch API</h1>
  <h2>{{jobs}}</h2>
  <button @click="getTodo()">Click Here</button>
  <div v-for="doto in todo" v-bind:key="doto.id">
    <p>user id:{{doto.userid}}</p>
    <p>id : {{doto.id}}</p>
    <p>title: {{doto.title}}</p>
    <p>completed:{{doto.completed}}</p>
    <hr>
  </div>
</template>



<script>

import axios from "axios"

export default {
  name: "JobCall",
  data(){
    return{
      todo : []
    }
  },
  methods:{
    getTodo(){
      axios.get("https://jsonplaceholder.typicode.com/todos/")
          .then(response=>{
            this.todo = response.data
            console.log(response)
          })
    }
  }
}
</script>