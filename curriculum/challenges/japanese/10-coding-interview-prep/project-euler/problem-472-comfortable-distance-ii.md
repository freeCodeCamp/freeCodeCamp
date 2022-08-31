---
id: 5900f5451000cf542c510057
title: '問題 472: 快適な距離 (2)'
challengeType: 1
forumTopicId: 302149
dashedName: problem-472-comfortable-distance-ii
---

# --description--

$N$ 個の席が一列に並んでいます。 $N$ 人の人が次々とやって来て、次のルールに従って席を埋めていきます。

1. 他の人の隣りに座らない。
1. 最初の人が任意の席を選択する。
1. 2 人目以降はそれぞれ、ルール 1 に反しない席のうち、既に人が座っている席から最も遠い席を選ぶ。 この条件を満たす席が複数ある場合は、一番左の席を選ぶ。

注意点として、ルール 1 に基づき席の一部は空席のままであり、座れる人数は最大で $N$ 未満です ($N > 1$)。

$N = 15$ のとき、考えられる座席配置は次のとおりです。

<img class="img-responsive center-block" alt="N = 15 の場合の着席配置" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance-ii.png" style="background-color: white; padding: 10px;" />

最初の人が席を正しく選択すると、15 席に最大 7 人が座れることが分かります。 また、最初の人が持つ選択肢のうち、座れる人数が最大になる選択肢が 9 つであることも分かります。

$N$ 個の席が一列に並んでいるとき、最初の人が持つ選択肢のうち、座れる人数が最大になる選択肢の数を $f(N)$ とします。 したがって、$f(1) = 1$, $f(15) = 9$, $f(20) = 6$, $f(500) = 16$ です。

また、$1 ≤ N ≤ 20$ のときは $\sum f(N) = 83$ であり、$1 ≤ N ≤ 500$ のときは $\sum f(N) = 13\\,343$ です。

$1 ≤ N ≤ {10}^{12}$ のとき、$\sum f(N)$ を求めなさい。 回答は、下位 8 桁とすること。

# --hints--

`comfortableDistanceTwo()` は `73811586` を返す必要があります。

```js
assert.strictEqual(comfortableDistanceTwo(), 73811586);
```

# --seed--

## --seed-contents--

```js
function comfortableDistanceTwo() {

  return true;
}

comfortableDistanceTwo();
```

# --solutions--

```js
// solution required
```
