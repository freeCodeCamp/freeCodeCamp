---
id: afcc8d540bea9ea2669306b6
title: 同じ文字列の繰り返し
challengeType: 1
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

与えられた文字列 `str` (最初の引数) を `num` (2 番目の引数) 回繰り返してください。 `num` が正の数でない場合は、空の文字列を返してください。 このチャレンジでは、組み込みメソッドの `.repeat()` は*使用しないでください *。

# --hints--

`repeatStringNumTimes("*", 3)` は文字列 `***` を返す必要があります。

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` は文字列 `abcabcabc` を返す必要があります。

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` は文字列 `abcabcabcabc` を返す必要があります。

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` は文字列 `abc` を返す必要があります。

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` は文字列 `********` を返す必要があります。

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` は空の文字列 (`""`) を返す必要があります。

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

組み込みメソッドの `repeat()` は使用しないでください。

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` は `""` を返す必要があります。

```js
assert(repeatStringNumTimes('abc', 0) === '');
```

# --seed--

## --seed-contents--

```js
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
```

# --solutions--

```js
function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);
```
