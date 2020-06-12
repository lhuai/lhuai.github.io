/**
 * wow引用
 * */
import {WOW} from 'wowjs';
const mixin = {
  mounted() {
    this.$nextTick(() => {
      new WOW({live: false}).init()
    })
  }
};

export default mixin;
