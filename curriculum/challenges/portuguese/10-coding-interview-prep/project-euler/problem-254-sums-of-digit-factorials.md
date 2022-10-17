---
id: 5900f46b1000cf542c50ff7d
title: 'Problema 254: Soma de algarismos fatoriais'
challengeType: 1
forumTopicId: 301902
dashedName: problem-254-sums-of-digit-factorials
---

# --description--

Defina $f(n)$ como a soma dos fatoriais dos algarismos de $n$. Por exemplo, $f(342) = 3! + 4! + 2! = 32$.

Defina $sf(n)$ como a soma dos algarismos de $f(n)$. Então, $sf(342) = 3 + 2 = 5$.

Defina $g(i)$ como o menor número inteiro positivo $n$, tal que $sf(n) = i$. Embora $sf(342)$ seja 5, $sf(25)$ também é 5. Além disso, pode-se verificar que $g(5)$ é 25.

Defina $sg(i)$ como a soma dos algarismos de $g(i)$. Então, $sg(5) = 2 + 5 = 7$.

Além disso, pode ser verificado que $g(20)$ é 267 e $\sum sg(i)$ para $1 ≤ i ≤ 20$ é 156.

Qual é a $\sum sg(i)$ para $1 ≤ n ≤ 150$?

# --hints--

`sumsOfDigitFactorials()` deve retornar `8184523820510`.

```js
assert.strictEqual(sumsOfDigitFactorials(), 8184523820510);
```

# --seed--

## --seed-contents--

```js
function sumsOfDigitFactorials() {

  return true;
}

sumsOfDigitFactorials();
```

# --solutions--

```js
// solution required
```
