import JSON5 from './formats/json5.js'
import jsYaml from './formats/yaml.js'
import extname from './extname.js'
const isDeno = typeof Deno !== 'undefined'
const isBun = typeof Bun !== 'undefined'
const YAML = typeof jsYaml !== 'undefined' && jsYaml.load ? jsYaml : undefined
const fs = (!isDeno/* && !isBun */) ? (await import('node:fs')).default : undefined

function dirname (path) {
  if (path.length === 0) return '.'
  let code = path.charCodeAt(0)
  const hasRoot = code === 47
  let end = -1
  let matchedSlash = true
  for (let i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i)
    if (code === 47) {
      if (!matchedSlash) {
        end = i
        break
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false
    }
  }

  if (end === -1) return hasRoot ? '/' : '.'
  if (hasRoot && end === 1) return '//'
  return path.slice(0, end)
}

const writeFileInNodeSync = (filename, payload) => {
  try {
    fs.mkdirSync(dirname(filename), { recursive: true })
  } catch (err) {}
  return fs.writeFileSync(filename, payload, 'utf8')
}

const writeFileInNode = (filename, payload) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirname(filename), { recursive: true }, () => {
      fs.writeFile(filename, payload, 'utf8', (err, data) => err ? reject(err) : resolve(data))
    })
  })
}

const removeFileInNodeSync = (filename) => {
  return fs.unlinkSync(filename)
}

const removeFileInNode = (filename) => {
  return new Promise((resolve, reject) => fs.unlink(filename, (err) => err ? reject(err) : resolve()))
}

const writeFileInDenoSync = (filename, payload) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(payload)
  try {
    // eslint-disable-next-line no-undef
    Deno.mkdirSync(dirname(filename), { recursive: true })
  } catch (err) {}
  // eslint-disable-next-line no-undef
  Deno.writeFileSync(filename, data)
}

const writeFileInDeno = (filename, payload) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(payload)
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    Deno.mkdir(dirname(filename), { recursive: true }).then(() => {
      // eslint-disable-next-line no-undef
      Deno.writeFile(filename, data).then(resolve, reject)
    }).catch(() => {
      // eslint-disable-next-line no-undef
      Deno.writeFile(filename, data).then(resolve, reject)
    })
  })
}

const removeFileInDenoSync = (filename) => {
  // eslint-disable-next-line no-undef
  Deno.removeSync(filename)
}

const removeFileInDeno = (filename) => {
  // eslint-disable-next-line no-undef
  return Deno.remove(filename)
}

const writeFileInBunSync = writeFileInNodeSync // not yet a specific Bun interface

const writeFileInBun = writeFileInNode
// Bun.write generates some error warnings yet...
// const writeFileInBun = (filename, payload) => Bun.write(filename, payload)

const removeFileInBunSync = removeFileInNodeSync // not yet a specific Bun interface

const removeFileInBun = removeFileInNode // not yet a specific Bun interface

const stringifyData = (extension, data, options) => {
  let result = ''
  switch (extension) {
    case '.js':
    case '.ts':
      if (typeof module === 'undefined') {
        result = `export default ${options.stringify(data, null, options.ident)}`
      } else {
        result = `module.exports = ${options.stringify(data, null, options.ident)}`
      }
      break
    case '.json5':
      result = JSON5.stringify(data, null, options.ident)
      break
    case '.yml':
    case '.yaml':
      result = YAML.dump(data, { ident: options.indent })
      break
    default:
      result = options.stringify(data, null, options.ident)
  }
  return result
}

export function writeFileSync (filename, payload, options) {
  const ext = extname(filename)
  let data
  try {
    data = stringifyData(ext, payload, options)
  } catch (err) {
    err.message = 'error stringifying ' + filename + ': ' + err.message
    throw err
  }
  if (isBun) {
    return writeFileInBunSync(filename, data)
  } else if (isDeno) {
    return writeFileInDenoSync(filename, data)
  } else {
    return writeFileInNodeSync(filename, data)
  }
}

export function writeFile (filename, payload, options = { stringify: JSON.stringify, ident: 2 }) {
  const ext = extname(filename)
  let data
  try {
    data = stringifyData(ext, payload, options)
  } catch (err) {
    err.message = 'error stringifying ' + filename + ': ' + err.message
    throw err
  }
  const fn = isBun ? writeFileInBun : isDeno ? writeFileInDeno : writeFileInNode
  return fn(filename, data)
}

export function removeFileSync (filename) {
  if (isBun) {
    return removeFileInBunSync(filename)
  } else if (isDeno) {
    return removeFileInDenoSync(filename)
  } else {
    return removeFileInNodeSync(filename)
  }
}

export function removeFile (filename) {
  const fn = isBun ? removeFileInBun : isDeno ? removeFileInDeno : removeFileInNode
  return fn(filename)
}
