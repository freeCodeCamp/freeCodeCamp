'use strict'

module.exports = {
  name: '__fmw_internal_strategy_merged_tree_http_method__',
  storage: function () {
    const handlers = new Map()
    return {
      get: (type) => { return handlers.get(type) || null },
      set: (type, store) => { handlers.set(type, store) }
    }
  },
  /* c8 ignore next 1 */
  deriveConstraint: (req) => req.method,
  mustMatchWhenDerived: true
}
