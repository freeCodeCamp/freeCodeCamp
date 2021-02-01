---
id: 56533eb9ac21ba0edf2244c9
title: 通过变量访问对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

方括号表示法的另一个用途就是访问一个存储在变量中的值所对应的属性值。当你需要遍历对象的所有属性，或者根据一个变量的值查找对应的属性值时，这种写法尤其适用。

以下是一个使用变量来访问属性的例子：

```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```

使用此写法的另一种场景是程序执行期间所动态获取的属性名称，如下所示：

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp 的值现在是 'propName'
console.log(someObj[someProp]); // "John"
```

注意，当我们通过变量名访问属性时，不需要给变量名包裹引号。因为我们实际需要获取的是变量的值，而不是变量的名称。

# --instructions--

首先，请将 `playerNumber` 的值设置为 `16`。然后通过 `playerNumber` 变量，使用方括号表示法获取 `testObj` 中 `16` 的属性值，然后把这个属性值赋给变量 `player`。

# --hints--

`playerNumber` 应为一个数字。

```js
assert(typeof playerNumber === 'number');
```

`player` 应为一个字符串。

```js
assert(typeof player === 'string');
```

`player` 的值应为 "Montana"。

```js
assert(player === 'Montana');
```

应使用方括号表示法访问 `testObj`。

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

不应直接将 `Montana` 赋值给 `player`。

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

应在中括号里使用 `playerNumber` 变量。

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
