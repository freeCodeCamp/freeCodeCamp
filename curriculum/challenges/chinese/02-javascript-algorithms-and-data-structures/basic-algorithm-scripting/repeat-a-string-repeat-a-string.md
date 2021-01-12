---
id: afcc8d540bea9ea2669306b6
title: 重复输出字符串
challengeType: 5
forumTopicId: 16041
---

# --description--

为`num` times（第二个参数）重复给定的字符串`str` （第一个参数）。如果`num`不是正数，则返回空字符串。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

将一个给定的字符串 `str`（第一个参数）重复输出 `num`（第二个参数）次。如果 `num` 不是正数，返回空字符串。在这个挑战中，请不要使用 JavaScript 内置的 `.repeat()` 方法。


# --hints--

`repeatStringNumTimes("*", 3)` 应返回 `"***"`。

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` 应返回 `"abcabcabc"`。

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` 应返回 `"abcabcabcabc"`。

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` 应返回 `"abc"`。

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` 应返回 `"********"`。

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

# --solutions--

