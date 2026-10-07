'use strict'

const path = require('node:path')

module.exports = {
  entry: { success: './src/index.js', failPlugin: './src/fail-plugin-version.js' },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      type: 'commonjs2'
    }
  }
}
