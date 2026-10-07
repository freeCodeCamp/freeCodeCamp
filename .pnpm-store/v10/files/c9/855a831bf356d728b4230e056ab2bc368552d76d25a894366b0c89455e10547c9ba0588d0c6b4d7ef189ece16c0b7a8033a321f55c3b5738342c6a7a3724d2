let browserslist = require('browserslist')

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

const NAMES = {
  and_chr: 'Chrome for Android',
  and_ff: 'Firefox for Android',
  and_qq: 'QQ Browser',
  and_uc: 'UC for Android',
  baidu: 'Baidu Browser',
  ie: 'IE',
  ie_mob: 'IE Mobile',
  ios_saf: 'iOS Safari',
  kaios: 'KaiOS Browser',
  op_mini: 'Opera Mini',
  op_mob: 'Opera Mobile',
  samsung: 'Samsung Internet'
}

function prefix(name, prefixes, note) {
  let out = `  ${name}`
  if (note) out += ' *'
  out += ': '
  out += prefixes.map(i => i.replace(/^-(.*)-$/g, '$1')).join(', ')
  out += '\n'
  return out
}

module.exports = function (prefixes) {
  if (prefixes.browsers.selected.length === 0) {
    return 'No browsers selected'
  }

  let versions = {}
  for (let browser of prefixes.browsers.selected) {
    let parts = browser.split(' ')
    let name = parts[0]
    let version = parts[1]

    name = NAMES[name] || capitalize(name)
    if (versions[name]) {
      versions[name].push(version)
    } else {
      versions[name] = [version]
    }
  }

  let out = 'Browsers:\n'
  for (let browser in versions) {
    let list = versions[browser]
    list = list.sort((a, b) => parseFloat(b) - parseFloat(a))
    out += `  ${browser}: ${list.join(', ')}\n`
  }

  let coverage = browserslist.coverage(prefixes.browsers.selected)
  let round = Math.round(coverage * 100) / 100.0
  out += `\nThese browsers account for ${round}% of all users globally\n`

  let atrules = []
  for (let name in prefixes.add) {
    let data = prefixes.add[name]
    if (name[0] === '@' && data.prefixes) {
      atrules.push(prefix(name, data.prefixes))
    }
  }
  if (atrules.length > 0) {
    out += `\nAt-Rules:\n${atrules.sort().join('')}`
  }

  let selectors = []
  for (let selector of prefixes.add.selectors) {
    if (selector.prefixes) {
      selectors.push(prefix(selector.name, selector.prefixes))
    }
  }
  if (selectors.length > 0) {
    out += `\nSelectors:\n${selectors.sort().join('')}`
  }

  let values = []
  let props = []
  let hadGrid = false
  for (let name in prefixes.add) {
    let data = prefixes.add[name]
    if (name[0] !== '@' && data.prefixes) {
      let grid = name.indexOf('grid-') === 0
      if (grid) hadGrid = true
      props.push(prefix(name, data.prefixes, grid))
    }

    if (!Array.isArray(data.values)) {
      continue
    }
    for (let value of data.values) {
      let grid = value.name.includes('grid')
      if (grid) hadGrid = true
      let string = prefix(value.name, value.prefixes, grid)
      if (!values.includes(string)) {
        values.push(string)
      }
    }
  }

  if (props.length > 0) {
    out += `\nProperties:\n${props.sort().join('')}`
  }
  if (values.length > 0) {
    out += `\nValues:\n${values.sort().join('')}`
  }
  if (hadGrid) {
    out += '\n* - Prefixes will be added only on grid: true option.\n'
  }

  if (!atrules.length && !selectors.length && !props.length && !values.length) {
    out +=
      "\nAwesome! Your browsers don't require any vendor prefixes." +
      '\nNow you can remove Autoprefixer from build steps.'
  }

  return out
}
