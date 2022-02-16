const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prodConfig = {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
  devtool: "nosources-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
};
module.exports = merge(common, prodConfig);
