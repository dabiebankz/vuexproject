<template>
  <h1>Watchers</h1>
  <h2>{{count}}</h2>
  <button @click="count=count+1"> + </button>
  <button @click="count=count-1"> - </button>

</template>
<script>
export default {
  name: 'RecordScreen',
  data(){
    return{
      count:0
    }
  },
  watch:{
    count(val,prev)
    {
      if(val>12 && val>prev){
        this.count=0
      }
    }
  }
}
</script>