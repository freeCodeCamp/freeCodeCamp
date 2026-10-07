'use strict'

// Escapes sequences that could break out of an HTML <style> context.
// Uses CSS unicode escaping (\3c = '<') which is valid CSS and parsed
// correctly by all compliant CSS consumers.
const STYLE_TAG = /(<)(\/?style\b)/gi
const COMMENT_OPEN = /(<)(!--)/g

function escapeHTMLInCSS(str) {
  if (typeof str !== 'string') return str
  if (!str.includes('<')) return str
  return str.replace(STYLE_TAG, '\\3c $2').replace(COMMENT_OPEN, '\\3c $2')
}

const DEFAULT_RAW = {
  after: '\n',
  beforeClose: '\n',
  beforeComment: '\n',
  beforeDecl: '\n',
  beforeOpen: ' ',
  beforeRule: '\n',
  colon: ': ',
  commentLeft: ' ',
  commentRight: ' ',
  emptyBody: '',
  indent: '    ',
  semicolon: false
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

class Stringifier {
  constructor(builder) {
    this.builder = builder
  }

  atrule(node, semicolon) {
    let raws = node.raws
    let name = '@' + node.name
    let params = node.params ? this.rawValue(node, 'params') : ''

    if (typeof raws.afterName !== 'undefined') {
      name += raws.afterName
    } else if (params) {
      name += ' '
    }

    if (node.nodes) {
      this.block(node, name + params)
    } else {
      let end = (raws.between || '') + (semicolon ? ';' : '')
      this.builder(escapeHTMLInCSS(name + params + end), node)
    }
  }

  beforeAfter(node, detect) {
    let value
    if (node.type === 'decl') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (node.type === 'comment') {
      value = this.raw(node, null, 'beforeComment')
    } else if (detect === 'before') {
      value = this.raw(node, null, 'beforeRule')
    } else {
      value = this.raw(node, null, 'beforeClose')
    }

    let buf = node.parent
    let depth = 0
    while (buf && buf.type !== 'root') {
      depth += 1
      buf = buf.parent
    }

    if (value.includes('\n')) {
      let indent = this.raw(node, null, 'indent')
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent
      }
    }

    return value
  }

  block(node, start) {
    let raws = node.raws
    let between =
      typeof raws.between !== 'undefined'
        ? raws.between
        : this.raw(node, 'between', 'beforeOpen')
    this.builder(escapeHTMLInCSS(start + between) + '{', node, 'start')

    let after
    if (node.nodes && node.nodes.length) {
      this.body(node)
      after =
        typeof raws.after !== 'undefined' ? raws.after : this.raw(node, 'after')
    } else {
      after =
        typeof raws.after !== 'undefined'
          ? raws.after
          : this.raw(node, 'after', 'emptyBody')
    }

    if (after) this.builder(escapeHTMLInCSS(after))
    this.builder('}', node, 'end')
  }

  body(node) {
    let nodes = node.nodes
    let last = nodes.length - 1
    while (last > 0) {
      if (nodes[last].type !== 'comment') break
      last -= 1
    }

    let semicolon = this.raw(node, 'semicolon')
    let isDocument = node.type === 'document'
    for (let i = 0; i < nodes.length; i++) {
      let child = nodes[i]
      let before = child.raws.before
      if (typeof before === 'undefined') {
        before = this.raw(child, 'before')
      }
      if (before) this.builder(isDocument ? before : escapeHTMLInCSS(before))
      this.stringify(child, last !== i || semicolon)
    }
  }

  comment(node) {
    let raws = node.raws
    let left =
      typeof raws.left !== 'undefined'
        ? raws.left
        : this.raw(node, 'left', 'commentLeft')
    let right =
      typeof raws.right !== 'undefined'
        ? raws.right
        : this.raw(node, 'right', 'commentRight')
    this.builder(escapeHTMLInCSS('/*' + left + node.text + right + '*/'), node)
  }

  decl(node, semicolon) {
    let raws = node.raws
    let between =
      typeof raws.between !== 'undefined'
        ? raws.between
        : this.raw(node, 'between', 'colon')

    let string = node.prop + between + this.rawValue(node, 'value')

    if (node.important) {
      string += raws.important || ' !important'
    }

    if (semicolon) string += ';'
    this.builder(escapeHTMLInCSS(string), node)
  }

  document(node) {
    this.body(node)
  }

  raw(node, own, detect) {
    let value
    if (!detect) detect = own

    // Already had
    if (own) {
      value = node.raws[own]
      if (typeof value !== 'undefined') return value
    }

    let parent = node.parent

    if (detect === 'before') {
      // Hack for first rule in CSS
      if (!parent || (parent.type === 'root' && parent.first === node)) {
        return ''
      }

      // `root` nodes in `document` should use only their own raws
      if (parent && parent.type === 'document') {
        return ''
      }
    }

    // Floating child without parent
    if (!parent) return DEFAULT_RAW[detect]

    // Detect style by other nodes
    let root = node.root()
    let cache = root.rawCache || (root.rawCache = {})
    if (typeof cache[detect] !== 'undefined') {
      return cache[detect]
    }

    if (detect === 'before' || detect === 'after') {
      return this.beforeAfter(node, detect)
    } else {
      let method = 'raw' + capitalize(detect)
      if (this[method]) {
        value = this[method](root, node)
      } else {
        root.walk(i => {
          value = i.raws[own]
          if (typeof value !== 'undefined') return false
        })
      }
    }

    if (typeof value === 'undefined') value = DEFAULT_RAW[detect]

    cache[detect] = value
    return value
  }

  rawBeforeClose(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== 'undefined') {
          value = i.raws.after
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawBeforeComment(root, node) {
    let value
    root.walkComments(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeDecl(root, node) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeRule')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeOpen(root) {
    let value
    root.walk(i => {
      if (i.type !== 'decl') {
        value = i.raws.between
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawBeforeRule(root) {
    let value
    root.walk(i => {
      if (i.nodes && (i.parent !== root || root.first !== i)) {
        if (typeof i.raws.before !== 'undefined') {
          value = i.raws.before
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawColon(root) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.between !== 'undefined') {
        value = i.raws.between.replace(/[^\s:]/g, '')
        return false
      }
    })
    return value
  }

  rawEmptyBody(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawIndent(root) {
    if (root.raws.indent) return root.raws.indent
    let value
    root.walk(i => {
      let p = i.parent
      if (p && p !== root && p.parent && p.parent === root) {
        if (typeof i.raws.before !== 'undefined') {
          let parts = i.raws.before.split('\n')
          value = parts[parts.length - 1]
          value = value.replace(/\S/g, '')
          return false
        }
      }
    })
    return value
  }

  rawSemicolon(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
        value = i.raws.semicolon
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawValue(node, prop) {
    let value = node[prop]
    let raw = node.raws[prop]
    if (raw && raw.value === value) {
      return raw.raw
    }

    return value
  }

  root(node) {
    this.body(node)
    if (node.raws.after) {
      let after = node.raws.after
      let isDocument = node.parent && node.parent.type === 'document'
      this.builder(isDocument ? after : escapeHTMLInCSS(after))
    }
  }

  rule(node) {
    this.block(node, this.rawValue(node, 'selector'))
    if (node.raws.ownSemicolon) {
      this.builder(escapeHTMLInCSS(node.raws.ownSemicolon), node, 'end')
    }
  }

  stringify(node, semicolon) {
    /* c8 ignore start */
    if (!this[node.type]) {
      throw new Error(
        'Unknown AST node type ' +
          node.type +
          '. ' +
          'Maybe you need to change PostCSS stringifier.'
      )
    }
    /* c8 ignore stop */
    this[node.type](node, semicolon)
  }
}

module.exports = Stringifier
Stringifier.default = Stringifier
