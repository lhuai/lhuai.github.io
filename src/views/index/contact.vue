<template>
  <section class="section contact">
    <title-name title="联系我" detail="对我有兴趣可以发邮件联系哦"></title-name>
    <div class="content">
      <div class="email">
        <h3 class="wow swing">很期待您的来信</h3>
        <el-form
          :model="form"
          :rules="rules"
          ref="form"
          label-width="60px"
          class="contact-form wow bounceInUp"
        >
          <el-form-item
            prop="name"
            label="姓名"
          >
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item
            prop="email"
            label="邮箱"
          >
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item
            prop="content"
            label="内容"
          >
            <el-input type="textarea" :rows="6" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="middle" @click="submitForm">提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="img wow fadeInRight">
        <img src="../../assets/image/home/contact.jpg" alt="">
      </div>
    </div>
  </section>
</template>
<script>
import titleName from './component/title';
import {senEmail} from '../../server/api';
import wow from './mixins/wow'
export default {
  name: 'contact',
  mixins: [wow],
  components: { titleName },
  data() {
    return {
      form: {},
      rules: {
        name: [{
          required: true, message: '请输入您的姓名'
        }],
        email: [{
          required: true, message: '请输入您的邮箱'
        }],
        content: [{
          required: true, message: '请输入你想对我说的话'
        }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          this.$message.warning('请完善信息哦');
          return;
        }
        senEmail(this.form).then(() => {
          this.$message.success('邮件已发送，感谢您的来信');
          this.$refs['form'].resetFields()
        })
      })
    }
  }
};
</script>
<style lang="less" scoped>
.contact {
  background-color: #f5f8fd;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
.email {
  width: 50%;
  padding: 30px;
  box-shadow: 5px 5px 5px #ccc;
  background: url('../../assets/image/home/comcact-bg.jpg') no-repeat right top;
  background-color: #fff; 
  box-sizing: border-box;
  h3 {
    padding-bottom: 20px;
  }
  .contact-form {
    width: 70%;
    border-radius: 3px;
  }
}
.img {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  img {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
