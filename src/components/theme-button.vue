<template>
  <button
    class="button"
    :class="{
      primary: isPrimary,
      default: isDefault,
      error: isError,
      outline: outline,
    }"
    :style="{ margin }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['primary', 'error', 'default'].includes(value);
      },
    },
    text: String,
    disabled: Boolean,
    outline: Boolean,
    margin: String,
  },

  computed: {
    isPrimary() {
      return this.type === 'primary';
    },
    isDefault() {
      return this.type === 'default';
    },
    isError() {
      return this.type === 'error';
    },
  },

  methods: {
  },
};
</script>

<style scoped>
.button {
  width: 690rpx;
  height: 100rpx;
  line-height: 100rpx;
  margin: 0 auto;
  border-radius: 10rpx;
  letter-spacing: .1em;
}
.outline {
  background: #fff;
  border: 2rpx solid #000;
}
.primary {
  background: #09bb07;
  color: #fff;
}
.error {
  background: #e94f4f;
  color: #fff;
}
.primary.outline {
  background: #fff;
  color: #09bb07;
  border-color: #09bb07;
}
.error.outline {
  background: #fff;
  color: #e94f4f;
  border-color: #e94f4f;
}
</style>
