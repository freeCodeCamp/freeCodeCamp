---
id: 56533eb9ac21ba0edf2244c8
title: 通过方括号访问对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

第二种访问对象的方式就是中括号操作符(`[]`)，如果你想访问的属性的名称有一个空格，这时你只能使用中括号操作符(`[]`)。

当然，如果属性名不包含空格，也可以使用中括号操作符。

这是一个使用中括号操作符(`[]`)读取对象属性的例子：

```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
```

提示：属性名称中如果有空格，必须把属性名称用单引号或双引号包裹起来。

# --instructions--

用中括号操作符读取对象`testObj`的`an entree`属性值和`the drink`属性值，并分别赋值给`entreeValue`和`drinkValue`。

# --hints--

`entreeValue`应该是一个字符串。

```js
assert(typeof entreeValue === 'string');
```

`entreeValue`的值应该是`"hamburger"`。

```js
assert(entreeValue === 'hamburger');
```

`drinkValue`应该是一个字符串。

```js
assert(typeof drinkValue === 'string');
```

`drinkValue`的值应该是`"water"`。

```js
assert(drinkValue === 'water');
```

你应该使用中括号两次。

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line
```

# --solutions--

```js
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
```
