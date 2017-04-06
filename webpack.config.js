const {resolve} = require('path')
module.exports = {
  context: resolve(__dirname, './src'),
  entry: './client.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {presets: ['es2015', 'react', 'stage-0']}
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  }
}
