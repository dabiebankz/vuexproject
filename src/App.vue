<template>
<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/somewhere22">About</router-link> |
    <router-link to="/screen">Screen</router-link> |
    <router-link to="/screen22">Page</router-link> |
    <router-link to="/view">UserID</router-link>|
    <router-link to="/music">User</router-link>|
     <router-link to="/contact">Contact</router-link>|
  <router-link to="/job">Jobs</router-link>|
  <router-link to="/post">Form</router-link>|

</nav>
<router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
