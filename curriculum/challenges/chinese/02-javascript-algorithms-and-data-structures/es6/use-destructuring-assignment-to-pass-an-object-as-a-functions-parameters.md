---
id: 587d7b8a367417b2b2512b4d
title: 使用解构赋值将对象作为函数的参数传递
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

在某些情况下，你可以在函数的参数里直接解构对象。

请看以下代码：

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

上面的操作解构了传给函数的对象。 这样的操作也可以直接在参数里完成：

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

当 `profileData` 被传递到上面的函数时，从函数参数中解构出值以在函数内使用。

# --instructions--

对 `half` 的参数进行解构赋值，仅将 `max` 与 `min` 的值传进函数。

# --hints--

`stats` 的类型应该是一个 `object`。

```js
assert(typeof stats === 'object');
```

`half(stats)` 应该等于 `28.015`。

```js
assert(half(stats) === 28.015);
```

应该使用解构赋值。

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

应该使用解构参数。

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
