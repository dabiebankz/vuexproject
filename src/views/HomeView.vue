<template>
  <div class="home">
    <button @click="getAxios()">Click me</button>
  </div>
  <div v-for="todo in todoData" v-bind:key="todo.id">
    <p>user id: {{todo.userId}}</p>
    <p>title: {{todo.title}}</p>
    <hr>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'

export default {
  name: 'HomeView',
  data(){
    return {
      todoData: []
    }
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    getAxios(){
      axios.get("https://jsonplaceholder.typicode.com/todos/")
          .then((responds) => {
            this.todoData = responds.data
            console.log(responds)
          })

    }
  }

}
</script>
