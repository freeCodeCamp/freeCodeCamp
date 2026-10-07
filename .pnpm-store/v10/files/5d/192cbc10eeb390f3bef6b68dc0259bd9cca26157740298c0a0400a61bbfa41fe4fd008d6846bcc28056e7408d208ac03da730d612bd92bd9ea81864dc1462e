var bbm = require('baseline-browser-mapping')
var jsReleases = require('node-releases/data/processed/envs.json')
var agents = require('caniuse-lite/dist/unpacker/agents').agents
var e2c = require('electron-to-chromium/versions')
var jsEOL = require('node-releases/data/release-schedule/release-schedule.json')
var path = require('path')

var BrowserslistError = require('./error')
var env = require('./node')
var parseWithoutCache = require('./parse') // Will load browser.js in webpack

var YEAR = 365.259641 * 24 * 60 * 60 * 1000
var ANDROID_EVERGREEN_FIRST = '37'
var OP_MOB_BLINK_FIRST = 14
var FIREFOX_ESR_VERSION = '140'

// Helpers

function isVersionsMatch(versionA, versionB) {
  return (versionA + '.').indexOf(versionB + '.') === 0
}

function isEolReleased(name) {
  var version = name.slice(1)
  return browserslist.nodeVersions.some(function (i) {
    return isVersionsMatch(i, version)
  })
}

function normalize(versions) {
  return versions.filter(function (version) {
    return typeof version === 'string'
  })
}

function normalizeElectron(version) {
  var versionToUse = version
  if (version.split('.').length === 3) {
    versionToUse = version.split('.').slice(0, -1).join('.')
  }
  return versionToUse
}

function nameMapper(name) {
  return function mapName(version) {
    return name + ' ' + version
  }
}

function getMajor(version) {
  return parseInt(version.split('.')[0])
}

function getMajorVersions(released, number) {
  if (released.length === 0) return []
  var majorVersions = uniq(released.map(getMajor))
  var minimum = majorVersions[majorVersions.length - number]
  if (!minimum) {
    return released
  }
  var selected = []
  for (var i = released.length - 1; i >= 0; i--) {
    if (minimum > getMajor(released[i])) break
    selected.unshift(released[i])
  }
  return selected
}

function uniq(array) {
  var filtered = []
  for (var i = 0; i < array.length; i++) {
    if (filtered.indexOf(array[i]) === -1) filtered.push(array[i])
  }
  return filtered
}

function fillUsage(result, name, data) {
  for (var i in data) {
    result[name + ' ' + i] = data[i]
  }
}

function generateFilter(sign, version) {
  version = parseFloat(version)
  if (sign === '>') {
    return function (v) {
      return parseLatestFloat(v) > version
    }
  } else if (sign === '>=') {
    return function (v) {
      return parseLatestFloat(v) >= version
    }
  } else if (sign === '<') {
    return function (v) {
      return parseFloat(v) < version
    }
  } else {
    return function (v) {
      return parseFloat(v) <= version
    }
  }

  function parseLatestFloat(v) {
    return parseFloat(v.split('-')[1] || v)
  }
}

function generateSemverFilter(sign, version) {
  version = version.split('.').map(parseSimpleInt)
  version[1] = version[1] || 0
  version[2] = version[2] || 0
  if (sign === '>') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) > 0
    }
  } else if (sign === '>=') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) >= 0
    }
  } else if (sign === '<') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) > 0
    }
  } else {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) >= 0
    }
  }
}

function parseSimpleInt(x) {
  return parseInt(x)
}

function compare(a, b) {
  if (a < b) return -1
  if (a > b) return +1
  return 0
}

function compareSemver(a, b) {
  return (
    compare(parseInt(a[0]), parseInt(b[0])) ||
    compare(parseInt(a[1] || '0'), parseInt(b[1] || '0')) ||
    compare(parseInt(a[2] || '0'), parseInt(b[2] || '0'))
  )
}

