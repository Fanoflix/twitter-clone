<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username"> @{{ user.username }} </h1>
                <div class="user-profile__admin-badge">
                    Admin
                </div>
               <div class="user-profile__follower-count">
                    <strong>Followers: </strong> {{ followers }}
               </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "UserProfile",
    data() {
        return {
        followers: 0,
        user: {
        id: 1,
        username: '_Fanoflix',
        firstName: 'Ammar',
        lastName: 'Nasir',
        email: 'majidammar428@gmail.com',
        isAdmin: true
      }
    }
  },
  watch:{
    followers(newCount, oldCount) {
      console.log(`Old follower Count = ${oldCount}`)
      console.log(`New follower Count = ${newCount}`)
      if (oldCount < newCount)
      {
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
    width: 100%;
    padding: 50px 5%;
    
}

.user-profile__user-panel {
    size: auto;
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px 20px;
    background-color: white;    
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    width: 300px;
    height: 100px;
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

.user-profile__follower-count {
    padding: 5px 0px;
}
h1 {
    padding: 10px 0px;
    margin: 0;
}
</style>

