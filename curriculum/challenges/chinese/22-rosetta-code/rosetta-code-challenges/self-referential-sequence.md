---
id: 5eb3e4a21f462f409d656c73
title: 自参照序列
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

There are several ways to generate a self-referential sequence. One very common one (the <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Look-and-say sequence</a>) is to start with a positive integer, then generate the next term by concatenating enumerated groups of adjacent alike digits:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

生成的项在长度上几何增长并且永不收敛。

另一种生成自引用序列的方法是总结前一项。

计算每个相似数字有多少，然后将每个排序的枚举数字的总和和数字连接起来。 请注意，前五个术语与前面的序列相同。

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

将数字从大到小排序。 不包括上一项中未出现的数字计数。

根据种子值，以这种方式生成的序列总是收敛到稳定值或短周期模式。 （就我们的目的而言，收敛意味着一个元素与之前看到的元素匹配。） 所示序列的种子值为 0，经过 11 次迭代后收敛到稳定值 1433223110。 收敛最快的种​​子值为 22。 它在第一个元素之后稳定。 （下一个元素是 22，之前已经看到过。）

# --instructions--

编写一个函数，将种子值作为参数，生成一个自引用序列直到它收敛，并将其作为数组返回。

# --hints--

`selfReferential` 应该是一个函数。

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` 应该返回一个数组。

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` 应该返回 `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]`。

```js
assert.deepEqual(selfReferential(40), [
  '40',
  '1410',
  '142110',
  '14123110',
  '1413124110',
  '2413125110',
  '151413224110',
  '152413225110',
  '251413324110',
  '152423224110',
  '152413423110'
]);
```

`selfReferential(132110)` 应该返回 `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]`。

```js
assert.deepEqual(selfReferential(132110), [
  '132110',
  '13123110',
  '23124110',
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(132211)` 应该返回 `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]`。

```js
assert.deepEqual(selfReferential(132211), [
  '132211',
  '132231',
  '232221',
  '134211',
  '14131231',
  '14231241',
  '24132231',
  '14233221'
]);
```

`selfReferential(1413223110)` 应该返回 `["1413223110", "1423224110", "2413323110", "1433223110"]`。

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` 应该返回 `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]`。

```js
assert.deepEqual(selfReferential(251413126110), [
  '251413126110',
  '16151413225110',
  '16251413226110',
  '26151413325110',
  '16251423225110',
  '16251413424110',
  '16153413225110'
]);
```

# --seed--

## --seed-contents--

```js
function selfReferential(n) {

}
```

# --solutions--

```js
function selfReferential(n) {
  var descending,
    i,
    incr,
    j,
    max_i,
    max_len,
    max_seq,
    seq,
    sequence,
    indexOf =
      [].indexOf ||
      function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) return i;
        }
        return -1;
      };

  sequence = function(n) {
    var c, cnt, cnts, d, digit, i, j, l, len, new_cnts, ref, s, seq;
    cnts = {};
    ref = n.toString();
    for (j = 0, len = ref.length; j < len; j++) {
      c = ref[j];
      d = parseInt(c);
      incr(cnts, d);
    }
    seq = [ref];
    while (true) {
      s = '';
      for (i = l = 9; l >= 0; i = --l) {
        if (cnts[i]) {
          s += '' + cnts[i] + i;
        }
      }
      if (indexOf.call(seq, s) >= 0) {
        break;
      }
      seq.push(s);
      new_cnts = {};
      for (digit in cnts) {
        cnt = cnts[digit];
        incr(new_cnts, cnt);
        incr(new_cnts, digit);
      }
      cnts = new_cnts;
    }
    return seq;
  };

  incr = function(h, k) {
    if (h[k] == null) {
      h[k] = 0;
    }
    return (h[k] += 1);
  };

  descending = function(n) {
    var tens;
    if (n < 10) {
      return true;
    }
    tens = n / 10;
    if (n % 10 > tens % 10) {
      return false;
    }
    return descending(tens);
  };

  return sequence(n);
}
```
