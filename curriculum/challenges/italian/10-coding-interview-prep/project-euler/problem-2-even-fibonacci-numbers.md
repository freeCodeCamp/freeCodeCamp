---
id: 5900f36e1000cf542c50fe81
title: 'Problema 2: serie pari di Fibonacci'
challengeType: 1
forumTopicId: 301838
dashedName: problem-2-even-fibonacci-numbers
---

# --description--

Ogni nuovo termine della sequenza di Fibonacci è dato dalla somma dei due numeri precedenti. A partire da 1 e 2, i primi 10 termini saranno:

<div style='text-align: center;'>1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>

Considerando i termini nella sequenza di Fibonacci i cui valori non superano `n`, trovare la somma dei termini pari.

# --hints--

`fiboEvenSum(10)` dovrebbe restituire un numero.

```js
assert(typeof fiboEvenSum(10) === 'number');
```

La tua funzione dovrebbe restituire un valore pari.

```js
assert.equal(fiboEvenSum(10) % 2 === 0, true);
```

La tua funzione dovrebbe sommare i numeri di Fibonacci a valore pari: `fiboEvenSum(8)` dovrebbe restituire 10.

```js
assert.strictEqual(fiboEvenSum(8), 10);
```

`fiboEvenSum(10)` dovrebbe restituire 10.

```js
assert.strictEqual(fiboEvenSum(10), 10);
```

`fiboEvenSum(34)` dovrebbe restituire 44.

```js
assert.strictEqual(fiboEvenSum(34), 44);
```

`fiboEvenSum(60)` dovrebbe restituire 44.

```js
assert.strictEqual(fiboEvenSum(60), 44);
```

`fiboEvenSum(1000)` dovrebbe restituire 798.

```js
assert.strictEqual(fiboEvenSum(1000), 798);
```

`fiboEvenSum(100000)` dovrebbe restituire 60696.

```js
assert.strictEqual(fiboEvenSum(100000), 60696);
```

`fiboEvenSum(4000000)` dovrebbe restituire 4613732.

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
