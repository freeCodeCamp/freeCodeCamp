'use strict'
exports.__esModule = true

/**
 * Returns an object of node visitors that will call
 * 'visitor' with every discovered module path.
 *
 * todo: correct function prototype for visitor
 * @param  {Function(String)} visitor [description]
 * @param  {[type]} options [description]
 * @return {object}
 */
exports.default = function visitModules(visitor, options) {
  // if esmodule is not explicitly disabled, it is assumed to be enabled
  options = Object.assign({ esmodule: true }, options)

  let ignoreRegExps = []
  if (options.ignore != null) {
    ignoreRegExps = options.ignore.map(p => new RegExp(p))
  }

  function checkSourceValue(source, importer) {
    if (source == null) return //?

    // handle ignore
    if (ignoreRegExps.some(re => re.test(source.value))) return

    // fire visitor
    visitor(source, importer)
  }

  // for import-y declarations
  function checkSource(node) {
    checkSourceValue(node.source, node)
  }

  // for CommonJS `require` calls
  // adapted from @mctep: http://git.io/v4rAu
  function checkCommon(call) {
    if (call.callee.type !== 'Identifier') return
    if (call.callee.name !== 'require') return
    if (call.arguments.length !== 1) return

    const modulePath = call.arguments[0]
    if (modulePath.type !== 'Literal') return
    if (typeof modulePath.value !== 'string') return

    checkSourceValue(modulePath, call)
  }

  function checkAMD(call) {
    if (call.callee.type !== 'Identifier') return
    if (call.callee.name !== 'require' &&
        call.callee.name !== 'define') return
    if (call.arguments.length !== 2) return

    const modules = call.arguments[0]
    if (modules.type !== 'ArrayExpression') return

    for (let element of modules.elements) {
      if (element.type !== 'Literal') continue
      if (typeof element.value !== 'string') continue

      if (element.value === 'require' ||
          element.value === 'exports') continue // magic modules: http://git.io/vByan

      checkSourceValue(element, element)
    }
  }

  const visitors = {}
  if (options.esmodule) {
    Object.assign(visitors, {
      'ImportDeclaration': checkSource,
      'ExportNamedDeclaration': checkSource,
      'ExportAllDeclaration': checkSource,
    })
  }

  if (options.commonjs || options.amd) {
    visitors['CallExpression'] = function (call) {
      if (options.commonjs) checkCommon(call)
      if (options.amd) checkAMD(call)
    }
  }

  return visitors
}

/**
 * make an options schema for the module visitor, optionally
 * adding extra fields.
 */
function makeOptionsSchema(additionalProperties) {
  const base =  {
    'type': 'object',
    'properties': {
      'commonjs': { 'type': 'boolean' },
      'amd': { 'type': 'boolean' },
      'esmodule': { 'type': 'boolean' },
      'ignore': {
        'type': 'array',
        'minItems': 1,
        'items': { 'type': 'string' },
        'uniqueItems': true,
      },
    },
    'additionalProperties': false,
  }

  if (additionalProperties){
    for (let key in additionalProperties) {
      base.properties[key] = additionalProperties[key]
    }
  }

  return base
}
exports.makeOptionsSchema = makeOptionsSchema

/**
 * json schema object for options parameter. can be used to build
 * rule options schema object.
 * @type {Object}
 */
exports.optionsSchema = makeOptionsSchema()
