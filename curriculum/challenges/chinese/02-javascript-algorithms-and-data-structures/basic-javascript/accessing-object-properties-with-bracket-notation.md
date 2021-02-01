---
id: 56533eb9ac21ba0edf2244c8
title: 通过方括号表示法访问对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

访问对象的第二种方式是方括号表示法（`[]`）。如果你想访问的属性名中包含空格，就必须使用方括号表示法来获取它的属性值。

当然，如果属性名不包含空格，我们也可以使用方括号表示法。

这是一个使用方括号表示法（`[]`）读取对象属性的例子：

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

注意，属性名中如果包含空格，就必须把属性名称用单引号或双引号包裹起来。

# --instructions--

请使用方括号表示法读取对象 `testObj` 中 `an entree` 和 `the drink` 的属性值，并分别赋值给 `entreeValue` 和 `drinkValue`。

# --hints--

`entreeValue` 应为一个字符串。

```js
assert(typeof entreeValue === 'string');
```

`entreeValue` 的值应为 `"hamburger"`。

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` 应为一个字符串。

```js
assert(typeof drinkValue === 'string');
```

`drinkValue` 的值应为 `"water"`。

```js
assert(drinkValue === 'water');
```

你应使用两次方括号表示法。

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
