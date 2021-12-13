# @vue3-oop/jsx-hot-loader

Tweak Vue components written in JSX in real time.

## Usage

```js
// webpack.config.js
module.exports = {
  // ...
  module: {
    loaders: [
      // Enable HMR for JSX.
      {
        test: /\.jsx$/,
        use: ["babel-loader", "@vue3-oop/jsx-hot-loader"],
      },
      // Remember to use babel on the rest of the JS files.
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
};
```