// this follows the npm-like semver behavior
function semverFilterLoose(operator, range) {
  range = range.split('.').map(parseSimpleInt)
  if (typeof range[1] === 'undefined') {
    range[1] = 'x'
  }
  // ignore any patch version because we only return minor versions
  // range[2] = 'x'
  switch (operator) {
    case '<=':
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) <= 0
      }
    case '>=':
    default:
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) >= 0
      }
  }
}

// this follows the npm-like semver behavior
function compareSemverLoose(version, range) {
  if (version[0] !== range[0]) {
    return version[0] < range[0] ? -1 : +1
  }
  if (range[1] === 'x') {
    return 0
  }
  if (version[1] !== range[1]) {
    return version[1] < range[1] ? -1 : +1
  }
  return 0
}

function resolveVersion(data, version) {
  if (data.versions.indexOf(version) !== -1) {
    return version
  } else if (browserslist.versionAliases[data.name][version]) {
    return browserslist.versionAliases[data.name][version]
  } else {
    return false
  }
}

function normalizeVersion(data, version) {
  var resolved = resolveVersion(data, version)
  if (resolved) {
    return resolved
  } else if (data.versions.length === 1) {
    return data.versions[0]
  } else {
    return false
  }
}

function filterByYear(since, context) {
  since = since / 1000
  return Object.keys(agents).reduce(function (selected, name) {
    var data = byName(name, context)
    if (!data) return selected
    var versions = Object.keys(data.releaseDate).filter(function (v) {
      var date = data.releaseDate[v]
      return date !== null && date >= since
    })
    return selected.concat(versions.map(nameMapper(data.name)))
  }, [])
}

function cloneData(data) {
  return {
    name: data.name,
    versions: data.versions,
    released: data.released,
    releaseDate: data.releaseDate
  }
}

function byName(name, context) {
  name = name.toLowerCase()
  name = browserslist.aliases[name] || name
  if (context.mobileToDesktop && browserslist.desktopNames[name]) {
    var desktop = browserslist.data[browserslist.desktopNames[name]]
    if (name === 'android') {
      return normalizeAndroidData(cloneData(browserslist.data[name]), desktop)
    } else {
      var cloned = cloneData(desktop)
      cloned.name = name
      return cloned
    }
  }
  return browserslist.data[name]
}

function normalizeAndroidVersions(androidVersions, chromeVersions) {
  var iFirstEvergreen = chromeVersions.indexOf(ANDROID_EVERGREEN_FIRST)
  return androidVersions
    .filter(function (version) {
      return /^(?:[2-4]\.|[34]$)/.test(version)
    })
    .concat(chromeVersions.slice(iFirstEvergreen))
}

var DANGEROUS_KEYS = ['__proto__', 'constructor', 'prototype']

function copyObject(obj) {
  var copy = {}
  for (var key in obj) {
    if (DANGEROUS_KEYS.indexOf(key) === -1) {
      copy[key] = obj[key]
    }
  }
  return copy
}

function normalizeAndroidData(android, chrome) {
  android.released = normalizeAndroidVersions(android.released, chrome.released)
  android.versions = normalizeAndroidVersions(android.versions, chrome.versions)
  android.releaseDate = copyObject(android.releaseDate)
  android.released.forEach(function (v) {
    if (android.releaseDate[v] === undefined) {
      android.releaseDate[v] = chrome.releaseDate[v]
    }
  })
  return android
}

function checkName(name, context) {
  var data = byName(name, context)
  if (!data) throw new BrowserslistError('Unknown browser ' + name)
  return data
}

function unknownQuery(query) {
  return new BrowserslistError(
    'Unknown browser query `' +
      query +
      '`. ' +
      'Maybe you are using old Browserslist or made typo in query.'
  )
}

