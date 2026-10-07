'use strict'

/*
  Char codes:
    '!': 33 - !
    '#': 35 - %23
    '$': 36 - %24
    '%': 37 - %25
    '&': 38 - %26
    ''': 39 - '
    '(': 40 - (
    ')': 41 - )
    '*': 42 - *
    '+': 43 - %2B
    ',': 44 - %2C
    '-': 45 - -
    '.': 46 - .
    '/': 47 - %2F
    ':': 58 - %3A
    ';': 59 - %3B
    '=': 61 - %3D
    '?': 63 - %3F
    '@': 64 - %40
    '_': 95 - _
    '~': 126 - ~
*/

const assert = require('node:assert')
const querystring = require('fast-querystring')
const isRegexSafe = require('safe-regex2')
const deepEqual = require('fast-deep-equal')
const { prettyPrintTree } = require('./lib/pretty-print')
const { StaticNode, NODE_TYPES } = require('./lib/node')
const Constrainer = require('./lib/constrainer')
const httpMethods = require('./lib/http-methods')
const httpMethodStrategy = require('./lib/strategies/http-method')
const { safeDecodeURI, safeDecodeURIComponent } = require('./lib/url-sanitizer')

const FULL_PATH_REGEXP = /^https?:\/\/.*?\//
const OPTIONAL_PARAM_REGEXP = /(\/:[^/()]*?)\?(\/?)/
const ESCAPE_REGEXP = /[.*+?^${}()|[\]\\]/g
const REMOVE_DUPLICATE_SLASHES_REGEXP = /\/\/+/g

if (!isRegexSafe(FULL_PATH_REGEXP)) {
  throw new Error('the FULL_PATH_REGEXP is not safe, update this module')
}

if (!isRegexSafe(OPTIONAL_PARAM_REGEXP)) {
  throw new Error('the OPTIONAL_PARAM_REGEXP is not safe, update this module')
}

if (!isRegexSafe(ESCAPE_REGEXP)) {
  throw new Error('the ESCAPE_REGEXP is not safe, update this module')
}

if (!isRegexSafe(REMOVE_DUPLICATE_SLASHES_REGEXP)) {
  throw new Error('the REMOVE_DUPLICATE_SLASHES_REGEXP is not safe, update this module')
}

function Router (opts) {
  if (!(this instanceof Router)) {
    return new Router(opts)
  }
  opts = opts || {}
  this._opts = opts

  if (opts.defaultRoute) {
    assert(typeof opts.defaultRoute === 'function', 'The default route must be a function')
    this.defaultRoute = opts.defaultRoute
  } else {
    this.defaultRoute = null
  }

  if (opts.onBadUrl) {
    assert(typeof opts.onBadUrl === 'function', 'The bad url handler must be a function')
    this.onBadUrl = opts.onBadUrl
  } else {
    this.onBadUrl = null
  }

  if (opts.buildPrettyMeta) {
    assert(typeof opts.buildPrettyMeta === 'function', 'buildPrettyMeta must be a function')
    this.buildPrettyMeta = opts.buildPrettyMeta
  } else {
    this.buildPrettyMeta = defaultBuildPrettyMeta
  }

  if (opts.querystringParser) {
    assert(typeof opts.querystringParser === 'function', 'querystringParser must be a function')
    this.querystringParser = opts.querystringParser
  } else {
    this.querystringParser = (query) => query.length === 0 ? {} : querystring.parse(query)
  }

  this.caseSensitive = opts.caseSensitive === undefined ? true : opts.caseSensitive
  this.ignoreTrailingSlash = opts.ignoreTrailingSlash || false
  this.ignoreDuplicateSlashes = opts.ignoreDuplicateSlashes || false
  this.maxParamLength = opts.maxParamLength || 100
  this.allowUnsafeRegex = opts.allowUnsafeRegex || false
  this.constrainer = new Constrainer(opts.constraints)
  this.useSemicolonDelimiter = opts.useSemicolonDelimiter || false

  this.routes = []
  this.trees = {}
}

