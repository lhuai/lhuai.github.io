const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/base': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/base': ''
        }
      }
    }
  },
  // chainWebpack: config => {
  //   config.resolve.alias.set('@', resolve('src')),
  chainWebpack: config => {
    // 兼容IE浏览器
    config
      .entry('index')
      .add('babel-polyfill')
      .end();

    // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'));

    // [针对依赖包做兼容编译](https://segmentfault.com/a/1190000019525892?utm_source=tag-newest)
    // .set('querystring', 'querystring-browser');

    // [栈溢出问题](https://github.com/vuejs/vue-cli/issues/2463)
    config.plugins
      .delete('preload-index')
      .delete('prefetch-index');
  }
}