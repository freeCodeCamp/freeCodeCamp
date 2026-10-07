'use strict'

const { NullObject } = require('./null-object')
const httpMethodStrategy = require('./strategies/http-method')

class HandlerStorage {
  constructor () {
    this.unconstrainedHandler = null // optimized reference to the handler that will match most of the time
    this.constraints = []
    this.handlers = [] // unoptimized list of handler objects for which the fast matcher function will be compiled
    this.constrainedHandlerStores = null
  }

  // This is the hot path for node handler finding -- change with care!
  getMatchingHandler (derivedConstraints) {
    if (derivedConstraints === undefined) {
      return this.unconstrainedHandler
    }
    return this._getHandlerMatchingConstraints(derivedConstraints)
  }

  addHandler (constrainer, route) {
    const params = route.params
    const constraints = route.opts.constraints || {}

    const handlerObject = {
      params,
      constraints,
      handler: route.handler,
      store: route.store || null,
      _createParamsObject: this._compileCreateParamsObject(params)
    }

    const constraintsNames = Object.keys(constraints)
    if (constraintsNames.length === 0) {
      this.unconstrainedHandler = handlerObject
    }

    for (const constraint of constraintsNames) {
      if (!this.constraints.includes(constraint)) {
        if (constraint === 'version') {
          // always check the version constraint first as it is the most selective
          this.constraints.unshift(constraint)
        } else {
          this.constraints.push(constraint)
        }
      }
    }

    const isMergedTree = constraintsNames.includes(httpMethodStrategy.name)
    if (!isMergedTree && this.handlers.length >= 31) {
      throw new Error('find-my-way supports a maximum of 31 route handlers per node when there are constraints, limit reached')
    }

    this.handlers.push(handlerObject)
    // Sort the most constrained handlers to the front of the list of handlers so they are tested first.
    this.handlers.sort((a, b) => Object.keys(a.constraints).length - Object.keys(b.constraints).length)

    if (!isMergedTree) {
      this._compileGetHandlerMatchingConstraints(constrainer, constraints)
    }
  }

  _compileCreateParamsObject (params) {
    const fnBody = []

    fnBody.push('const fn = function _createParamsObject (paramsArray) {')

    fnBody.push('const params = new NullObject()')
    for (let i = 0; i < params.length; i++) {
      fnBody.push(`params['${params[i]}'] = paramsArray[${i}]`)
    }
    fnBody.push('return params')
    fnBody.push('}')

    fnBody.push('return fn')

    return new Function('NullObject', fnBody.join('\n'))(NullObject)  // eslint-disable-line
  }

  _getHandlerMatchingConstraints () {
    return null
  }

  // Builds a store object that maps from constraint values to a bitmap of handler indexes which pass the constraint for a value
  // So for a host constraint, this might look like { "fastify.io": 0b0010, "google.ca": 0b0101 }, meaning the 3rd handler is constrainted to fastify.io, and the 2nd and 4th handlers are constrained to google.ca.
  // The store's implementation comes from the strategies provided to the Router.
  _buildConstraintStore (store, constraint) {
    for (let i = 0; i < this.handlers.length; i++) {
      const handler = this.handlers[i]
      const constraintValue = handler.constraints[constraint]
      if (constraintValue !== undefined) {
        let indexes = store.get(constraintValue) || 0
        indexes |= 1 << i // set the i-th bit for the mask because this handler is constrained by this value https://stackoverflow.com/questions/1436438/how-do-you-set-clear-and-toggle-a-single-bit-in-javascrip
        store.set(constraintValue, indexes)
      }
    }
  }

  // Builds a bitmask for a given constraint that has a bit for each handler index that is 0 when that handler *is* constrained and 1 when the handler *isnt* constrainted. This is opposite to what might be obvious, but is just for convienience when doing the bitwise operations.
  _constrainedIndexBitmask (constraint) {
    let mask = 0
    for (let i = 0; i < this.handlers.length; i++) {
      const handler = this.handlers[i]
      const constraintValue = handler.constraints[constraint]
      if (constraintValue !== undefined) {
        mask |= 1 << i
      }
    }
    return ~mask
  }