Router.prototype.on = function on (method, path, opts, handler, store) {
  if (typeof opts === 'function') {
    if (handler !== undefined) {
      store = handler
    }
    handler = opts
    opts = {}
  }
  // path validation
  assert(typeof path === 'string', 'Path should be a string')
  assert(path.length > 0, 'The path could not be empty')
  assert(path[0] === '/' || path[0] === '*', 'The first character of a path should be `/` or `*`')
  // handler validation
  assert(typeof handler === 'function', 'Handler should be a function')

  // path ends with optional parameter
  const optionalParamMatch = path.match(OPTIONAL_PARAM_REGEXP)
  if (optionalParamMatch) {
    assert(path.length === optionalParamMatch.index + optionalParamMatch[0].length, 'Optional Parameter needs to be the last parameter of the path')

    const pathFull = path.replace(OPTIONAL_PARAM_REGEXP, '$1$2')
    const pathOptional = path.replace(OPTIONAL_PARAM_REGEXP, '$2') || '/'

    this.on(method, pathFull, opts, handler, store)
    this.on(method, pathOptional, opts, handler, store)
    return
  }

  const route = path

  if (this.ignoreDuplicateSlashes) {
    path = removeDuplicateSlashes(path)
  }

  if (this.ignoreTrailingSlash) {
    path = trimLastSlash(path)
  }

  const methods = Array.isArray(method) ? method : [method]
  for (const method of methods) {
    assert(typeof method === 'string', 'Method should be a string')
    assert(httpMethods.includes(method), `Method '${method}' is not an http method.`)
    this._on(method, path, opts, handler, store, route)
  }
}

Router.prototype._on = function _on (method, path, opts, handler, store) {
  let constraints = {}
  if (opts.constraints !== undefined) {
    assert(typeof opts.constraints === 'object' && opts.constraints !== null, 'Constraints should be an object')
    if (Object.keys(opts.constraints).length !== 0) {
      constraints = opts.constraints
    }
  }

  this.constrainer.validateConstraints(constraints)
  // Let the constrainer know if any constraints are being used now
  this.constrainer.noteUsage(constraints)

  // Boot the tree for this method if it doesn't exist yet
  if (this.trees[method] === undefined) {
    this.trees[method] = new StaticNode('/')
  }

  let pattern = path
  if (pattern === '*' && this.trees[method].prefix.length !== 0) {
    const currentRoot = this.trees[method]
    this.trees[method] = new StaticNode('')
    this.trees[method].staticChildren['/'] = currentRoot
  }

  let currentNode = this.trees[method]
  let parentNodePathIndex = currentNode.prefix.length

  const params = []
  for (let i = 0; i <= pattern.length; i++) {
    if (pattern.charCodeAt(i) === 58 && pattern.charCodeAt(i + 1) === 58) {
      // It's a double colon
      i++
      continue
    }

    const isParametricNode = pattern.charCodeAt(i) === 58 && pattern.charCodeAt(i + 1) !== 58
    const isWildcardNode = pattern.charCodeAt(i) === 42

    if (isParametricNode || isWildcardNode || (i === pattern.length && i !== parentNodePathIndex)) {
      let staticNodePath = pattern.slice(parentNodePathIndex, i)
      if (!this.caseSensitive) {
        staticNodePath = staticNodePath.toLowerCase()
      }
      staticNodePath = staticNodePath.replaceAll('::', ':')
      staticNodePath = staticNodePath.replaceAll('%', '%25')
      // add the static part of the route to the tree
      currentNode = currentNode.createStaticChild(staticNodePath)
    }

    if (isParametricNode) {
      let isRegexNode = false
      let isParamSafe = true
      let backtrack = ''
      const regexps = []

      let lastParamStartIndex = i + 1
      for (let j = lastParamStartIndex; ; j++) {
        const charCode = pattern.charCodeAt(j)

        const isRegexParam = charCode === 40
        const isStaticPart = charCode === 45 || charCode === 46
        const isEndOfNode = charCode === 47 || j === pattern.length

        if (isRegexParam || isStaticPart || isEndOfNode) {
          const paramName = pattern.slice(lastParamStartIndex, j)
          params.push(paramName)

          isRegexNode = isRegexNode || isRegexParam || isStaticPart

          if (isRegexParam) {
            const endOfRegexIndex = getClosingParenthensePosition(pattern, j)
            const regexString = pattern.slice(j, endOfRegexIndex + 1)

            if (!this.allowUnsafeRegex) {
              assert(isRegexSafe(new RegExp(regexString)), `The regex '${regexString}' is not safe!`)
            }

            regexps.push(trimRegExpStartAndEnd(regexString))

            j = endOfRegexIndex + 1
            isParamSafe = true
          } else {
            regexps.push(isParamSafe ? '(.*?)' : `(${backtrack}|(?:(?!${backtrack}).)*)`)
            isParamSafe = false
          }

          const staticPartStartIndex = j
          for (; j < pattern.length; j++) {
            const charCode = pattern.charCodeAt(j)
            if (charCode === 47) break
            if (charCode === 58) {
              const nextCharCode = pattern.charCodeAt(j + 1)
              if (nextCharCode === 58) j++
              else break
            }
          }

          let staticPart = pattern.slice(staticPartStartIndex, j)
          if (staticPart) {
            staticPart = staticPart.replaceAll('::', ':')
            staticPart = staticPart.replaceAll('%', '%25')
            regexps.push(backtrack = escapeRegExp(staticPart))
          }

          lastParamStartIndex = j + 1

          if (isEndOfNode || pattern.charCodeAt(j) === 47 || j === pattern.length) {
            const nodePattern = isRegexNode ? '()' + staticPart : staticPart
            const nodePath = pattern.slice(i, j)

            pattern = pattern.slice(0, i + 1) + nodePattern + pattern.slice(j)
            i += nodePattern.length

            const regex = isRegexNode ? new RegExp('^' + regexps.join('') + '$') : null
            currentNode = currentNode.createParametricChild(regex, staticPart || null, nodePath)
            parentNodePathIndex = i + 1
            break
          }
        }
      }
    } else if (isWildcardNode) {
      // add the wildcard parameter
      params.push('*')
      currentNode = currentNode.createWildcardChild()
      parentNodePathIndex = i + 1

      if (i !== pattern.length - 1) {
        throw new Error('Wildcard must be the last character in the route')
      }
    }
  }

  if (!this.caseSensitive) {
    pattern = pattern.toLowerCase()
  }

  if (pattern === '*') {
    pattern = '/*'
  }

  for (const existRoute of this.routes) {
    const routeConstraints = existRoute.opts.constraints || {}
    if (
      existRoute.method === method &&
      existRoute.pattern === pattern &&
      deepEqual(routeConstraints, constraints)
    ) {
      throw new Error(`Method '${method}' already declared for route '${pattern}' with constraints '${JSON.stringify(constraints)}'`)
    }
  }

  const route = { method, path, pattern, params, opts, handler, store }
  this.routes.push(route)
  currentNode.addRoute(route, this.constrainer)
}

