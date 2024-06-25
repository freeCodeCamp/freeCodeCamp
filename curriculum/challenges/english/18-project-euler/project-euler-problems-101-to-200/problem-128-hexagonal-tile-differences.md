---
id: 5900f3ec1000cf542c50feff
title: 'Problem 128: Hexagonal tile differences'
challengeType: 1
forumTopicId: 301755
dashedName: problem-128-hexagonal-tile-differences
---

# --description--

A hexagonal tile with number 1 is surrounded by a ring of six hexagonal tiles, starting at "12 o'clock" and numbering the tiles 2 to 7 in an anti-clockwise direction.

New rings are added in the same fashion, with the next rings being numbered 8 to 19, 20 to 37, 38 to 61, and so on. The diagram below shows the first three rings.

<img class="img-responsive center-block" alt="three first rings of arranged hexagonal tiles with numbers 1 to 37, and with highlighted tiles 8 and 17" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-tile-differences.png" style="background-color: white; padding: 10px;">

By finding the difference between tile $n$ and each of its six neighbours we shall define $PD(n)$ to be the number of those differences which are prime.

For example, working clockwise around tile 8 the differences are 12, 29, 11, 6, 1, and 13. So $PD(8) = 3$.

In the same way, the differences around tile 17 are 1, 17, 16, 1, 11, and 10, hence $PD(17) = 2$.

It can be shown that the maximum value of $PD(n)$ is $3$.

If all of the tiles for which $PD(n) = 3$ are listed in ascending order to form a sequence, the 10th tile would be 271.

Find the 2000th tile in this sequence.

# --hints--

`hexagonalTile(10)` should return `271`.

```js
assert.strictEqual(hexagonalTile(10), 271);
```

`hexagonalTile(2000)` should return `14516824220`.

```js
assert.strictEqual(hexagonalTile(2000), 14516824220);
```

# --seed--

## --seed-contents--

```js
function hexagonalTile(tileIndex) {

  return true;
}

hexagonalTile(10);
```

# --solutions--

```js
class PrimeSeive {
  constructor(num) {
    const seive = Array(Math.floor((num - 1) / 2)).fill(true);
    const upper = Math.floor((num - 1) / 2);
    const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);

    for (let i = 0; i <= sqrtUpper; i++) {
      if (seive[i]) {
        // Mark value in seive array
        const prime = 2 * i + 3;
        // Mark all multiples of this number as false (not prime)
        const primeSquaredIndex = 2 * i ** 2 + 6 * i + 3;
        for (let j = primeSquaredIndex; j < upper; j += prime) {
          seive[j] = false;
        }
      }
    }

    this._seive = seive;
  }

  isPrime(num) {
    return num === 2
      ? true
      : num % 2 === 0
        ? false
        : this.isOddPrime(num);
  }

  isOddPrime(num) {
    return this._seive[(num - 3) / 2];
  }
};

function hexagonalTile(tileIndex) {
  const primeSeive = new PrimeSeive(tileIndex * 420);
  let count = 1;
  let n = 1;
  let number = 0;

  while (count < tileIndex) {
    if (primeSeive.isPrime(6*n - 1) &&
        primeSeive.isPrime(6*n + 1) &&
        primeSeive.isPrime(12*n + 5)) {
      number = 3*n*n - 3*n + 2;
      count++;
      if (count >= tileIndex) break;
    }
    if (primeSeive.isPrime(6*n + 5) &&
        primeSeive.isPrime(6*n - 1) &&
        primeSeive.isPrime(12*n - 7) && n != 1) {
      number = 3*n*n + 3*n + 1;
      count++;
    }
    n++;
  }
  return number;
}
```
