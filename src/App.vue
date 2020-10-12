<template>
  <div id="app">
    <div class="container-top"></div>
    <nav>
      <div class="nav__logo">
        Tweeter
      </div>
      <div class="nav__user">
        <h5> Logged in as:  {{ user.username }}</h5>
      </div>
    </nav>
    <div class="container-bottom"></div>
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

//Website Theme
:root {
  --main-bg-color: rgb(26, 26, 26);
  --nav-bar-color: rgb(82, 0, 0);
  --shadow-color:  rgb(21, 21, 21);
  --nav-bar-height: 10px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0d1a27;
  min-height: 100vh;
  min-width: auto;
  background-color: var(--main-bg-color);
  
  nav {
    // background-image: linear-gradient( var(--main-bg-color), var(--nav-bar-color),  var(--main-bg-color));
    background-color: var(--nav-bar-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 2%;
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

  .container-top {
    min-height: var(--nav-bar-height);
    background-image: linear-gradient(  var(--main-bg-color),var(--shadow-color));
  }

  .container-bottom { 
    min-height: var(--nav-bar-height);
    background-image: linear-gradient( var(--shadow-color), var(--main-bg-color) );
  }

  
}

</style>
