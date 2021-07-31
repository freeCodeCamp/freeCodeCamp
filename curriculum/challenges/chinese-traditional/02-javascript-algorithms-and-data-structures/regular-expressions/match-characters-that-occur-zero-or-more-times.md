---
id: 587d7db6367417b2b2512b9a
title: 匹配出現零次或多次的字符
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

上一次的挑戰中使用了加號 `+` 來查找出現一次或多次的字符。 還有一個選項可以匹配出現零次或多次的字符。

執行該操作的字符叫做星號，即`*`。

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

按順序排列，三次 `match` 調用將返回值 `["goooooooo"]`，`["g"]` 和 `null`。

# --instructions--

在這個挑戰裏，`chewieQuote` 已經被初始化爲 `Aaaaaaaaaaaaaaaarrrgh!`。 創建一個變量爲 `chewieRegex` 的正則表達式，使用 `*` 在 `chewieQuote` 中匹配 `A` 及其之後出現的零個或多個`a`。 你的正則表達式不需要使用修飾符，也不需要匹配引號。

# --hints--

你的正則表達式 `chewieRegex` 應該使用 `*` 字符來匹配零或更多的 `a` 字符。

```js
assert(/\*/.test(chewieRegex.source));
```

正則表達式應當匹配 `chewieQuote` 裏的 `A`。

```js
assert(result[0][0] === 'A');
```

你的正則表達式應該與 `chewieQuote` 中的字符串 `Aaaaaaaaaaaaaaaa` 匹配。

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

你的正則表達式 `chewieRegex` 應該匹配 `chewieQuote` 中的 16 個字符。

```js
assert(result[0].length === 16);
```

你的正則表達式不應該匹配字符串 `He made a fair move. Screaming about it can't help you.` 中的任何字符。

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

你的正則表達式不應該匹配字符串 `Let him have it. It's not wise to upset a Wookiee.` 中的任何字符。

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
