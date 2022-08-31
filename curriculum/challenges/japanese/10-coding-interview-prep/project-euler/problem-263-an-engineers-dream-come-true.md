---
id: 5900f4741000cf542c50ff86
title: '問題 263: エンジニアの夢がかなう'
challengeType: 1
forumTopicId: 301912
dashedName: problem-263-an-engineers-dream-come-true
---

# --description--

6 という数について考えます。 6 の約数は 1, 2, 3, 6 です。

1 から 6 までのすべての数は、次のように 6 の相異なる約数の和として表せます。

$1 = 1$, $2 = 2$, $3 = 1 + 2$, $4 = 1 + 3$, $5 = 2 + 3$, $6 = 6$

1 から $n$ までのすべての数が $n$ の相異なる約数の和として表すことができる場合、 $n$ はプラクティカル数と呼ばれます。

差が 6 である連続した素数のペアは、セクシーペアと呼ばれます ("six" はラテン語で "sex" なので) 。 最初のセクシーペアは (23, 29) です。

トリプルペアが見つかることがあります。トリプルペアとは、各ペアの 2 つ目の要素が次のペアの 1 つ目の要素になるような、3 つの連続したセクシーペアのことです。

次のような数 $n$ を考えます。

- ($n - 9$, $n - 3$), ($n - 3$, $n + 3$), ($n + 3$, $n + 9$) がトリプルペアになっている。かつ、
- 数 $n - 8$, $n - 4$, $n$, $n + 4$, $n + 8$ がすべてプラクティカル数である。

このような数を「エンジニアの楽園」と呼ぶことにします。

エンジニアの楽園のうち最初の 4 つの和を求めなさい。

# --hints--

`engineersDreamComeTrue()` は `2039506520` を返す必要があります。

```js
assert.strictEqual(engineersDreamComeTrue(), 2039506520);
```

# --seed--

## --seed-contents--

```js
function engineersDreamComeTrue() {

  return true;
}

engineersDreamComeTrue();
```

# --solutions--

```js
// solution required
```
