---
id: afcc8d540bea9ea2669306b6
title: 重複輸出字符串
challengeType: 1
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

將一個給定的字符串 `str`（第一個參數）重複輸出 `num`（第二個參數）次。 如果 `num` 不是正數，返回空字符串。 在這個挑戰中，請*不要*使用 JavaScript 內置的 `.repeat()` 方法。

# --hints--

`repeatStringNumTimes("*", 3)` 應返回 `***`。

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` 應返回 `abcabcabc`。

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` 應返回 `abcabcabcabc`。

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` 應返回 `abc`。

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` 應返回 `********`。

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` 應返回 `""`。

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

不應使用內置的 `repeat()` 方法。

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` 應返回 `""`。

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
