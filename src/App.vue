<script>
import store from './store';

export default {
  created() {
    store.dispatch('getUserInfo');
  },
};
</script>

<style>
page, view, image, textarea{
  box-sizing: border-box;
}
button::after {
  border: none;
}
page {
  background: #ebebeb;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ebebeb;
}
</style>
