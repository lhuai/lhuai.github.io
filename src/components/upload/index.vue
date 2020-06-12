<template>
  <div class="upload">
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :action="uploadUrl"
      :on-success="handleAvatarSuccess"
      :data="{username: '888888'}"
      :auto-upload="true">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: 'profilephoto',
  data() {
    return {
      // 上传地址
      uploadUrl: "/base/upload/pict",
      downloadUrl: '/base/upload/getfile'
    };
  },
  methods: {
    ...mapActions(['setUserInfo']),
    handleAvatarSuccess(res, file) {
      const {filename: profilephoto} = res.data;
      this.setUserInfo({...this.userInfo, profilephoto});
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    }),
    imageUrl() {
      const {profilephoto} = this.userInfo || {};
      return profilephoto ? `${this.downloadUrl}?id=${profilephoto}` : ''
    }
  }
}
</script>
<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dotted #ccc;
  border-radius: 5px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
  border: 1px dotted #ccc;
  border-radius: 50%;
}
</style>