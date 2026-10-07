export default (function (o, c, d) {
  c.prototype.isBetween = function (a, b, u, i) {
    var dA = d(a);
    var dB = d(b);
    i = i || '()';
    var dAi = i[0] === '(';
    var dBi = i[1] === ')';
    return (dAi ? this.isAfter(dA, u) : !this.isBefore(dA, u)) && (dBi ? this.isBefore(dB, u) : !this.isAfter(dB, u)) || (dAi ? this.isBefore(dA, u) : !this.isAfter(dA, u)) && (dBi ? this.isAfter(dB, u) : !this.isBefore(dB, u));
  };
});