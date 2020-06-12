<template>
  <section class="section skills">
    <title-name
      title="专业技能"
      detail="简单说说我的专业技能"></title-name>
      <div class="content">
        <div class="left">
          <div class="item wow fadeIn"  v-for="(item, i) in list" :key="i">
            <span class="name">{{item.name}}：</span>
            <el-progress
              class="level"
              color="#FFB6C1"
              :text-inside="true"
              :stroke-width="20"
              :percentage="item.level"></el-progress>
          </div>
        </div>
        <div class="right">
          <h3 data-wow-delay="1s" class="wow flipInX">技能介绍</h3>
          <ul>
            <li data-wow-delay="1s" class="wow bounceInRight" v-for="(item, i) in skills" :key="i" v-text="item"></li>
          </ul>
        </div>
      </div>
  </section>
</template>
<script>
import titleName from './component/title'
import timeline from './component/timeline'
import wow from './mixins/wow'
export default {
  name: 'skills',
  mixins: [wow],
  components: {titleName},
  data() {
    return {
      list: [{
        name: 'HTML、CSS',
        level: 90
      }, {
        name: 'HTML5、CSS3',
        level: 80
      }, {
        name: 'javaScript、vue',
        level: 80
      }, {
        name: 'elementui、layerui、vant',
        level: 80
      }, {
        name: 'node',
        level: 60
      }, {
        name: 'webpack、git',
        level: 80
      }],
      skills: [
        '熟练掌握html、css、html5、css3、JavaScript等前端基本技术；',
        '熟练掌握前端主流框架 vue、vue-router、vuex、es6、jquery、promise、async/await等',
        '熟悉nodejs运行环境，npm包管理器，axious、ajax请求等；',
        '熟练element-ui、vant、layui、easyui、less、sass等ui框架及预编译',
        '掌握git版本管理工具、webpack、gulp和grunt前端自动化工具；',
        '掌握 mongodb、redis 数据库基本操作；'
      ]
    }
  },
  methods: {
    format(name) {
      return name
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  .left {
    width: 50%;
    box-sizing: border-box;
    padding-right: 26px;
    .item {
      padding: 20px 0;
      display: flex;
      flex-wrap: wrap;
      .name {
        width: 220px;
        text-align: right;
        color: #888;
      }
      .level {
        width: calc(100% - 220px);
      }
    }
  }
  .right {
    width: 50%;
    border-left: 1px solid #ededed;
    padding-left: 20px;
    box-sizing: border-box;
    h3 {
      font-size: 18px;
      padding-bottom: 14px;
    }
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