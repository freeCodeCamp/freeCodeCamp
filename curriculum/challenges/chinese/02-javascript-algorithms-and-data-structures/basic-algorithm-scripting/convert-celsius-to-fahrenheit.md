---
id: 56533eb9ac21ba0edf2244b3
title: 将摄氏度转换为华氏度
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

从摄氏转换为华氏的公式是，摄氏温度乘以 `9/5`，再加上 `32`。

输入参数 `celsius` 代表一个摄氏度的温度。 使用已定义的变量 `fahrenheit`，并赋值为相应的华氏度的温度值。 使用上面提到的公式来帮助将摄氏温度转换为华氏温度。

# --hints--

`convertToF(0)` 应返回一个数字。

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` 应返回 `-22`。

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` 应返回 `14`。

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` 应返回 `32`。

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` 应返回 `68`。

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` 应返回 `86`。

```js
assert(convertToF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

# --solutions--

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```
