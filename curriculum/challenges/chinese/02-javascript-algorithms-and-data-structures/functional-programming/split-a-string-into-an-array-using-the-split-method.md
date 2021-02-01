---
id: 587d7daa367417b2b2512b6b
title: 使用 split 方法将字符串拆分成数组
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

`split`方法用于把字符串分割成字符串数组，接收一个分隔符参数，分隔符可以是用于分解字符串或正则表达式的字符。举个例子，如果分隔符是空格，你会得到一个单词数组；如果分隔符是空字符串，你会得到一个由字符串中每个字符组成的数组。

下面是两个用空格分隔一个字符串的例子，另一个是用数字的正则表达式分隔：

```js
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```

因为字符串是固定的，`split`方法可以更简单的操作它们。

# --instructions--

在`splitify`函数中用`split`方法将`str`分割成单词数组，这个方法应该返回一个数组。单词不一定都是用空格分隔，所以数组中不应包含标点符号。

# --hints--

应该使用`split`方法。

```js
assert(code.match(/\.split/g));
```

`splitify('Hello World,I-am code')`应返回`['Hello', 'World', 'I', 'am', 'code']`。

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

`splitify('Earth-is-our home')`应返回`['Earth', 'is', 'our', 'home']`。

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

`splitify('This.is.a-sentence')`应返回`['This', 'is', 'a', 'sentence']`。

```js
assert(
  JSON.stringify(splitify('This.is.a-sentence')) ===
    JSON.stringify(['This', 'is', 'a', 'sentence'])
);
```

# --seed--

## --seed-contents--

```js
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}
splitify("Hello World,I-am code");
```

# --solutions--

```js
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);
  // Only change code above this line
}
```
