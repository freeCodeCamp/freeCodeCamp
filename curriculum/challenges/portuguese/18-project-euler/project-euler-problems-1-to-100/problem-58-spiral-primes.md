---
id: 5900f3a61000cf542c50feb9
title: 'Problema 58: Espiral de números primos'
challengeType: 1
forumTopicId: 302169
dashedName: problem-58-spiral-primes
---

# --description--

Começando com o número 1 e movendo-se em espiral no sentido anti-horário, uma espiral quadrada com cada lado contendo 7 números é formada.

<div style='text-align: center;'>
  <strong><span style='color: red;'>37</span></strong> 36 35 34 33 32 <strong><span style='color: red;'>31</span></strong><br>
  38 <strong><span style='color: red;'>17</span></strong> 16 15 14 <strong><span style='color: red;'>13</span></strong> 30<br>
  39 18  <strong><span style='color: red;'>5</span></strong>  4  <strong><span style='color: red;'>3</span></strong> 12 29<br>
  40 19  6  1  2 11 28<br>
  41 20  <strong><span style='color: red;'>7</span></strong>  8  9 10 27<br>
  42 21 22 23 24 25 26<br>
  <strong><span style='color: red;'>43</span></strong> 44 45 46 47 48 49<br>
</div>

É interessante notar que os números ímpares estão ao longo da diagonal inferior direita. Mas o mais interessante é que 8 dos 13 números que estão em ambas as diagonais são primos, ou seja, uma proporção de 8/13 ≈ 62%.

Se envolvermos a espiral acima com uma nova camada, a espiral passará a ter 9 números em cada lado. Se este processo continuar, qual será o comprimento de cada lado da espiral onde a porcentagem de números primos ao longo de ambas as diagonais é menor que `percent`?

# --hints--

`spiralPrimes(50)` deve retornar um número.

```js
assert(typeof spiralPrimes(50) === 'number');
```

`spiralPrimes(50)` deve retornar `11`.

```js
assert.strictEqual(spiralPrimes(50), 11);
```

`spiralPrimes(15)` deve retornar `981`.

```js
assert.strictEqual(spiralPrimes(15), 981);
```

`spiralPrimes(10)` deve retornar `26241`.

```js
assert.strictEqual(spiralPrimes(10), 26241);
```

# --seed--

## --seed-contents--

```js
function spiralPrimes(percent) {

  return true;
}

spiralPrimes(50);
```

# --solutions--

```js
function spiralPrimes(percent) {
  function isPrime(n) {
    if (n <= 3) {
      return n > 1;
    } else if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  let totalCount = 1;
  let primesCount = 0;
  let curNumber = 1;
  let curSideLength = 1;
  let ratio = 1;
  const wantedRatio = percent / 100;

  while (ratio >= wantedRatio) {
    curSideLength += 2;
    for (let i = 0; i < 4; i++) {
      curNumber += curSideLength - 1;
      totalCount++;
      if (i !== 3 && isPrime(curNumber)) {
        primesCount++;
      }
    }
    ratio = primesCount / totalCount;
  }
  return curSideLength;
}
```
