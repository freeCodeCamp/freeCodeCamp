---
id: 56533eb9ac21ba0edf2244c8
title: 使用方括號表示法訪問對象屬性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

訪問對象屬性的第二種方式是方括號表示法（`[]`）。 如果你想訪問的屬性名中包含空格，就必須使用方括號表示法來獲取它的屬性值。

當然，如果屬性名不包含空格，也可以使用方括號表示法。

這是一個使用方括號表示法讀取對象屬性的例子：

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

`myObj["Space Name"]` 將會是字符串 `Kirk`，`myObj['More Space']` 將會是字符串 `Spock`，並且`myObj["NoSpace"]` 將會是字符串 `USS Enterprise`。

注意，如果屬性名中包含空格，就必須使用引號（單引號或雙引號）將它們包裹起來。

# --instructions--

使用方括號讀取 `testObj` 中 `an entree` 和 `the drink` 的屬性值，並分別將它們賦值給 `entreeValue` 和 `drinkValue`。

# --hints--

`entreeValue` 應該是一個字符串。

```js
assert(typeof entreeValue === 'string');
```

`entreeValue` 的值應該爲字符串 `hamburger`

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` 應該是一個字符串

```js
assert(typeof drinkValue === 'string');
```

`drinkValue` 的值應該爲字符串 `water`

```js
assert(drinkValue === 'water');
```

你應該使用兩次方括號

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
