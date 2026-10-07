'use strict'

const HandlerStorage = require('./handler-storage')

const NODE_TYPES = {
  STATIC: 0,
  PARAMETRIC: 1,
  WILDCARD: 2
}

class Node {
  constructor () {
    this.isLeafNode = false
    this.routes = null
    this.handlerStorage = null
  }

  addRoute (route, constrainer) {
    if (this.routes === null) {
      this.routes = []
    }
    if (this.handlerStorage === null) {
      this.handlerStorage = new HandlerStorage()
    }
    this.isLeafNode = true
    this.routes.push(route)
    this.handlerStorage.addHandler(constrainer, route)
  }
}

class ParentNode extends Node {
  constructor () {
    super()
    this.staticChildren = {}
  }

  findStaticMatchingChild (path, pathIndex) {
    const staticChild = this.staticChildren[path.charAt(pathIndex)]
    if (staticChild === undefined || !staticChild.matchPrefix(path, pathIndex)) {
      return null
    }
    return staticChild
  }

  getStaticChild (path, pathIndex = 0) {
    if (path.length === pathIndex) {
      return this
    }

    const staticChild = this.findStaticMatchingChild(path, pathIndex)
    if (staticChild) {
      return staticChild.getStaticChild(path, pathIndex + staticChild.prefix.length)
    }

    return null
  }

  createStaticChild (path) {
    if (path.length === 0) {
      return this
    }

    let staticChild = this.staticChildren[path.charAt(0)]
    if (staticChild) {
      let i = 1
      for (; i < staticChild.prefix.length; i++) {
        if (path.charCodeAt(i) !== staticChild.prefix.charCodeAt(i)) {
          staticChild = staticChild.split(this, i)
          break
        }
      }
      return staticChild.createStaticChild(path.slice(i))
    }

    const label = path.charAt(0)
    this.staticChildren[label] = new StaticNode(path)
    return this.staticChildren[label]
  }
}

class StaticNode extends ParentNode {
  constructor (prefix) {
    super()
    this.prefix = prefix
    this.wildcardChild = null
    this.parametricChildren = []
    this.kind = NODE_TYPES.STATIC
    this._compilePrefixMatch()
  }

  getParametricChild (regex) {
    const regexpSource = regex && regex.source

    const parametricChild = this.parametricChildren.find(child => {
      const childRegexSource = child.regex && child.regex.source
      return childRegexSource === regexpSource
    })

    if (parametricChild) {
      return parametricChild
    }

    return null
  }

  createParametricChild (regex, staticSuffix, nodePath) {
    let parametricChild = this.getParametricChild(regex)
    if (parametricChild) {
      parametricChild.nodePaths.add(nodePath)
      return parametricChild
    }

    parametricChild = new ParametricNode(regex, staticSuffix, nodePath)
    this.parametricChildren.push(parametricChild)
    this.parametricChildren.sort((child1, child2) => {
      if (!child1.isRegex) return 1
      if (!child2.isRegex) return -1

      if (child1.staticSuffix === null) return 1
      if (child2.staticSuffix === null) return -1

      if (child2.staticSuffix.endsWith(child1.staticSuffix)) return 1
      if (child1.staticSuffix.endsWith(child2.staticSuffix)) return -1

      return 0
    })

    return parametricChild
  }

  getWildcardChild () {
    return this.wildcardChild
  }

  createWildcardChild () {
    this.wildcardChild = this.getWildcardChild() || new WildcardNode()
    return this.wildcardChild
  }

  split (parentNode, length) {
    const parentPrefix = this.prefix.slice(0, length)
    const childPrefix = this.prefix.slice(length)

    this.prefix = childPrefix
    this._compilePrefixMatch()

    const staticNode = new StaticNode(parentPrefix)
    staticNode.staticChildren[childPrefix.charAt(0)] = this
    parentNode.staticChildren[parentPrefix.charAt(0)] = staticNode

    return staticNode
  }

  getNextNode (path, pathIndex, nodeStack, paramsCount) {
    let node = this.findStaticMatchingChild(path, pathIndex)
    let parametricBrotherNodeIndex = 0

    if (node === null) {
      if (this.parametricChildren.length === 0) {
        return this.wildcardChild
      }

      node = this.parametricChildren[0]
      parametricBrotherNodeIndex = 1
    }

    if (this.wildcardChild !== null) {
      nodeStack.push({
        paramsCount,
        brotherPathIndex: pathIndex,
        brotherNode: this.wildcardChild
      })
    }

    for (let i = this.parametricChildren.length - 1; i >= parametricBrotherNodeIndex; i--) {
      nodeStack.push({
        paramsCount,
        brotherPathIndex: pathIndex,
        brotherNode: this.parametricChildren[i]
      })
    }

    return node
  }

  _compilePrefixMatch () {
    if (this.prefix.length === 1) {
      this.matchPrefix = () => true
      return
    }

    const lines = []
    for (let i = 1; i < this.prefix.length; i++) {
      const charCode = this.prefix.charCodeAt(i)
      lines.push(`path.charCodeAt(i + ${i}) === ${charCode}`)
    }
    this.matchPrefix = new Function('path', 'i', `return ${lines.join(' && ')}`) // eslint-disable-line
  }
}

class ParametricNode extends ParentNode {
  constructor (regex, staticSuffix, nodePath) {
    super()
    this.isRegex = !!regex
    this.regex = regex || null
    this.staticSuffix = staticSuffix || null
    this.kind = NODE_TYPES.PARAMETRIC

    this.nodePaths = new Set([nodePath])
  }

  getNextNode (path, pathIndex) {
    return this.findStaticMatchingChild(path, pathIndex)
  }
}

class WildcardNode extends Node {
  constructor () {
    super()
    this.kind = NODE_TYPES.WILDCARD
  }

  getNextNode () {
    return null
  }
}

module.exports = { StaticNode, ParametricNode, WildcardNode, NODE_TYPES }
