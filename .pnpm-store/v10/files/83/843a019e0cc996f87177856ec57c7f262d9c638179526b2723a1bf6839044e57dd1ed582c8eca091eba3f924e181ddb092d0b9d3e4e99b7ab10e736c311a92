'use strict'

const os = require('node:os')
const stdSerializers = require('pino-std-serializers')
const caller = require('./lib/caller')
const redaction = require('./lib/redaction')
const time = require('./lib/time')
const proto = require('./lib/proto')
const symbols = require('./lib/symbols')
const { configure } = require('safe-stable-stringify')
const { assertDefaultLevelFound, mappings, genLsCache, genLevelComparison, assertLevelComparison } = require('./lib/levels')
const { DEFAULT_LEVELS, SORTING_ORDER } = require('./lib/constants')
const {
  createArgsNormalizer,
  asChindings,
  buildSafeSonicBoom,
  buildFormatters,
  stringify,
  normalizeDestFileDescriptor,
  noop
} = require('./lib/tools')
const { version } = require('./lib/meta')
const {
  chindingsSym,
  redactFmtSym,
  serializersSym,
  timeSym,
  timeSliceIndexSym,
  streamSym,
  stringifySym,
  stringifySafeSym,
  stringifiersSym,
  setLevelSym,
  endSym,
  formatOptsSym,
  messageKeySym,
  errorKeySym,
  nestedKeySym,
  mixinSym,
  levelCompSym,
  useOnlyCustomLevelsSym,
  formattersSym,
  hooksSym,
  nestedKeyStrSym,
  mixinMergeStrategySym,
  msgPrefixSym
} = symbols
const { epochTime, nullTime } = time
const { pid } = process
const hostname = os.hostname()
const defaultErrorSerializer = stdSerializers.err
const defaultOptions = {
  level: 'info',
  levelComparison: SORTING_ORDER.ASC,
  levels: DEFAULT_LEVELS,
  messageKey: 'msg',
  errorKey: 'err',
  nestedKey: null,
  enabled: true,
  base: { pid, hostname },
  serializers: Object.assign(Object.create(null), {
    err: defaultErrorSerializer
  }),
  formatters: Object.assign(Object.create(null), {
    bindings (bindings) {
      return bindings
    },
    level (label, number) {
      return { level: number }
    }
  }),
  hooks: {
    logMethod: undefined,
    streamWrite: undefined
  },
  timestamp: epochTime,
  name: undefined,
  redact: null,
  customLevels: null,
  useOnlyCustomLevels: false,
  depthLimit: 5,
  edgeLimit: 100
}

const normalize = createArgsNormalizer(defaultOptions)

const serializers = Object.assign(Object.create(null), stdSerializers)

function pino (...args) {
  const instance = {}
  const { opts, stream } = normalize(instance, caller(), ...args)

  if (opts.level && typeof opts.level === 'string' && DEFAULT_LEVELS[opts.level.toLowerCase()] !== undefined) opts.level = opts.level.toLowerCase()

  const {
    redact,
    crlf,
    serializers,
    timestamp,
    messageKey,
    errorKey,
    nestedKey,
    base,
    name,
    level,
    customLevels,
    levelComparison,
    mixin,
    mixinMergeStrategy,
    useOnlyCustomLevels,
    formatters,
    hooks,
    depthLimit,
    edgeLimit,
    onChild,
    msgPrefix
  } = opts

  const stringifySafe = configure({
    maximumDepth: depthLimit,
    maximumBreadth: edgeLimit
  })

  const allFormatters = buildFormatters(
    formatters.level,
    formatters.bindings,
    formatters.log
  )

  const stringifyFn = stringify.bind({
    [stringifySafeSym]: stringifySafe
  })
  const stringifiers = redact ? redaction(redact, stringifyFn) : {}
  const formatOpts = redact
    ? { stringify: stringifiers[redactFmtSym] }
    : { stringify: stringifyFn }
  const end = '}' + (crlf ? '\r\n' : '\n')
  const coreChindings = asChindings.bind(null, {
    [chindingsSym]: '',
    [serializersSym]: serializers,
    [stringifiersSym]: stringifiers,
    [stringifySym]: stringify,
    [stringifySafeSym]: stringifySafe,
    [formattersSym]: allFormatters
  })

  let chindings = ''
  if (base !== null) {
    if (name === undefined) {
      chindings = coreChindings(base)
    } else {
      chindings = coreChindings(Object.assign({}, base, { name }))
    }
  }

  const time = (timestamp instanceof Function)
    ? timestamp
    : (timestamp ? epochTime : nullTime)
  const timeSliceIndex = time().indexOf(':') + 1

  if (useOnlyCustomLevels && !customLevels) throw Error('customLevels is required if useOnlyCustomLevels is set true')
  if (mixin && typeof mixin !== 'function') throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`)
  if (msgPrefix && typeof msgPrefix !== 'string') throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`)

  assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels)
  const levels = mappings(customLevels, useOnlyCustomLevels)

  if (typeof stream.emit === 'function') {
    stream.emit('message', { code: 'PINO_CONFIG', config: { levels, messageKey, errorKey } })
  }

  assertLevelComparison(levelComparison)
  const levelCompFunc = genLevelComparison(levelComparison)

  Object.assign(instance, {
    levels,
    [levelCompSym]: levelCompFunc,
    [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
    [streamSym]: stream,
    [timeSym]: time,
    [timeSliceIndexSym]: timeSliceIndex,
    [stringifySym]: stringify,
    [stringifySafeSym]: stringifySafe,
    [stringifiersSym]: stringifiers,
    [endSym]: end,
    [formatOptsSym]: formatOpts,
    [messageKeySym]: messageKey,
    [errorKeySym]: errorKey,
    [nestedKeySym]: nestedKey,
    // protect against injection
    [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : '',
    [serializersSym]: serializers,
    [mixinSym]: mixin,
    [mixinMergeStrategySym]: mixinMergeStrategy,
    [chindingsSym]: chindings,
    [formattersSym]: allFormatters,
    [hooksSym]: hooks,
    silent: noop,
    onChild,
    [msgPrefixSym]: msgPrefix
  })

  Object.setPrototypeOf(instance, proto())

  genLsCache(instance)

  instance[setLevelSym](level)

  return instance
}

module.exports = pino

module.exports.destination = (dest = process.stdout.fd) => {
  if (typeof dest === 'object') {
    dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd)
    return buildSafeSonicBoom(dest)
  } else {
    return buildSafeSonicBoom({ dest: normalizeDestFileDescriptor(dest), minLength: 0 })
  }
}

module.exports.transport = require('./lib/transport')
module.exports.multistream = require('./lib/multistream')

module.exports.levels = mappings()
module.exports.stdSerializers = serializers
module.exports.stdTimeFunctions = Object.assign({}, time)
module.exports.symbols = symbols
module.exports.version = version

// Enables default and name export with TypeScript and Babel
module.exports.default = pino
module.exports.pino = pino
