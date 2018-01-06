export default function codeSplitPolyfill() {
  // polyfill for webpack bundle splitting
  const requireProto = Object.getPrototypeOf(require);
  if (!requireProto.hasOwnProperty('ensure')) {
    Object.defineProperties(
      requireProto,
      {
        ensure: {
          value: function ensure(modules, callback) {
            callback(this);
          },
          writable: false,
          enumerable: false
        }
      }
    );
  }
}
