---
id: 5900f36f1000cf542c50fe82
title: 'Завдання 3: Найбільший простий множник'
challengeType: 1
forumTopicId: 301952
dashedName: problem-3-largest-prime-factor
---

# --description--

Простими множниками числа 13195 є 5, 7, 13 та 29.

Який найбільший простий множник заданого числа (`number`)?

# --hints--

`largestPrimeFactor(2)` має повернути число.

```js
assert(typeof largestPrimeFactor(2) === 'number');
```

`largestPrimeFactor(2)` має повернути число 2.

```js
assert.strictEqual(largestPrimeFactor(2), 2);
```

`largestPrimeFactor(3)` має повернути число 3.

```js
assert.strictEqual(largestPrimeFactor(3), 3);
```

`largestPrimeFactor(5)` має повернути число 5.

```js
assert.strictEqual(largestPrimeFactor(5), 5);
```

`largestPrimeFactor(7)` має повернути число 7.

```js
assert.strictEqual(largestPrimeFactor(7), 7);
```

`largestPrimeFactor(8)` має повернути число 2.

```js
assert.strictEqual(largestPrimeFactor(8), 2);
```

`largestPrimeFactor(13195)` має повернути число 29.

```js
assert.strictEqual(largestPrimeFactor(13195), 29);
```

`largestPrimeFactor(600851475143)` має повернути число 6857.

```js
assert.strictEqual(largestPrimeFactor(600851475143), 6857);
```

# --seed--

## --seed-contents--

```js
function largestPrimeFactor(number) {

  return true;
}

largestPrimeFactor(13195);
```

# --solutions--

```js
const largestPrimeFactor = (number) => {
  let largestFactor = number;

  for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
    if (!(largestFactor % i)) {
      let factor = largestFactor / i;
      let candidate = largestPrimeFactor(factor);

      return i > candidate ? i : candidate;
    }
  }

  return largestFactor;
}
```
