---
id: afcc8d540bea9ea2669306b6
title: 重复输出字符串
challengeType: 1
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

将一个给定的字符串 `str`（第一个参数）重复输出 `num`（第二个参数）次。 如果 `num` 不是正数，返回空字符串。 在这个挑战中，请*不要*使用 JavaScript 内置的 `.repeat()` 方法。

# --hints--

`repeatStringNumTimes("*", 3)` 应返回 `***`。

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` 应返回 `abcabcabc`。

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` 应返回 `abcabcabcabc`。

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` 应返回 `abc`。

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` 应返回 `********`。

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` 应返回 `""`。

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

不应使用内置的 `repeat()` 方法。

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` 应返回 `""`。

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
