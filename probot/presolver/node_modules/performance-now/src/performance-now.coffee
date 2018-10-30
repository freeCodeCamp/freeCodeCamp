if performance? and performance.now
  module.exports = -> performance.now()
else if process? and process.hrtime
  module.exports = -> (getNanoSeconds() - nodeLoadTime) / 1e6
  hrtime = process.hrtime
  getNanoSeconds = ->
    hr = hrtime()
    hr[0] * 1e9 + hr[1]
  moduleLoadTime = getNanoSeconds()
  upTime = process.uptime() * 1e9
  nodeLoadTime = moduleLoadTime - upTime
else if Date.now
  module.exports = -> Date.now() - loadTime
  loadTime = Date.now()
else
  module.exports = -> new Date().getTime() - loadTime
  loadTime = new Date().getTime()
