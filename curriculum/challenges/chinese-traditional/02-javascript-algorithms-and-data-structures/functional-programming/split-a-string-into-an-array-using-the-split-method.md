---
id: 587d7daa367417b2b2512b6b
title: 使用 split 方法將字符串拆分成數組
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

`split` 方法將一個字符串分割成一個字符串數組。 它需要一個參數作爲分隔符，它可以是用於拆分字符串或正則表達式的一個字符。 舉個例子，如果分隔符是空格，你會得到一個單詞數組；如果分隔符是空字符串，你會得到一個由字符串中每個字符組成的數組。

下面是兩個用空格分隔一個字符串的例子，另一個是用數字的正則表達式分隔：

```js
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
```

`bySpace` 將有值 `["Hello", "World"]`，`byDigits` 將有值 `["How", "are", "you", "today"]`。

因爲字符串是不可變的，`split` 方法操作它們更方便。

# --instructions--

在 `splitify` 函數中用 `split` 方法將 `str` 分割成單詞數組。 這個方法應該返回一個數組。 單詞不一定都是用空格分隔，所以數組中不應包含標點符號。

# --hints--

應該使用 `split` 方法。

```js
assert(code.match(/\.split/g));
```

`splitify("Hello World,I-am code")` 應返回 `["Hello", "World", "I", "am", "code"]`。

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

`splitify("Earth-is-our home")` 應返回 `["Earth", "is", "our", "home"]`。

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

`splitify("This.is.a-sentence")` 應返回 `["This", "is", "a", "sentence"]`。

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
  return str.split(/\W/);
}
```
