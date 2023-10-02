const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tada!',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      // Specify the paths to the Font Awesome JS files
      patterns: [
        {
          from: './node_modules/@fortawesome/fontawesome-free/js/solid.js',
          to: 'solid.js'
        },
        {
          from: './node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
          to: 'fontawesome.js'
        }
      ]
    })
  ],
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
