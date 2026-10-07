function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

export { arrayOfDeferred, deferred as default };
