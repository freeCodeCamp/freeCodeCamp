---
id: 5900f4a11000cf542c50ffb3
title: '問題 308: 驚くべき素数生成オートマトン'
challengeType: 1
forumTopicId: 301962
dashedName: problem-308-an-amazing-prime-generating-automaton
---

# --description--

プログラミング言語 Fractran で書かれたプログラムは、分数のリストで構成されています。

Fractran 仮想マシンの内部状態は正の整数で、最初はシード値に設定されます。 Fractran プログラムは 1 回の反復ごとに、状態整数にリストの最初の分数を乗じて整数を得ます。

例えば、ジョン・ホートン・コンウェイが素数生成用に作成した Fractran プログラムの一つは、次の 14 個の分数で構成されています。

$$\frac{17}{91}, \frac{78}{85}, \frac{19}{51}, \frac{23}{38}, \frac{29}{33}, \frac{77}{29}, \frac{95}{23}, \frac{77}{19}, \frac{1}{17}, \frac{11}{13}, \frac{13}{11}, \frac{15}{2}, \frac{1}{7}, \frac{55}{1}$$

整数 2 のシード値から始めてプログラムの反復を続けると、次の数列が生成されます。

$$15, 825, 725, 1925, 2275, 425, \ldots, 68, \mathbf{4}, 30, \ldots, 136, \mathbf{8}, 60, \ldots, 544, \mathbf{32}, 240, \ldots$$

この数列に現れる 2 の累乗は $2^2, 2^3, 2^5, \ldots$ です。

この数列にある 2 の累乗はいずれも指数が素数であること、および、すべての素数が 2 の累乗の指数として順序通りに現れるということを示せます。

上の Fractran のプログラムを使用してプロジェクト・オイラーの問題 7 (${10001}$ 番目の素数を求める) を解くとしたら、$2^{10001 {\text{ 番目の}}\text{素数}}$ を生成するまでにプログラムを何回反復する必要がありますか。

# --hints--

`primeGeneratingAutomation()` は `1539669807660924` を返す必要があります 。

```js
assert.strictEqual(primeGeneratingAutomation(), 1539669807660924);
```

# --seed--

## --seed-contents--

```js
function primeGeneratingAutomation() {

  return true;
}

primeGeneratingAutomation();
```

# --solutions--

```js
// solution required
```
