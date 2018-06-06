<template>
  <view class="container">
    <view class="userinfo">
      <img class="userinfo-avatar" :src="user.avatarUrl" background-size="cover" />
      <button class="userinfo-nickname" open-type="getUserInfo" @getuserinfo="handleUpdateProfile">
        {{user.nickName || 'Update Profile'}}
      </button>
    </view>
    <view>
      <list-item
        text="My Posts"
        icon="/static/icons/baseline-camera-24px.svg"
        url="/pages/posts/main"
      />
      <list-item
        text="Favorites"
        icon="/static/icons/baseline-favorite-24px.svg"
        url="/pages/stars/main"
      />
    </view>
  </view>
</template>

<script>
import store from '@/store';
import ListItem from '@/components/list-item';

export default {
  components: {
    ListItem,
  },

  computed: {
    user() {
      return store.state.user;
    },
  },

  methods: {
    handleUpdateProfile(e) {
      const { userInfo } = e.mp.detail;
      store.dispatch('updateUserInfo', {
        user: userInfo,
      });
    },
  },
};
</script>

<style scoped>
.userinfo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50rpx 0 30rpx;
  background: #fff;
  margin-bottom: 40rpx;
}

.userinfo-avatar {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  box-shadow: 0 0 40rpx 0 rgba(0, 0, 0, .2);
}

.userinfo-nickname {
  background: transparent;
  border: none;
  color: #212121;
}
</style>
