---
id: 5900f36e1000cf542c50fe81
title: 'Problema 2: Números pares en la sucesión de Fibonacci'
challengeType: 1
forumTopicId: 301838
dashedName: problem-2-even-fibonacci-numbers
---

# --description--

Cada nuevo número en la sucesión de Fibonacci se genera al sumar los dos números anteriores. Comenzando con 1 y 2, los primeros 10 números serán:

<div style='text-align: center;'>1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>

Considerando solamente los términos de la sucesión de Fibonacci que no sean mayores que `n`, encontrar la suma de los términos con valor par.

# --hints--

`fiboEvenSum(10)` debe devolver un número.

```js
assert(typeof fiboEvenSum(10) === 'number');
```

Tu función debe devolver un número par.

```js
assert.equal(fiboEvenSum(10) % 2 === 0, true);
```

Tu función debe sumar los números de Fibonacci con valor par: `fiboEvenSum(8)` debe devolver 10.

```js
assert.strictEqual(fiboEvenSum(8), 10);
```

`fiboEvenSum(10)` debe devolver 10.

```js
assert.strictEqual(fiboEvenSum(10), 10);
```

`fiboEvenSum(34)` debe devolver 44.

```js
assert.strictEqual(fiboEvenSum(34), 44);
```

`fiboEvenSum(60)` debe devolver 44.

```js
assert.strictEqual(fiboEvenSum(60), 44);
```

`fiboEvenSum(1000)` debe devolver 798.

```js
assert.strictEqual(fiboEvenSum(1000), 798);
```

`fiboEvenSum(100000)` debe devolver 60696.

```js
assert.strictEqual(fiboEvenSum(100000), 60696);
```

`fiboEvenSum(4000000)` debe devolver 4613732.

```js
assert.strictEqual(fiboEvenSum(4000000), 4613732);
```

# --seed--

## --seed-contents--

```js
function fiboEvenSum(n) {

  return true;
}
```

# --solutions--

```js
const fiboEvenSum = (number) => {
  if (number <= 1) {
    return 0;
  } else {
    let evenSum = 0,
      prevFibNum = 1,
      fibNum = 2; // According to problem description our Fibonacci series starts with 1, 2
    for (let i = 2; fibNum <= number; i++) {
      if (fibNum % 2 == 0) {
        evenSum += fibNum;
      }
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    }
    return evenSum;
  }
};
```
