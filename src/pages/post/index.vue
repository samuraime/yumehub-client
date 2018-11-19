<template>
  <view class="container">
    <textarea
      class="textarea-field"
      maxlength="-1"
      placeholder="Write something..."
      v-model="text"
    />
    <location-field v-model="location" />
    <view class="options">
      <switch-field
        icon="/static/icons/baseline-public-24px.svg"
        label="Public"
        v-model="public"
      />
    </view>
    <theme-button margin="100rpx 0 0" type="primary" @click.prevent="handlePost">POST</theme-button>
  </view>
</template>

<script>
import store from '@/store';
import request from '@/utils/request';
import LocationField from '@/components/location-field';
import SwitchField from '@/components/switch-field';
import ThemeButton from '@/components/theme-button';

export default {
  components: {
    LocationField,
    SwitchField,
    ThemeButton,
  },

  data() {
    return {
      text: '',
      images: [],
      location: {
        name: '',
        latitude: null,
        longitude: null,
      },
      public: true,
    };
  },

  methods: {
    handlePost() {
      wx.showLoading();
      request.post('/yumes', this.getForm()).then(() => {
        wx.switchTab({
          url: '/pages/index/main',
        });
        store.commit('setDraft', null);
        Object.assign(this, {
          text: '',
          images: [],
          location: {
            name: '',
            latitude: null,
            longitude: null,
          },
          public: true,
        });
      }).catch((error) => {
        wx.showToast({
          title: error.message,
        });
      }).finally(() => {
        wx.hideLoading();
      });
    },
    getForm() {
      const formKeys = [
        'text',
        'images',
        'location',
        'public',
      ];
      return formKeys.reduce((form, key) => ({
        ...form,
        [key]: this[key],
      }), {});
    },
  },

  updated() {
    store.commit('setDraft', this.getForm());
  },
};
</script>

<style scoped>
.textarea-field {
  width: 100vw;
  padding: 20rpx 30rpx;
  background: #fff;
  color: #1d1d1d;
}
.options {
  margin-top: 40rpx;
}
.post-button {
  margin-top: 40rpx;
}
</style>
