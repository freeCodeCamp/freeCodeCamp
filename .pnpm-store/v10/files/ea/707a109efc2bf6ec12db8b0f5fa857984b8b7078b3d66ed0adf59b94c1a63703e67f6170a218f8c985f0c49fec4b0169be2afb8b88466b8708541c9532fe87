'use strict'

import('./named-exports.mjs')
  .catch(err => {
    process.nextTick(() => {
      throw err
    })
  })
