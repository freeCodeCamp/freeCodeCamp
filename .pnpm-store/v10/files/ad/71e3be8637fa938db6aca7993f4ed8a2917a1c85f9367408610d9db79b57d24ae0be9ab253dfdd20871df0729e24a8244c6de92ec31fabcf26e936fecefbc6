var SimpleSet = /*#__PURE__*/function () {
  function SimpleSet() {
    this.v = [];
  }

  var _proto = SimpleSet.prototype;

  _proto.clear = function clear() {
    this.v.length = 0;
  };

  _proto.has = function has(k) {
    return this.v.indexOf(k) !== -1;
  };

  _proto.add = function add(k) {
    if (this.has(k)) return;
    this.v.push(k);
  };

  _proto.delete = function _delete(k) {
    var idx = this.v.indexOf(k);
    if (idx === -1) return false;
    this.v.splice(idx, 1);
    return true;
  };

  return SimpleSet;
}();

export { SimpleSet as default };