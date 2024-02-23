---
id: 5900f3a61000cf542c50feb9
title: '問題 58: らせん素数'
challengeType: 1
forumTopicId: 302169
dashedName: problem-58-spiral-primes
---

# --description--

次のように 1 から始めて反時計回りにらせん状に数字を置いていくと、辺の長さが 7 の正方形のらせんができます。

<div style='text-align: center;'>
  <strong><span style='color: red;'>37</span></strong> 36 35 34 33 32 <strong><span style='color: red;'>31</span></strong><br>
  38 <strong><span style='color: red;'>17</span></strong> 16 15 14 <strong><span style='color: red;'>13</span></strong> 30<br>
  39 18  <strong><span style='color: red;'>5</span></strong>  4  <strong><span style='color: red;'>3</span></strong> 12 29<br>
  40 19  6  1  2 11 28<br>
  41 20  <strong><span style='color: red;'>7</span></strong>  8  9 10 27<br>
  42 21 22 23 24 25 26<br>
  <strong><span style='color: red;'>43</span></strong> 44 45 46 47 48 49<br>
</div>

興味深いことに、右下の対角線上に奇数の平方数が現れます。しかしもっと興味深いのは、両方の対角線上にある 13 個の数字のうち 8 個が素数であることです。その割合は 8/13 ≈ 62% です。

このらせんの周りに完全な 1 層を新たに加えると、辺の長さが 9 の正方形のらせんになります。 この処理を続けた場合に、両方の対角線上の素数の割合が最初に `percent` を下回るような正方形のらせんの辺長を求めなさい。

# --hints--

`spiralPrimes(50)` は数値を返す必要があります。

```js
assert(typeof spiralPrimes(50) === 'number');
```

`spiralPrimes(50)` は `11` を返す必要があります。

```js
assert.strictEqual(spiralPrimes(50), 11);
```

`spiralPrimes(15)` は `981` を返す必要があります。

```js
assert.strictEqual(spiralPrimes(15), 981);
```

`spiralPrimes(10)` は `26241` を返す必要があります。

```js
assert.strictEqual(spiralPrimes(10), 26241);
```

# --seed--

## --seed-contents--

```js
function spiralPrimes(percent) {

  return true;
}

spiralPrimes(50);
```

# --solutions--

```js
function spiralPrimes(percent) {
  function isPrime(n) {
    if (n <= 3) {
      return n > 1;
    } else if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  let totalCount = 1;
  let primesCount = 0;
  let curNumber = 1;
  let curSideLength = 1;
  let ratio = 1;
  const wantedRatio = percent / 100;

  while (ratio >= wantedRatio) {
    curSideLength += 2;
    for (let i = 0; i < 4; i++) {
      curNumber += curSideLength - 1;
      totalCount++;
      if (i !== 3 && isPrime(curNumber)) {
        primesCount++;
      }
    }
    ratio = primesCount / totalCount;
  }
  return curSideLength;
}
```
