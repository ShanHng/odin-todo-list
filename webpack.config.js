const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    model: './src/model.js',
    todoCard: './src/todoCard.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
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
