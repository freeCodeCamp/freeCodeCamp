import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/bin/acorn.js',
  dest: 'bin/acorn',
  format: 'cjs',
  banner: '#!/usr/bin/env node',
  external: [ 'fs', 'path', 'acorn' ],
  paths: {
    acorn: '../dist/acorn.js'
  },
  plugins: [
    buble()
  ]
}
