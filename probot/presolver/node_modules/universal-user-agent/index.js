module.exports = getUserAgentNode

const osName = require('os-name')

function getUserAgentNode () {
  return `Node.js/${process.version.substr(1)} (${osName()}; ${process.arch})`
}
