---
id: 5900f39f1000cf542c50feb2
title: 'Problem 51: Primzahlen-Ersatz'
challengeType: 1
forumTopicId: 302162
dashedName: problem-51-prime-digit-replacements
---

# --description--

Ersetzt man die erste Ziffer der zweistelligen Zahl \*3, so stellt sich heraus, dass sechs der neun möglichen Werte: 13, 23, 43, 53, 73 und 83, alle Primzahlen sind.

Ersetzt man die 3. und 4. Ziffer von 56\*\*3 durch dieselbe Ziffer, so ist diese fünfstellige Zahl das erste Beispiel mit sieben Primzahlen unter den zehn generierten Zahlen und ergibt die Familie: 56003, 56113, 56333, 56443, 56663, 56773 und 56993. Folglich ist 56003, das erste Mitglied dieser Familie, die kleinste Primzahl mit dieser Eigenschaft.

Finde die kleinste Primzahl, die, wenn man einen Teil der Zahl (nicht unbedingt benachbarte Ziffern) durch dieselbe Ziffer ersetzt, zu einer `n` Primzahlfamilie gehört.

# --hints--

`primeDigitReplacements(6)` sollte eine Zahl zurückgeben.

```js
assert(typeof primeDigitReplacements(6) === 'number');
```

`primeDigitReplacements(6)` sollte `13` zurückgeben.

```js
assert.strictEqual(primeDigitReplacements(6), 13);
```

`primeDigitReplacements(7)` sollte `56003` zurückgeben.

```js
assert.strictEqual(primeDigitReplacements(7), 56003);
```

`primeDigitReplacements(8)` sollte `121313` zurückgeben.

```js
assert.strictEqual(primeDigitReplacements(8), 121313);
```

# --seed--

## --seed-contents--

```js
function primeDigitReplacements(n) {

  return true;
}

primeDigitReplacements(6);
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

function primeDigitReplacements(n) {
  const primeSeive = new PrimeSeive(n * n * n * 2000);

  function isNFamily(number, n) {
    const prime = number.toString();
    const lastDigit = prime[prime.length - 1];
    return doesReplacingMakeFamily(prime, '0', n) ||
      doesReplacingMakeFamily(prime, '2', n) ||
      (lastDigit !== '1' && doesReplacingMakeFamily(prime, '1', n));
  }

  function doesReplacingMakeFamily(prime, digitToReplace, family) {
    let miss = 0;
    const base = parseInt(
      prime
        .split('')
        .map(digit => digit == digitToReplace ? '0' : digit)
        .join('')
    );
    const replacements = parseInt(
      prime
        .split('')
        .map(digit => digit === digitToReplace ? '1' : '0')
        .join('')
    );
    const start = prime[0] === digitToReplace ? 1 : 0;
    for (let i = start; i < 10; i++) {
      const nextNumber = base + i * replacements;
      if (!isPartOfFamily(nextNumber, prime)) miss++;
      if (10 - start - miss < family) break;
    }
    return 10 - start - miss === family;
  }

  function isPartOfFamily(number, prime) {
    return (
      primeSeive.isPrime(number) && number.toString().length === prime.length
    );
  }

  for (let number = 1; number < 125000; number++) {
    if (primeSeive.isPrime(number) && isNFamily(number, n)) {
      return number;
    }
  }
  return -1;
}
```
