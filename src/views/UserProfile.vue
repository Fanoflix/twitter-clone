<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <!-- Username -->
        <h1 class="user-profile__username"> @{{ state.user.username }} </h1>
          <!-- Admin Badge -->
          <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
              Admin
          </div>

          <!-- Follower Count Wrapper  -->
          <div class="user-profile__follower-count">
              <strong>Followers: </strong> {{ state.followers }}
          </div>
          <CreateTweetPanel @add-tweet="addTweet"/>
        </div>
      </div>

    <!-- Tweets Wrapper UI -->
    <div class="user-profile__tweets-wrapper">
        <TweetItem class="tweet-item" v-for="tweet in state.user.tweets" 
            :key="tweet.id" 
            :username="state.user.username" 
            :tweet="tweet"
        />
    </div>
  
  </div>

</template>

<script>

import { reactive, computed } from 'vue';
import { users } from   "../assets/users";
import { useRoute } from 'vue-router';
import TweetItem from '../components/TweetItem';
import CreateTweetPanel from '../components/CreateTweetPanel';

export default {
    name: "UserProfile",
    components: {CreateTweetPanel, TweetItem},

    setup() {
      const route = useRoute();
      const userId = computed(() => route.params.userId) // Getting the userID param that we specified in the index.js file /user/:userId (note that the colon makes userID a var/param)
      // Now we can use the var userID in the UserProfile context.
      const state = reactive ({
        followers: 0,
        user: users[userId.value - 1] || users[0] 
      })
      
      function addTweet(tweet) {
          // the unshift is a JScript method, that adds new items to the beginning of the array
          state.user.tweets.unshift({ id: state.user.tweets.length + 1, content: tweet });
      }
      

      return {
        state,
        addTweet,
        userId
      }
    },
}
</script>

<!-- The scoped Attribute. Clean way to write CSS -->
<style lang="scss" scoped>

h2{
  color: white;
}

.user-profile {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 50px;
  width: 90%;
  padding: 30px 2%;

  .user-profile__user-panel {
    // background-image: radial-gradient(rgb(58, 0, 0), rgb(0, 0, 0), rgb(24, 24, 24));
    // background-image: url("user-panel-background.jpg");
    display: flex;
    color: white;
    flex-direction: column;
    margin-right: 10px;
    margin-left: 0px;
    padding: 20px 20px;
    background-color: black;
    border-radius: 5px;
    border: 2px solid  rgb(107, 27, 27);
    box-shadow: 0px 0px 35px  rgb(107, 27, 27);
    width: 300px;
    height: 400px;

    h1 {
      padding: 10px 0px;
      margin: 0;
    }

    .user-profile__username {
      padding: 10px 0px;
      transition: all 0.3s ease-out;
      cursor: pointer;
      &:hover {
        text-shadow: 0px 0px 10px rgb(0, 255, 251), -1px -1px 5px rgb(255, 255, 255), 1px 1px 5px white;
        color:rgb(0, 0, 0)
      }
    }

    .user-profile__admin-badge {
      background: red ;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      font-weight: bold;
      padding: 2px 10px;
    }
  }

  .user-profile__tweet-wrapper {
    display: grid;
    grid-gap: 10px;
    max-width: 10px;

    .tweet-item{
      margin-right: 50px;
      max-width: 10px;
    }
  }
}

.user-profile__follower-count {
    padding: 5px 0px;
}




</style>

