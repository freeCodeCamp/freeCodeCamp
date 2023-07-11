---
id: 5900f4451000cf542c50ff57
title: 'Problema 216: Investigação da primalidade dos números da forma 2n2-1'
challengeType: 1
forumTopicId: 301858
dashedName: problem-216-investigating-the-primality-of-numbers-of-the-form-2n2-1
---

# --description--

Considere os números $t(n)$ da forma $t(n) = 2n^2 - 1$, sendo $n > 1$.

Os primeiros desses números são 7, 17, 31, 49, 71, 97, 127 e 161.

Ocorre que apenas $49 = 7 \times 7$ e $161 = 7 \times 23$ dentre esses não são números primos.

Para $n ≤ 10000$, há 2202 números $t(n)$ que são primos.

Quantos números $t(n)$ são primos para $n ≤ 50.000.000$?

# --hints--

`primalityOfNumbers()` deve retornar `5437849`.

```js
assert.strictEqual(primalityOfNumbers(), 5437849);
```

# --seed--

## --seed-contents--

```js
function primalityOfNumbers() {

  return true;
}

primalityOfNumbers();
```

# --solutions--

```js
// solution required
```
