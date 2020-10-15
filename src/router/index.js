import { createRouter, createWebHistory, } from 'vue-router'
import store from '../store';
import { users } from '../assets/users';
import Home from '../views/Home';
import UserProfile from '../views/UserProfile';
import Admin from '../views/Admin';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Router guards are functions that run before or after each routing move that we make.
// - Useful for redirecting people going to pages they're not suppsosed to go to
// - Useful for pushing people to loading pages before we have loaded their user info
router.beforeEach(async (to, from, next) => {
  const user = store.state.user;

  if (!user) {
    await store.dispatch('setUser', users[0]) //dispatch is the function you call to run actions.
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({name: 'Home'})
  else next();
})
export default router
