var webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.IgnorePlugin(/vertx/)
  ]
}