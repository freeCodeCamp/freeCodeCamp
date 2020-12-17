---
id: 587d7db6367417b2b2512b9a
title: 匹配出现零次或多次的字符
challengeType: 1
forumTopicId: 301351
---

# --description--

上一次的挑战中使用了加号`+`来查找出现一次或多次的字符。还有一个选项可以匹配出现零次或多次的字符。

执行该操作的字符叫做`asterisk`或`star`，即`*`。

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

# --instructions--

在这个挑战里，`chewieQuote` 已经被初始化为 "Aaaaaaaaaaaaaaaarrrgh!"。创建一个变量为`chewieRegex`的正则表达式，使用`*`符号在`chewieQuote`中匹配`"A"`及其之后出现的零个或多个`"a"`。你的正则表达式不需要使用修饰符，也不需要匹配引号。

# --hints--

你的正则表达式`chewieRegex`应该使用`*`符号匹配`'A'`之后出现的零个或多个`'a'`字符。

```js
assert(/\*/.test(chewieRegex.source));
```

正则表达式应当匹配 `chewieQuote` 里的 `"A"`。

```js
assert(result[0][0] === 'A');
```

你的正则表达式应该匹配`'Aaaaaaaaaaaaaaaa'`。

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

你的正则表达式`chewieRegex`应该匹配 16 个字符。

```js
assert(result[0].length === 16);
```

你的正则表达式在`'He made a fair move. Screaming about it can't help you.'`中不应该匹配任何字符。

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

你的正则表达式在`'Let him have it. It's not wise to upset a Wookiee.'`中不应该匹配任何字符。

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --solutions--

