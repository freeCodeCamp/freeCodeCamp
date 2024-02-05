---
id: 5a23c84252665b21eecc8043
title: 总和为 100
challengeType: 1
forumTopicId: 302335
dashedName: sum-to-100
---

# --description--

Find solutions to the *sum to one hundred* puzzle.

在任何数字之前添加（插入）数学运算符 **+** 或 **─**（加号或减号）十进制数字字符串 **123456789**，这样得到的数学表达式加起来就是一个特定的总和（在这个标志性的例子中，**100**)。

示例：

<pre><b>123 + 4 - 5 + 67 - 89   =   100</b></pre>

# --instructions--

编写一个以数字为参数的函数。 该函数应返回一个包含给定数字的所有解决方案的数组。 解决方案应该是表示表达式的字符串。 例如：“1+23-456+78-9”。 在返回之前对数组进行排序。

# --hints--

`sumTo100` 应该是一个函数。

```js
assert(typeof sumTo100 == 'function');
```

`sumTo100(199)` 应该返回一个数组。

```js
assert(Array.isArray(sumTo100(199)));
```

`sumTo100(199)` 应该返回 `["-1+2-3+45+67+89", "123-4+5+6+78-9", "123-4+56+7+8+9"]`。

```js
assert.deepEqual(sumTo100(199), [
  '-1+2-3+45+67+89',
  '123-4+5+6+78-9',
  '123-4+56+7+8+9'
]);
```

`sumTo100(209)` 应该返回 `["1+234+56+7-89"]`。

```js
assert.deepEqual(sumTo100(209), ['1+234+56+7-89']);
```

`sumTo100(243)` 应该返回 `["-1-234+567-89", "-12+345+6-7-89", "123+45+6+78-9"]`。

```js
assert.deepEqual(sumTo100(243), [
  '-1-234+567-89',
  '-12+345+6-7-89',
  '123+45+6+78-9'
]);
```

`sumTo100(197)` 应该返回 `["1-2-3+45+67+89", "12+34-5+67+89", "123+4-5+6+78-9"]`。

```js
assert.deepEqual(sumTo100(197), [
  '1-2-3+45+67+89',
  '12+34-5+67+89',
  '123+4-5+6+78-9'
]);
```

# --seed--

## --seed-contents--

```js
function sumTo100(n) {

}
```

# --solutions--

```js
function sumTo100(n) {
  var permutationsWithRepetition = function(n, as) {
    return as.length > 0
      ? foldl1(curry(cartesianProduct)(as), replicate(n, as))
      : [];
  };

  var cartesianProduct = function(xs, ys) {
    return [].concat.apply(
      [],
      xs.map(function(x) {
        return [].concat.apply(
          [],
          ys.map(function(y) {
            return [[x].concat(y)];
          })
        );
      })
    );
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
    return xs.length > 0 ? xs.slice(1).reduce(f, xs[0]) : [];
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
    var dct = xs.reduceRight(
      function(a, sign, i) {
        var d = i + 1; //  zero-based index to [1-9] positions
        if (sign !== 0) {
          // Sum increased, digits cleared
          return {
            digits: [],
            n: a.n + sign * parseInt([d].concat(a.digits).join(''), 10)
          };
        } else
          return {
            // Digits extended, sum unchanged
            digits: [d].concat(a.digits),
            n: a.n
          };
      },
      {
        digits: [],
        n: 0
      }
    );
    return (
      dct.n + (dct.digits.length > 0 ? parseInt(dct.digits.join(''), 10) : 0)
    );
  };

  var asString = function(xs) {
    var ns = xs.reduce(function(a, sign, i) {
      var d = (i + 1).toString();
      return sign === 0 ? a + d : a + (sign > 0 ? '+' : '-') + d;
    }, '');

    return ns[0] === '+' ? tail(ns) : ns;
  };

  var universe = permutationsWithRepetition(9, [0, 1, -1])
    .filter(function(x) {
      return x[0] !== 1 && asSum(x) === n;
    })
    .map(asString);
  return universe.sort();
}
```
