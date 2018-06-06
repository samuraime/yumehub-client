<template>
  <view class="loading-footer">
    <view v-if="loading" class="loading">
      <image class="loading-icon" src="/static/icons/baseline-autorenew-24px.svg" />
    </view>
    <view v-else class="ending">好梦由来最易醒 End</view>
  </view>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
.ending, .loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100rpx;
  font-size: 28rpx;
  color: #a4a9b0;
}
.ending::before, .ending::after {
  content: '';
  display: block;
  width: 150rpx;
  height: 0;
  border-top: 1rpx solid #d0d0d0;
  margin: 0 20rpx;
}
.loading {
  height: 100rpx;
}
.loading-icon {
  width: 60rpx;
  height: 60rpx;
  opacity: .3;
  animation: spin 2s infinite linear;
}
</style>
