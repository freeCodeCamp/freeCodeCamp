---
id: 56533eb9ac21ba0edf2244c8
title: 使用方括号表示法访问对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

访问对象属性的第二种方式是方括号表示法（`[]`）。 如果你想访问的属性名中包含空格，就必须使用方括号表示法来获取它的属性值。

当然，如果属性名不包含空格，也可以使用方括号表示法。

这是一个使用方括号表示法读取对象属性的例子：

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

`myObj["Space Name"]` 将会是字符串 `Kirk`，`myObj['More Space']` 将会是字符串 `Spock`，并且`myObj["NoSpace"]` 将会是字符串 `USS Enterprise`。

注意，如果属性名中包含空格，就必须使用引号（单引号或双引号）将它们包裹起来。

# --instructions--

使用方括号读取 `testObj` 中 `an entree` 和 `the drink` 的属性值，并分别将它们赋值给 `entreeValue` 和 `drinkValue`。

# --hints--

`entreeValue` 应该是一个字符串。

```js
assert(typeof entreeValue === 'string');
```

`entreeValue` 的值应该为字符串 `hamburger`

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` 应该是一个字符串

```js
assert(typeof drinkValue === 'string');
```

`drinkValue` 的值应该为字符串 `water`

```js
assert(drinkValue === 'water');
```

你应该使用两次方括号

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
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj['the drink'];
```
