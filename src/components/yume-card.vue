<template>
  <view class="card">
    <view class="header">
      <image class="avatar" :src="dreamer.avatarUrl" background-size="cover" />
      <view class="info">
        <view class="name">{{dreamer.nickName}}</view>
        <view class="date">{{createdTime}} {{location.name}}</view>
      </view>
    </view>
    <view class="content">
      <view
        v-for="(item, index) in paragraphs"
        :key="index"
        class="paragraph"
      >
        {{item}}
      </view>
    </view>
    <view class="footer">
      <view class="action" @click="toggleThumbup">
        <image
          class="action-icon"
          :src="thumbupped ? '/static/icons/baseline-thumb_up-24px.svg' : '/static/icons/outline-thumb_up-24px.svg'"
        />
        <view>{{thumbups || 'Thumb Up'}}</view>
      </view>
      <view class="action" @click="toggleStar">
        <image
          class="action-icon"
          :src="starred ? '/static/icons/baseline-favorite-24px.svg' : '/static/icons/outline-favorite_border-24px.svg'"
        />
        <view>{{stars || 'Like'}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { formatTime } from '@/utils';
import request from '@/utils/request';

export default {
  props: {
    id: String,
    text: String,
    images: [String],
    location: Object,
    public: Boolean,
    dreamer: Object,
    createdAt: String,
    stars: Number,
    starred: Boolean,
    thumbups: Number,
    thumbupped: Boolean,
  },

  computed: {
    createdTime() {
      return formatTime(this.createdAt);
    },

    paragraphs() {
      return this.text.split('\n');
    },
  },

  methods: {
    toggleThumbup() {
      const method = this.thumbupped ? 'delete' : 'put';
      request[method](`/yume/thumbupped/${this.id}`).then((res) => {
        Object.assign(this, res);
      });
    },
    toggleStar() {
      const method = this.starred ? 'delete' : 'put';
      request[method](`/yume/starred/${this.id}`).then((res) => {
        Object.assign(this, res);
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  margin-top: 20rpx;
  background: #fff;
}
.header {
  display: flex;
  align-items: center;
  padding: 30rpx 30rpx 10rpx;
}
.avatar {
  flex: none;
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  margin-right: 30rpx;
}
.name {
  font-size: 30rpx;
}
.date {
  color: #929292;
  font-size: 20rpx;
}
.content {
  padding: 0 20rpx 20rpx;
  font-size: 32rpx;
}
.paragraph:not(:last-child) {
  display: inline-block;
  word-break: break-all;
  margin-bottom: 10rpx;
}
.footer {
  display: flex;
  justify-content: space-around;
  height: 70rpx;
  border-top: 1rpx solid #e6e6e6;
}
.action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 30rpx;
}
.action-icon {
  width: 40rpx;
  height: 40rpx;
  opacity: .5;
  margin-right: 10rpx;
}
</style>
