<template>
    <div class="tweet-item">
        <div class="user-profile__tweet">
            <div class="tweet-item__user">
                @{{ username }}
            </div>
            <div class="tweet-item__content">
                {{ tweet.content }}
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
};
</script>



<style lang="scss" scoped>
:root {
    --tweet-wrapper-color: black;
}
.tweet-item {
    padding: 20px;
    background-color: black;
    color: white;
    border-radius: 5px;
    border: 1px solid  rgb(107, 27, 27);
    box-shadow: 0px 0px 5px rgb(107, 27, 27);
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
    max-width: 800px;

    .tweet-item__user {
        font-weight: bold;
        padding-bottom: 5px;
    }

    // &:hover is just saying add hover to the parent class. This is part of SCSS.
    &:hover {
        box-shadow: 0px 0px 10px rgb(0, 255, 251);
        border-color: rgb(0, 255, 251);
        transform: scale(1.06, 0.99);
    }
}

.gap {
    height: 10px;
}

</style>