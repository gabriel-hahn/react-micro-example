const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        }
      }
    }],
  },
  plugins: [
    new HtmlWebPackPlugin({
        hash: true,
        filename: 'index.html',
        template: './public/index.html'
    }),
  ],
};