// Adjusts last X versions queries for some mobile browsers,
// where caniuse data jumps from a legacy version to the latest
function filterJumps(list, name, nVersions, context) {
  var jump = 1
  switch (name) {
    case 'android':
      if (context.mobileToDesktop) return list
      var released = browserslist.data.chrome.released
      jump = released.length - released.indexOf(ANDROID_EVERGREEN_FIRST)
      break
    case 'op_mob':
      var latest = browserslist.data.op_mob.released.slice(-1)[0]
      jump = getMajor(latest) - OP_MOB_BLINK_FIRST + 1
      break
    default:
      return list
  }
  if (nVersions <= jump) {
    return list.slice(-1)
  }
  return list.slice(jump - 1 - nVersions)
}

function isSupported(flags, withPartial) {
  return (
    typeof flags === 'string' &&
    (flags.indexOf('y') >= 0 || (withPartial && flags.indexOf('a') >= 0))
  )
}

function resolve(queries, context) {
  return parseQueries(queries).reduce(function (result, node, index) {
    if (node.not && index === 0) {
      throw new BrowserslistError(
        'Write any browsers query (for instance, `defaults`) ' +
          'before `' +
          node.query +
          '`'
      )
    }
    var type = QUERIES[node.type]
    var array = type.select.call(browserslist, context, node).map(function (j) {
      var parts = j.split(' ')
      if (parts[1] === '0') {
        return parts[0] + ' ' + byName(parts[0], context).versions[0]
      } else {
        return j
      }
    })

    if (node.compose === 'and') {
      if (node.not) {
        return result.filter(function (j) {
          return array.indexOf(j) === -1
        })
      } else {
        return result.filter(function (j) {
          return array.indexOf(j) !== -1
        })
      }
    } else {
      if (node.not) {
        var filter = {}
        array.forEach(function (j) {
          filter[j] = true
        })
        return result.filter(function (j) {
          return !filter[j]
        })
      }
      return result.concat(array)
    }
  }, [])
}

function prepareOpts(opts) {
  if (typeof opts === 'undefined') opts = {}

  if (typeof opts.path === 'undefined') {
    opts.path = path.resolve ? path.resolve('.') : '.'
  }

  return opts
}

function prepareQueries(queries, opts) {
  if (typeof queries === 'undefined' || queries === null) {
    var config = browserslist.loadConfig(opts)
    if (config) {
      queries = config
    } else {
      queries = browserslist.defaults
    }
  }

  return queries
}

function checkQueries(queries) {
  if (!(typeof queries === 'string' || Array.isArray(queries))) {
    throw new BrowserslistError(
      'Browser queries must be an array or string. Got ' + typeof queries + '.'
    )
  }
}

var cache = {}
var parseCache = {}

function browserslist(queries, opts) {
  opts = prepareOpts(opts)
  queries = prepareQueries(queries, opts)
  checkQueries(queries)

  var needsPath = parseQueries(queries).some(function (node) {
    return QUERIES[node.type].needsPath
  })
  var context = {
    ignoreUnknownVersions: opts.ignoreUnknownVersions,
    dangerousExtend: opts.dangerousExtend,
    throwOnMissing: opts.throwOnMissing,
    mobileToDesktop: opts.mobileToDesktop,
    env: opts.env
  }
  // Removing to avoid using context.path without marking query as needsPath
  if (needsPath) {
    context.path = opts.path
  }

  env.oldDataWarning(browserslist.data)
  var stats = env.getStat(opts, browserslist.data)
  if (stats) {
    context.customUsage = {}
    for (var browser in stats) {
      fillUsage(context.customUsage, browser, stats[browser])
    }
  }

  var cacheKey = JSON.stringify([queries, context])
  if (cache[cacheKey]) return cache[cacheKey]

  var result = uniq(resolve(queries, context)).sort(function (name1, name2) {
    name1 = name1.split(' ')
    name2 = name2.split(' ')
    if (name1[0] === name2[0]) {
      // assumptions on caniuse data
      // 1) version ranges never overlaps
      // 2) if version is not a range, it never contains `-`
      var version1 = name1[1].split('-')[0]
      var version2 = name2[1].split('-')[0]
      return compareSemver(version2.split('.'), version1.split('.'))
    } else {
      return compare(name1[0], name2[0])
    }
  })
  if (!env.env.BROWSERSLIST_DISABLE_CACHE) {
    cache[cacheKey] = result
  }
  return result
}

