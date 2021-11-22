---
id: 5900f4c81000cf542c50ffd9
title: 'Problema 347: Maior número inteiro divisível por dois primos'
challengeType: 5
forumTopicId: 302006
dashedName: problem-347-largest-integer-divisible-by-two-primes
---

# --description--

O maior número inteiro $≤ 100$ que só é divisível pelos dois primos 2 e 3 é 96, como $96 = 32 \times 3 = 2^5 \times 3$.

Para dois primos distintos $p$ e $q$, considere $M(p, q, N)$ como o maior número inteiro positivo $≤ N$ divisível apenas por $p$ e $q$ e $M(p, q, N)=0$ se um número inteiro positivo como esse não existir.

Ex: $M(2, 3, 100) = 96$.

$M(3, 5, 100) = 75$ e não 90, pois 90 é divisível por 2, 3 e 5. Além disso $M(2, 73, 100) = 0$, pois não existe um número positivo inteiro $≤ 100$ que seja divisível por 2 e por 73.

Considere $S(N)$ como a soma de todos os $M(p, q, N)$ distintos. $S(100)=2262$.

Encontre $S(10.000.000)$.

# --hints--

`integerDivisibleByTwoPrimes()` deve retornar `11109800204052`.

```js
assert.strictEqual(integerDivisibleByTwoPrimes(), 11109800204052);
```

# --seed--

## --seed-contents--

```js
function integerDivisibleByTwoPrimes() {

  return true;
}

integerDivisibleByTwoPrimes();
```

# --solutions--

```js
// solution required
```
