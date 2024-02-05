---
id: 5900f4d91000cf542c50ffea
title: '問題 364: 快適な距離'
challengeType: 1
forumTopicId: 302025
dashedName: problem-364-comfortable-distance
---

# --description--

$N$ 個の席が連続して並んでいます。 ここに $N$ 人が次々とやって来て、次のルールに従って席を埋めていきます。

1. 隣席がいずれも空いている席があれば、その席を取ります。
2. 1 のような席がなく、隣席が 1 つのみ埋まっている席があれば、その席を取ります。
3. 1, 2 以外の場合は、残っている空席のいずれかを取ります。

与えられたルールに従い $N$ 人が $N$ 個の席を取る方法の数を、$T(N)$ とします。 次の図は $T(4) = 8$ を示しています。

<img class="img-responsive center-block" alt="N 人で N 個の席を取る 8 通りの方法" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px;" />

$T(10) = 61\\,632$, $T(1\\,000)\bmod 100\\,007 = 47\\,255\\,094$ であることを確認できます。

$T(1\\,000\\,000)\bmod 100\\,000\\,007$ を求めなさい。

# --hints--

`comfortableDistance()` は `44855254` を返す必要があります。

```js
assert.strictEqual(comfortableDistance(), 44855254);
```

# --seed--

## --seed-contents--

```js
function comfortableDistance() {

  return true;
}

comfortableDistance();
```

# --solutions--

```js
// solution required
```
