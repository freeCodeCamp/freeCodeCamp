---
id: 5900f3df1000cf542c50fef1
title: '問題 115: ブロックの組み合わせを数え上げる (2)'
challengeType: 1
forumTopicId: 301741
dashedName: problem-115-counting-block-combinations-ii
---

# --description--

長さ `n` 単位の 1 列に、長さ `m` 単位以上の赤ブロックが置かれています。2 つの赤ブロック (長さが異なっていても良い) がある場合、それらは少なくとも 1 つの黒マスで区切られています。

列を埋める方法が何通りあるかを、fill-count 関数 $F(m, n)$ で表すことにします。

例えば、$F(3, 29) = 673135$, $F(3, 30) = 1089155$ です。

したがって、m = 3 のとき、fill-count 関数が初めて 100 万を超える n の最小値は 30 です。

同様に、m = 10 のときに $F(10, 56) = 880711$ および $F(10, 57) = 1148904$ であることが分かります。したがって、fill-count 関数が初めて100 万を超える n の最小値は 57 です。

m = 50のとき、fill-count 関数が初めて 100 万を超える `n` の最小値を見つけなさい。

**注:** これは、問題 114 をより難しくした問題です。

# --hints--

`countingBlockTwo()` は `168` を返す必要があります。

```js
assert.strictEqual(countingBlockTwo(), 168);
```

# --seed--

## --seed-contents--

```js
function countingBlockTwo() {

  return true;
}

countingBlockTwo();
```

# --solutions--

```js
// solution required
```
