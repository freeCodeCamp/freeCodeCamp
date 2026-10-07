'use strict'

const deepEqual = require('fast-deep-equal')

const httpMethodStrategy = require('./strategies/http-method')
const treeDataSymbol = Symbol('treeData')

function printObjectTree (obj, parentPrefix = '') {
  let tree = ''
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = obj[key]
    const isLast = i === keys.length - 1

    const nodePrefix = isLast ? '└── ' : '├── '
    const childPrefix = isLast ? '    ' : '│   '

    const nodeData = value[treeDataSymbol] || ''
    const prefixedNodeData = nodeData.replaceAll('\n', '\n' + parentPrefix + childPrefix)

    tree += parentPrefix + nodePrefix + key + prefixedNodeData + '\n'
    tree += printObjectTree(value, parentPrefix + childPrefix)
  }
  return tree
}

function parseFunctionName (fn) {
  let fName = fn.name || ''

  fName = fName.replace('bound', '').trim()
  fName = (fName || 'anonymous') + '()'
  return fName
}

function parseMeta (meta) {
  if (Array.isArray(meta)) return meta.map(m => parseMeta(m))
  if (typeof meta === 'symbol') return meta.toString()
  if (typeof meta === 'function') return parseFunctionName(meta)
  return meta
}

function getRouteMetaData (route, options) {
  if (!options.includeMeta) return {}

  const metaDataObject = options.buildPrettyMeta(route)
  const filteredMetaData = {}

  let includeMetaKeys = options.includeMeta
  if (!Array.isArray(includeMetaKeys)) {
    includeMetaKeys = Reflect.ownKeys(metaDataObject)
  }

  for (const metaKey of includeMetaKeys) {
    if (!Object.prototype.hasOwnProperty.call(metaDataObject, metaKey)) continue

    const serializedKey = metaKey.toString()
    const metaValue = metaDataObject[metaKey]

    if (metaValue !== undefined && metaValue !== null) {
      const serializedValue = JSON.stringify(parseMeta(metaValue))
      filteredMetaData[serializedKey] = serializedValue
    }
  }

  return filteredMetaData
}

function serializeMetaData (metaData) {
  let serializedMetaData = ''
  for (const [key, value] of Object.entries(metaData)) {
    serializedMetaData += `\n• (${key}) ${value}`
  }
  return serializedMetaData
}

// get original merged tree node route
function normalizeRoute (route) {
  const constraints = { ...route.opts.constraints }
  const method = constraints[httpMethodStrategy.name]
  delete constraints[httpMethodStrategy.name]
  return { ...route, method, opts: { constraints } }
}

function serializeRoute (route) {
  let serializedRoute = ` (${route.method})`

  const constraints = route.opts.constraints || {}
  if (Object.keys(constraints).length !== 0) {
    serializedRoute += ' ' + JSON.stringify(constraints)
  }

  serializedRoute += serializeMetaData(route.metaData)
  return serializedRoute
}

function mergeSimilarRoutes (routes) {
  return routes.reduce((mergedRoutes, route) => {
    for (const nodeRoute of mergedRoutes) {
      if (
        deepEqual(route.opts.constraints, nodeRoute.opts.constraints) &&
        deepEqual(route.metaData, nodeRoute.metaData)
      ) {
        nodeRoute.method += ', ' + route.method
        return mergedRoutes
      }
    }
    mergedRoutes.push(route)
    return mergedRoutes
  }, [])
}

function serializeNode (node, prefix, options) {
  let routes = node.routes

  if (options.method === undefined) {
    routes = routes.map(normalizeRoute)
  }

  routes = routes.map(route => {
    route.metaData = getRouteMetaData(route, options)
    return route
  })

  if (options.method === undefined) {
    routes = mergeSimilarRoutes(routes)
  }

  return routes.map(serializeRoute).join(`\n${prefix}`)
}

function buildObjectTree (node, tree, prefix, options) {
  if (node.isLeafNode || options.commonPrefix !== false) {
    prefix = prefix || '(empty root node)'
    tree = tree[prefix] = {}

    if (node.isLeafNode) {
      tree[treeDataSymbol] = serializeNode(node, prefix, options)
    }

    prefix = ''
  }

  if (node.staticChildren) {
    for (const child of Object.values(node.staticChildren)) {
      buildObjectTree(child, tree, prefix + child.prefix, options)
    }
  }

  if (node.parametricChildren) {
    for (const child of Object.values(node.parametricChildren)) {
      const childPrefix = Array.from(child.nodePaths).join('|')
      buildObjectTree(child, tree, prefix + childPrefix, options)
    }
  }

  if (node.wildcardChild) {
    buildObjectTree(node.wildcardChild, tree, '*', options)
  }
}

function prettyPrintTree (root, options) {
  const objectTree = {}
  buildObjectTree(root, objectTree, root.prefix, options)
  return printObjectTree(objectTree)
}

module.exports = { prettyPrintTree }
