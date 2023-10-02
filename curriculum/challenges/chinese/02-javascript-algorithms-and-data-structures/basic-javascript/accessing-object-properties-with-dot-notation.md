---
id: 56533eb9ac21ba0edf2244c7
title: 通过点号表示法访问对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

和访问数组类似，访问对象属性有两种方式：点号表示法（`.`）和方括号表示法（`[]`）。

如果我们已经提前知道要访问的属性名，使用点号表示法是最方便的。

这里是一个用点符号（`.`）读取对象属性的示例：

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` 的值将为字符串 `val1`，并且`prop2val` 的值将为字符串 `val2`。

# --instructions--

使用点号读取 `testObj` 的属性值。 将变量 `hatValue` 的值设置为该对象的 `hat` 属性的值，并将变量 `shirtValue` 的值设置为该对象的 `shirt` 属性的值。

# --hints--

`hatValue` 应该是一个字符串

```js
assert(typeof hatValue === 'string');
```

`hatValue` 的值应该为字符串 `ballcap`

```js
assert(hatValue === 'ballcap');
```

`shirtValue` 应该是一个字符串

```js
assert(typeof shirtValue === 'string');
```

`shirtValue` 的值应该为字符串 `jersey`

```js
assert(shirtValue === 'jersey');
```

你应该使用两个点号

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
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
```
