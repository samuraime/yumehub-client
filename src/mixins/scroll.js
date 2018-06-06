import request from '@/utils/request';

const scroll = ({ endpoint, perPage = 10 }) => ({
  data: {
    isLoading: false,
    isEnd: false,
    list: [],
    page: 0,
    perPage,
  },

  methods: {
    requestData(refresh = false) {
      if ((this.isLoading || this.isEnd) && !refresh) {
        return;
      }
      this.isLoading = true;
      const nextPage = refresh ? 1 : this.page + 1;
      request.get(endpoint, {
        page: nextPage,
        perPage,
      }).then((list) => {
        const isEnd = list.length < perPage;
        Object.assign(this, {
          list: (refresh ? [] : this.list).concat(list),
          isEnd,
          page: nextPage,
        });
      }).catch((error) => {
        wx.showToast({
          title: error.message,
        });
      }).finally(() => {
        this.isLoading = false;
        wx.stopPullDownRefresh();
      });
    },
  },

  onPullDownRefresh() {
    this.requestData(true);
  },

  onReachBottom() {
    this.requestData();
  },
});

export default scroll;
