var fn = function() {}

[1].forEach(fn)

(function() {
    [1].forEach(fn)

    (fn || function () {})(5)

    /a/.exec('a').forEach(fn)
})()

fn(
  (fn1),
  (fn2),
  [
    (fn3)
  ],
  fn1 &&
  (fn2)
)
