---
id: 56533eb9ac21ba0edf2244c7
title: 通过点符号访问对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

有两种方式访问对象属性，一个是点操作符(`.`)，一个是中括号操作符(`[]`)。

当你知道所要读取的属性的名称的时候，使用点操作符。

这是一个使用点操作符读取对象属性的例子：

```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```

# --instructions--

通过点操作符读取对象`testObj`，把`hat`的属性值赋给变量`hatValue`，把`shirt`的属性值赋给`shirtValue`。

# --hints--

`hatValue`应该是一个字符串。

```js
assert(typeof hatValue === 'string');
```

`hatValue`的值应该是`"ballcap"`。

```js
assert(hatValue === 'ballcap');
```

`shirtValue`应该是一个字符串。

```js
assert(typeof shirtValue === 'string');
```

`shirtValue`的值应该是`"jersey"`。

```js
assert(shirtValue === 'jersey');
```

你应该使用点操作符两次。

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line
```

# --solutions--

```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```
