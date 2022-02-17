const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: "",
    assetModuleFilename: "images/[hash][ext][query]",
    // assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new Dotenv({
      defaults: false,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
