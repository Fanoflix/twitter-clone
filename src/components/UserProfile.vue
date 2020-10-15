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

import { reactive } from 'vue'
import TweetItem from './TweetItem'
import CreateTweetPanel from './CreateTweetPanel'

export default {
    name: "UserProfile",
    components: {CreateTweetPanel, TweetItem},
    setup() {
      const state = reactive ({
        followers: 0,
        user: {
            id: 1,
            username: '_Fanoflix',
            firstName: 'Ammar',
            lastName: 'Nasir',
            email: 'majidammar428@gmail.com',
            isAdmin: true,
            tweets: [
                {id: 1, content: 'Cloning twitter here *whistles*'},
                {id: 2, content: 'Testing things out, nothing to see here.'}
            ]
        } 
      })
      
      function addTweet(tweet) {
          // the unshift is a JScript method, that adds new items to the beginning of the array
          state.user.tweets.unshift({ id: state.user.tweets.length + 1, content: tweet });
      }
      

      return {
        state,
        addTweet
      }
    },
}
</script>

<!-- The scoped Attribute. Clean way to write CSS -->
<style lang="scss" scoped>

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

