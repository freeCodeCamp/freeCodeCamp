fn();
function fn() {}

(function () {
    fn1();
    function fn1() {}
}());

if (!vr) {
    var vr = 'o_O';
}

function foo() {
  return {
    bar: function() {return bar();}
  };

  function bar() {
    return 10;
  }
}
var a = function() {
  return a;
};
var b = b;
var c = {
  d: function() {
    return d;
  }
};
