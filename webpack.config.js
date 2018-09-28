const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  context: __dirname,
  mode: 'production',
  entry: [
    resolve(__dirname, './src/index'),
  ],
  output: {
    path: join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
  },
};
