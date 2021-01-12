---
id: 56533eb9ac21ba0edf2244ed
title: 将变量附加到字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

我们不仅可以创建出多行的字符串，还可以使用加等号(`+=`)运算符来将变量追加到字符串。

# --instructions--

设置变量`someAdjective`的值，并使用`+=`运算符把它追加到变量`myStr`上。

# --hints--

`someAdjective`应该是一个至少包含三个字符的字符串。

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

使用`+=`操作符把`someAdjective`追加到`myStr`的后面。

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
