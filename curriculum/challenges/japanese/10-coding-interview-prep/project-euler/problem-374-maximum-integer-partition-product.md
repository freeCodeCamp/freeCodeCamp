---
id: 5900f4e51000cf542c50fff6
title: '問題 374: 整数分割の最大の積'
challengeType: 1
forumTopicId: 302036
dashedName: problem-374-maximum-integer-partition-product
---

# --description--

数 $n$ の整数分割とは、$n$ を正の整数の和として表す方法です。

加数や被加数の順序のみが異なる分割は同じものとみなされます。 $n$ を相異なる部分に分割することは、いずれの部分も一度のみ現れるような形で $n$ を分割することです。

5 を相異なる部分に分割すると、次のようになります。

5, 4 + 1, 3 + 2

$n$ を相異なる部分に分割したとき、各部分の積が最大になるような分割における積を $f(n)$ とします。また、その積をもたらすような $n$ の分割の要素数を $m(n)$ とします。

したがって、$f(5) = 6$, $m(5) = 2$ となります。

$n = 10$ の場合、積が最大となる分割は $10 = 2 + 3 + 5$ で、 $f(10) = 30$ と $m(10) = 3$ が導かれます。 そしてそれらの積は $f(10) \times m(10) = 30 \times 3 = 90$ となります。

$1 ≤ n ≤ 100 のとき、$\sum f(n) \times m(n)$ = 1\\,683\\,550\\,844\\,462$ となることを確認できます。

$1 ≤ n ≤ {10}^{14}$ のとき、$\sum f(n) \times m(n)$ を求めなさい。 5000 万番目の素数 $982\\,451\\,653$ で割った余りで答えること。

# --hints--

`maximumIntegerPartitionProduct()` は `334420941` を返す必要があります。

```js
assert.strictEqual(maximumIntegerPartitionProduct(), 334420941);
```

# --seed--

## --seed-contents--

```js
function maximumIntegerPartitionProduct() {

  return true;
}

maximumIntegerPartitionProduct();
```

# --solutions--

```js
// solution required
```
