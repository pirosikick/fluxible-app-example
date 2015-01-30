var webpack = require('webpack');

module.exports = {
  entry: {
    client: './lib/client.js'
  },
  output: {
    path: __dirname + '/build/scripts',
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      to5Runtime: "imports?global=>{}!exports?global.to5Runtime!6to5/runtime"
    })
  ]
}