  // Compile a fast function to match the handlers for this node
  // The function implements a general case multi-constraint matching algorithm.
  // The general idea is this: we have a bunch of handlers, each with a potentially different set of constraints, and sometimes none at all. We're given a list of constraint values and we have to use the constraint-value-comparison strategies to see which handlers match the constraint values passed in.
  // We do this by asking each constraint store which handler indexes match the given constraint value for each store. Trickily, the handlers that a store says match are the handlers constrained by that store, but handlers that aren't constrained at all by that store could still match just fine. So, each constraint store can only describe matches for it, and it won't have any bearing on the handlers it doesn't care about. For this reason, we have to ask each stores which handlers match and track which have been matched (or not cared about) by all of them.
  // We use bitmaps to represent these lists of matches so we can use bitwise operations to implement this efficiently. Bitmaps are cheap to allocate, let us implement this masking behaviour in one CPU instruction, and are quite compact in memory. We start with a bitmap set to all 1s representing every handler that is a match candidate, and then for each constraint, see which handlers match using the store, and then mask the result by the mask of handlers that that store applies to, and bitwise AND with the candidate list. Phew.
  // We consider all this compiling function complexity to be worth it, because the naive implementation that just loops over the handlers asking which stores match is quite a bit slower.
  _compileGetHandlerMatchingConstraints (constrainer) {
    this.constrainedHandlerStores = {}

    for (const constraint of this.constraints) {
      const store = constrainer.newStoreForConstraint(constraint)
      this.constrainedHandlerStores[constraint] = store

      this._buildConstraintStore(store, constraint)
    }

    const lines = []
    lines.push(`
    let candidates = ${(1 << this.handlers.length) - 1}
    let mask, matches
    `)
    for (const constraint of this.constraints) {
      // Setup the mask for indexes this constraint applies to. The mask bits are set to 1 for each position if the constraint applies.
      lines.push(`
      mask = ${this._constrainedIndexBitmask(constraint)}
      value = derivedConstraints.${constraint}
      `)

      // If there's no constraint value, none of the handlers constrained by this constraint can match. Remove them from the candidates.
      // If there is a constraint value, get the matching indexes bitmap from the store, and mask it down to only the indexes this constraint applies to, and then bitwise and with the candidates list to leave only matching candidates left.
      const strategy = constrainer.strategies[constraint]
      const matchMask = strategy.mustMatchWhenDerived ? 'matches' : '(matches | mask)'

      lines.push(`
      if (value === undefined) {
        candidates &= mask
      } else {
        matches = this.constrainedHandlerStores.${constraint}.get(value) || 0
        candidates &= ${matchMask}
      }
      if (candidates === 0) return null;
      `)
    }

    // There are some constraints that can be derived and marked as "must match", where if they are derived, they only match routes that actually have a constraint on the value, like the SemVer version constraint.
    // An example: a request comes in for version 1.x, and this node has a handler that matches the path, but there's no version constraint. For SemVer, the find-my-way semantics do not match this handler to that request.
    // This function is used by Nodes with handlers to match when they don't have any constrained routes to exclude request that do have must match derived constraints present.
    for (const constraint in constrainer.strategies) {
      const strategy = constrainer.strategies[constraint]
      if (strategy.mustMatchWhenDerived && !this.constraints.includes(constraint)) {
        lines.push(`if (derivedConstraints.${constraint} !== undefined) return null`)
      }
    }

    // Return the first handler who's bit is set in the candidates https://stackoverflow.com/questions/18134985/how-to-find-index-of-first-set-bit
    lines.push('return this.handlers[Math.floor(Math.log2(candidates))]')

    this._getHandlerMatchingConstraints = new Function('derivedConstraints', lines.join('\n')) // eslint-disable-line
  }
}

module.exports = HandlerStorage
