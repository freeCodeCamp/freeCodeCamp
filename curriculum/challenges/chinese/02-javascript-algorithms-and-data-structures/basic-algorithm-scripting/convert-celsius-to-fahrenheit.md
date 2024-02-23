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

`convertCtoF(0)` 应该返回一个数字

```js
assert(typeof convertCtoF(0) === 'number');
```

`convertCtoF(-30)` 应该返回 `-22` 的值

```js
assert(convertCtoF(-30) === -22);
```

`convertCtoF(-10)` 应该返回 `14` 的值

```js
assert(convertCtoF(-10) === 14);
```

`convertCtoF(0)` 应该返回 `32` 的值

```js
assert(convertCtoF(0) === 32);
```

`convertCtoF(20)` 应该返回 `68` 的值

```js
assert(convertCtoF(20) === 68);
```

`convertCtoF(30)` 应该返回 `86` 的值

```js
assert(convertCtoF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);
```

# --solutions--

```js
function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertCtoF(30);
```
