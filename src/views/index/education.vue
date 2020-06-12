<template>
  <section class="section education">
    <title-name
      title="教育和工作经历"
      detail="简单说说我的教育经历和工作经历"
      align="center"></title-name>
      <div class="content">
        <div class="left">
          <p class="type wow slideInDown">教育经历</p>
          <timeline :list="educationList"></timeline>
        </div>
        <div class="right">
          <p data-wow-delay="1s" class="type wow slideInDown">工作经历</p>
          <timeline data-wow-delay="1s" class="wow slideInUp" :list="companyList"></timeline>
        </div>
      </div>
  </section>
</template>
<script>
import titleName from './component/title'
import timeline from './component/timeline'
import wow from './mixins/wow';
export default {
  name: 'education',
  components: {titleName, timeline},
  mixins: [wow],
  data() {
    return {
      educationList: [{
        time: '2012-09 ~ 2016-06',
        name: '广东海洋大学',
        detail: '计算机科学与技术',
        remark: '您仅需花上10分钟便可以完成一个H5响应式网站，这就是起飞页自助建站的神奇之处。'
      }, {
        time: '2009-09 ~ 2012-06',
        name: '广东省英德市英德中学',
        detail: '理科',
        remark: '您仅需花上10分钟便可以完成一个H5响应式网站，这就是起飞页自助建站的神奇之处。'
      }],
      companyList: [{
        time: '2018-04 ~ 至今',
        name: '广州明动软件股份有限公司',
        detail: 'web前端开发工程师',
        remark: '您仅需花上10分钟便可以完成一个H5响应式网站，这就是起飞页自助建站的神奇之处。'
      }, {
        time: '2016-01 ~ 2018-04',
        name: '广州卓为信息技术有限公司',
        detail: 'web前端开发工程师',
        remark: '您仅需花上10分钟便可以完成一个H5响应式网站，这就是起飞页自助建站的神奇之处。'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
.education {
  background-color: #f5f8fd;
}
.content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  .left, .right {
    width: 48%;
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
}
</style>