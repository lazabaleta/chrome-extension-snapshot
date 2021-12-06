const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: { action: './src/action/snapshotViewer.js', background: './src/background/background.js' },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }], // do not forget to change/install your own TS loader
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ template: 'src/action/snapshotViewer.html' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/manifest.json' },
        { from: './src/icons/camera-retro-16-16.png' },
        { from: './src/icons/camera-retro-32-32.png' },
        { from: './src/icons/camera-retro-48-48.png' },
        { from: './src/icons/camera-retro-128-128.png' }
      ],
    }),
  ],
  output: { filename: '[name].js', path: path.resolve(__dirname, 'dist') },
};