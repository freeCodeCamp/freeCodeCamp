---
id: 5900f3b91000cf542c50fecc
title: 'Problema 77: Contagem de primos'
challengeType: 1
forumTopicId: 302190
dashedName: problem-77-prime-summations
---

# --description--

É possível chegar a 10 como resultado a partir de uma soma de números primos de cinco formas diferentes:

<div style='margin-left: 4em;'>
  7 + 3<br>
  5 + 5<br>
  5 + 3 + 2<br>
  3 + 3 + 2 + 2<br>
  2 + 2 + 2 + 2 + 2<br><br>
</div>

Qual é o primeiro valor que pode ser escrito como a soma de números primos de `n` maneiras?

# --hints--

`primeSummations(5)` deve retornar um número.

```js
assert(typeof primeSummations(5) === 'number');
```

`primeSummations(5)` deve retornar `11`.

```js
assert.strictEqual(primeSummations(5), 11);
```

`primeSummations(100)` deve retornar `31`.

```js
assert.strictEqual(primeSummations(100), 31);
```

`primeSummations(1000)` deve retornar `53`.

```js
assert.strictEqual(primeSummations(1000), 53);
```

`primeSummations(5000)` deve retornar `71`.

```js
assert.strictEqual(primeSummations(5000), 71);
```

# --seed--

## --seed-contents--

```js
function primeSummations(n) {

  return true;
}

primeSummations(5);
```

# --solutions--

```js
function primeSummations(n) {
  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;
    const primes = [];

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  const MAX_NUMBER = 100;
  const primes = getSievePrimes(MAX_NUMBER);

  for (let curNumber = 2; curNumber < MAX_NUMBER; curNumber++) {
    const combinations = new Array(curNumber + 1).fill(0);
    combinations[0] = 1;
    for (let i = 0; i < primes.length; i++) {
      for (let j = primes[i]; j <= curNumber; j++) {
        combinations[j] += combinations[j - primes[i]];
      }
    }
    if (combinations[curNumber] > n) {
      return curNumber;
    }
  }

  return false;
}
```