Router.prototype.hasRoute = function hasRoute (method, path, constraints) {
  const route = this.findRoute(method, path, constraints)
  return route !== null
}

Router.prototype.findRoute = function findNode (method, path, constraints = {}) {
  if (this.trees[method] === undefined) {
    return null
  }

  let pattern = path

  let currentNode = this.trees[method]
  let parentNodePathIndex = currentNode.prefix.length

  const params = []
  for (let i = 0; i <= pattern.length; i++) {
    if (pattern.charCodeAt(i) === 58 && pattern.charCodeAt(i + 1) === 58) {
      // It's a double colon
      i++
      continue
    }

    const isParametricNode = pattern.charCodeAt(i) === 58 && pattern.charCodeAt(i + 1) !== 58
    const isWildcardNode = pattern.charCodeAt(i) === 42

    if (isParametricNode || isWildcardNode || (i === pattern.length && i !== parentNodePathIndex)) {
      let staticNodePath = pattern.slice(parentNodePathIndex, i)
      if (!this.caseSensitive) {
        staticNodePath = staticNodePath.toLowerCase()
      }
      staticNodePath = staticNodePath.replaceAll('::', ':')
      staticNodePath = staticNodePath.replaceAll('%', '%25')
      // add the static part of the route to the tree
      currentNode = currentNode.getStaticChild(staticNodePath)
      if (currentNode === null) {
        return null
      }
    }

    if (isParametricNode) {
      let isRegexNode = false
      let isParamSafe = true
      let backtrack = ''
      const regexps = []

      let lastParamStartIndex = i + 1
      for (let j = lastParamStartIndex; ; j++) {
        const charCode = pattern.charCodeAt(j)

        const isRegexParam = charCode === 40
        const isStaticPart = charCode === 45 || charCode === 46
        const isEndOfNode = charCode === 47 || j === pattern.length

        if (isRegexParam || isStaticPart || isEndOfNode) {
          const paramName = pattern.slice(lastParamStartIndex, j)
          params.push(paramName)

          isRegexNode = isRegexNode || isRegexParam || isStaticPart

          if (isRegexParam) {
            const endOfRegexIndex = getClosingParenthensePosition(pattern, j)
            const regexString = pattern.slice(j, endOfRegexIndex + 1)

            if (!this.allowUnsafeRegex) {
              assert(isRegexSafe(new RegExp(regexString)), `The regex '${regexString}' is not safe!`)
            }

            regexps.push(trimRegExpStartAndEnd(regexString))

            j = endOfRegexIndex + 1
            isParamSafe = false
          } else {
            regexps.push(isParamSafe ? '(.*?)' : `(${backtrack}|(?:(?!${backtrack}).)*)`)
            isParamSafe = false
          }

          const staticPartStartIndex = j
          for (; j < pattern.length; j++) {
            const charCode = pattern.charCodeAt(j)
            if (charCode === 47) break
            if (charCode === 58) {
              const nextCharCode = pattern.charCodeAt(j + 1)
              if (nextCharCode === 58) j++
              else break
            }
          }

          let staticPart = pattern.slice(staticPartStartIndex, j)
          if (staticPart) {
            staticPart = staticPart.replaceAll('::', ':')
            staticPart = staticPart.replaceAll('%', '%25')
            regexps.push(backtrack = escapeRegExp(staticPart))
          }

          lastParamStartIndex = j + 1

          if (isEndOfNode || pattern.charCodeAt(j) === 47 || j === pattern.length) {
            const nodePattern = isRegexNode ? '()' + staticPart : staticPart
            const nodePath = pattern.slice(i, j)

            pattern = pattern.slice(0, i + 1) + nodePattern + pattern.slice(j)
            i += nodePattern.length

            const regex = isRegexNode ? new RegExp('^' + regexps.join('') + '$') : null
            currentNode = currentNode.getParametricChild(regex, staticPart || null, nodePath)
            if (currentNode === null) {
              return null
            }
            parentNodePathIndex = i + 1
            break
          }
        }
      }
    } else if (isWildcardNode) {
      // add the wildcard parameter
      params.push('*')
      currentNode = currentNode.getWildcardChild()

      parentNodePathIndex = i + 1

      if (i !== pattern.length - 1) {
        throw new Error('Wildcard must be the last character in the route')
      }
    }
  }

  if (!this.caseSensitive) {
    pattern = pattern.toLowerCase()
  }

  for (const existRoute of this.routes) {
    const routeConstraints = existRoute.opts.constraints || {}
    if (
      existRoute.method === method &&
      existRoute.pattern === pattern &&
      deepEqual(routeConstraints, constraints)
    ) {
      return {
        handler: existRoute.handler,
        store: existRoute.store,
        params: existRoute.params
      }
    }
  }

  return null
}

