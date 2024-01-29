---
id: 5900f38a1000cf542c50fe9d
title: '問題 30: 各位の n 乗'
challengeType: 1
forumTopicId: 301953
dashedName: problem-30-digit-n-powers
---

# --description--

意外なことに、各位の 4 乗の和として表せる数は次の 3 つしかありません。

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

1 = 1<sup>4</sup> は和でないため、含まれません。

これらの数の和は、1634 + 8208 + 9474 = 19316 です。

各位の `n` 乗の和がその数自体と等しくなるような数の総和を求めなさい。

# --hints--

`digitnPowers(2)` は数値を返す必要があります。

```js
assert(typeof digitnPowers(2) === 'number');
```

`digitnPowers(2)` は 0 を返す必要があります。

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)` は 1301 を返す必要があります。

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)` は 19316 を返す必要があります。

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)` は 443839 を返す必要があります。

```js
assert(digitnPowers(5) == 443839);
```

# --seed--

## --seed-contents--

```js
function digitnPowers(n) {

  return n;
}

digitnPowers(5);
```

# --solutions--

```js
// solution required
```
