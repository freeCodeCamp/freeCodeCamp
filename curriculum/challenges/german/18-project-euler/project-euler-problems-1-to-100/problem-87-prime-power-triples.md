---
id: 5900f3c51000cf542c50fed8
title: 'Problem 87: Prime power triples'
challengeType: 1
forumTopicId: 302201
dashedName: problem-87-prime-power-triples
---

# --description--

Die kleinste Zahl, die sich als Summe aus einem Primzahlquadrat, einem Primzahlwürfel und einer vierten Potenz der Primzahl ausdrücken lässt, ist `28`. In der Tat gibt es genau vier Zahlen unter fünfzig, die sich auf diese Weise ausdrücken lassen:

<div style='margin-left: 4em;'>
  28 = 2<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  33 = 3<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  49 = 5<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  47 = 2<sup>2</sup> + 3<sup>3</sup> + 2<sup>4</sup>
</div><br>

Wie viele Zahlen unter `n` lassen sich als Summe eines Primzahlquadrats, eines Primzahlwürfels und einer vierten Primzahlpotenz ausdrücken?

# --hints--

`primePowerTriples(50)` sollte eine Zahl zurückgeben.

```js
assert(typeof primePowerTriples(50) === 'number');
```

`primePowerTriples(50)` sollte `4` zurückgeben.

```js
assert.strictEqual(primePowerTriples(50), 4);
```

`primePowerTriples(10035)` sollte `684` zurückgeben.

```js
assert.strictEqual(primePowerTriples(10035), 684);
```

`primePowerTriples(500000)` sollte `18899` zurückgeben.

```js
assert.strictEqual(primePowerTriples(500000), 18899);
```

`primePowerTriples(5000000)` sollte `138932` zurückgeben.

```js
assert.strictEqual(primePowerTriples(5000000), 138932);
```

`primePowerTriples(50000000)` sollte `1097343` zurückgeben.

```js
assert.strictEqual(primePowerTriples(50000000), 1097343);
```

# --seed--

## --seed-contents--

```js
function primePowerTriples(n) {

  return true;
}

primePowerTriples(50);
```

# --solutions--

```js
function primePowerTriples(n) {
  function getSievePrimes(max) {
    const primes = [];
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i <= max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j <= max; j = j + i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  function getPowersSummed(numbers, powers, limit, curSum) {
    if (curSum >= limit) {
      return [];
    } else if (powers.length === 0) {
      return [curSum];
    }

    const powersSummed = [];

    const curPower = powers[0];
    const powersLeft = powers.slice(1);
    for (let i = 0; i < numbers.length; i++) {
      const curNumber = numbers[i];
      const nextSum = curSum + curNumber ** curPower;
      if (nextSum >= limit) {
        return powersSummed;
      }
      const result = getPowersSummed(
        numbers,
        powersLeft,
        limit,
        curSum + curNumber ** curPower
      );
      powersSummed.push(...result);
    }
    return powersSummed;
  }

  const maximumBaseNumber = Math.floor(Math.sqrt(n - 2 ** 3 - 2 ** 4)) + 1;
  const primes = getSievePrimes(maximumBaseNumber);
  const uniqueSums = new Set(getPowersSummed(primes, [2, 3, 4], n, 0));

  return uniqueSums.size;
}
```
