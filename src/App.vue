<template>
  <div id="app">
    <nav>
      <router-link to="/"> 

      <div class="nav__logo">
        Tweeter
      </div>
      </router-link>

      <div class="nav__user" v-if="user">
        <h5> Logged in as:  {{ user.username }}</h5>
      </div>
    </nav>
    <br>
    <router-view/> <!-- This tag is going to be injected with whatever pag we're on.-->
  </div>
</template> 

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',

  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user
    }
  }
  
  
}
</script>

<style lang="scss" >

//Website Theme
:root {
  --main-bg-color: rgb(26, 26, 26);
  --nav-bar-color: rgb(0, 0, 0);
  --nav-bar-height: 20px;
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
    box-shadow: 0px 0px 20px rgb(0, 255, 251), 0px 0px 30px rgb(0, 255, 251);

    .nav__logo {
      font-weight: bold;
      font-size: 35px;
      text-shadow: 0px 0px 10px rgb(0, 255, 251), 0px 0px 10px rgb(255, 255, 255);
      color: rgb(0, 0, 0);
      font-variant-caps: all-petite-caps;
    }

    .nav__user {
      font-weight: bold;
      font-size:13px
    }
  }
}

</style>
