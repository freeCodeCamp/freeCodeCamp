---
id: 56533eb9ac21ba0edf2244b9
title: 用变量构造字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

有时候你需要构建一个字符串。 通过使用连接运算符（`+`），你可以插入一个或多个变量来组成一个字符串。

例如：

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` 值为 `Hello, our name is freeCodeCamp, how are you?`

# --instructions--

把你的名字赋值给变量 `myName`，然后把变量 `myName` 插入到字符串 `My name is` 和 `and I am well!` 之间，并把连接后的结果赋值给变量 `myStr`。

# --hints--

`myName` 应该是一个至少有 3 个字符的字符串。

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

使用两个 `+` 操作符创建包含 `myName` 的 `myStr` 变量。

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
