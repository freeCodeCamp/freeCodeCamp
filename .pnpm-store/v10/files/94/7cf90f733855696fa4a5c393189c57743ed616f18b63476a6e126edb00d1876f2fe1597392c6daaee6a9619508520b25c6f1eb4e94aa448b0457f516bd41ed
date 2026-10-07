// This function is called from the main thread to prevent unloading the module
// until the main thread exits. This avoids a segfault in older glibc versions.
// See https://github.com/rust-lang/rust/issues/91979
module.exports = () => {
  require('../native');
};
