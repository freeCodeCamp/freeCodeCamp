import { filter } from 'rxjs/operators';

var keyHasType = function keyHasType(type, key) {
  return type === key || typeof key === 'function' && type === key.toString();
};

export var ofType = function ofType() {
  for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return function (source) {
    return source.pipe(filter(function (_ref) {
      var type = _ref.type;

      var len = keys.length;
      if (len === 1) {
        return keyHasType(type, keys[0]);
      } else {
        for (var i = 0; i < len; i++) {
          if (keyHasType(type, keys[i])) {
            return true;
          }
        }
      }
      return false;
    }));
  };
};