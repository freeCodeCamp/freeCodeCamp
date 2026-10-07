function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function concatUint8Arrays() {
  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var totalLength = arrays.reduce(function (a, b) {
    return a + b.length;
  }, 0);
  var result = new Uint8Array(totalLength);
  var offset = 0;

  for (var _i = 0, _arrays = arrays; _i < _arrays.length; _i++) {
    var arr = _arrays[_i];

    if (arr instanceof Uint8Array === false) {
      throw new Error("arr must be of type Uint8Array");
    }

    result.set(arr, offset);
    offset += arr.length;
  }

  return result;
}

export function overrideBytesInBuffer(buffer, startLoc, endLoc, newBytes) {
  var beforeBytes = buffer.slice(0, startLoc);
  var afterBytes = buffer.slice(endLoc, buffer.length); // replacement is empty, we can omit it

  if (newBytes.length === 0) {
    return concatUint8Arrays(beforeBytes, afterBytes);
  }

  var replacement = Uint8Array.from(newBytes);
  return concatUint8Arrays(beforeBytes, replacement, afterBytes);
}
export function makeBuffer() {
  for (var _len2 = arguments.length, splitedBytes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    splitedBytes[_key2] = arguments[_key2];
  }

  // $FlowIgnore
  var bytes = [].concat.apply([], splitedBytes);
  return new Uint8Array(bytes).buffer;
}
export function fromHexdump(str) {
  var lines = str.split("\n"); // remove any leading left whitespace

  lines = lines.map(function (line) {
    return line.trim();
  });
  var bytes = lines.reduce(function (acc, line) {
    var cols = line.split(" "); // remove the offset, left column

    cols.shift();
    cols = cols.filter(function (x) {
      return x !== "";
    });
    var bytes = cols.map(function (x) {
      return parseInt(x, 16);
    });
    acc.push.apply(acc, _toConsumableArray(bytes));
    return acc;
  }, []);
  return new Uint8Array(bytes);
}