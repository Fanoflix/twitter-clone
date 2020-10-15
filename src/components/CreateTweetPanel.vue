<template>
    <!-- Create Tweet -->
                                                                            <!-- :class is a special class, we can provide a condition for this class to be implemented.
                                                                                  It will only be implemented if newTweetCharacterCount exceeds 180 in this case -->
        <form class="user-profile__create-tweet" @submit.prevent="createNewTweet" :class="{ '--exceeded': newTweetCharacterCount > 180}">
          <label for="newTweet"> <strong class="user-profile__tweet-class"> Tweet </strong>  ({{newTweetCharacterCount}}/180) </label>
          <!-- The value of the "newTweetContent" is now synced up with the value of this text area. This is because we provided a 'v-model' to the text area-->  
          <textarea id="newTweet" rows="4" v-model="state.newTweetContent"></textarea>

          <!-- Tweet Types Selector UI -->
          <div class="user-profile__create-tweet-type">
              <div class="create-tweet-type">
                <label for="newTweetType"></label>
                <select id="newTweetType" v-model="state.selectedTweetType">
                <!-- In Vue, if you put a colon before the attribute. It can then be referenced as a variable -->
                <option :value="option.value" v-for="(option,index) in state.tweetTypes" :key="index">
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
import { reactive, computed } from 'vue';
export default {
    name: "CreateTweetPanel",

    setup(props, ctx) {
        const state = reactive({
            newTweetContent: '',
            selectedTweetType: 'instant',
            tweetTypes: [
                { value: 'draft', name: 'Draft'},
                { value: 'instant', name: 'Instant Tweet'}
            ]
        })
        // This:
        /* newTweetCharacterCount() {
           return this.newTweetContent.length;
           } */
        // is identical to line 51.
        const newTweetCharacterCount = computed(() => state.newTweetContent.length) //newTweetCharacterCount is a computed function.

        function createNewTweet() {
          if (state.newTweetContent && state.selectedTweetType !== 'draft') {
            ctx.emit('add-tweet', state.newTweetContent);
            state.newTweetContent = '';
          }
        }

        return {
            state,
            newTweetCharacterCount,
            createNewTweet
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


    .user-profile__tweet-class {
        font-size: 30px;
        color: rgb(0, 0, 0);
        text-shadow: 0px 0px 5px rgb(255, 0, 0);
    }
    textarea {
        margin-top: 20px;
        min-height: 20px;
        background-color: rgb(21, 0, 0);
        opacity: 0.7;
        color: white;
        border: 3px solid  rgb(107, 27, 27);
        border-radius: 15px;
        transition: all 0.5s linear;
        
        &:focus{
            outline: none !important;
            border-radius: 1px;
            background-color: black;
            border-color: rgb(0, 255, 251);
            box-shadow: 0px 0px 15px rgb(0, 255, 251), 0px 0px 5px rgb(0, 255, 251), 0px 0px 5px rgb(0, 255, 251)
        }
    }
    
    .user-profile__create-tweet-type {
        display: flex;
        justify-content: space-between;

        .create-tweet-type{
            padding: 20px 0;
        }

        button {
            padding: 2px 20px;
            margin: auto 0;
            border-radius: 20px;
            border: 3px solid rgb(48, 0, 0);
            background-color: black;
            color: white;
            font-weight: bold;
            font-variant-caps: small-caps;
            transition: 0.3s ease-in-out;
            &:hover{
                background-color: black;
                border-color: rgb(0, 255, 251);
                color: rgb(175, 0, 0);
                border-radius: 5px;
            }
        }
    }

    &.--exceeded {
        color: red;
        border-color: red;

        .user-profile__create-tweet-type {
            button {
                background-color: rgb(0, 0, 0);
                border-color: rgb(34, 34, 34);
                color: gray;
            }
        }
    }
}
</style>