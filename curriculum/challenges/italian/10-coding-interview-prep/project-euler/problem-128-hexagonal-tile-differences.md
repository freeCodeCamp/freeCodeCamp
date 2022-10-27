---
id: 5900f3ec1000cf542c50feff
title: 'Problema 128: differenze di mattonelle esagonali'
challengeType: 1
forumTopicId: 301755
dashedName: problem-128-hexagonal-tile-differences
---

# --description--

Una mattonella esagonale con il numero 1 è circondata da un anello di sei mattonelle esagonali, partendo dalla posizione delle dodici in punto numerate da 2 a 7 in direzione antioraria.

Nuovi anelli sono aggiungi nello stesso modo, con i nuovi anelli numerati da 8 a 19, da 20 a 37, da 38 a 61, e così via. Il diagramma qua sotto mostra i primi tre anelli.

<img class="img-responsive center-block" alt="i primi tre anelli delle mattonelle esagonali ordinate con i numeri da 1 a 37, e con evidenziate le mattonelle 8 e 17" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-tile-differences.png" style="background-color: white; padding: 10px;" />

Trovando la differenza tra la mattonella $n$ e ognuna delle sei mattonelle vicine, definiamo $PD(n)$ come il numero delle differenze che sono numeri primi.

Per esempio, lavorando in senso orario attorno alla mattonella 8 le differenze sono 12, 29, 11, 6, 1, e 13. Quindi $PD(8) = 3$.

Allo stesso modo le differenze attorno alla mattonella 17 sono 1, 17, 16, 1, 11, e 10, quindi $PD(17) = 2$.

SI può dimostrare che il valore massimo di $PD(n)$ è $3$.

Se tutte le mattonelle per cui $PD(n) = 3$ sono elencate in ordine crescente a formare una sequenza, la decima mattonella sarebbe 271.

Trova la 2000-sima mattonella nella sequenza.

# --hints--

`hexagonalTile(10)` dovrebbe restituire `271`.

```js
assert.strictEqual(hexagonalTile(10), 271);
```

`hexagonalTile(2000)` dovrebbe restituire `14516824220`.

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
        const primeSqaredIndex = 2 * i ** 2 + 6 * i + 3;
        for (let j = primeSqaredIndex; j < upper; j += prime) {
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
