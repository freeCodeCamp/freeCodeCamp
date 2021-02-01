---
id: 56533eb9ac21ba0edf2244ed
title: 将变量追加到字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

我们不仅可以通过字符串的<dfn>字面量</dfn>创建多行字符串，还可以使用加法赋值运算符（`+=`）来将变量追加到字符串。

代码示例：

```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr 的值现在为 "freeCodeCamp is awesome!"
```

# --instructions--

请将变量 `someAdjective` 的设置为包含至少三个字符的字符串，并使用 `+=` 运算符把它追加到变量 `myStr` 上。

# --hints--

`someAdjective` 应为至少包含三个字符的字符串。

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

应使用 `+=` 操作符把 `someAdjective` 追加到 `myStr` 的末尾。

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

var someAdjective;
var myStr = "Learning to code is ";
```

# --solutions--

```js
var someAdjective = "neat";
var myStr = "Learning to code is ";
myStr += someAdjective;
```
