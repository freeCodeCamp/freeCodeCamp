---
id: 5900f3ec1000cf542c50feff
title: 'Завдання 128: Різниці шестикутних плиток'
challengeType: 1
forumTopicId: 301755
dashedName: problem-128-hexagonal-tile-differences
---

# --description--

Шестикутна плитка з числом 1 оточена кільцем із шести шестикутних плиток, які, починаючи із «12-ї години», пронумеровані від 2 до 7 у напрямку проти годинникової стрілки.

Нові кільця додані так само, і пронумеровані від 8 до 19, від 20 до 37, від 38 до 61 і так далі. Подана нижче діаграма показує перші три кільця.

<img class="img-responsive center-block" alt="перші три кільця упорядкованих шестикутних плиток з числами від 1 до 37 і з виділеними плитками 8 та 17" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-tile-differences.png" style="background-color: white; padding: 10px;" />

Знайшовши різницю між плиткою $n$ та кожним із її шести сусідів, визначимо $PD(n)$ як кількість тих різниць, які є простими.

Наприклад, працюючи за годинниковою стрілкою навколо клітинки 8, різницями є 12, 29, 11, 6, 1 та 13. Отже $PD(8) = 3$.

Точно так само різницями навколо плитки 17 є 1, 17, 16, 1, 11 та 10, тому $PD(17) = 2$.

Можна показати, що максимальним значенням $PD(n)$ є $3$.

Якщо всі плитки, для яких $PD(n) = 3$, перераховані в порядку зростання для формування послідовності, то 10-та плитка буде 271.

Знайдіть 2000-ну плитку в цій послідовності.

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
