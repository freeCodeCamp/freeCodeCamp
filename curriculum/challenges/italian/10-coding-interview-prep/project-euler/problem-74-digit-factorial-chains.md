---
id: 5900f3b61000cf542c50fec9
title: 'Problema 74: catene fattoriali di cifre'
challengeType: 1
forumTopicId: 302187
dashedName: problem-74-digit-factorial-chains
---

# --description--

Il numero 145 è noto per la proprietà che la somma del fattoriale delle sue cifre è pari a 145:

$$1! + 4! + 5! = 1 + 24 + 120 = 145$$

Forse meno noto è 169, in quanto produce la più lunga catena di numeri che riportano a 169; si scopre che esistono solo tre di questi loop:

$$\begin{align} &169 → 363601 → 1454 → 169\\\\
&871 → 45361 → 871\\\\ &872 → 45362 → 872\\\\
\end{align}$$

Non è difficile dimostrare che OGNI numero di partenza alla fine entrerà in un ciclo. Per esempio,

$$\begin{align} &69 → 363600 → 1454 → 169 → 363601\\ (→ 1454)\\\\
&78 → 45360 → 871 → 45361\\ (→ 871)\\\\ &540 → 145\\ (→ 145)\\\\
\end{align}$$

Partire con 69 produce una catena di cinque termini non ripetibili, ma la più lunga catena non ripetibile con un numero iniziale inferiore a un milione è di sessanta termini.

Quante catene, con un numero iniziale inferiore a `n`, contengono esattamente sessanta termini non ripetibili?

# --hints--

`digitFactorialChains(2000)` dovrebbe restituire un numero.

```js
assert(typeof digitFactorialChains(2000) === 'number');
```

`digitFactorialChains(2000)` dovrebbe restituire `6`.

```js
assert.strictEqual(digitFactorialChains(2000), 6);
```

`digitFactorialChains(100000)` dovrebbe restituire `42`.

```js
assert.strictEqual(digitFactorialChains(100000), 42);
```

`digitFactorialChains(500000)` dovrebbe restituire `282`.

```js
assert.strictEqual(digitFactorialChains(500000), 282);
```

`digitFactorialChains(1000000)` dovrebbe restituire `402`.

```js
assert.strictEqual(digitFactorialChains(1000000), 402);
```

# --seed--

## --seed-contents--

```js
function digitFactorialChains(n) {

  return true;
}

digitFactorialChains(2000);
```

# --solutions--

```js
function digitFactorialChains(n) {
  function sumDigitsFactorials(number) {
    let sum = 0;
    while (number > 0) {
      sum += factorials[number % 10];
      number = Math.floor(number / 10);
    }
    return sum;
  }

  const factorials = [1];
  for (let i = 1; i < 10; i++) {
    factorials.push(factorials[factorials.length - 1] * i);
  }

  const sequences = {
    169: 3,
    871: 2,
    872: 2,
    1454: 3,
    45362: 2,
    45461: 2,
    3693601: 3
  };
  let result = 0;

  for (let i = 2; i < n; i++) {
    let curNum = i;
    let chainLength = 0;
    const curSequence = [];
    while (curSequence.indexOf(curNum) === -1) {
      curSequence.push(curNum);
      curNum = sumDigitsFactorials(curNum);
      chainLength++;
      if (sequences.hasOwnProperty(curNum) > 0) {
        chainLength += sequences[curNum];
        break;
      }
    }
    if (chainLength === 60) {
      result++;
    }
    for (let j = 1; j < curSequence.length; j++) {
      sequences[curSequence[j]] = chainLength - j;
    }
  }
  return result;
}
```
