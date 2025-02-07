/**
 * Created by administrato on 2017/6/16.
 */
var path = require('path');
module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'js'),
        use: ["babel-loader"]
      },
    ],
  },
  devServer: {
    contentBase: "./",
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};