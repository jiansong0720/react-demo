const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HotWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve("src")],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "images/[name].[ext]" },
          },
        ],
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "fonts/[name].[ext]" },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve("dist"),
    hot: true,
    publicPath: "/",
    historyApiFallback: true,
    disableHostCheck: true,
    compress: true,
    stats: { colors: true },
    host: "0.0.0.0",
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true
    })
  ]
}
