<template>
    <h1>Simple Form</h1>
  <ul>
    <li v-for="main in error" v-bind:key="main">
      {{main}} is valid
    </li>
  </ul>
  <form>
    <label>Email : </label>
    <input type="text" placeholder="enter email address" v-model="form.email">
    <br> <br/>

    <label>Password : </label>
    <input type="password" placeholder="enter password" v-model="form.password">
    <br> <br/>

    <label>Country : </label>
    <select v-model="form.country">
      <option>India</option>
      <option>USA</option>
      <option>Nigeria</option>
      <option>Cyprus</option>
      <option>South Africa</option>
      <option>Tanzania</option>
    </select>
    <br> <br/>

    <h1>Gender</h1>
    <label>Male: </label>
    <input type="radio" name="gender" value="male" v-model="form.gender">
    <br> <br/>
    <label>Female: </label>
    <input type="radio" name="gender" value="female" v-model="form.gender">
    <br> <br/>

    <h1>Technology</h1>
    <label>Java: </label>
    <input type="checkbox" value="java" v-model="form.technology">
    <br> <br/>
    <label>PHP: </label>
    <input type="checkbox" value="php" v-model="form.technology">
    <br> <br/>
    <label>Javascript: </label>
    <input type="checkbox" value="javascript" v-model="form.technology">
    <br> <br/>
    <label>Python: </label>
    <input type="checkbox" value="python" v-model="form.technology">
    <br> <br/>
    <label>SQL: </label>
    <input type="checkbox" value="sql" v-model="form.technology">
    <br> <br/>
    <button @click="getLogin" type="button" style="background-color: blue">Login </button>
    <button @click="createPost()">Create Post</button>
  </form>
</template>
<script>
export default {
    name : "AboutScreen",
  data(){
      return{
        form: {
          email: "",
          password: "",
          country: "",
          gender: "",
          technology: []
        },
        error:[]
      }
  },
  methods:{
      getLogin(){
        this.error = []
            for(const main in this.form){
              if(this.form[main]===""|| this.form[main].length===0) {
                this.error.push(main)
              }
        }
        if (this.error.length===0){
          alert("data has been submitted")
        }
            console.warn(this.error)
      }
  }
}
</script>