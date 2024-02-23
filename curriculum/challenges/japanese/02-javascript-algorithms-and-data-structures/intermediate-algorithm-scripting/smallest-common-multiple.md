---
id: ae9defd7acaf69703ab432ea
title: 最小公倍数
challengeType: 1
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

指定されたパラメーターに対して、両方のパラメーターで割り切れるだけでなく、これらのパラメーターの範囲内にあるすべての連続する数でも割り切れる、最小公倍数を求めてください。

範囲は 2 つの数値の配列になりますが、必ずしも数値順とは限りません。

たとえば、1 と 3 が与えられた場合は、1 と 3 の両方で割り切れ、かつ 1 と 3 の*間*にあるすべての数でも割り切れる最小公倍数を求めてください。 その場合の答えは 6 になります。

# --hints--

`smallestCommons([1, 5])` は数値を返す必要があります。

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` は 60 を返す必要があります。

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` は 60 を返す必要があります。

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` は 2520 を返す必要があります。

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` は 360360 を返す必要があります。

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` は 6056820 を返す必要があります。

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```
