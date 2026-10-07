export default function convertToFP(fn, arity) {
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (a.length >= arity) {
    return fn.apply(null, a.slice(0, arity).reverse());
  }
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return convertToFP(fn, arity, a.concat(args));
  };
}