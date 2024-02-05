---
id: 5900f3941000cf542c50fea7
title: 'Завдання 40: константа Чамперноуна'
challengeType: 1
forumTopicId: 302066
dashedName: problem-40-champernownes-constant
---

# --description--

Дано ірраціональний десятковий дріб, створений за допомогою об’єднання натуральних чисел:

0.12345678910**1**112131415161718192021...

Помітно, що дванадцятою цифрою дробової частини є 1.

Якщо *d<sub>n</sub>* являє собою *n*<sup>-ну</sup> цифру дробової частини, знайдіть значення даного виразу.

d<sub>1</sub> × d<sub>10</sub> × d<sub>100</sub> × d<sub>1000</sub> × d<sub>10000</sub> × d<sub>100000</sub> × d<sub>1000000</sub>

# --hints--

`champernownesConstant(100)` має повернути число.

```js
assert(typeof champernownesConstant(100) === 'number');
```

`champernownesConstant(100)` має повернути 5.

```js
assert.strictEqual(champernownesConstant(100), 5);
```

`champernownesConstant(1000)` має повернути 15.

```js
assert.strictEqual(champernownesConstant(1000), 15);
```

`champernownesConstant(1000000)` має повернути 210.

```js
assert.strictEqual(champernownesConstant(1000000), 210);
```

# --seed--

## --seed-contents--

```js
function champernownesConstant(n) {

  return true;
}

champernownesConstant(100);
```

# --solutions--

```js
function champernownesConstant(n) {
  let fractionalPart = '';
  for (let i = 0; fractionalPart.length <= n; i++) {
    fractionalPart += i.toString();
  }

  let product = 1;
  for (let i = 0; i < n.toString().length; i++) {
    const index = 10 ** i;
    product *= parseInt(fractionalPart[index], 10);
  }

  return product;
}
```