Router.prototype.hasConstraintStrategy = function (strategyName) {
  return this.constrainer.hasConstraintStrategy(strategyName)
}

Router.prototype.addConstraintStrategy = function (constraints) {
  this.constrainer.addConstraintStrategy(constraints)
  this._rebuild(this.routes)
}

Router.prototype.reset = function reset () {
  this.trees = {}
  this.routes = []
}

Router.prototype.off = function off (method, path, constraints) {
  // path validation
  assert(typeof path === 'string', 'Path should be a string')
  assert(path.length > 0, 'The path could not be empty')
  assert(path[0] === '/' || path[0] === '*', 'The first character of a path should be `/` or `*`')
  // options validation
  assert(
    typeof constraints === 'undefined' ||
    (typeof constraints === 'object' && !Array.isArray(constraints) && constraints !== null),
    'Constraints should be an object or undefined.')

  // path ends with optional parameter
  const optionalParamMatch = path.match(OPTIONAL_PARAM_REGEXP)
  if (optionalParamMatch) {
    assert(path.length === optionalParamMatch.index + optionalParamMatch[0].length, 'Optional Parameter needs to be the last parameter of the path')

    const pathFull = path.replace(OPTIONAL_PARAM_REGEXP, '$1$2')
    const pathOptional = path.replace(OPTIONAL_PARAM_REGEXP, '$2')

    this.off(method, pathFull, constraints)
    this.off(method, pathOptional, constraints)
    return
  }

  if (this.ignoreDuplicateSlashes) {
    path = removeDuplicateSlashes(path)
  }

  if (this.ignoreTrailingSlash) {
    path = trimLastSlash(path)
  }

  const methods = Array.isArray(method) ? method : [method]
  for (const method of methods) {
    this._off(method, path, constraints)
  }
}

