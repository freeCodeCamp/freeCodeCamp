---
id: 587d7db8367417b2b2512ba1
title: 匹配所有非數字
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

上一項挑戰中展示瞭如何使用帶有小寫 `d` 的縮寫 `\d` 來搜尋數字。 也可以使用類似的縮寫來搜尋非數字，該縮寫使用大寫的 `D`。

查找非數字字符的縮寫是 `\D`。 這等同於字符串 `[^0-9]`，它查找不是 0 - 9 之間數字的單個字符。

# --instructions--

使用非數字縮寫 `\D` 來計算電影標題中有多少非數字。

# --hints--

你的正則表達式應該使用縮寫來匹配非數字字符。

```js
assert(/\\D/.test(noNumRegex.source));
```

你的正則表達式應該使用全局標識。

```js
assert(noNumRegex.global);
```

你的正則表達式在 `9` 中應該匹配不到非數字。

```js
assert('9'.match(noNumRegex) == null);
```

你的正則表達式應該在 `Catch 22` 中匹配到 6 個非數字。

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

你的正則表達式應該在 `101 Dalmatians` 中匹配到 11 個非數字。

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

你的正則表達式應該在 `One, Two, Three` 中匹配到 15 個非數字。

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

你的正則表達式應該在 `21 Jump Street` 中匹配到 12 個非數字。

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

你的正則表達式應該在 `2001: A Space Odyssey` 中匹配到 17 個非數字。

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
