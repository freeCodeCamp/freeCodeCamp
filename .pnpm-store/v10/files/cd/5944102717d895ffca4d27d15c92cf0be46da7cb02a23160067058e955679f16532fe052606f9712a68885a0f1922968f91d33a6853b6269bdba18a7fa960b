import { Q, M, D } from '../../constant';
export default (function (o, c) {
  var proto = c.prototype;

  proto.quarter = function (quarter) {
    if (!this.$utils().u(quarter)) {
      return this.month(this.month() % 3 + (quarter - 1) * 3);
    }

    return Math.ceil((this.month() + 1) / 3);
  };

  var oldAdd = proto.add;

  proto.add = function (number, units) {
    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = this.$utils().p(units);

    if (unit === Q) {
      return this.add(number * 3, M);
    }

    return oldAdd.bind(this)(number, units);
  };

  var oldStartOf = proto.startOf;

  proto.startOf = function (units, startOf) {
    var utils = this.$utils();
    var isStartOf = !utils.u(startOf) ? startOf : true;
    var unit = utils.p(units);

    if (unit === Q) {
      var quarter = this.quarter() - 1;
      return isStartOf ? this.month(quarter * 3).startOf(M).startOf(D) : this.month(quarter * 3 + 2).endOf(M).endOf(D);
    }

    return oldStartOf.bind(this)(units, startOf);
  };
});