let parts = [process.platform, process.arch];
if (process.platform === 'linux') {
  const { MUSL, family } = require('detect-libc');
  if (family === MUSL) {
    parts.push('musl');
  } else if (process.arch === 'arm') {
    parts.push('gnueabihf');
  } else {
    parts.push('gnu');
  }
} else if (process.platform === 'win32') {
  parts.push('msvc');
}

module.exports = require(`./artifacts/index.${parts.join('-')}.node`);
