import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;