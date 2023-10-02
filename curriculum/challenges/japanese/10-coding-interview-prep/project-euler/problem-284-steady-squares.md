---
id: 5900f4891000cf542c50ff9b
title: '問題 284: 安定平方数'
challengeType: 1
forumTopicId: 301935
dashedName: problem-284-steady-squares
---

# --description--

3 桁の 10 進数 376 は、その平方数の下位桁がそれ自体と同じである (${376}^2 = 141376$) という、特殊な性質を持つ数の一例です。 この性質を持つ数を「安定平方数」と呼ぶことにします。

安定平方数は他の進数でも現れます。 3 桁の14 進数 $c37$ も安定平方数であり、$c37^2 = aa0c37$ となります。また、その各位の和は 14 進数で $c+3+7=18$ です。 文字 $a$, $b$, $c$, $d$ はそれぞれ 10, 11, 12, 13 を表すのに使われます。これは 16 進数と同様の方法です。

$1 ≤ n ≤ 9$ のとき、すべての $n$ 桁の 14 進数の安定平方数の各位の和は $2d8$ (10 進数で 582) です。 先行ゼロを持つ安定平方数は許容されません。

$1 ≤ n ≤ 10000$ (10進数) のとき、$n$ 桁の安定平方数 (14 進数) のすべてについて各位の和を求め、適宜、小文字の文字を使用して 14 進数の文字列で答えなさい。

# --hints--

`steadySquares()` は文字列を返す必要があります。

```js
assert(typeof steadySquares() === 'string');
```

`steadySquares()` は文字列 `5a411d7b` を返す必要があります。

```js
assert.strictEqual(steadySquares(), '5a411d7b');
```

# --seed--

## --seed-contents--

```js
function steadySquares() {

  return true;
}

steadySquares();
```

# --solutions--

```js
// solution required
```
