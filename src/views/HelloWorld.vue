<template>
<h1>Email: {{getName("chinyere stallamaris")}}</h1>
  <h1>Mobile: {{mobile="6677678"}}</h1>
  <h1 class="agegrade">Age: {{age}}</h1>
  <h1>Hobbies are: {{hobbies="reading,dancing"}}</h1>
  <h1>Father's Name: {{getMine("Chief Gabriel Elochkwu Muorah A.K.A Ichie orimmili")}}</h1>
  <h1>Data: {{getData().name}}</h1>
  <h1>Data Email: {{getData().email}}</h1>
  <button @click= "getYou()">Click Me</button>

  <div v-for="obj in persons" v-bind:key="obj.email">
    <strong>Name: </strong>{{obj.name}}
    <br>
    <strong>Gender: </strong>{{obj.gender}}
    <br>
    <strong>Email: </strong>{{obj.email}}
    <br>
    <strong>Occupation: </strong>{{obj.occupation}}
    <hr/>
  </div>
  <div v-for ="animal in animals" v-bind:key="animal.breed">
    <strong>Name:</strong> {{animal.name}}
    <br>
    <strong>Breed:</strong> {{animal.breed}}
    <br>
    <strong>Characteristics:</strong> {{animal.Characteristics}}
    <hr>

  </div>



</template>
<script>
export default {
  name: "MyScreen",
  data() {
    return {
      email: "dabiebankz@gmail.com",
      mobile: "09055299494",
      age: 28,
      hobbies: "Love playing football, making new friends",
      getName(y) {
        return y;
      },
      persons:[
        {
          name: "Anthony",
          gender:"male",
          email: "anthonymorah@gmail.com",
          occupation:"software Engineer"
        },
        {
          name: "Chinyere",
          gender: "Female",
          email:"oliviachinyere@gmail.com",
          occupation:"blogger"
        },
        {
          name: "Alexa",
          gender: "Shemale",
          email: "adaobimuorah@gmail.com",
          occupation:"Actress"
        }
      ],
      animals:[
        {
          name: "Dog",
          breed: "bulldog",
          Characteristics: "Affectionate and gentle"
        },
        {
          name: "goat",
          breed: "Toggenburg",
          Characteristics: "intelligent and curious animals"
        },
        {
          name: "fish",
          breed: "Koi",
          Characteristics: "Cold-Blooded"
        }
      ]
    }
  },
  methods: {
    getMine(name) {
      return name;
    },
    getData() {
      return {
        name: this.hobbies,
        email: this.email
      }
    },
    getYou() {
      alert("function called")
    }
  }
}
</script>
<style scoped>
h1{
  color: #6fff2d;
}
.agegrade{
  color: aqua;
}
</style>