let Declaration = require('../declaration')

class TransformDecl extends Declaration {
  /**
   * Is transform contain 3D commands
   */
  contain3d(decl) {
    if (decl.prop === 'transform-origin') {
      return false
    }

    for (let func of TransformDecl.functions3d) {
      if (decl.value.includes(`${func}(`)) {
        return true
      }
    }

    return false
  }

  /**
   * Don't add prefix for IE in keyframes
   */
  insert(decl, prefix, prefixes) {
    if (prefix === '-ms-') {
      if (!this.contain3d(decl) && !this.keyframeParents(decl)) {
        return super.insert(decl, prefix, prefixes)
      }
    } else if (prefix === '-o-') {
      if (!this.contain3d(decl)) {
        return super.insert(decl, prefix, prefixes)
      }
    } else {
      return super.insert(decl, prefix, prefixes)
    }
    return undefined
  }

  /**
   * Recursively check all parents for @keyframes
   */
  keyframeParents(decl) {
    let { parent } = decl
    while (parent) {
      if (parent.type === 'atrule' && parent.name === 'keyframes') {
        return true
      }
      ;({ parent } = parent)
    }
    return false
  }

  /**
   * Replace rotateZ to rotate for IE 9
   */
  set(decl, prefix) {
    decl = super.set(decl, prefix)
    if (prefix === '-ms-') {
      decl.value = decl.value.replace(/rotatez/gi, 'rotate')
    }
    return decl
  }
}

TransformDecl.names = ['transform', 'transform-origin']

TransformDecl.functions3d = [
  'matrix3d',
  'translate3d',
  'translateZ',
  'scale3d',
  'scaleZ',
  'rotate3d',
  'rotateX',
  'rotateY',
  'perspective'
]

module.exports = TransformDecl
