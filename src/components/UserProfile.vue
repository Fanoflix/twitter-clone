<template>
  <div class="user-profile">
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

        <!-- Create Tweet -->
        <form class="user-profile__create-tweet" @submit.prevent="createNewTweet">
          <label for="newTweet"> <strong> New Tweet </strong></label>
          <!-- The value of the "newTweetContent" is now synced up with the value of this text area. This is because we provided a 'v-model' to the text area-->
          <textarea id="newTweet" rows="4" v-model="newTweetContent"></textarea>

          <!-- Tweet Types Selector UI -->
          <div class="user-profile__create-tweet-type">
            <label for="newTweetType"> <strong>Type:</strong></label>
            <select id="newTweetType" v-model="selectedTweetType">
              <!-- In Vue, if you put a colon before the attribute. It can then be referenced as a variable -->
              <option :value="option.value" v-for="(option,index) in tweetTypes" :key="index">
                {{ option.name }}
              </option>
            </select>
          </div>
          <!-- A normal button if pressed, will refresh the page. But we don't want that as we're creating a Single Page Application
               We change this defautl functionality in the obvious place i.e: The form tag. by using @submit.prevent -->
          <button>
            Tweet!
          </button>
        </form>
    </div>

    <!-- Tweets Wrapper UI -->
    <div class="user-profile__tweets-wrapper">
        <TweetItem v-for="tweet in user.tweets" 
            :key="tweet.id" 
            :username="user.username" 
            :tweet="tweet" 
            @favourite="toggleFavourite"/>
    </div>
  </div>


</template>

<script>
import TweetItem from './TweetItem'

export default {
    name: "UserProfile",
    components: {TweetItem},
    data() {
      return {
        newTweetContent: '',
        selectedTweetType: 'instant',
        tweetTypes: [
          { value: 'draft', name: 'Draft'},
          { value: 'instant', name: 'Instant Tweet'}
        ],
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
        createNewTweet() {
          if (this.newTweetContent && this.selectedTweetType !== 'draft') {
            // the unshift is a JScript method, that adds new items to the beginning of the array
            this.user.tweets.unshift({
              id: this.user.tweets.length + 1,
              content: this.newTweetContent
            })
          }
          this.newTweetContent = '';
        }
      },
      mounted() {
        this.followUser();
      }
}
</script>

<style>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    width: 100%;
    padding: 50px 5%;
    
}

.user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px 20px;
    background-color: white;    
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    width: 300px;
    height: 250px;
}

.user-profile__username {
    padding: 10px 0px;
}

.user-profile__admin-badge {
    background: rebeccapurple;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    font-weight: bold;
    padding: 2px 10px;
}

.user-profile__tweet-wrapper {
  display: grid;
  grid-gap: 10px;
}

.user-profile__follower-count {
    padding: 5px 0px;
}

h1 {
    padding: 10px 0px;
    margin: 0;
}

.user-profile__create-tweet {
  border-top: 1px solid #dfe3e8;
  padding: 20px;
  display: flex;
  flex-direction: column;

}
</style>

