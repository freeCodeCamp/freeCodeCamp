---
id: 56533eb9ac21ba0edf2244b3
title: 将摄氏温度转换为华氏温度
challengeType: 1
videoUrl: ''
---

# --description--

从摄氏温度转换为华氏温度的算法是以摄氏度乘以`9/5`，再加上`32` 。您将获得一个参数`celsius`代表着摄氏温度。使用已准备好代表华氏温度的变量`fahrenheit`，将`celsius`摄氏温度变量值兑换成华氏温度值，然后存储在`farenheit`变量里。使用以上提到的算法将摄氏温度转换为华氏温度。不需要过多担心函数和返回语句，因为它们将会在未来的挑战中加以解释。目前，只需使用您已经学过的运算符。

# --hints--

`convertToF(0)`应该返回一个数字

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)`应该返回值`-22`

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)`应该返回值`14`

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)`应返回值`32`

```js
assert(convertToF(0) === 32);
```

`convertToF(20)`应返回值`68`

```js
assert(convertToF(20) === 68);
```

`convertToF(30)`应返回值`86`

```js
assert(convertToF(30) === 86);
```

# --solutions--

