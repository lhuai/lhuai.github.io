<template>
  <section class="section introduce">
    <title-name
      title="我的简介"
      detail="我的基本信息和一些自我介绍"></title-name>
    <div class="content">
      <div class="left wow fadeInLeft">
        <img src="../../assets/image/home/introduce.jpg" alt="">
      </div>
      <div data-wow-delay="1s" class="wow fadeInUp right">
        <h3>基本信息和自我介绍</h3>
        <strong class="strong">
          我是一名
          <span>web前端开发</span>
          工程师，目前居住在
          <span>广东广州</span>
        </strong>
        <div class="detail">
          商务英语专业，现在一家出国留学咨询机构从事翻译以及留学申请等工作。英语专业4级、大学英语6级以上，能够熟练运用英语进行听说读写。日语三级以上，能用日语进行简单的日常对话及阅读。在校期间主修了商务英语、还选修了企业管理。曾多次获得学校奖学金，勤奋踏实的我愿用所学与公司共同发展！
        </div>
        <div class="item-content">
          <div class="item">
            <span class="key">出生日期：</span>
            <span class="value">2008/11/05</span>
          </div>
          <div class="item">
            <span class="key">英文名：</span>
            <span class="value">ANLY LUO</span>
          </div>
          <div class="item">
            <span class="key">名族：</span>
            <span class="value">汉族</span>
          </div>
          <div class="item">
            <span class="key">手机：</span>
            <span class="value">15817188553</span>
          </div>
          <div class="item">
            <span class="key">毕业院校：</span>
            <span class="value">广东海洋大学</span>
          </div>
          <div class="item">
            <span class="key">邮箱：</span>
            <span class="value">anlyluo@email.com</span>
          </div>
          <div class="item">
            <span class="key">籍贯：</span>
            <span class="value">中国广东</span>
          </div>
          <div class="item">
            <span class="key">现居城市：</span>
            <span class="value">中国广东广州</span>
          </div>
        </div>
        <div class="contat"></div>
      </div>
    </div>
  </section>
</template>
<script>
import titleName from './component/title';
import wow from './mixins/wow';
export default {
  name: 'introduce',
  mixins: [wow],
  components: {titleName}
}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  .left {
    width: 30%;
    img {
      width: 90%;
    }
  }
  .right {
    width: 70%;
    padding-left: 40px;
    box-sizing: border-box;
    h3 {
      margin-top: 0;
    }
    .strong {
      font-size: 15px;
      color: #000;
      span {
        color: rgb(254, 189, 1);
      }
    }
    .detail {
      line-height: 28px;
      font-size:15px;
      color: rgb(130, 130, 130);
      font-family: "微软雅黑",Helvetica,Arial,Verdana,sans-serif;
      padding-top: 30px;
      padding-bottom:20px;
    }
  }
}
.item-content {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 48%;
    box-sizing: border-box;
    border-bottom: 1px solid #ededed;
    padding: 14px 0;
    &:nth-child(odd) {
      margin-right: 20px;
    }
    .key {
      color:#000;
      font-weight: 600;
      font-family: f93afb6a406b3aafa0341099ab3304c43;
    }
    .value {
      color: #828282;
    }
  }
}
</style>