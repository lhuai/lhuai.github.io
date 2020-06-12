<template>
  <div class="timeline">
    <div class="item wow fadeInUp" v-for="(item, i) in list" :key="i">
      <span class="item-left">{{ item.time }}</span>
      <div class="item-right">
        <div class="name">
          <strong>{{ item.name }}</strong>
          <p>{{ item.detail }}</p>
        </div>
        <div class="item-detail">
          {{ item.remark }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wow from '../mixins/wow'
export default {
  name: 'timeline',
  mixins: [wow],
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="less" scoped>
.timeline {
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px 40px;
  border-radius: 5px;
}
.item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
  .item-left {
    color: rgb(254, 189, 1);
    width: 30%;
    text-align: center;
    padding-right: 6px
  }
  .item-right {
    padding-left: 40px;
    background: url('../../../assets/image/home/timeline.png') no-repeat left top;
    .name {
      p {
        font-size: 14px;
        color: #888;
      }
    }
    .item-detail {
      padding-top: 14px;
      font-size: 14px;
      color: #888;
      line-height: 22px;
    }
  }
}
</style>
