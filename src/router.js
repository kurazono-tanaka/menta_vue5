import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Questionnaire from './views/Questionnaire.vue';
import Consultation from './views/Consultation.vue';
import Verification from './views/Verification.vue';

Vue.use(Router);

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire,
    },
    {
      path: '/consultation',
      name: 'consultation',
      component: Consultation,
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification,
    },
  ],
});
