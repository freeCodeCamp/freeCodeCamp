'use strict'

const fpStackTracePattern = /at\s(?:.*\.)?plugin\s.*\n\s*(.*)/
const fileNamePattern = /(\w*(\.\w*)*)\..*/

module.exports = function getPluginName (fn) {
  if (fn.name.length > 0) return fn.name

  const stackTraceLimit = Error.stackTraceLimit
  Error.stackTraceLimit = 10
  try {
    throw new Error('anonymous function')
  } catch (e) {
    Error.stackTraceLimit = stackTraceLimit
    return extractPluginName(e.stack)
  }
}

function extractPluginName (stack) {
  const m = stack.match(fpStackTracePattern)

  // get last section of path and match for filename
  return m ? m[1].split(/[/\\]/).slice(-1)[0].match(fileNamePattern)[1] : 'anonymous'
}
module.exports.extractPluginName = extractPluginName
