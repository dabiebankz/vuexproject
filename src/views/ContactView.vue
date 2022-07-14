<template>
  <h1>teleport Component</h1>
  <button @click="getUse()">Click Here!</button>
  <div v-for="get in inTodo" v-bind:key="get.id">
    <p>user id: {{get.userid}}</p>
    <p>id: {{get.id}}</p>
    <p>title : {{get.title}}</p>
    <p>completed: {{get.completed}}</p><hr>
  </div>
  <div class="footer">
<h3>Footer of App</h3>
    <p>Copyright © 2022 | WordPress</p>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "FooterPage",
  data(){
    return {
      inTodo: []
    }
  },
  methods:{
    getUse(){
      axios.get ("https://jsonplaceholder.typicode.com/posts")
          .then(response=>{
            this.inTodo = response
            console.log(response.data)
          })
    }
  }
}
</script>

<style scoped>
.footer{
  background-color: antiquewhite;
  color: orange;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
}
</style>