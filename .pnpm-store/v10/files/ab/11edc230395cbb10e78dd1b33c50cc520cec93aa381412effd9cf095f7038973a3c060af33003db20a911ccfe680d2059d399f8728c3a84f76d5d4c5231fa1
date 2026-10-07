const { getOptions } = require('loader-utils')
const { stringify } = require('javascript-stringify')
const YAML = require('yaml')

const makeIdIterator = (prefix = 'v', i = 1) => ({ next: () => prefix + i++ })

module.exports = function yamlLoader(src) {
  const { asJSON, asStream, ...options } = Object.assign(
    { prettyErrors: true },
    this.getOptions?.() ?? getOptions(this)
  )
  const namespace =
    (this.resourceQuery &&
      new URLSearchParams(this.resourceQuery).get('namespace')) ||
    options.namespace

  // keep track of repeated object references
  const refs = new Map()
  const idIter = makeIdIterator()
  function addRef(ref, count) {
    if (ref && typeof ref === 'object' && count > 1)
      refs.set(ref, { id: idIter.next(), seen: false })
  }
  const stringifyWithRefs = (value) =>
    stringify(value, (value, space, next) => {
      const v = refs.get(value)
      if (v) {
        if (v.seen) return v.id
        v.seen = true
      }
      return next(value)
    })

  const jsOpt = Object.assign({}, options, {
    namespace: undefined,
    onAnchor: addRef
  })
  if (asJSON) {
    jsOpt.json = true
    jsOpt.mapAsMap = false
  }

  let res
  if (asStream) {
    const stream = YAML.parseAllDocuments(src, options)
    res = []
    for (const doc of stream) {
      for (const warn of doc.warnings) this.emitWarning(warn)
      for (const err of doc.errors) throw err
      res.push(doc.toJS(jsOpt))
    }
  } else {
    const doc = YAML.parseDocument(src, options)
    for (const warn of doc.warnings) this.emitWarning(warn)
    for (const err of doc.errors) {
      if (err.message.includes('Source contains multiple documents')) {
        err.message = err.message.replace(
          'YAML.parseAllDocuments()',
          'yaml-loader asStream option'
        )
      }
      throw err
    }
    if (namespace) doc.contents = doc.getIn(namespace.split('.'))
    res = doc.toJS(jsOpt)
  }

  if (asJSON) return JSON.stringify(res)
  let str = ''
  for (const [obj, { id }] of refs.entries())
    str += `var ${id} = ${stringifyWithRefs(obj)};\n`
  str += `export default ${stringifyWithRefs(res)};`
  return str
}
