const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    commands: './src/commands/commands.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'commands.html',
      template: './src/commands/commands.html',
      chunks: ['commands']
    })
  ]
};
