<template>
  <section class="home">
    <vue-particles
        color="#FFB6C1"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#FFB6C1"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      
        <div class="image animated bounceIn">
          <img class="wow fadeIn photo" src="../../assets/image/home/photo.jpg" alt="">
          <div class="name wow slideInUp">ANLY LUO</div>
        </div>
    
  </section>
</template>
<script>
import wow from './mixins/wow';
export default {
  name: 'home',
  mixins: [wow]
}
</script>
<style lang="less" scoped>
#particles-js {
  width:100%;
  height: 100vh;
  position: absolute;
  background: url('../../assets/image/home/bg.jpg') no-repeat center bottom / cover;
}
.home {
  width:100%;
  height: 100vh;
  position: relative;
}
  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .photo {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    // border-left: 5px solid #fff;
    // border-top: 5px solid #fff;
  }
  .name {
    font-weight: 800;
    font-size: 20px;
    line-height: 60px;
    color: #fff;
  }
</style>