function parseQueries(queries) {
  var cacheKey = JSON.stringify(queries)
  if (cacheKey in parseCache) return parseCache[cacheKey]
  var result = parseWithoutCache(QUERIES, queries)
  if (!env.env.BROWSERSLIST_DISABLE_CACHE) {
    parseCache[cacheKey] = result
  }
  return result
}

function loadCustomUsage(context, config) {
  var stats = env.loadStat(context, config, browserslist.data)
  if (stats) {
    context.customUsage = {}
    for (var browser in stats) {
      fillUsage(context.customUsage, browser, stats[browser])
    }
  }
  if (!context.customUsage) {
    throw new BrowserslistError('Custom usage statistics was not provided')
  }
  return context.customUsage
}

browserslist.parse = function (queries, opts) {
  opts = prepareOpts(opts)
  queries = prepareQueries(queries, opts)
  checkQueries(queries)
  return parseQueries(queries)
}

// Will be filled by Can I Use data below
browserslist.cache = {}
browserslist.data = {}
browserslist.usage = {
  global: {},
  custom: null
}

// Default browsers query
browserslist.defaults = ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']

// Browser names aliases
browserslist.aliases = {
  fx: 'firefox',
  ff: 'firefox',
  ios: 'ios_saf',
  explorer: 'ie',
  blackberry: 'bb',
  explorermobile: 'ie_mob',
  operamini: 'op_mini',
  operamobile: 'op_mob',
  chromeandroid: 'and_chr',
  firefoxandroid: 'and_ff',
  ucandroid: 'and_uc',
  qqandroid: 'and_qq'
}

// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
// Note op_mob is not included as its chromium versions are not in sync with Opera desktop
browserslist.desktopNames = {
  and_chr: 'chrome',
  and_ff: 'firefox',
  ie_mob: 'ie',
  android: 'chrome' // has extra processing logic
}

// Aliases to work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = {}

browserslist.clearCaches = env.clearCaches
browserslist.parseConfig = env.parseConfig
browserslist.readConfig = env.readConfig
browserslist.findConfigFile = env.findConfigFile
browserslist.findConfig = env.findConfig
browserslist.loadConfig = env.loadConfig

browserslist.coverage = function (browsers, stats) {
  var data
  if (typeof stats === 'undefined') {
    data = browserslist.usage.global
  } else if (stats === 'my stats') {
    var opts = {}
    opts.path = path.resolve ? path.resolve('.') : '.'
    var customStats = env.getStat(opts)
    if (!customStats) {
      throw new BrowserslistError('Custom usage statistics was not provided')
    }
    data = {}
    for (var browser in customStats) {
      fillUsage(data, browser, customStats[browser])
    }
  } else if (typeof stats === 'string') {
    if (stats.length > 2) {
      stats = stats.toLowerCase()
    } else {
      stats = stats.toUpperCase()
    }
    env.loadCountry(browserslist.usage, stats, browserslist.data)
    data = browserslist.usage[stats]
  } else {
    if ('dataByBrowser' in stats) {
      stats = stats.dataByBrowser
    }
    data = {}
    for (var name in stats) {
      for (var version in stats[name]) {
        data[name + ' ' + version] = stats[name][version]
      }
    }
  }

  return browsers.reduce(function (all, i) {
    var usage = data[i]
    if (usage === undefined) {
      usage = data[i.replace(/ \S+$/, ' 0')]
    }
    return all + (usage || 0)
  }, 0)
}

function nodeQuery(context, node) {
  var matched = browserslist.nodeVersions.filter(function (i) {
    return isVersionsMatch(i, node.version)
  })
  if (matched.length === 0) {
    if (context.ignoreUnknownVersions) {
      return []
    } else {
      throw new BrowserslistError(
        'Unknown version ' + node.version + ' of Node.js'
      )
    }
  }
  return ['node ' + matched[matched.length - 1]]
}

