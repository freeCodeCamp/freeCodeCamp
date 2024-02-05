---
id: 5900f45f1000cf542c50ff71
title: '問題 242: 三つ子奇数'
challengeType: 1
forumTopicId: 301889
dashedName: problem-242-odd-triplets
---

# --description--

集合 {1,2,..., $n$} について、要素の和が奇数であるような $k$ 個からなる部分集合の数を $f(n, k)$ とします。 例えば、集合 {1,2,3,4,5} には、3 つの要素を持ち要素の和が奇数である部分集合が 4つ ({1,2,4}, {1,3,5}, {2,3,4}, {2,4,5}) あるので、$f(5,3) = 4$ です。

値 $n$, $k$, $f(n, k) がすべて奇数であるとき、$[n, k, f(n, k)]$ を「三つ子奇数」と呼ぶことにします。

$n ≤ 10$ のとき、ちょうど 5 組の三つ子奇数が存在します。それらは $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$, $[9, 9, f(9, 9) = 1]$ です。

$n ≤ {10}^{12} $ のとき、三つ子奇数は何組ありますか。

# --hints--

`oddTriplets()` は `997104142249036700` を返す必要があります。

```js
assert.strictEqual(oddTriplets(), 997104142249036700);
```

# --seed--

## --seed-contents--

```js
function oddTriplets() {

  return true;
}

oddTriplets();
```

# --solutions--

```js
// solution required
```
