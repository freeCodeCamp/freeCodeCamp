module.exports = getUserAgentBrowser

function getUserAgentBrowser () {
  /* global navigator */
  return navigator.userAgent
}
