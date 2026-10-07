function dictionaryFrom(array) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return array.reduce(function (memo, element) {
    memo[element] = value || {
      value: element
    };
    return memo;
  }, {});
}

export default dictionaryFrom;