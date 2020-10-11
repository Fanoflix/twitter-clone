<template>
  <div id="app">
    <div class="container"></div>
    <nav>
      <div class="nav__logo">
        Tweeter
      </div>
      <div class="nav__user">
        <h5> Logged in as:  {{ user.username }}</h5>
      </div>
    </nav>
    <div class="container"></div>
    <br>
    <UserProfile/>
  </div>
</template>

<script>
import UserProfile from "./components/UserProfile";

export default {
  name: 'App',
  components: { UserProfile },
  data() {
    return {
      user: {
        username: '__Fanoflix'
      }
    }
  }
  
}
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0d1a27;
  min-height: 100vh;
  min-width: auto;
  background-color:rgb(39, 24, 24) ;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: darkred;
    color: white;

    .nav__logo {
      font-weight: bold;
      font-size: 30px;
      font-variant-caps: all-petite-caps;
    }

    .nav__user {
      font-weight: bold;
      font-size:13px
    }
  }

  .container {
    border: 3px solid black; 
  }
}

</style>
