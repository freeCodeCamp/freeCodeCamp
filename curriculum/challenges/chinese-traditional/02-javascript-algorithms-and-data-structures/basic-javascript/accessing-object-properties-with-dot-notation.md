---
id: 56533eb9ac21ba0edf2244c7
title: 通過點號表示法訪問對象屬性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

和訪問數組類似，訪問對象屬性有兩種方式：點號表示法（`.`）和方括號表示法（`[]`）。

如果我們已經提前知道要訪問的屬性名，使用點號表示法是最方便的。

這裏是一個用點符號（`.`）讀取對象屬性的示例：

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` 的值將爲字符串 `val1`，並且`prop2val` 的值將爲字符串 `val2`。

# --instructions--

使用點號讀取 `testObj` 的屬性值。 將變量 `hatValue` 的值設置爲該對象的 `hat` 屬性的值，並將變量 `shirtValue` 的值設置爲該對象的 `shirt` 屬性的值。

# --hints--

`hatValue` 應該是一個字符串

```js
assert(typeof hatValue === 'string');
```

`hatValue` 的值應該爲字符串 `ballcap`

```js
assert(hatValue === 'ballcap');
```

`shirtValue` 應該是一個字符串

```js
assert(typeof shirtValue === 'string');
```

`shirtValue` 的值應該爲字符串 `jersey`

```js
assert(shirtValue === 'jersey');
```

你應該使用兩個點號

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
