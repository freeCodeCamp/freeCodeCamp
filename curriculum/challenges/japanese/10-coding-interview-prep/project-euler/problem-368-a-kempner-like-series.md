---
id: 5900f4dd1000cf542c50ffef
title: '問題 368: ケンプナーのような級数'
challengeType: 1
forumTopicId: 302029
dashedName: problem-368-a-kempner-like-series
---

# --description--

調和級数 $1+\dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \ldots$ が発散することはよく知られています。

しかし、分母に 9 が含まれる項をすべてこの級数から取り除くと、級数は約 22.9206766193 と驚くほど収束します。 この改良版調和級数はケンプナー級数と呼ばれます。

次に、同じ数字が 3 桁以上連続して分母に含まれる項をすべて調和級数から省略することで得られる、別の改良版調和級数について考えます。 調和級数の最初の 1200 項のうち、取り除かれるのはわずか 20 項であることを確認できます。

削除される 20 項は次のとおりです。

$$\dfrac{1}{111}, \dfrac{1}{222}, \dfrac{1}{333}, \dfrac{1}{444}, \dfrac{1}{555}, \dfrac{1}{666}, \dfrac{1}{777}, \dfrac{1}{888}, \dfrac{1}{999}, \dfrac{1}{1000}, \dfrac{1}{1110}, \\\\
\dfrac{1}{1111}, \dfrac{1}{1112}, \dfrac{1}{1113}, \dfrac{1}{1114}, \dfrac{1}{1115}, \dfrac{1}{1116}, \dfrac{1}{1117}, \dfrac{1}{1118}, \dfrac{1}{1119}$$

この級数も同様に収束します。

級数の収束値を求めなさい。 回答は、四捨五入して小数第 10 位まで示すこと。

# --hints--

`kempnerLikeSeries()` は `253.6135092068` を返す必要があります。

```js
assert.strictEqual(kempnerLikeSeries(), 253.6135092068);
```

# --seed--

## --seed-contents--

```js
function kempnerLikeSeries() {

  return true;
}

kempnerLikeSeries();
```

# --solutions--

```js
// solution required
```
