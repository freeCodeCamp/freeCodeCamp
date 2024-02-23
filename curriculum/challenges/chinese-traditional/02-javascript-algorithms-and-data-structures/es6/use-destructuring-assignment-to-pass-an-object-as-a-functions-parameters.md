---
id: 587d7b8a367417b2b2512b4d
title: 使用解構賦值將對象作爲函數的參數傳遞
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

在某些情況下，你可以在函數的參數裏直接解構對象。

請看以下代碼：

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

上面的操作解構了傳給函數的對象。 這樣的操作也可以直接在參數裏完成：

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

當 `profileData` 被傳遞到上面的函數時，從函數參數中解構出值以在函數內使用。

# --instructions--

對 `half` 的參數進行解構賦值，僅將 `max` 與 `min` 的值傳進函數。

# --hints--

`stats` 的類型應該是一個 `object`。

```js
assert(typeof stats === 'object');
```

`half(stats)` 應該等於 `28.015`。

```js
assert(half(stats) === 28.015);
```

應該使用解構賦值。

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

應該使用解構參數。

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```
