---
id: 5eb3e4a21f462f409d656c73
title: 自己参照数列
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

自己参照数列を生成する方法はいくつかあります。 One very common one (the <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Look-and-say sequence</a>) is to start with a positive integer, then generate the next term by concatenating enumerated groups of adjacent alike digits:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

生成された項は幾何学的に成長し、決して収束しません。

自己参照数列を生成するもう一つの方法は、前の項を要約することです。

同じ数字がいくつあるかを数え、ソートした各数字の個数と数字を連結します。 最初の 5 つの項は、前の数列と同じであることに注意してください。

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

数字は最大から最小への順にソートします。 前の項に現れない数字はカウントに含めません。

シード値に応じて、このように生成された数列は常に安定値または短周期パターンに収束します (この場合の収束とは、要素が以前に現れた要素と一致することを意味します)。 上記のシード値が 0 の数列は、11回繰り返すと安定値 1433223110 に収束します。 最も迅速に収束するシード値は22です。 最初の要素の後に安定します。 (次の要素の22はすでに現れています)。

# --instructions--

シード値をパラメータとして取り、収束するまで自己参照数列を生成し、それを配列として返す関数を記述してください。

# --hints--

`selfReferential` は関数とします。

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` は配列を返す必要があります。

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` は `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]` を返す必要があります。

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

`selfReferential(132110)` は `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]` を返す必要があります。

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

`selfReferential(132211)` は `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]` を返す必要があります。

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

`selfReferential(1413223110)` は `["1413223110", "1423224110", "2413323110", "1433223110"]` を返す必要があります。

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` は `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]` を返す必要があります。

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
