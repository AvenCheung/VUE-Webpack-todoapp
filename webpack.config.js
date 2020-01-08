const path = require('path')
//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的(看下方注释)
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  //入口
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    // publicPath:''
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      //css预处理器 styl
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true,
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1021,
            name: '[name]-aaa.[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin(),
    new VueLoaderPlugin()
  ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    //提示错误与警告功能，
    overlay: {
      errors: true
    },
    hot:true
    //这个功能是当我们运行devServer的时候，会自动帮我们打开浏览器
    // open:true
  },
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
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