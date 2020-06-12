<template>
  <div class="wow fadeInUp title" :style="`text-align:${align}`">
    <p>{{title}}</p>
    <div class="tips">{{detail}}</div>
  </div>
</template>
<script>
import wow from '../mixins/wow';
export default {
  name: 'indexTitle',
  mixins: [wow],
  props: {
    title: {
      default: '标题'
    },
    detail: {
      default: ''
    },
    align: {
      default: 'left'
    }
  },
  mounted() {
    this.$nextTrick
  }
}
</script>
<style lang="less" scoped>
.title {
  padding-bottom:30px;
  p {
    font-size: 44px;
    color: #000;
    line-height: 44px;
    border-bottom: 5px solid #f7eccb;
    display: inline-block;
    margin: 0;
  }
  .tips {
    line-height: 60px;
    color: #666;
  }
}
</style>