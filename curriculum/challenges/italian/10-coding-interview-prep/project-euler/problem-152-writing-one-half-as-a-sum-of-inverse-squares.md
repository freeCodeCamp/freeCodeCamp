---
id: 5900f4041000cf542c50ff17
title: 'Problema 152: Scrittura di un mezzo come somma di quadrati inversi'
challengeType: 1
forumTopicId: 301783
dashedName: problem-152-writing-one-half-as-a-sum-of-inverse-squares
---

# --description--

Ci sono diversi modi per scrivere il numero $\frac{1}{2}$ come somma di quadrati inversi utilizzando numeri interi distinti.

Per esempio, possono essere utilizzati i numeri {2,3,4,5,7,12,15,20,28,35}:

$$\frac{1}{2} = \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \frac{1}{5^2} + \frac{1}{7^2} + \frac{1}{{12}^2} + \frac{1}{{15}^2} + \frac{1}{{20}^2} + \frac{1}{{28}^2} + \frac{1}{{35}^2}$$

Infatti, utilizzando solo interi compresi tra 2 e 45 inclusi, ci sono esattamente tre modi per farlo, i restanti due essendo: {2,3,4,6,7,9,10,20,28,35,36,45} e {2,3,4,6,7,9,12,15,28,30,35,36,45}.

Quanti modi ci sono per scrivere il numero $\frac{1}{2}$ come somma di quadrati inversi utilizzando numeri interi distinti tra 2 e 80 inclusi?

# --hints--

`sumInverseSquares()` dovrebbe restituire `301`.

```js
assert.strictEqual(sumInverseSquares(), 301);
```

# --seed--

## --seed-contents--

```js
function sumInverseSquares() {

  return true;
}

sumInverseSquares();
```

# --solutions--

```js
// solution required
```
