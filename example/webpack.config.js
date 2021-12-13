const path = require("path");

const babelConfig = {
  assumptions: {
    setPublicClassFields: true
  },
  plugins: [
    "@vue/babel-plugin-jsx",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"]
  ],
};

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: babelConfig,
          },
          "vue-jsx-hot-loader",
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  resolveLoader: {
    alias: {
      "vue-jsx-hot-loader": require.resolve("../"),
    },
  },
  devtool: "cheap-module-eval-source-map",
};
