---
id: 5eb3e4a21f462f409d656c73
title: 自參照序列
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

There are several ways to generate a self-referential sequence. One very common one (the <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Look-and-say sequence</a>) is to start with a positive integer, then generate the next term by concatenating enumerated groups of adjacent alike digits:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

生成的項在長度上幾何增長並且永不收斂。

另一種生成自引用序列的方法是總結前一項。

計算每個相似數字有多少，然後將每個排序的枚舉數字的總和和數字連接起來。 請注意，前五個術語與前面的序列相同。

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

將數字從大到小排序。 不包括上一項中未出現的數字計數。

根據種子值，以這種方式生成的序列總是收斂到穩定值或短週期模式。 （就我們的目的而言，收斂意味着一個元素與之前看到的元素匹配。） 所示序列的種子值爲 0，經過 11 次迭代後收斂到穩定值 1433223110。 收斂最快的種​​子值爲 22。 它在第一個元素之後穩定。 （下一個元素是 22，之前已經看到過。）

# --instructions--

編寫一個函數，將種子值作爲參數，生成一個自引用序列直到它收斂，並將其作爲數組返回。

# --hints--

`selfReferential` 應該是一個函數。

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` 應該返回一個數組。

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` 應該返回 `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]`。

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

`selfReferential(132110)` 應該返回 `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]`。

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

`selfReferential(132211)` 應該返回 `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]`。

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

`selfReferential(1413223110)` 應該返回 `["1413223110", "1423224110", "2413323110", "1433223110"]`。

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` 應該返回 `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]`。

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
