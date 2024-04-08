---
id: 5900f3781000cf542c50fe8b
title: 'Problem 12: Hochgradig teilbare Dreieckszahl'
challengeType: 1
forumTopicId: 301746
dashedName: problem-12-highly-divisible-triangular-number
---

# --description--

Die Folge der Dreieckszahlen wird durch Addition der natürlichen Zahlen erzeugt. Die 7. Dreieckszahl wäre also 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. Die ersten zehn Begriffe wären:

<div style='text-align: center;'>1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...</div>

Wir wollen die Faktoren der ersten sieben Dreieckszahlen auflisten:

<div style='padding-left: 4em;'><b>1:</b> 1</div>
<div style='padding-left: 4em;'><b>3:</b> 1, 3</div>
<div style='padding-left: 4em;'><b>6:</b> 1, 2, 3, 6</div>
<div style='padding-left: 4em;'><b>10:</b> 1, 2, 5, 10</div>
<div style='padding-left: 4em;'><b>15:</b> 1, 3, 5, 15</div>
<div style='padding-left: 4em;'><b>21:</b> 1, 3, 7, 21</div>
<div style='padding-left: 4em;'><b>28:</b> 1, 2, 4, 7, 14, 28</div>

Wir können sehen, dass 28 die erste Dreieckszahl ist, die mehr als fünf Teiler hat.

Was ist der Wert der ersten Dreieckszahl, die über `n` Teiler haben soll?

# --hints--

`divisibleTriangleNumber(5)` sollte eine Zahl zurückgeben.

```js
assert(typeof divisibleTriangleNumber(5) === 'number');
```

`divisibleTriangleNumber(5)` sollte 28 zurückgeben.

```js
assert.strictEqual(divisibleTriangleNumber(5), 28);
```

`divisibleTriangleNumber(23)` sollte 630 zurückgeben.

```js
assert.strictEqual(divisibleTriangleNumber(23), 630);
```

`divisibleTriangleNumber(167)` sollte 1385280 zurückgeben.

```js
assert.strictEqual(divisibleTriangleNumber(167), 1385280);
```

`divisibleTriangleNumber(374)` sollte 17907120 zurückgeben.

```js
assert.strictEqual(divisibleTriangleNumber(374), 17907120);
```

`divisibleTriangleNumber(500)` sollte 76576500 zurückgeben.

```js
assert.strictEqual(divisibleTriangleNumber(500), 76576500);
```

# --seed--

## --seed-contents--

```js
function divisibleTriangleNumber(n) {

  return true;
}

divisibleTriangleNumber(500);
```

# --solutions--

```js
function divisibleTriangleNumber(n) {
  if (n === 1) return 3;
  let counter = 1;
  let triangleNumber = counter++;


 while (noOfFactors(triangleNumber) < n) {
   triangleNumber += counter++;
 }
return triangleNumber;
}

function noOfFactors(num) {
  const primeFactors = getPrimeFactors(num);
  let prod = 1;
  for(let p in primeFactors) {
    prod *= (primeFactors[p] + 1)
  }
  return prod;
}

function getPrimeFactors(num) {
  let n = num;
  let primes = {};

  let p = 2;
  let sqrt = Math.sqrt(num);

  function checkAndUpdate(inc) {
    if (n % p === 0) {
      const curr = primes[p];
      if (curr) {
        primes[p]++
      } else {
        primes[p] = 1;
      }
      n /= p;
    } else {
      p += inc;
    }
  }

  while(p === 2 && p <= n) {
    checkAndUpdate(1);
  }

  while (p <= n && p <= sqrt) {
    checkAndUpdate(2);
  }
  if(Object.keys(primes).length === 0) {
    primes[num] = 1;
  } else if(n !== 1) {
    primes[n] = 1;
  }
  return primes;
}
```
