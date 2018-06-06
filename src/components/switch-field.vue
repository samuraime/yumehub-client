<template>
  <view class="switch-field">
    <view class="field-inner">
      <div class="field-left">
        <image class="field-icon" :src="icon" />
        <view class="field-label">{{label}}</view>
      </div>
      <switch :checked="value" @change="$emit('input', $event.target.value)" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    icon: String,
    label: String,
    value: Boolean,
  },
};
</script>

<style scoped>
.switch-field {
  width: 100vw;
  padding: 0rpx 30rpx;
  background: #fff;
}
.field-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  width: 100%;
  height: 110rpx;
  line-height: 110rpx;
}
.field-left {
  display: flex;
  align-items: center;
  box-sizing: content-box;
}
.switch-field:not(:last-child) .field-inner {
  /*border-bottom: 1rpx solid #e7e7e7;*/
}
.field-icon {
  flex: none;
  width: 60rpx;
  height: 60rpx;
  padding: 5rpx;
  margin-right: 20rpx;
  opacity: .3;
}
.field-text {
  color: #1d1d1d;
}
.field-value {
  color: #1d1d1d;
}
</style>
