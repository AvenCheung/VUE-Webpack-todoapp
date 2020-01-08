const autoprefixer = require('autoprefixer')
//postcss是对css编译完成后进行优化，用到一些组件进行优化
module.exports = {
  plugins: [
    autoprefixer()
    //自动去处理css属性需加浏览器前缀的属性，例如-webkit-, -ms- 或 -moz- 前的数字为支持该前缀属性
  ]
}