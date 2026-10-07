module.exports = function arch () {
  /**
   * User agent strings that indicate a 64-bit OS.
   * See: http://stackoverflow.com/a/13709431/292185
   */
  var userAgent = navigator.userAgent
  if ([
    'x86_64',
    'x86-64',
    'Win64',
    'x64;',
    'amd64',
    'AMD64',
    'WOW64',
    'x64_64'
  ].some(function (str) {
    return userAgent.indexOf(str) > -1
  })) {
    return 'x64'
  }

  /**
   * Platform strings that indicate a 64-bit OS.
   * See: http://stackoverflow.com/a/19883965/292185
   */
  var platform = navigator.platform
  if (platform === 'MacIntel' || platform === 'Linux x86_64') {
    return 'x64'
  }

  /**
   * CPU class strings that indicate a 64-bit OS.
   * See: http://stackoverflow.com/a/6267019/292185
   */
  if (navigator.cpuClass === 'x64') {
    return 'x64'
  }

  /**
   * If none of the above, assume the architecture is 32-bit.
   */
  return 'x86'
}
