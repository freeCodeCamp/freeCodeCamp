---
id: 5900f3ec1000cf542c50feff
title: 'Problema 128: Diferenças de blocos hexagonais'
challengeType: 1
forumTopicId: 301755
dashedName: problem-128-hexagonal-tile-differences
---

# --description--

Um bloco hexagonal com o número 1 é cercado por um anel de seis blocos hexagonais, começando às "12 horas" e numerando os blocos de 2 a 7 em direção anti-horária.

Novos anéis são adicionados da mesma forma, com os próximos anéis sendo numerados de 8 a 19, 20 a 37, 38 a 61, e assim por diante. O diagrama abaixo mostra os três primeiros anéis.

<img class="img-responsive center-block" alt="três primeiros anéis de blocos hexagonais dispostos com números de 1 a 37 e com os blocos 8 e 17 destacados" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-tile-differences.png" style="background-color: white; padding: 10px;" />

Ao calcular a diferença entre o bloco $n$ e cada um de seus seis vizinhos, definiremos $PD(n)$ como o número dessas diferenças primas, que são primos.

Por exemplo, trabalhando no sentido horário em torno do bloco 8, as diferenças são 12, 29, 11, 6, 1 e 13. Portanto, $PD(8) = 3$.

Da mesma forma, as diferenças em torno do bloco 17 são 1, 17, 16, 1, 11 e 10. Portanto, $PD(17) = 2$.

Pode-se ser mostrar que o valor máximo de $PD(n)$ é $3$.

Se todos os blocos para os quais $PD(n) = 3$ estiverem listados em ordem ascendente para formar uma sequência, o décimo bloco seria 271.

Encontre o 2000º bloco desta sequência.

# --hints--

`hexagonalTile(10)` deve retornar `271`.

```js
assert.strictEqual(hexagonalTile(10), 271);
```

`hexagonalTile(2000)` deve retornar `14516824220`.

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