Router.prototype._off = function _off (method, path, constraints) {
  // method validation
  assert(typeof method === 'string', 'Method should be a string')
  assert(httpMethods.includes(method), `Method '${method}' is not an http method.`)

  function matcherWithoutConstraints (route) {
    return method !== route.method || path !== route.path
  }

  function matcherWithConstraints (route) {
    return matcherWithoutConstraints(route) || !deepEqual(constraints, route.opts.constraints || {})
  }

  const predicate = constraints ? matcherWithConstraints : matcherWithoutConstraints

  // Rebuild tree without the specific route
  const newRoutes = this.routes.filter(predicate)
  this._rebuild(newRoutes)
}

Router.prototype.lookup = function lookup (req, res, ctx, done) {
  if (typeof ctx === 'function') {
    done = ctx
    ctx = undefined
  }

  if (done === undefined) {
    const constraints = this.constrainer.deriveConstraints(req, ctx)
    const handle = this.find(req.method, req.url, constraints)
    return this.callHandler(handle, req, res, ctx)
  }

  this.constrainer.deriveConstraints(req, ctx, (err, constraints) => {
    if (err !== null) {
      done(err)
      return
    }

    try {
      const handle = this.find(req.method, req.url, constraints)
      const result = this.callHandler(handle, req, res, ctx)
      done(null, result)
    } catch (err) {
      done(err)
    }
  })
}

Router.prototype.callHandler = function callHandler (handle, req, res, ctx) {
  if (handle === null) return this._defaultRoute(req, res, ctx)
  return ctx === undefined
    ? handle.handler(req, res, handle.params, handle.store, handle.searchParams)
    : handle.handler.call(ctx, req, res, handle.params, handle.store, handle.searchParams)
}

Router.prototype.find = function find (method, path, derivedConstraints) {
  let currentNode = this.trees[method]
  if (currentNode === undefined) return null

  if (path.charCodeAt(0) !== 47) { // 47 is '/'
    path = path.replace(FULL_PATH_REGEXP, '/')
  }

  // This must be run before sanitizeUrl as the resulting function
  // .sliceParameter must be constructed with same URL string used
  // throughout the rest of this function.
  if (this.ignoreDuplicateSlashes) {
    path = removeDuplicateSlashes(path)
  }

  let sanitizedUrl
  let querystring
  let shouldDecodeParam

  try {
    sanitizedUrl = safeDecodeURI(path, this.useSemicolonDelimiter)
    path = sanitizedUrl.path
    querystring = sanitizedUrl.querystring
    shouldDecodeParam = sanitizedUrl.shouldDecodeParam
  } catch (error) {
    return this._onBadUrl(path)
  }

  if (this.ignoreTrailingSlash) {
    path = trimLastSlash(path)
  }

  const originPath = path

  if (this.caseSensitive === false) {
    path = path.toLowerCase()
  }

  const maxParamLength = this.maxParamLength

  let pathIndex = currentNode.prefix.length
  const params = []
  const pathLen = path.length

  const brothersNodesStack = []

  while (true) {
    if (pathIndex === pathLen && currentNode.isLeafNode) {
      const handle = currentNode.handlerStorage.getMatchingHandler(derivedConstraints)
      if (handle !== null) {
        return {
          handler: handle.handler,
          store: handle.store,
          params: handle._createParamsObject(params),
          searchParams: this.querystringParser(querystring)
        }
      }
    }

    let node = currentNode.getNextNode(path, pathIndex, brothersNodesStack, params.length)

    if (node === null) {
      if (brothersNodesStack.length === 0) {
        return null
      }

      const brotherNodeState = brothersNodesStack.pop()
      pathIndex = brotherNodeState.brotherPathIndex
      params.splice(brotherNodeState.paramsCount)
      node = brotherNodeState.brotherNode
    }

    currentNode = node

    // static route
    if (currentNode.kind === NODE_TYPES.STATIC) {
      pathIndex += currentNode.prefix.length
      continue
    }

    if (currentNode.kind === NODE_TYPES.WILDCARD) {
      let param = originPath.slice(pathIndex)
      if (shouldDecodeParam) {
        param = safeDecodeURIComponent(param)
      }

      params.push(param)
      pathIndex = pathLen
      continue
    }

    // parametric node
    let paramEndIndex = originPath.indexOf('/', pathIndex)
    if (paramEndIndex === -1) {
      paramEndIndex = pathLen
    }

    let param = originPath.slice(pathIndex, paramEndIndex)
    if (shouldDecodeParam) {
      param = safeDecodeURIComponent(param)
    }

    if (currentNode.isRegex) {
      const matchedParameters = currentNode.regex.exec(param)
      if (matchedParameters === null) continue

      for (let i = 1; i < matchedParameters.length; i++) {
        const matchedParam = matchedParameters[i]
        if (matchedParam.length > maxParamLength) {
          return null
        }
        params.push(matchedParam)
      }
    } else {
      if (param.length > maxParamLength) {
        return null
      }
      params.push(param)
    }

    pathIndex = paramEndIndex
  }
}

