---
id: 5d712346c441eddfaeb5bdef
title: 匹配所有數字
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

已經瞭解了常見字符串匹配模式的元字符，如字母數字。 另一個常見的匹配模式是隻尋找數字。

查找數字字符的縮寫是 `\d`，注意是小寫的 `d`。 這等同於元字符 `[0-9]`，它查找 0 到 9 之間任意數字的單個字符。

# --instructions--

使用縮寫 `\d` 來計算電影標題中有多少個數字。 書面數字（"six" 而不是 6）不計算在內。

# --hints--

你的正則表達式應該使用縮寫來匹配數字字符。

```js
assert(/\\d/.test(numRegex.source));
```

您的正則表達式應該使用全局標識。

```js
assert(numRegex.global);
```

你的正則表達式應該在 `9` 中匹配到 1 個數字。

```js
assert('9'.match(numRegex).length == 1);
```

你的正則表達式應該在 `Catch 22` 中匹配到 2 個數字。

```js
assert('Catch 22'.match(numRegex).length == 2);
```

你的正則表達式應該在 `101 Dalmatians` 中匹配到 3 個數字。

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

你的正則表達式在 `One, Two, Three` 中應該匹配不到數字。

```js
assert('One, Two, Three'.match(numRegex) == null);
```

你的正則表達式應該在 `21 Jump Street` 中匹配到 2 個數字。

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

你的正則表達式應該在 `2001: A Space Odyssey` 中匹配到 4 個數字。

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
