---
id: 5900f3ec1000cf542c50feff
title: '問題 128: 六角形タイルの差'
challengeType: 1
forumTopicId: 301755
dashedName: problem-128-hexagonal-tile-differences
---

# --description--

1 番の六角形タイルは、12 時の位置から反時計回りに配置された 2 番から 7 番の 6 枚の六角形タイルの輪に囲まれています。

同様に、8 番から 19 番、20 番から 37 番、38 番から 61 番、… という具合に新しい輪が追加されていきます。 下図は、最初の 3 個の輪を示しています。

<img class="img-responsive center-block" alt="1 ～ 37 番の六角形タイルを並べて作られた最初の 3 つの輪。タイル 8 番と 17 番は色付き" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-tile-differences.png" style="background-color: white; padding: 10px;" />

タイル $n$ 番と、それに隣接する 6 枚の各タイルとの差を求め、差が素数となるタイルの枚数を $PD(n) とします。

例えば、タイル 8 番の周りを時計回りに差を求めると、12, 29, 11, 6, 1, 13 となります。 したがって、$PD(8) = 3$ です。

同様に、タイル 17 番とその周囲との差は 1, 17, 16, 1, 11, 10 なので、$PD(17) = 2$ です。

$PD(n)$ の最大値が $3$ であることを示すことができます。

$PD(n) = 3$ が成り立つすべてのタイルを昇順に並べて数列を作ると、第 10 項はタイル 271 番です。

この数列の 第 2000 項のタイルの番号を求めなさい。

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
