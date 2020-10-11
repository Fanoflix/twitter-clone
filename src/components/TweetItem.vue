<template>
    <div class="tweet-item" @click="favouriteTweet(tweet.id)">
        <div class="user-profile__tweet">
            <div class="tweet-item__user">
                @{{username}}
            </div>
            <div class="tweet-item__content">
                {{ tweet.content}}
            </div>
        </div>
    </div>
    <div class="gap"></div>
</template>


<script>
export default {
    name: "TweetItem",
    props: {
        username: {
            type: String,
            required: true
        },
        tweet: {
            type: Object,
            required: true
        }
    },
    methods: {
        favouriteTweet(id) {
            this.$emit('favourite', id) //We're emitting (returning back to the parent) the id... and also in turn making 'favourite' an event.
            //favourite is now an event. We use this in UserProfile.vue file
        }
    }
};
</script>



<style lang="scss" scoped>
.tweet-item {
    padding: 20px;
    background-color: rgb(70, 0, 0);
    color: white;
    border-radius: 5px;
    border: 3px solid black;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.1s ease;
    max-width: 800px;

    .tweet-item__user {
        font-weight: bold;
        padding-bottom: 5px;
    }

    // &:hover is just saying add hover to the parent class. This is part of SCSS.
    &:hover {
        transform: scale(1.06, 0.99);
    }
}





.gap {
    height: 10px;
}

</style>