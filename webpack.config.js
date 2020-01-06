const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的(看下方注释)
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin')

const config = {
  targer:'web',
  //入口
  entry:path.join(__dirname,'src/index.js'),
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.styl$/,
        use:[
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test:/\.(gif|png|jpg|jpeg|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1021,
              name:'[name]-aaa.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HTMLPlugin()
  ]
}

if(isDev){
  config.devSever = {
    port:8000,
    host:'0.0.0.0',
    overlay:{
      errors:true,
    }
  }
}

module.exports = config



// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// plugins: [
//   new HtmlWebpackPlugin({
//   template: "./index.html",
//   filename: "../views/mobile.html",
//   hash: true,
//   inject: true
//   }),
//   new VueLoaderPlugin()
// ]