---
id: 587d7dba367417b2b2512ba8
title: 檢查全部或無
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

有時，想要搜尋的匹配模式可能有不確定是否存在的部分。 儘管如此，還是想檢查它們。

爲此，可以使用問號 `?` 指定可能存在的元素。 這將檢查前面的零個或一個元素。 可以將此符號視爲前面的元素是可選的。

例如，美式英語和英式英語略有不同，可以使用問號來匹配兩種拼寫。

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

上面的 `test` 都會返回 `true`。

# --instructions--

修改正則表達式 `favRegex` 以匹配美式英語（`favorite`）和英式英語（`favourite`）的單詞版本。

# --hints--

你的正則表達式應該使用可選符號 `?`。

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

你的正則表達式應該匹配 `favorite`。

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

你的正則表達式應該匹配 `favourite`。

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

你的正則表達式不應該匹配 `fav`。

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
