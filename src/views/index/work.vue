<template>
  <section class="section work">
    <title-name
      align="center"
      title="项目经验"
      detail="简单说说我的项目经验"></title-name>
    <el-timeline>
      <el-timeline-item
        class="wow fadeInUp"
        v-for="(item, i) in list"
        :key='i'
        size="large"
        :timestamp="`${item.startTime} - ${item.endTime}`"
        placement="top">
        <div class="proj-item">
          <div>
            <span class="tag">{{item.type}}</span>
            <a class="project-name" :href="item.url" v-if="item.type==='网站'">{{item.name}}</a>
            <span v-else class="project-name">{{item.name}}</span>
            <span class="role">{{item.role}}</span>
          </div>
          <p class="item"><span class="key">项目描述：</span><span class="value">{{item.remark}}</span></p>
          <p class="item"><span class="key">核心技术：</span><span class="value keyword">{{item.skills}}</span></p>
          <div class="item duty">
            <span class="key">责任描述：</span>
            <ul class="value">
              <li v-for="(s, si) in item.duty" :key="`${i}-${si}`">{{s}}</li>
            </ul>
          </div>
        </div>
      </el-timeline-item>
    </el-timeline>
  </section>
</template>
<script>
import titleName from './component/title'
import wow from './mixins/wow'
export default {
  name: 'work',
  mixins: [wow],
  components: {titleName},
  data() {
    return {
      list: [{
        name: '绩效考核系统',
        startTime: '2018.09',
        endTime: '至今',
        role: '前端开发组长',
        url: 'https://jx.bbstxq.liuzhou.gov.cn:8081/kpi-base-web/minstone',
        type: '网站',
        skills: 'vue、vuex、vue-router、axious、elementui、es6、async await',
        duty: [
          '1. 重构， 该系统原先是一个前后端不分离的产品，采用传统的jsp + jqgrid + layerui 技术，为了方便前	   后端管理及提高系统的性能，代码的迭代性，采用 vue + vuex + vue-router + axious +elementui技术进行重构；',
          '2. 在重构好的产品的基础上开发“北部生态新区绩效管理信息平台”、“三江县督查和绩效考评管理信息平台”项目；',
          '3. 担任绩效项目小组长，负责项目工作计划安排，开发公共组件，负责部分模块开发；'
        ],
        remark: '绩效评估系统以“职能考核、工作考核”的为主要考核目标，以绩效考核方案为主线，以数据报送为核心，突出绩效目标实施和过程监控，实现政府绩效计划制订、绩效实施、结果应用的全过程信息化管理。'
      }, {
        name: '北部生态新区绩效管理信息平台',
        startTime: '2019.10',
        endTime: '2019.12',
        role: '前端开发组长',
        url: '北部生态新区绩效管理信息平台',
        type: '小程序',
        skills: '小程序原生组件及api、vant weapp、es6、async await',
        duty: [
          '根据视觉、原型、接口文档完成界面开发及交互效果，根据用户权限控制界面展示内容。'
        ],
        remark: '绩效评估系统以“职能考核、工作考核”的为主要考核目标，以绩效考核方案为主线，以数据报送为		核心，突出绩效目标实施和过程监控，实现政府绩效计划制订、绩效实施、结果应用的全过程信息化管理。'
      }, {
        name: '北海绩效',
        startTime: '2018.11',
        endTime: '2019.01',
        role: '前端开发',
        url: '北海绩效',
        type: '公众号',
        skills: 'vue、vue-router、vuex、webpack、axious、es6、async await',
        duty: [
          '根据视觉、原型、接口文档完成界面开发及交互效果。'
        ],
        remark: '绩效评估系统以“职能考核、工作考核”的为主要考核目标，以绩效考核方案为主线，以数据报送为		核心，突出绩效目标实施和过程监控，实现政府绩效计划制订、绩效实施、结果应用的全过程信息化管理。'
      }, {
        name: '广发证券-OTC官网',
        startTime: '2016.01',
        endTime: '2018.04',
        role: '前端开发',
        url: 'https://otc.gf.com.cn',
        type: '网站',
        skills: 'Angularjs、nodejs、gulp、git、promise、nginx、mongodb、redis',
        duty: [
          '1.  利用div+css盒子模型开发网站，解决浏览器兼容性；',
          '2.  利用Angularjs获取并展示数据，利用promise进行异步请求；',
          '3.  利用nodejs的npm进行模块的管理，利用q、async、express开发项目；',
          '4.  利用gulp自动化工具打板，使用git进行代码的版本管理；',
          '5.  负责网站的升级；',
          '6.  配合项目经理确定开发周期和计划。'
        ],
        remark: '一个为机构、客户提供个性化理财的综合平台，包括产品的展示、查询、购买等'
      }, {
        name: '广发证券柜台交易市场',
        startTime: '2016.07',
        endTime: '2016.10',
        role: '前端开发',
        url: '广发证券柜台交易市场',
        type: '公众号',
        skills: 'Vue、jQuery、jQuery Mobile、nodejs、gulp、git、promise、nginx',
        duty: [
          '1.  利用div+css盒子模型开发网站，解决浏览器兼容性；',
          '2.  利用Vuejs获取并展示数据，同时利用promise进行异步请求；',
          '3.  利用jQuery Mobile对页面进行布局；',
          '4.  利用gulp自动化工具打板，使用git进行代码的版本管理；',
          '5.  利用nodejs的npm进行模块的管理，利用q、async、express开发项目',
          '6.  配合项目经理确定开发周期和计划'
        ],
        remark: '理财产品的管理，包括产品的展示、查询、消息推送等'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-timeline-item__timestamp.is-top {
  font-size: 24px;
}
.work {
  background-color: #f5f8fd;
}
.proj-item {
  border: 1px solid #DB7093;
  border-radius: 10px;
  padding: 20px;
  .tag {
    font-size: 14px;
    display: inline-block;
    width: 60px;
    text-align: center;
    border: 1px solid #DB7093;
    color: #DB7093;
    border-radius: 6px;
  }
  .project-name {
    padding-left: 6px;
    color: #333;
    font-weight: 600;
  }
  a.project-name {
    &:hover {
      color: #DB7093;
    }
  }
  .role {
    float: right;
    color: skyblue;
    font-size: 14px;
  }
  .item {
    padding-top: 14px;
    display: flex;
    flex-wrap: wrap;
    .key {
      width: 80px;
      color:#999;
      line-height: 28px;
    }
    .value {
      width: calc(100% - 80px);
      line-height: 28px;
      color: #666;
      &.keyword {
        color: #FFB6C1;
      }
    }
  }
}
</style>
