---
id: 5900f38a1000cf542c50fe9d
title: 'Problem 30: Digit n powers'
challengeType: 1
forumTopicId: 301953
dashedName: problem-30-digit-n-powers
---

# --description--

Überraschenderweise gibt es nur drei Zahlen, die sich als Summe von vierten Potenzen ihrer Ziffern schreiben lassen:

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

As 1 = 1<sup>4</sup> is not a sum it is not included.

Die Summe dieser Zahlen ist 1634 + 8208 + 9474 = 19316.

Finde die Summe aller Zahlen, die sich als Summe von `n` Potenzen ihrer Ziffern schreiben lassen.

# --hints--

`digitnPowers(2)` sollte eine Zahl zurückgeben.

```js
assert(typeof digitnPowers(2) === 'number');
```

`digitnPowers(2)` sollte 0 zurückgeben.

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)` sollte 1301 zurückgeben.

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)` sollte 19316 zurückgeben.

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)` sollte 443839 zurückgeben.

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
