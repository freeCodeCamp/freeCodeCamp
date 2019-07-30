---
title: Sum to 100
---
# Sum to 100

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sumTo100(n) {
  var permutationsWithRepetition = function(n, as) {
    return as.length > 0 ?
      foldl1(curry(cartesianProduct)(as), replicate(n, as)) : [];
  };

  var cartesianProduct = function(xs, ys) {
    return [].concat.apply([], xs.map(function(x) {
      return [].concat.apply([], ys.map(function(y) {
        return [
          [x].concat(y)
        ];
      }));
    }));
  };

  var curry = function(f) {
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  };

  var flip = function(f) {
    return function(a, b) {
      return f.apply(null, [b, a]);
    };
  };

  var foldl1 = function(f, xs) {
    return xs.length > 0 ? xs.slice(1)
      .reduce(f, xs[0]) : [];
  };

  var replicate = function(n, a) {
    var v = [a],
      o = [];
    if (n < 1) return o;
    while (n > 1) {
      if (n & 1) o = o.concat(v);
      n >>= 1;
      v = v.concat(v);
    }
    return o.concat(v);
  };

  var asSum = function(xs) {
    var dct = xs.reduceRight(function(a, sign, i) {
      var d = i + 1; //  zero-based index to [1-9] positions
      if (sign !== 0) {
        // Sum increased, digits cleared
        return {
          digits: [],
          n: a.n + sign * parseInt([d].concat(a.digits)
            .join(''), 10)
        };
      } else return { // Digits extended, sum unchanged
        digits: [d].concat(a.digits),
        n: a.n
      };
    }, {
      digits: [],
      n: 0
    });
    return dct.n + (
      dct.digits.length > 0 ? parseInt(dct.digits.join(''), 10) : 0
    );
  };

  var asString = function(xs) {
    var ns = xs.reduce(function(a, sign, i) {
      var d = (i + 1)
        .toString();
      return sign === 0 ? a + d : a + (sign > 0 ? '+' : '-') + d;
    }, '');

    return ns[0] === '+' ? tail(ns) : ns;
  };

  var universe = permutationsWithRepetition(9, [0, 1, -1])
    .filter(function(x) {
      return x[0] !== 1 && asSum(x) === n;
    }).map(asString);
  return universe.sort()
}
```

</details>