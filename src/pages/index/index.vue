<template>
  <view class="container">
    <yume-card
      v-for="yume in list"
      v-bind:key="yume._id"
      v-bind="yume"
      :id="yume._id"
    />
    <loading-footer :loading="isLoading" />
  </view>
</template>

<script>
import YumeCard from '@/components/yume-card';
import LoadingFooter from '@/components/loading-footer';
import scrollMixin from '@/mixins/scroll';

export default {
  mixins: [scrollMixin({ endpoint: '/yumes' })],

  components: {
    YumeCard,
    LoadingFooter,
  },

  onShow() {
    this.requestData(true);
  },
};
</script>
