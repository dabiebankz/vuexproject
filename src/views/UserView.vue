<template>
  <div>
    <h1>COMPUTED PROPERTY</h1>
    <h2>{{(dollars*rupeeVal)-discount}}</h2>
      <h2>{{getResult}}</h2>
    <h2>{{getData()}}</h2>
  </div>
</template>
<script>
export default {
  name : "ScreenPage",
  data(){
    return{
      dollars: 100,
      rupeeVal: 70,
      discount: 10,
    }
  },
  methods:{
    getData(){
      return (this.dollars*this.rupeeVal)-this.discount
    }
  },
  computed :{
    getResult(){
      return (this.dollars*this.rupeeVal)-this.discount
    }
  }
}
</script>