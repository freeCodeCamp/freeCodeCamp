---
id: 5900f4491000cf542c50ff5c
title: 'Problema 221: Inteiros alexandrinos'
challengeType: 1
forumTopicId: 301864
dashedName: problem-221-alexandrian-integers
---

# --description--

Chamaremos um número inteiro positivo $A$ de "inteiro alexandrino" se existirem inteiros $p$, $q$, $r$, como:

$$A = p \times q \times r$$

e

$$\frac{1}{A} = \frac{1}{p} + \frac{1}{q} + \frac{1}{r}$$


Por exemplo, 630 é um inteiro alexandrino ($p = 5$, $q = − 7$, $r = − 18$). Na verdade, 630 é o 6° inteiro alexandrino, sendo os 6 primeiros números inteiros alexandrinos 6, 42, 120, 156, 420 e 630.

Encontre o número 150.000º inteiro alexandrino.

# --hints--

`alexandrianIntegers()` deve retornar `1884161251122450`.

```js
assert.strictEqual(alexandrianIntegers(), 1884161251122450);
```

# --seed--

## --seed-contents--

```js
function alexandrianIntegers() {

  return true;
}

alexandrianIntegers();
```

# --solutions--

```js
// solution required
```
