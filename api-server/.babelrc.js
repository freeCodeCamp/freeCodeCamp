module.exports = {
  plugins: [require.resolve('babel-plugin-transform-function-bind')],
  presets: [
    [
      require.resolve('@babel/preset-env'), {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
}