---
id: 587d7db6367417b2b2512b9a
title: 匹配出现零次或多次的字符
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

上一次的挑战中使用了加号 `+` 来查找出现一次或多次的字符。 还有一个选项可以匹配出现零次或多次的字符。

执行该操作的字符叫做星号，即`*`。

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

按顺序排列，三次 `match` 调用将返回值 `["goooooooo"]`，`["g"]` 和 `null`。

# --instructions--

在这个挑战里，`chewieQuote` 已经被初始化为 `Aaaaaaaaaaaaaaaarrrgh!`。 创建一个变量为 `chewieRegex` 的正则表达式，使用 `*` 在 `chewieQuote` 中匹配 `A` 及其之后出现的零个或多个`a`。 你的正则表达式不需要使用修饰符，也不需要匹配引号。

# --hints--

你的正则表达式 `chewieRegex` 应该使用 `*` 字符来匹配零或更多的 `a` 字符。

```js
assert(/\*/.test(chewieRegex.source));
```

正则表达式应当匹配 `chewieQuote` 里的 `A`。

```js
assert(result[0][0] === 'A');
```

你的正则表达式应该与 `chewieQuote` 中的字符串 `Aaaaaaaaaaaaaaaa` 匹配。

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

你的正则表达式 `chewieRegex` 应该匹配 `chewieQuote` 中的 16 个字符。

```js
assert(result[0].length === 16);
```

你的正则表达式不应该匹配字符串 `He made a fair move. Screaming about it can't help you.` 中的任何字符。

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

你的正则表达式不应该匹配字符串 `Let him have it. It's not wise to upset a Wookiee.` 中的任何字符。

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
