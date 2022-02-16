const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, "../dist"),
    hot: true,
    historyApiFallback: true,
  },
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /.(css|sass|scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
module.exports = merge(common, devConfig);
