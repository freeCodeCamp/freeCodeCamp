/*! arch. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var cp = require('child_process')
var fs = require('fs')
var path = require('path')

/**
 * Returns the operating system's CPU architecture. This is different than
 * `process.arch` or `os.arch()` which returns the architecture the Node.js (or
 * Electron) binary was compiled for.
 */
module.exports = function arch () {
  /**
   * The running binary is 64-bit, so the OS is clearly 64-bit.
   */
  if (process.arch === 'x64') {
    return 'x64'
  }

  /**
   * All recent versions of Mac OS are 64-bit.
   */
  if (process.platform === 'darwin') {
    return 'x64'
  }

  /**
   * On Windows, the most reliable way to detect a 64-bit OS from within a 32-bit
   * app is based on the presence of a WOW64 file: %SystemRoot%\SysNative.
   * See: https://twitter.com/feross/status/776949077208510464
   */
  if (process.platform === 'win32') {
    var useEnv = false
    try {
      useEnv = !!(process.env.SYSTEMROOT && fs.statSync(process.env.SYSTEMROOT))
    } catch (err) {}

    var sysRoot = useEnv ? process.env.SYSTEMROOT : 'C:\\Windows'

    // If %SystemRoot%\SysNative exists, we are in a WOW64 FS Redirected application.
    var isWOW64 = false
    try {
      isWOW64 = !!fs.statSync(path.join(sysRoot, 'sysnative'))
    } catch (err) {}

    return isWOW64 ? 'x64' : 'x86'
  }

  /**
   * On Linux, use the `getconf` command to get the architecture.
   */
  if (process.platform === 'linux') {
    var output = cp.execSync('getconf LONG_BIT', { encoding: 'utf8' })
    return output === '64\n' ? 'x64' : 'x86'
  }

  /**
   * If none of the above, assume the architecture is 32-bit.
   */
  return 'x86'
}
