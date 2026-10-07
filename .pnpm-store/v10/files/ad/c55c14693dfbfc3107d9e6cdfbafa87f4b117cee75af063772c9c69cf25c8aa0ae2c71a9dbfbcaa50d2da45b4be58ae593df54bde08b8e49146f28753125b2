import { defaults, debounce, getPath, setPath, pushPath, interpolatePath } from './utils.js'
import { readFile, readFileSync } from './readFile.js'
import { writeFile, removeFile } from './writeFile.js'

const getDefaults = () => {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/{{lng}}/{{ns}}.missing.json',
    ident: 2,
    parse: JSON.parse,
    stringify: JSON.stringify
    // expirationTime: 60 * 60 * 1000
  }
}

class Backend {
  constructor (services, options = {}, allOptions = {}) {
    this.services = services
    this.options = options
    this.allOptions = allOptions
    this.type = 'backend'
    this.init(services, options, allOptions)
  }

  init (services, options = {}, allOptions = {}) {
    this.services = services
    this.options = defaults(options, this.options || {}, getDefaults())
    this.allOptions = allOptions
    this.queuedWrites = {}
    this.debouncedWrite = debounce(this.write, 250)
  }

  read (language, namespace, callback) {
    let loadPath = this.options.loadPath
    if (typeof this.options.loadPath === 'function') {
      loadPath = this.options.loadPath(language, namespace)
    }
    const filename = interpolatePath(loadPath, { lng: language, ns: namespace })
    if (filename == null) {
      return callback(new Error('i18next-fs-backend: unsafe lng/ns value — refusing to build filesystem path'), false)
    }
    if (this.allOptions.initAsync === false || this.allOptions.initImmediate === false) {
      try {
        const { data, stat } = readFileSync(filename, this.options)
        const timestamp = stat && stat.mtime && stat.mtime.getTime()
        if (this.options.expirationTime && timestamp && timestamp + this.options.expirationTime < Date.now()) {
          this.removeFile(language, namespace)
          return callback(new Error('File expired!'), false) // no retry
        }
        callback(null, data, timestamp)
      } catch (err) {
        callback(err, false) // no retry
      }
      return
    }
    readFile(filename, this.options)
      .then(({ data, stat }) => {
        const timestamp = stat && stat.mtime && stat.mtime.getTime()
        if (this.options.expirationTime && timestamp && timestamp + this.options.expirationTime < Date.now()) {
          this.removeFile(language, namespace)
          return callback(new Error('File expired!'), false) // no retry
        }
        callback(null, data, timestamp)
      })
      .catch((err) => callback(err, false)) // no retry
  }

  create (languages, namespace, key, fallbackValue, callback) {
    if (typeof callback !== 'function') callback = () => {}
    if (typeof languages === 'string') languages = [languages]

    let todo = languages.length
    const done = () => {
      if (!--todo) callback()
    }

    languages.forEach((lng) => {
      // eslint-disable-next-line no-useless-call
      this.queue.call(this, lng, namespace, key, fallbackValue, done)
    })
  }

  // this way i18next-fs-backend can be used as cache layer in combination with i18next-chained-backend
  save (language, namespace, data, callback) {
    if (!callback) callback = () => {}

    const keys = Object.keys(data)
    let todo = keys.length
    const done = () => {
      if (!--todo) callback()
    }

    keys.forEach((key) => {
      // eslint-disable-next-line no-useless-call
      this.queue.call(this, language, namespace, key, data[key], done)
    })
  }

  removeFile (language, namespace) {
    let addPath = this.options.addPath
    if (typeof this.options.addPath === 'function') {
      addPath = this.options.addPath(language, namespace)
    }
    const filename = interpolatePath(addPath, { lng: language, ns: namespace })
    if (filename == null) return
    removeFile(filename, this.options)
      .then(() => {})
      .catch(() => {})
  }

  write () {
    // Own enumerable keys only: `for...in` walks the prototype chain, so an
    // Object.prototype polluted by any other library in the process would be
    // iterated here and turned into writeFile() calls. setPath/pushPath
    // already refuse to create unsafe own keys, and interpolatePath still
    // validates before anything is written, so this closes the amplification
    // rather than a traversal.
    for (const lng of Object.keys(this.queuedWrites)) {
      const namespaces = this.queuedWrites[lng]
      if (lng !== 'locks') {
        for (const ns of Object.keys(namespaces)) {
          this.writeFile(lng, ns)
        }
      }
    }
  }

  writeFile (lng, namespace) {
    const lock = getPath(this.queuedWrites, ['locks', lng, namespace])
    if (lock) return

    let addPath = this.options.addPath
    if (typeof this.options.addPath === 'function') {
      addPath = this.options.addPath(lng, namespace)
    }

    const filename = interpolatePath(addPath, { lng, ns: namespace })
    if (filename == null) {
      // drop unsafe queued writes silently — attempting to persist them
      // would either fail or (worse) land in an unexpected filesystem location
      setPath(this.queuedWrites, [lng, namespace], [])
      return
    }

    const missings = getPath(this.queuedWrites, [lng, namespace])
    setPath(this.queuedWrites, [lng, namespace], [])

    if (missings.length) {
      // lock
      setPath(this.queuedWrites, ['locks', lng, namespace], true)

      const proceed = ({ data }) => {
        missings.forEach((missing) => {
          const path = this.allOptions.keySeparator === false ? [missing.key] : (missing.key.split(this.allOptions.keySeparator || '.'))
          try {
            setPath(data, path, missing.fallbackValue)
          } catch (e) {
            if (path.length < 2 || !e.message || (e.message.indexOf('Cannot create property') < 0)) throw e
            setPath(data, [missing.key], missing.fallbackValue)
          }
        })

        const proceedWrite = () => {
          // unlock
          setPath(this.queuedWrites, ['locks', lng, namespace], false)
          missings.forEach((missing) => {
            if (missing.callback) missing.callback()
          })
          // rerun
          this.debouncedWrite()
        }
        writeFile(filename, data, this.options)
          .then(proceedWrite)
          .catch(proceedWrite)
      }
      readFile(filename, this.options).then(proceed).catch(() => proceed({ data: {} }))
    }
  }

  queue (lng, namespace, key, fallbackValue, callback) {
    pushPath(this.queuedWrites, [lng, namespace], { key, fallbackValue: fallbackValue || '', callback })
    this.debouncedWrite()
  }
}

Backend.type = 'backend'

export default Backend