function sinceQuery(context, node) {
  var year = parseInt(node.year)
  var month = parseInt(node.month || '01') - 1
  var day = parseInt(node.day || '01')
  return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context)
}

function bbmTransform(bbmVersions) {
  var browsers = {
    chrome: 'chrome',
    chrome_android: 'and_chr',
    edge: 'edge',
    firefox: 'firefox',
    firefox_android: 'and_ff',
    safari: 'safari',
    safari_ios: 'ios_saf',
    webview_android: 'android',
    samsunginternet_android: 'samsung',
    opera_android: 'op_mob',
    opera: 'opera',
    qq_android: 'and_qq',
    uc_android: 'and_uc',
    kai_os: 'kaios'
  }

  return bbmVersions
    .filter(function (version) {
      return Object.keys(browsers).indexOf(version.browser) !== -1
    })
    .map(function (version) {
      return browsers[version.browser] + ' >= ' + version.version
    })
}

function coverQuery(context, node) {
  var coverage = parseFloat(node.coverage)
  var usage = browserslist.usage.global
  if (node.place) {
    if (node.place.match(/^my\s+stats$/i)) {
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      usage = context.customUsage
    } else {
      var place
      if (node.place.length === 2) {
        place = node.place.toUpperCase()
      } else {
        place = node.place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      usage = browserslist.usage[place]
    }
  } else if (node.config) {
    usage = loadCustomUsage(context, node.config)
  }
  var versions = Object.keys(usage).sort(function (a, b) {
    return usage[b] - usage[a]
  })
  var covered = 0
  var result = []
  var version
  for (var i = 0; i < versions.length; i++) {
    version = versions[i]
    if (usage[version] === 0) break
    covered += usage[version]
    result.push(version)
    if (covered >= coverage) break
  }
  return result
}

var QUERIES = {
  last_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = getMajorVersions(data.released, node.versions)
        list = list.map(nameMapper(data.name))
        list = filterJumps(list, data.name, node.versions, context)
        return selected.concat(list)
      }, [])
    }
  },
  last_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.released.slice(-node.versions)
        list = list.map(nameMapper(data.name))
        list = filterJumps(list, data.name, node.versions, context)
        return selected.concat(list)
      }, [])
    }
  },
  last_electron_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
    select: function (context, node) {
      var validVersions = getMajorVersions(Object.keys(e2c), node.versions)
      return validVersions.map(function (i) {
        return 'chrome ' + e2c[i]
      })
    }
  },
  last_node_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
    select: function (context, node) {
      return getMajorVersions(browserslist.nodeVersions, node.versions).map(
        function (version) {
          return 'node ' + version
        }
      )
    }
  },
  last_browser_major_versions: {
    matches: ['versions', 'browser'],
    regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var validVersions = getMajorVersions(data.released, node.versions)
      var list = validVersions.map(nameMapper(data.name))
      list = filterJumps(list, data.name, node.versions, context)
      return list
    }
  },
  last_electron_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(e2c)
        .slice(-node.versions)
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  last_node_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .slice(-node.versions)
        .map(function (version) {
          return 'node ' + version
        })
    }
  },
  last_browser_versions: {
    matches: ['versions', 'browser'],
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var list = data.released.slice(-node.versions).map(nameMapper(data.name))
      list = filterJumps(list, data.name, node.versions, context)
      return list
    }
  },
  unreleased_versions: {
    matches: [],
    regexp: /^unreleased\s+versions$/i,
    select: function (context) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.versions.filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        list = list.map(nameMapper(data.name))
        return selected.concat(list)
      }, [])
    }
  },
  unreleased_electron_versions: {
    matches: [],
    regexp: /^unreleased\s+electron\s+versions?$/i,
    select: function () {
      return []
    }
  },
  unreleased_browser_versions: {
    matches: ['browser'],
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      return data.versions
        .filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        .map(nameMapper(data.name))
    }
  },
  last_years: {
    matches: ['years'],
    regexp: /^last\s+((\d+\.)?\d+)\s+years?$/i,
    select: function (context, node) {
      return filterByYear(Date.now() - YEAR * node.years, context)
    }
  },
  since_y: {
    matches: ['year'],
    regexp: /^since (\d+)$/i,
    select: sinceQuery
  },
  since_y_m: {
    matches: ['year', 'month'],
    regexp: /^since (\d+)-(\d+)$/i,
    select: sinceQuery
  },
  since_y_m_d: {
    matches: ['year', 'month', 'day'],
    regexp: /^since (\d+)-(\d+)-(\d+)$/i,
    select: sinceQuery
  },
  baseline: {
    matches: ['year', 'availability', 'date', 'downstream', 'kaios'],
    // Matches:
    //   baseline 2024
    //   baseline newly available
    //   baseline widely available
    //   baseline widely available on 2024-06-01
    //   ...with downstream
    //   ...including kaios
    regexp:
      /^baseline\s+(?:(\d+)|(newly|widely)\s+available(?:\s+on\s+(\d{4}-\d{2}-\d{2}))?)?(\s+with\s+downstream)?(\s+including\s+kaios)?$/i,
    select: function (context, node) {
      var baselineVersions
      var includeDownstream = !!node.downstream
      var includeKaiOS = !!node.kaios
      if (node.availability === 'newly' && node.date) {
        throw new BrowserslistError(
          'Using newly available with a date is not supported, please use "widely available on YYYY-MM-DD" and add 30 months to the date you specified.'
        )
      }
      if (node.year) {
        baselineVersions = bbm.getCompatibleVersions({
          targetYear: node.year,
          includeDownstreamBrowsers: includeDownstream,
          includeKaiOS: includeKaiOS,
          suppressWarnings: true
        })
      } else if (node.date) {
        baselineVersions = bbm.getCompatibleVersions({
          widelyAvailableOnDate: node.date,
          includeDownstreamBrowsers: includeDownstream,
          includeKaiOS: includeKaiOS,
          suppressWarnings: true
        })
      } else if (node.availability === 'newly') {
        var future30months = new Date().setMonth(new Date().getMonth() + 30)
        baselineVersions = bbm.getCompatibleVersions({
          widelyAvailableOnDate: future30months,
          includeDownstreamBrowsers: includeDownstream,
          includeKaiOS: includeKaiOS,
          suppressWarnings: true
        })
      } else {
        baselineVersions = bbm.getCompatibleVersions({
          includeDownstreamBrowsers: includeDownstream,
          includeKaiOS: includeKaiOS,
          suppressWarnings: true
        })
      }
      return resolve(bbmTransform(baselineVersions), context)
    }
  },
  popularity: {
    matches: ['sign', 'popularity'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var usage = browserslist.usage.global
      return Object.keys(usage).reduce(function (result, version) {
        if (node.sign === '>') {
          if (usage[version] > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (usage[version] < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (usage[version] <= popularity) {
            result.push(version)
          }
        } else if (usage[version] >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_my_stats: {
    matches: ['sign', 'popularity'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_config_stats: {
    matches: ['sign', 'popularity', 'config'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var usage = loadCustomUsage(context, node.config)
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_place: {
    matches: ['sign', 'popularity', 'place'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var place = node.place
      if (place.length === 2) {
        place = place.toUpperCase()
      } else {
        place = place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      var usage = browserslist.usage[place]
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  cover: {
    matches: ['coverage'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
    select: coverQuery
  },
  cover_in: {
    matches: ['coverage', 'place'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
    select: coverQuery
  },
  cover_config: {
    matches: ['coverage', 'config'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/i,
    select: coverQuery
  },
  supports: {
    matches: ['supportType', 'feature'],
    regexp: /^(?:(fully|partially)\s+)?supports\s+([\w-]+)$/,
    select: function (context, node) {
      env.loadFeature(browserslist.cache, node.feature)
      var withPartial = node.supportType !== 'fully'
      var features = browserslist.cache[node.feature]
      var result = []
      for (var name in features) {
        var data = byName(name, context)
        // Only check desktop when latest released mobile has support
        var iMax = data.released.length - 1
        while (iMax >= 0) {
          if (data.released[iMax] in features[name]) break
          iMax--
        }
        var checkDesktop =
          context.mobileToDesktop &&
          name in browserslist.desktopNames &&
          isSupported(features[name][data.released[iMax]], withPartial)
        data.versions.forEach(function (version) {
          var flags = features[name][version]
          if (flags === undefined && checkDesktop) {
            flags = features[browserslist.desktopNames[name]][version]
          }
          if (isSupported(flags, withPartial)) {
            result.push(name + ' ' + version)
          }
        })
      }
      return result
    }
  },
  electron_range: {
    matches: ['from', 'to'],
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      var fromToUse = normalizeElectron(node.from)
      var toToUse = normalizeElectron(node.to)
      var from = parseFloat(node.from)
      var to = parseFloat(node.to)
      if (!e2c[fromToUse]) {
        throw new BrowserslistError('Unknown version ' + from + ' of electron')
      }
      if (!e2c[toToUse]) {
        throw new BrowserslistError('Unknown version ' + to + ' of electron')
      }
      return Object.keys(e2c)
        .filter(function (i) {
          var parsed = parseFloat(i)
          return parsed >= from && parsed <= to
        })
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  node_range: {
    matches: ['from', 'to'],
    regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .filter(semverFilterLoose('>=', node.from))
        .filter(semverFilterLoose('<=', node.to))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  browser_range: {
    matches: ['browser', 'from', 'to'],
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var from = parseFloat(normalizeVersion(data, node.from) || node.from)
      var to = parseFloat(normalizeVersion(data, node.to) || node.to)
      function filter(v) {
        var parsed = parseFloat(v)
        return parsed >= from && parsed <= to
      }
      return data.released.filter(filter).map(nameMapper(data.name))
    }
  },
  electron_ray: {
    matches: ['sign', 'version'],
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, node) {
      var versionToUse = normalizeElectron(node.version)
      return Object.keys(e2c)
        .filter(generateFilter(node.sign, versionToUse))
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  node_ray: {
    matches: ['sign', 'version'],
    regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .filter(generateSemverFilter(node.sign, node.version))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  browser_ray: {
    matches: ['browser', 'sign', 'version'],
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+|esr)$/i,
    select: function (context, node) {
      var version = node.version
      var data = checkName(node.browser, context)
      var alias = browserslist.versionAliases[data.name][version.toLowerCase()]
      if (alias) version = alias
      if (!/[\d.]+/.test(version)) {
        throw new BrowserslistError(
          'Unknown version ' + version + ' of ' + node.browser
        )
      }
      return data.released
        .filter(generateFilter(node.sign, version))
        .map(function (v) {
          return data.name + ' ' + v
        })
    }
  },
  firefox_esr: {
    matches: [],
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function () {
      return ['firefox ' + FIREFOX_ESR_VERSION]
    }
  },
  opera_mini_all: {
    matches: [],
    regexp: /(operamini|op_mini)\s+all/i,
    select: function () {
      return ['op_mini all']
    }
  },
  electron_version: {
    matches: ['version'],
    regexp: /^electron\s+([\d.]+)$/i,
    select: function (context, node) {
      var versionToUse = normalizeElectron(node.version)
      var chrome = e2c[versionToUse]
      if (!chrome) {
        throw new BrowserslistError(
          'Unknown version ' + node.version + ' of electron'
        )
      }
      return ['chrome ' + chrome]
    }
  },
  node_major_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+)$/i,
    select: nodeQuery
  },
  node_minor_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+\.\d+)$/i,
    select: nodeQuery
  },
  node_patch_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
    select: nodeQuery
  },
  current_node: {
    matches: [],
    regexp: /^current\s+node$/i,
    select: function (context) {
      return [env.currentNode(resolve, context)]
    }
  },
  maintained_node: {
    matches: [],
    regexp: /^maintained\s+node\s+versions$/i,
    select: function (context) {
      var now = Date.now()
      var queries = Object.keys(jsEOL)
        .filter(function (key) {
          return (
            now < Date.parse(jsEOL[key].end) &&
            now > Date.parse(jsEOL[key].start) &&
            isEolReleased(key)
          )
        })
        .map(function (key) {
          return 'node ' + key.slice(1)
        })
      return resolve(queries, context)
    }
  },
  phantomjs_1_9: {
    matches: [],
    regexp: /^phantomjs\s+1.9$/i,
    select: function () {
      return ['safari 5']
    }
  },
  phantomjs_2_1: {
    matches: [],
    regexp: /^phantomjs\s+2.1$/i,
    select: function () {
      return ['safari 6']
    }
  },
  browser_version: {
    matches: ['browser', 'version'],
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function (context, node) {
      var version = node.version
      if (/^tp$/i.test(version)) version = 'TP'
      var data = checkName(node.browser, context)
      var alias = normalizeVersion(data, version)
      if (alias) {
        version = alias
      } else {
        if (version.indexOf('.') === -1) {
          alias = version + '.0'
        } else {
          alias = version.replace(/\.0$/, '')
        }
        alias = normalizeVersion(data, alias)
        if (alias) {
          version = alias
        } else if (context.ignoreUnknownVersions) {
          return []
        } else {
          throw new BrowserslistError(
            'Unknown version ' + version + ' of ' + node.browser
          )
        }
      }
      return [data.name + ' ' + version]
    }
  },
  browserslist_config: {
    matches: [],
    regexp: /^browserslist config$/i,
    needsPath: true,
    select: function (context) {
      return browserslist(undefined, context)
    }
  },
  extends: {
    matches: ['config'],
    regexp: /^extends (.+)$/i,
    needsPath: true,
    select: function (context, node) {
      return resolve(env.loadQueries(context, node.config), context)
    }
  },
  defaults: {
    matches: [],
    regexp: /^defaults$/i,
    select: function (context) {
      return resolve(browserslist.defaults, context)
    }
  },
  dead: {
    matches: [],
    regexp: /^dead$/i,
    select: function (context) {
      var dead = [
        'Baidu >= 0',
        'ie <= 11',
        'ie_mob <= 11',
        'bb <= 10',
        'op_mob <= 12.1',
        'samsung 4'
      ]
      return resolve(dead, context)
    }
  },
  unknown: {
    matches: [],
    regexp: /^(\w+)$/i,
    select: function (context, node) {
      if (byName(node.query, context)) {
        throw new BrowserslistError(
          'Specify versions in Browserslist query for browser ' + node.query
        )
      } else {
        throw unknownQuery(node.query)
      }
    }
  }
}

// Get and convert Can I Use data

;(function () {
  for (var name in agents) {
    var browser = agents[name]
    browserslist.data[name] = {
      name: name,
      versions: normalize(agents[name].versions),
      released: normalize(agents[name].versions.slice(0, -3)),
      releaseDate: agents[name].release_date
    }
    fillUsage(browserslist.usage.global, name, browser.usage_global)

    browserslist.versionAliases[name] = {}
    for (var i = 0; i < browser.versions.length; i++) {
      var full = browser.versions[i]
      if (!full) continue

      if (full.indexOf('-') !== -1) {
        var interval = full.split('-')
        for (var j = 0; j < interval.length; j++) {
          browserslist.versionAliases[name][interval[j]] = full
        }
      }
    }
  }

  browserslist.nodeVersions = jsReleases.map(function (release) {
    return release.version
  })
})()

browserslist.versionAliases.firefox.esr = FIREFOX_ESR_VERSION

module.exports = browserslist
