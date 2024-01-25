---
id: 5900f53b1000cf542c51004d
title: '問題 462: 3-smooth 数の順列'
challengeType: 1
forumTopicId: 302137
dashedName: problem-462-permutation-of-3-smooth-numbers
---

# --description--

3-smooth 数とは、3 より大きい素因数を持たない整数のことです。 整数 $N$ に対して、$N$ 以下の 3-smooth 数の集合を $S(N)$ とします。 例えば、$S(20) = \\{1, 2, 3, 4, 6, 8, 9, 12, 16, 18\\}$ です。

各要素のすべての真の約数の後にその要素が現れるような $S(N)$ の順列の個数を、$F(N)$ とします。

$N = 20$ に対して考えられる順列の一例を下に示します。

-   1, 2, 4, 3, 9, 8, 16, 6, 18, 12

下の例は、12 が約数 6 の前に現れるので有効な順列ではありません。

-   1, 2, 4, 3, 9, 8, 12, 16, 6, 18

$F(6) = 5$, $F(8) = 9$, $F(20) = 450$, $F(1000) ≈ 8.8521816557e\\21$ であることを確認できます。

$F({10}^{18})$ を求めなさい。 回答は、科学的記数法による文字列を四捨五入して小数第 10 位まで示すこと。 回答は、小文字 `e` で仮数部と指数部を区切って書くこと。 例えば、 答えが $112\\,233\\,445\\,566\\,778\\,899$ の場合、`1.1223344557e17` の形式にします。

# --hints--

`permutationOf3SmoothNumbers()` は文字列を返す必要があります。

```js
assert.strictEqual(typeof permutationOf3SmoothNumbers() === 'string');
```

`permutationOf3SmoothNumbers()` は文字列 `5.5350769703e1512` を返す必要があります。

```js
assert.strictEqual(permutationOf3SmoothNumbers(), '5.5350769703e1512');
```

# --seed--

## --seed-contents--

```js
function permutationOf3SmoothNumbers() {

  return true;
}

permutationOf3SmoothNumbers();
```

# --solutions--

```js
// solution required
```
