// borrowed from tsx implementation:
// https://github.com/esbuild-kit/tsx

const ignoreWarnings = new Set([
  '--experimental-loader is an experimental feature. This feature could change at any time',
  'Custom ESM Loaders is an experimental feature. This feature could change at any time',
  'Custom ESM Loaders is an experimental feature and might change at any time',
  'VM Modules is an experimental feature and might change at any time',
  'VM Modules is an experimental feature. This feature could change at any time',
])

const { emit } = process

process.emit = function (event, warning) {
  if (event === 'warning' && ignoreWarnings.has(warning.message)) {
    return
  }

  // eslint-disable-next-line prefer-rest-params
  return Reflect.apply(emit, this, arguments)
}
