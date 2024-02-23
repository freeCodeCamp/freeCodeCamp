---
id: 56533eb9ac21ba0edf2244b9
title: 用變量構造字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

有時候你需要構建一個字符串。 通過使用連接運算符（`+`），你可以插入一個或多個變量來組成一個字符串。

例如：

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` 值爲 `Hello, our name is freeCodeCamp, how are you?`

# --instructions--

把你的名字賦值給變量 `myName`，然後把變量 `myName` 插入到字符串 `My name is` 和 `and I am well!` 之間，並把連接後的結果賦值給變量 `myStr`。

# --hints--

`myName` 應該是一個至少有 3 個字符的字符串。

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

使用兩個 `+` 操作符創建包含 `myName` 的 `myStr` 變量。

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
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
// Only change code below this line
const myName = "";
const myStr = "";
```

# --solutions--

```js
const myName = "Bob";
const myStr = "My name is " + myName + " and I am well!";
```
