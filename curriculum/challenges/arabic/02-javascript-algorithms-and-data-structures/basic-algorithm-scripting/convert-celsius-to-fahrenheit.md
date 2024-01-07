---
id: 56533eb9ac21ba0edf2244b3
title: تحويل الدرجات المئوية (Celsius) إلى فهرنهايت (Fahrenheit)
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

معادلة تحويل درجة الحرارة من الدرجة المئوية إلى درجة فهرنهايت هي: درجة الحرارة المئوية مضروبة في `9/5`, مضاف إليها `32`.

لديك المتغير `celsius` ويمثل درجة الحرارة المئوية. استخدم المتغير `fahrenheit` الذي سبق أعلانه وعيّن درجة حرارة فهرنهايت المعادلة لدرجة الحرارة المئوية المعطاة. استخدم المعادلة في السطر الأول، لتحويل درجة الحرارة المئوية إلى فهرنهايت.

# --hints--

`convertCtoF(0)` يجب أن ينتج رقماً

```js
assert(typeof convertCtoF(0) === 'number');
```

`convertCtoF(-30)` يجب أن ينتج قيمة `-22`

```js
assert(convertCtoF(-30) === -22);
```

`convertCtoF(-10)` يجب أن ينتج قيمة `14`

```js
assert(convertCtoF(-10) === 14);
```

`convertCtoF(0)` يجب أن ينتج قيمة `32`

```js
assert(convertCtoF(0) === 32);
```

`convertCtoF(20)` يجب أن ينتج قيمة `68`

```js
assert(convertCtoF(20) === 68);
```

`convertCtoF(30)` يجب أن ينتج قيمة `86`

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
