let parts = [process.platform, process.arch];
if (process.platform === 'linux') {
  const {MUSL, family} = require('detect-libc');
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

let name = `parcel-swc.${parts.join('-')}.node`;
if (process.env.PARCEL_BUILD_ENV === 'production') {
  module.exports = require(`./${name}`);
} else if (process.env.PARCEL_SWC_WASM) {
  const {transform} = require('./wasm/dist-node/parcel_js_swc_wasm.js');

  module.exports.transform = function (config) {
    let result = transform(config);
    return {
      ...result,
      // Hydrate Uint8Array into Buffer
      code: Buffer.from(result.code.buffer),
    };
  };
} else if (require('fs').existsSync(require('path').join(__dirname, name))) {
  module.exports = require(`./${name}`);
}
