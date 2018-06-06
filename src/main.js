import Vue from 'vue';
import App from './App';
import './utils/promisify';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/post/main',
      'pages/home/main',
      'pages/posts/main',
      'pages/stars/main',
    ],
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#ebebeb',
      navigationBarBackgroundColor: '#3c3c3c',
      navigationBarTitleText: 'YumeHub',
      navigationBarTextStyle: 'white',
    },
    tabBar: {
      color: '#999',
      selectedColor: '#3c3c3c',
      borderStyle: 'black',
      backgroundColor: '#fcfcfc',
      list: [
        {
          pagePath: 'pages/index/main',
          text: 'Explore',
          iconPath: 'static/tabbar/outline_explore_black_36dp.png',
          selectedIconPath: 'static/tabbar/baseline_explore_black_36dp.png',
        },
        {
          pagePath: 'pages/post/main',
          text: 'Post',
          iconPath: 'static/tabbar/outline_create_black_36dp.png',
          selectedIconPath: 'static/tabbar/baseline_create_black_36dp.png',
        },
        {
          pagePath: 'pages/home/main',
          text: 'Home',
          iconPath: 'static/tabbar/outline_person_black_36dp.png',
          selectedIconPath: 'static/tabbar/baseline_person_black_36dp.png',
        },
      ],
    },
  },
};
