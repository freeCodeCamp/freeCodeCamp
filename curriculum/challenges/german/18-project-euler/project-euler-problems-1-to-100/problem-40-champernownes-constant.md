---
id: 5900f3941000cf542c50fea7
title: 'Problem 40: Die Champernowne-Konstante'
challengeType: 1
forumTopicId: 302066
dashedName: problem-40-champernownes-constant
---

# --description--

Ein irrationaler Dezimalbruch wird durch Verkettung der positiven ganzen Zahlen erstellt:

0.12345678910**1**112131415161718192021...

Er zeigt, dass die 12<sup>th</sup> Stelle des Bruchteils 1 ist.

Wenn *d<sub>n</sub>* die *n*<sup>th</sup>-Ziffer des Bruchteils darstellt, findest du den Wert des folgenden Ausdrucks.

d<sub>1</sub> × d<sub>10</sub> × d<sub>100</sub> × d<sub>1000</sub> × d<sub>10000</sub> × d<sub>100000</sub> × d<sub>1000000</sub>

# --hints--

`champernownesConstant(100)` sollte eine Zahl zurückgeben.

```js
assert(typeof champernownesConstant(100) === 'number');
```

`champernownesConstant(100)` sollte 5 zurückgeben.

```js
assert.strictEqual(champernownesConstant(100), 5);
```

`champernownesConstant(1000)` sollte 15 zurückgeben.

```js
assert.strictEqual(champernownesConstant(1000), 15);
```

`champernownesConstant(1000000)` sollte 210 zurückgeben.

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
