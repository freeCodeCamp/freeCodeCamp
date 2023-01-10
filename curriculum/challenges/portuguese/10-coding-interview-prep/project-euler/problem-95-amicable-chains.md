---
id: 5900f3cc1000cf542c50fede
title: 'Problema 95: Cadeias amigáveis'
challengeType: 1
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

Os divisores apropriados de um número são todos os seus divisores excetuando o número em si. Por exemplo, os divisores adequados de 28 são 1, 2, 4, 7 e 14. Como a soma desses divisores é igual a 28, chamamos esse número de um número perfeito.

Curiosamente, a soma dos divisores adequados de 220 é 284 e a soma dos divisores adequados de 284 é 220, formando uma cadeia de dois números. Por esta razão, 220 e 284 são chamados de par amigável.

Talvez menos conhecidas sejam as cadeias mais longas. Por exemplo, começando com 12496, formamos uma cadeia de cinco números:

$$ 12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots) $$

Como essa cadeia retorna ao seu ponto de partida, ela é chamada de uma cadeia amigável.

Encontre o menor membro da maior cadeia amigável sem elementos que excedam o `limit`.

# --hints--

`amicableChains(300)` deve retornar um número.

```js
assert(typeof amicableChains(300) === 'number');
```

`amicableChains(300)` deve retornar `220`.

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` deve retornar `220`.

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` deve retornar `12496`.

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` deve retornar `14316`.

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
