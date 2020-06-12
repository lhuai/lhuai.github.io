<template>
  <section class="section honour">
    <title-name
      title="自我介绍与荣誉"
      detail="简单说说我的性格和获取到的荣誉"></title-name>
      <div class="content">
        <div class="left">
          <p class="type wow rubberBand">获奖荣誉</p>
          <timeline :list="honourList"></timeline>
        </div>
        <div class="right">
          <p class="type wow rubberBand">自我评价</p>
          <div class="charator">
            <ul>
              <li class="wow pulse" v-for="(item, i) in characterList" :key="i">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
import titleName from './component/title'
import timeline from './component/timeline'
import wow from './mixins/wow'
export default {
  name: 'honour',
  mixins: [wow],
  components: {titleName, timeline},
  data() {
    return {
      honourList: [{
        time: '2019.01',
        name: '优秀员工',
        detail: '广州明动股份有限公司'
      }, {
        time: '2014.4',
        name: '“海大杯”乒乓球锦标赛女子团体第二名',
        detail: '广东海洋大学'
      }, {
        time: '2013.09',
        name: '国家励志奖学金',
        detail: '广东海洋大学'
      }],
      characterList: [{
        name: '有较强的逻辑分析和独立解决问题的能力',
        detail: 'web前端开发工程师'
      }, {
        name: '为人踏实认真，非常热爱WEB前端开发，爱编程',
        detail: ''
      }, {
        name: '工作积极热情，能够在很短时间内融入一个新的环境',
        detail: ''
      }, {
        name: '自学能力强，敢于面对和克服困难，能快速学习使用新的知识',
        detail: 'web前端开发工程师'
      }, {
        name: '善于团队合作，有责任心，乐观积极向上，抗压能力强，时间观念强，项目经验丰富',
        detail: ''
      }]
    }
  }
}
</script>
<style lang="less" scoped>
.honour {
  background: url('../../assets/image/home/honour-bg.jpg') no-repeat center center / cover;
}
.content {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-top: 30px;
  position: relative;
  align-items: flex-start;
  height: 100%;
  .left, .right {
    width: 48%;
    height:100;
    box-sizing: border-box;
    .type {
      color: #000;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      display: inline-block;
      margin: 0 auto;
      padding-bottom: 5px;
      border-bottom: 1px solid #febd01;
    }
  }
  .left {
    margin-right: 30px;
  }
  .charator {
    margin-top: 30px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px 40px;
    border-radius: 5px;
    ul {
      li {
        padding: 14px;
        color: #888;
        &:before {
          display: inline-block;
          color: yellow;
          width: 16px;
          height: 16px;
          margin-right: 14px;
          background-color: #FFB6C1;
          border-radius: 50%;
          content: '';
          box-shadow: 5px 5px 5px #888;
        }
        &:hover {
          &::before {
            background-color: #888;
            box-shadow: 5px 5px 5px #888;
          }
        }
      }
    }
  }
}
</style>