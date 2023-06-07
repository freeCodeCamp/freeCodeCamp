---
id: 5eb3e4a21f462f409d656c73
title: Self-referential sequence
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

There are several ways to generate a self-referential sequence. One very common one (the <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Look-and-say sequence</a>) is to start with a positive integer, then generate the next term by concatenating enumerated groups of adjacent alike digits:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

The terms generated grow in length geometrically and never converge.

Another way to generate a self-referential sequence is to summarize the previous term.

Count how many of each alike digit there is, then concatenate the sum and digit for each of the sorted enumerated digits. Note that the first five terms are the same as for the previous sequence.

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

Sort the digits largest to smallest. Do not include counts of digits that do not appear in the previous term.

Depending on the seed value, series generated this way always either converge to a stable value or to a short cyclical pattern. (For our purposes, converge means that an element matches a previously seen element.) The sequence shown, with a seed value of 0, converges to a stable value of 1433223110 after 11 iterations. The seed value that converges most quickly is 22. It goes stable after the first element. (The next element is 22, which has been seen before.)

# --instructions--

Write a function that takes the seed value as parameter, generates a self referential sequence until it converges, and returns it as an array.

# --hints--

`selfReferential` should be a function.

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` should return a array.

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` should return `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]`.

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

`selfReferential(132110)` should return `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]`.

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

`selfReferential(132211)` should return `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]`.

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

`selfReferential(1413223110)` should return `["1413223110", "1423224110", "2413323110", "1433223110"]`.

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` should return `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]`.

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
