---
id: 5900f36e1000cf542c50fe81
title: 'Problema 2: Apenas números pares da sequência de Fibonacci'
challengeType: 1
forumTopicId: 301838
dashedName: problem-2-even-fibonacci-numbers
---

# --description--

Cada novo número na sequência de Fibonacci é gerado pela soma dos dois números anteriores. Ao começar com 1 e 2, os primeiros 10 números serão:

<div style='text-align: center;'>1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>

Considerando os números na sequência de Fibonacci cujos valores não excedem `n`, encontre a soma dos números pares.

# --hints--

`fiboEvenSum(10)` deve retornar um número.

```js
assert(typeof fiboEvenSum(10) === 'number');
```

A função deve retornar um valor par (even).

```js
assert.equal(fiboEvenSum(10) % 2 === 0, true);
```

A função deve somar os números pares de Fibonacci: `fiboEvenSum(8)` deve retornar 10.

```js
assert.strictEqual(fiboEvenSum(8), 10);
```

`fiboEvenSum(10)` deve retornar 10.

```js
assert.strictEqual(fiboEvenSum(10), 10);
```

`fiboEvenSum(34)` deve retornar 44.

```js
assert.strictEqual(fiboEvenSum(34), 44);
```

`fiboEvenSum(60)` deve retornar 44.

```js
assert.strictEqual(fiboEvenSum(60), 44);
```

`fiboEvenSum(1000)` deve retornar 798.

```js
assert.strictEqual(fiboEvenSum(1000), 798);
```

`fiboEvenSum(100000)` deve retornar 60696.

```js
assert.strictEqual(fiboEvenSum(100000), 60696);
```

`fiboEvenSum(4000000)` deve retornar 4613732.

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
