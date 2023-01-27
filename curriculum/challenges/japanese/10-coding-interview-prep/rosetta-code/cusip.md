---
id: 5a23c84252665b21eecc7e05
title: CUSIP
challengeType: 1
forumTopicId: 302241
dashedName: cusip
---

# --description--

**CUSIP** は、取引の清算と決済を容易にする目的で、北米の有価証券を識別する9文字の英数字コードです。 CUSIPは、Accredited Standards X9.6に基づき、米国国家標準協会として採用されました。

# --instructions--

文字列をパラメータとして取り、文字列が有効なCUSIPであるかどうかをチェックする関数を作成します。

# --hints--

`isCusip` という関数です。

```js
assert(typeof isCusip == 'function');
```

`isCusip("037833100")` はブール値を返します。

```js
assert(typeof isCusip('037833100') == 'boolean');
```

`isCusip("037833100")` は `true` を返します。

```js
assert.equal(isCusip('037833100'), true);
```

`isCusip("17275R102")` は `true` を返します。

```js
assert.equal(isCusip('17275R102'), true);
```

`isCusip("38259P50a")` は `false` を返します。

```js
assert.equal(isCusip('38259P50a'), false);
```

`isCusip("38259P508")` は `true` を返します。

```js
assert.equal(isCusip('38259P508'), true);
```

`isCusip("38259P50#")` は `false` を返します。

```js
assert.equal(isCusip('38259P50#'), false);
```

`isCusip("68389X105")` は `true` を返します。

```js
assert.equal(isCusip('68389X105'), true);
```

`isCusip("68389X106")` は `false` を返します。

```js
assert.equal(isCusip('68389X106'), false);
```

`isCusip("5949181")` は `false` を返します。

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