Router.prototype._rebuild = function (routes) {
  this.reset()

  for (const route of routes) {
    const { method, path, opts, handler, store } = route
    this._on(method, path, opts, handler, store)
  }
}

Router.prototype._defaultRoute = function (req, res, ctx) {
  if (this.defaultRoute !== null) {
    return ctx === undefined
      ? this.defaultRoute(req, res)
      : this.defaultRoute.call(ctx, req, res)
  } else {
    res.statusCode = 404
    res.end()
  }
}

Router.prototype._onBadUrl = function (path) {
  if (this.onBadUrl === null) {
    return null
  }
  const onBadUrl = this.onBadUrl
  return {
    handler: (req, res, ctx) => onBadUrl(path, req, res),
    params: {},
    store: null
  }
}

Router.prototype.prettyPrint = function (options = {}) {
  const method = options.method

  options.buildPrettyMeta = this.buildPrettyMeta.bind(this)

  let tree = null
  if (method === undefined) {
    const { version, host, ...constraints } = this.constrainer.strategies
    constraints[httpMethodStrategy.name] = httpMethodStrategy

    const mergedRouter = new Router({ ...this._opts, constraints })
    const mergedRoutes = this.routes.map(route => {
      const constraints = {
        ...route.opts.constraints,
        [httpMethodStrategy.name]: route.method
      }
      return { ...route, method: 'MERGED', opts: { constraints } }
    })
    mergedRouter._rebuild(mergedRoutes)
    tree = mergedRouter.trees.MERGED
  } else {
    tree = this.trees[method]
  }

  if (tree == null) return '(empty tree)'
  return prettyPrintTree(tree, options)
}

for (const i in httpMethods) {
  /* eslint no-prototype-builtins: "off" */
  if (!httpMethods.hasOwnProperty(i)) continue
  const m = httpMethods[i]
  const methodName = m.toLowerCase()

  Router.prototype[methodName] = function (path, handler, store) {
    return this.on(m, path, handler, store)
  }
}

Router.prototype.all = function (path, handler, store) {
  this.on(httpMethods, path, handler, store)
}

module.exports = Router

function escapeRegExp (string) {
  return string.replace(ESCAPE_REGEXP, '\\$&')
}

function removeDuplicateSlashes (path) {
  return path.indexOf('//') !== -1 ? path.replace(REMOVE_DUPLICATE_SLASHES_REGEXP, '/') : path
}

function trimLastSlash (path) {
  if (path.length > 1 && path.charCodeAt(path.length - 1) === 47) {
    return path.slice(0, -1)
  }
  return path
}

function trimRegExpStartAndEnd (regexString) {
  // removes chars that marks start "^" and end "$" of regexp
  if (regexString.charCodeAt(1) === 94) {
    regexString = regexString.slice(0, 1) + regexString.slice(2)
  }

  if (regexString.charCodeAt(regexString.length - 2) === 36) {
    regexString = regexString.slice(0, regexString.length - 2) + regexString.slice(regexString.length - 1)
  }

  return regexString
}

function getClosingParenthensePosition (path, idx) {
  // `path.indexOf()` will always return the first position of the closing parenthese,
  // but it's inefficient for grouped or wrong regexp expressions.
  // see issues #62 and #63 for more info

  let parentheses = 1

  while (idx < path.length) {
    idx++

    // ignore skipped chars "\"
    if (path.charCodeAt(idx) === 92) {
      idx++
      continue
    }

    if (path.charCodeAt(idx) === 41) {
      parentheses--
    } else if (path.charCodeAt(idx) === 40) {
      parentheses++
    }

    if (!parentheses) return idx
  }

  throw new TypeError('Invalid regexp expression in "' + path + '"')
}

function defaultBuildPrettyMeta (route) {
  // buildPrettyMeta function must return an object, which will be parsed into key/value pairs for display
  if (!route) return {}
  if (!route.store) return {}
  return Object.assign({}, route.store)
}
