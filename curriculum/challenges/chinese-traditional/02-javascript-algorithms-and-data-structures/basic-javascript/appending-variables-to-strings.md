---
id: 56533eb9ac21ba0edf2244ed
title: 將變量追加到字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

就像我們可以用多行字符串<dfn>字面量</dfn>構建單個字符串一樣，我們還可以使用加且賦值（`+=`）運算符將字符串追加到字符串的末尾。

示例：

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` 值爲 `freeCodeCamp is awesome!`。

# --instructions--

將 `someAdjective` 設置爲一個至少包含 3 個字符的字符串，然後使用 `+=` 運算符將它追加到 `myStr`。

# --hints--

`someAdjective` 應當爲包含至少三個字符的字符串。

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

你應該使用 `+=` 運算符將 `someAdjective` 追加到 `myStr`。

```js
assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
```

# --solutions--

```js
const someAdjective = "neat";
let myStr = "Learning to code is ";
myStr += someAdjective;
```
