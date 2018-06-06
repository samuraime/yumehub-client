<template>
  <view class="list-item">
    <navigator v-if="url" class="item-inner" hover-class="none" :url="url">
      <image class="item-icon" :src="icon" />
      <view class="item-text">{{text}}</view>
    </navigator>
    <view v-else class="item-inner">
      <image class="item-icon" :src="icon" />
      <view class="item-text">{{text}}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String,
    url: String,
  },
};
</script>

<style scoped>
.list-item {
  width: 100vw;
  padding: 0rpx 30rpx;
  background: #fff;
}
.item-inner {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: content-box;
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
}
.list-item:not(:last-child) .item-inner {
  border-bottom: 1rpx solid #e7e7e7;
}
.item-icon {
  flex: none;
  width: 60rpx;
  height: 60rpx;
  padding: 5rpx;
  margin-right: 20rpx;
  opacity: .3;
}
.item-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #1d1d1d;
}
</style>
