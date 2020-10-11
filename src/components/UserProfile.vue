<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <!-- Username -->
        <h1 class="user-profile__username"> @{{ user.username }} </h1>
          <!-- Admin Badge -->
          <div class="user-profile__admin-badge" v-if="user.isAdmin">
              Admin
          </div>

          <!-- Follower Count Wrapper  -->
          <div class="user-profile__follower-count">
              <strong>Followers: </strong> {{ followers }}
          </div>
          <CreateTweetPanel @add-tweet="addTweet"/>
        </div>
      </div>

    <!-- Tweets Wrapper UI -->
    <div class="user-profile__tweets-wrapper">
        <TweetItem class="tweet-item" v-for="tweet in user.tweets" 
            :key="tweet.id" 
            :username="user.username" 
            :tweet="tweet" 
            @favourite="toggleFavourite"
        />
    </div>
  
  </div>

</template>

<script>
import TweetItem from './TweetItem'
import CreateTweetPanel from './CreateTweetPanel'

export default {
    name: "UserProfile",
    components: {CreateTweetPanel, TweetItem},
    data() {
      return {
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
      }
    },
      watch:{
        followers(newCount, oldCount) {
          if (oldCount < newCount) {
            console.log(`${this.user.username} has gained a new follower!`)
          }
        }
      },
      computed: {
        fullName() {
          return `${this.user.firstName} ${this.user.lastName}`
        }
      },
      methods: {
        followUser() {
          this.followers++
        },
        toggleFavourite(id) {
          console.log(`Favourited Tweet #${id}`)
        },
        addTweet(tweet) {
          // the unshift is a JScript method, that adds new items to the beginning of the array
          this.user.tweets.unshift({ id: this.user.tweets.length + 1, content: tweet });
        }
      },
      mounted() {
        this.followUser();
      }
}
</script>

<!-- The scoped Attribute. Clean way to write CSS -->
<style lang="scss" scoped>

.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  width: 100%;
  padding: 50px 5%;

  .user-profile__user-panel {
    //background-image: radial-gradient(rgb(90, 0, 0), rgb(65, 0, 0), rgb(41, 0, 0));
    background-image: url("user-panel-background.jpg");
    display: flex;
    color: white;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px 20px;
    background-color: black;
    border-radius: 5px;
    border: 2px solid black;
    width: 300px;
    height: 250px;

    h1 {
      padding: 10px 0px;
      margin: 0;
    }

    .user-profile__username {
      padding: 10px 0px;
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

