<template>
    <!-- Create Tweet -->
                                                                            <!-- :class is a special class, we can provide a condition for this class to be implemented.
                                                                                  It will only be implemented if newTweetCharacterCount exceeds 180 in this case -->
        <form class="user-profile__create-tweet" @submit.prevent="createNewTweet" :class="{ '--exceeded': newTweetCharacterCount > 180}">
          <label for="newTweet"> <strong> New Tweet </strong>  ({{newTweetCharacterCount}}/180) </label>
          <!-- The value of the "newTweetContent" is now synced up with the value of this text area. This is because we provided a 'v-model' to the text area-->  
          <textarea id="newTweet" rows="4" v-model="newTweetContent"></textarea>

          <!-- Tweet Types Selector UI -->
          <div class="user-profile__create-tweet-type">
              <div class="create-tweet-type">
                <label for="newTweetType"> <strong>Type: </strong></label>
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
                Tweet
            </button>
          </div>
        </form>
</template>

<script>
export default {
    name: "CreateTweetPanel",
    data() {
        return {
            newTweetContent: '',
            selectedTweetType: 'instant',
            tweetTypes: [
                { value: 'draft', name: 'Draft'},
                { value: 'instant', name: 'Instant Tweet'}
            ]
        }
    },
    computed: {
        newTweetCharacterCount() {
          return this.newTweetContent.length;
        }
    },
    methods: {
        createNewTweet() {
          if (this.newTweetContent && this.selectedTweetType !== 'draft') {
            this.$emit('add-tweet', this.newTweetContent)
            this.newTweetContent = '';
          }
        }
    }
}
</script>

<style lang="scss" scoped>
.user-profile__create-tweet {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
        border-color: crimson;
        background-color: black;
        opacity: 0.7;
        color: white;
        border: 2px solid black;
        border-radius: 5px;
        &:focus{
            border: 2px solid crimson;
            border-color: crimson;
        }
    }
    
    .user-profile__create-tweet-type {
        display: flex;
        justify-content: space-between;

        .create-tweet-type{
            padding: 10px 0;
        }

        button {
            
            padding: 5px 20px;
            margin: auto 0;
            border-radius: 3px;
            border: none;
            background-color: darkred;
            color: white;
            font-weight: bold;
            font-variant-caps: small-caps;
            transition: 0.15s ease-in-out;
            &:hover{
                background-color: white;
                color: darkred;
                border-radius: 8px;
            }
        }
    }

    &.--exceeded {
        color: red;
        border-color: red;

        .user-profile__create-tweet-type {
            button {
                background-color: gray;
                color: white;
            }
        }
    }
}




</style>