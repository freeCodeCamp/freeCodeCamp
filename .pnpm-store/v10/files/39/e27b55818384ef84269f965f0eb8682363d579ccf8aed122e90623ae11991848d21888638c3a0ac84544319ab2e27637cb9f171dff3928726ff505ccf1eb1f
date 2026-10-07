import JSON5 from './formats/json5.js'
import { parse as parseJSONC } from './formats/jsonc.js'
import jsYaml from './formats/yaml.js'
import extname from './extname.js'
const isDeno = typeof Deno !== 'undefined'
const isBun = typeof Bun !== 'undefined'
const YAML = typeof jsYaml !== 'undefined' && jsYaml.load ? jsYaml : undefined
const fs = (!isDeno/* && !isBun */) ? (await import('node:fs')).default : undefined
// eslint-disable-next-line no-eval
const evalAlias = eval

const readFileInNodeSync = (filename) => {
  const data = fs.readFileSync(filename, 'utf8')
  let stat
  try {
    stat = fs.statSync(filename)
  } catch (e) {}
  return { data, stat }
}

const readFileInNode = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) return reject(err)
      fs.stat(filename, (err, stat) => {
        if (err) return resolve({ data })
        return resolve({ data, stat })
      })
    })
  })
}

const readFileInDenoSync = (filename) => {
  const decoder = new TextDecoder('utf-8')
  // eslint-disable-next-line no-undef
  const d = Deno.readFileSync(filename)
  const data = decoder.decode(d)
  let stat
  try {
    // eslint-disable-next-line no-undef
    stat = Deno.statSync(filename)
  } catch (e) {}
  return { data, stat }
}
const readFileInDeno = (filename) => {
  return new Promise((resolve, reject) => {
    const decoder = new TextDecoder('utf-8')
    // eslint-disable-next-line no-undef
    Deno.readFile(filename).then((d) => {
      const data = decoder.decode(d)
      // eslint-disable-next-line no-undef
      Deno.stat(filename).then((stat) => resolve({ data, stat })).catch(() => resolve({ data }))
    }).catch(reject)
  })
}

const readFileInBunSync = readFileInNodeSync
const readFileInBun = readFileInNode
// const readFileInBun = async (filename) => {
//   const f = Bun.file(filename)
//   const data = await f.text()
//   return { data } // Bun has no stat interface yet
// }

const replaceLast = (str, find, replace) => {
  const index = str.lastIndexOf(find)
  if (index > -1) {
    return str.substring(0, index) + replace + str.substring(index + find.length)
  }
  return str.toString()
}

const parseData = (extension, data, options) => {
  data = data.replace(/^\uFEFF/, '')
  let result = {}
  switch (extension) {
    case '.js':
    case '.ts':
      if (typeof module === 'undefined') {
        if (data.indexOf('exports') > -1) { // just to try...
          data = `(${replaceLast(data.substring(data.indexOf('=') + 1), '};', '')})`
        } else if (data.indexOf('export default ') > -1) { // just to try...
          data = `(${replaceLast(data.substring(data.indexOf('export default ') + 15), '};', '')})`
        }
      }
      result = evalAlias(data)
      break
    case '.json5':
      result = JSON5.parse(data)
      break
    case '.jsonc':
      result = parseJSONC(data)
      break
    case '.yml':
    case '.yaml':
      result = YAML.load(data)
      break
    default:
      result = options.parse(data)
  }
  return result
}

// const resolvePath = (filename) => {
//   return !path.isAbsolute(filename) && typeof process !== 'undefined' && process.cwd && !fs.existsSync(filename) ? path.join(process.cwd(), filename) : filename
// }

export function readFileSync (filename, options) {
  const ext = extname(filename)
  let data, stat
  if (isBun) {
    const ret = readFileInBunSync(filename)
    data = ret.data
    stat = ret.stat
  } else if (isDeno) {
    const ret = readFileInDenoSync(filename)
    data = ret.data
    stat = ret.stat
  } else {
    const ret = readFileInNodeSync(filename)
    data = ret.data
    stat = ret.stat
  }
  return { data: parseData(ext, data, options), stat }
}

export function readFile (filename, options = { parse: JSON.parse }) {
  const ext = extname(filename)
  // if (['.js', '.ts'].indexOf(ext) > -1) {
  //   return import(resolvePath(filename)).then((imp) => {
  //     return { data: (imp && imp.default) || imp }
  //   })
  // }
  const fn = isBun ? readFileInBun : isDeno ? readFileInDeno : readFileInNode
  return new Promise((resolve, reject) => {
    fn(filename).then(({ data, stat }) => {
      try {
        const ret = parseData(ext, data, options)
        resolve({ data: ret, stat })
      } catch (err) {
        err.message = 'error parsing ' + filename + ': ' + err.message
        reject(err)
      }
    }).catch(reject)
  })
}
