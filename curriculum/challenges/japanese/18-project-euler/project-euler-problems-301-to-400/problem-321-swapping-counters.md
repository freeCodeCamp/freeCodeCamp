---
id: 5900f4ae1000cf542c50ffc0
title: '問題 321: カウンターを入れ替える'
challengeType: 1
forumTopicId: 301978
dashedName: problem-321-swapping-counters
---

# --description--

$2n + 1$ 個のマスが横方向に一列に並べられ、一方の端に $n$ 個の赤のカウンターが置かれ、もう一方の端に $n$ 個の青のカウンターが置かれ、その間の 1 マスは空いています。 例えば、$n = 3$ のときは下図のようになります。

<img class="img-responsive center-block" alt="列の両側の 3 マスに赤と青のカウンターが置かれ、間の 1 マスは空いている" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-1.gif" style="background-color: white; padding: 10px;" />

カウンターは、あるマスから次のマスに移動したり (スライド)、別のカウンターの隣のマスが空いていればそのカウンターを飛び越えたり (ホップ) できます。

<img class="img-responsive center-block" alt="許容されるカウンターの動き方" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-2.gif" style="background-color: white; padding: 10px;" />

色付きカウンターの位置を完全に入れ替える (すなわち赤のカウンターをすべて右へ、青のカウンターをすべて左へ移動する) ための移動やアクションの最小回数を、$M(n)$ とします。

$M(3) = 15$ であることを確認できます。これは三角数でもあります。

$M(n)$ が三角数となるような n の値に基づいて数列を作ると、最初の 5 項は 1, 3, 10, 22, 63 で、それらの和は 99 です。

この数列の最初の 40 項の和を求めなさい。

# --hints--

`swappingCounters()` は `2470433131948040` を返す必要があります。

```js
assert.strictEqual(swappingCounters(), 2470433131948040);
```

# --seed--

## --seed-contents--

```js
function swappingCounters() {

  return true;
}

swappingCounters();
```

# --solutions--

```js
// solution required
```
