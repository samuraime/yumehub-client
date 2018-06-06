<template>
  <view class="location-field">
    <view class="field-inner">
      <image class="field-icon" src="/static/icons/baseline-place-24px.svg" />
      <view class="field-text" @click="handleLocation">{{value.name || 'Location'}}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    label: String,
    value: Boolean,
  },

  methods: {
    async handleLocation() {
      const { name, latitude, longitude } = await wx.chooseLocation();
      this.$emit('input', {
        name,
        latitude,
        longitude,
      });
    },
  },
};
</script>

<style scoped>
.location-field {
  width: 100vw;
  padding: 0rpx 30rpx;
  background: #fff;
  color: #1d1d1d;
}
.field-inner {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: content-box;
  width: 100%;
  height: 110rpx;
  line-height: 110rpx;
}
.field-icon {
  flex: none;
  width: 60rpx;
  height: 60rpx;
  margin-right: 20rpx;
  opacity: .3;
}
.field-text {
  width: 100%;
}
</style>
