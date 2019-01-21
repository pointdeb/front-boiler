const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const assetPath = './dist';
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
  entry: ['./src/style.scss'],
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: dev ? `http://localhost:8080` : assetPath
  },
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'cheap-module-eval-source-map' : false,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    overlay: true,
    clientLogLevel: 'warning'
    // host: 0.0.0.0
  },
  resolve:{
    extensions: ['.js', '.jsx', '.css', '.scss', '.json', '.xml', '.svg', '.html'],
    alias: {
      '~': path.resolve('node_modules') + '/'
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !dev,
                sourceMap: dev
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: dev
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: dev
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html'
    })
  ]
}

module.exports = config