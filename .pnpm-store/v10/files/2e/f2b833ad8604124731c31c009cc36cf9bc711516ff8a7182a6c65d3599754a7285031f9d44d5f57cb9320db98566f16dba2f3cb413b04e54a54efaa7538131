export default (function (o, c) {
  // locale needed later
  var proto = c.prototype;

  proto.$g = function (input, get, set) {
    if (this.$utils().u(input)) return this[get];
    return this.$set(set, input);
  };

  proto.set = function (string, _int) {
    return this.$set(string, _int);
  };

  var oldStartOf = proto.startOf;

  proto.startOf = function (units, startOf) {
    this.$d = oldStartOf.bind(this)(units, startOf).toDate();
    this.init();
    return this;
  };

  var oldAdd = proto.add;

  proto.add = function (number, units) {
    this.$d = oldAdd.bind(this)(number, units).toDate();
    this.init();
    return this;
  };

  var oldLocale = proto.locale;

  proto.locale = function (preset, object) {
    if (!preset) return this.$L;
    this.$L = oldLocale.bind(this)(preset, object).$L;
    return this;
  };

  var oldDaysInMonth = proto.daysInMonth;

  proto.daysInMonth = function () {
    return oldDaysInMonth.bind(this.clone())();
  };

  var oldIsSame = proto.isSame;

  proto.isSame = function (that, units) {
    return oldIsSame.bind(this.clone())(that, units);
  };

  var oldIsBefore = proto.isBefore;

  proto.isBefore = function (that, units) {
    return oldIsBefore.bind(this.clone())(that, units);
  };

  var oldIsAfter = proto.isAfter;

  proto.isAfter = function (that, units) {
    return oldIsAfter.bind(this.clone())(that, units);
  };
});