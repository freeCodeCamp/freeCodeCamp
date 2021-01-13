---
id: 56533eb9ac21ba0edf2244c9
title: 通过变量访问对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

中括号操作符的另一个使用方式是访问赋值给变量的属性。当你需要遍历对象的属性列表或访问查找表（lookup tables）时，这种方式极为有用。

这有一个使用变量来访问属性的例子：

```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```

使用此概念的另一种方法是在程序执行期间动态收集属性名称，如下所示：

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
```

提示：当我们通过变量名访问属性的时候，不需要给变量名包裹引号。因为实际上我们使用的是变量的值，而不是变量的名称。

# --instructions--

使用变量`playerNumber`，通过中括号操作符找到`testObj`中`playerNumber`为`16`的值。然后把名字赋给变量`player`。

# --hints--

`playerNumber`应该是一个数字。

```js
assert(typeof playerNumber === 'number');
```

变量`player`应该是一个字符串。

```js
assert(typeof player === 'string');
```

`player`点值应该是 "Montana"。

```js
assert(player === 'Montana');
```

你应该使用中括号访问`testObj`。

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

你不应该直接将`Montana`赋给`player`。

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

你应该在中括号中使用`playerNumber`变量。

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber;       // Change this line
var player = testObj;   // Change this line
```

# --solutions--

```js
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
```
