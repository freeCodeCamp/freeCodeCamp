const {createWrapper} = require('./wrapper');

let name = `@parcel/watcher-${process.platform}-${process.arch}`;
if (process.platform === 'linux') {
  const { MUSL, familySync } = require('detect-libc');
  const family = familySync();
  if (family === MUSL) {
    name += '-musl';
  } else {
    name += '-glibc';
  }
}

let binding;
try {
  binding = require(name);
} catch (err) {
  handleError(err);
  try {
    binding = require('./build/Release/watcher.node');
  } catch (err) {
    handleError(err);
    try {
      binding = require('./build/Debug/watcher.node');
    } catch (err) {
      handleError(err);
      throw new Error(`No prebuild or local build of @parcel/watcher found. Tried ${name}. Please ensure it is installed (don't use --no-optional when installing with npm). Otherwise it is possible we don't support your platform yet. If this is the case, please report an issue to https://github.com/parcel-bundler/watcher.`);
    }
  }
}

function handleError(err) {
  if (err?.code !== 'MODULE_NOT_FOUND') {
    throw err;
  }
}

const wrapper = createWrapper(binding);
exports.writeSnapshot = wrapper.writeSnapshot;
exports.getEventsSince = wrapper.getEventsSince;
exports.subscribe = wrapper.subscribe;
exports.unsubscribe = wrapper.unsubscribe;
