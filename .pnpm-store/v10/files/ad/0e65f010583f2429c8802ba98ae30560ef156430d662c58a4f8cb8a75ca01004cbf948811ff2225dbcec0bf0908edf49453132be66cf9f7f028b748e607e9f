function _skipFirstGeneratorNext(t) {
  return function () {
    var r = t.apply(this, arguments);
    return r.next(), r;
  };
}
export { _skipFirstGeneratorNext as default };