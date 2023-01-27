---
id: 5900f3cc1000cf542c50fede
title: 'Problema 95: catene amichevoli'
challengeType: 1
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

I divisori propri di un numero sono tutti i divisori, escluso il numero stesso. Ad esempio, i divisori propri di 28 sono 1, 2, 4, 7 e 14. Poiché la somma di questi divisori è uguale a 28, lo chiameremo un numero perfetto.

È interessante notare che la somma dei divisori propri di 220 è 284 e la somma dei divisori propri di 284 è 220, formando una catena di due numeri. Per questo motivo, 220 e 284 sono chiamati una coppia amichevole.

Forse meno note sono catene più lunghe. Per esempio, iniziando con 12496, formiamo una catena di cinque numeri:

$$ 12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots) $$

Visto che la catena torna al punto iniziale, è chiamata una catena amichevole.

Trova l'elemento più piccolo della catena amichevole più lunga che non abbia alcun elemento che vada sopra `limit`.

# --hints--

`amicableChains(300)` dovrebbe restituire un numero.

```js
assert(typeof amicableChains(300) === 'number');
```

`amicableChains(300)` dovrebbe restituire `220`.

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` dovrebbe restituire `220`.

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` dovrebbe restituire `12496`.

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` dovrebbe restituire `14316`.

```js
assert.strictEqual(amicableChains(1000000), 14316);
```

# --seed--

## --seed-contents--

```js
function amicableChains(limit) {

  return true;
}

amicableChains(300);
```

# --solutions--

```js
function amicableChains(limit) {
  function getSmallestMember(chain) {
    let smallest = chain[0];
    for (let i = 1; i < chain.length; i++) {
      if (smallest > chain[i]) {
        smallest = chain[i];
      }
    }
    return smallest;
  }

  function getFactorsSums(limit) {
    const factorsSums = new Array(limit + 1).fill(1);
    for (let i = 2; i <= limit / 2; i++) {
      for (let j = 2 * i; j <= limit; j += i) {
        factorsSums[j] += i;
      }
    }
    return factorsSums;
  }

  const factorsSums = getFactorsSums(limit);
  const checkedNumbers = new Set();

  let longestChain = 0;
  let smallestMember = 0;
  for (let i = 0; i <= limit; i++) {
    const curChain = [];
    let curNumber = i;
    while (!checkedNumbers.has(curNumber) && factorsSums[curNumber] <= limit) {
      curNumber = factorsSums[curNumber];

      const chainStart = curChain.indexOf(curNumber);
      if (chainStart === -1) {
        curChain.push(curNumber);
        continue;
      }

      const chainLength = curChain.length - chainStart;
      if (chainLength > longestChain) {
        longestChain = chainLength;
        smallestMember = getSmallestMember(curChain.slice(chainStart));
      }
      break;
    }

    for (let j = 0; j < curChain.length; j++) {
      checkedNumbers.add(curChain[j]);
    }
  }

  return smallestMember;
}
```
