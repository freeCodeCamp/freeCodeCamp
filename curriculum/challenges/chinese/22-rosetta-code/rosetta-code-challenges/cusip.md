---
id: 5a23c84252665b21eecc7e05
title: CUSIP
challengeType: 1
forumTopicId: 302241
dashedName: cusip
---

# --description--

A **CUSIP** is a nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades. The CUSIP was adopted as an American National Standard under Accredited Standards X9.6.

# --instructions--

编写一个函数，将一个字符串作为参数并检查该字符串是否是有效的 CUSIP。

# --hints--

`isCusip` 应该是一个函数。

```js
assert(typeof isCusip == 'function');
```

`isCusip("037833100")` 应该返回一个布尔值。

```js
assert(typeof isCusip('037833100') == 'boolean');
```

`isCusip("037833100")` 应该返回 `true`。

```js
assert.equal(isCusip('037833100'), true);
```

`isCusip("17275R102")` 应该返回 `true`。

```js
assert.equal(isCusip('17275R102'), true);
```

`isCusip("38259P50a")` 应该返回 `false`。

```js
assert.equal(isCusip('38259P50a'), false);
```

`isCusip("38259P508")` 应该返回 `true`。

```js
assert.equal(isCusip('38259P508'), true);
```

`isCusip("38259P50#")` 应该返回 `false`。

```js
assert.equal(isCusip('38259P50#'), false);
```

`isCusip("68389X105")` 应该返回 `true`。

```js
assert.equal(isCusip('68389X105'), true);
```

`isCusip("68389X106")` 应该返回 `false`。

```js
assert.equal(isCusip('68389X106'), false);
```

`isCusip("5949181")` 应该返回 `false`。

```js
assert.equal(isCusip('5949181'), false);
```

# --seed--

## --seed-contents--

```js
function isCusip(s) {

}
```

# --solutions--

```js
function isCusip(s) {
  if (s.length != 9) return false;
  var sum = 0;
  var ASCII = x => x.charCodeAt(0);
  for (var i = 0; i < 7; i++) {
    var c = s.charCodeAt(i);

    var v;
    if (c >= ASCII('0') && c <= ASCII('9')) {
      v = c - 48;
    } else if (c >= ASCII('A') && c <= ASCII('Z')) {
      v = c - 64; // lower case letters apparently invalid
    } else if (c == ASCII('*')) {
      v = 36;
    } else if (c == ASCII('@')) {
      v = 37;
    } else if (c == ASCII('#')) {
      v = 38;
    } else {
      return false;
    }
    if (i % 2 == 1) v *= 2; // check if odd as using 0-based indexing
    sum += Math.floor(v / 10) + (v % 10);
  }
  return s.charCodeAt(8) - 48 == (10 - (sum % 10)) % 10;
}
```
