---
id: 599d1566a02b571412643b84
title: エチオピア乗算
challengeType: 1
forumTopicId: 302257
dashedName: ethiopian-multiplication
---

# --description--

Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.

**方法:**

<ol>
  <li>Take two numbers to be multiplied and write them down at the top of two columns</li>
  <li>In the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of <code>1</code></li>
  <li>In the right-hand column repeatedly double the last number and write the result below. stop when you add a result in the same row as where the left hand column shows <code>1</code></li>
  <li>Examine the table produced and discard any row where the value in the left column is even</li>
  <li>Sum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together</li>
</ol>

**例:** `17 × 34`

<pre>17   34
</pre>

最初の列の値を2で割ります。

<pre>17   34
8
4
2
1
</pre>

2列目を倍にします。

<pre>17   34
8    68
4   136
2   272
1   544
</pre>

最初の列が偶数の行の値を消します。

<pre>17   34
8    <strike>68</strike>
4   <strike>136</strike>
2   <strike>272</strike>
1   544
</pre>

右側の列の残りの数字を合計します。

<!-- markdownlint-disable MD003 -->

<pre>17   34
8    --
4   ---
2   ---
1   544
   ====
    578
</pre>

<!-- markdownlint-enable MD003 -->

エチオピア乗算で `17` に `34` を掛けると `578` になります。

# --instructions--

タスクは、3つの名前付き関数/メソッド/プロシージャ/サブルーチンを定義することです。

<ol>
  <li>one to halve an integer,</li>
  <li>整数を2倍にする</li>
  <li>整数が偶数かどうかを示す</li>
</ol>

これらを使ってエチオピア乗算を行う関数を作ります。

<!-- markdownlint-disable MD046-->

# --hints--

`eth_mult` という関数です。

```js
assert(typeof eth_mult === 'function');
```

`eth_mult(17,34)` は `578` を返します。

```js
assert.equal(eth_mult(17, 34), 578);
```

`eth_mult(23,46)` は `1058` を返します。

```js
assert.equal(eth_mult(23, 46), 1058);
```

`eth_mult(12,27)` は `324` を返します。

```js
assert.equal(eth_mult(12, 27), 324);
```

`eth_mult(56,98)` は `5488` を返します。

```js
assert.equal(eth_mult(56, 98), 5488);
```

`eth_mult(63,74)` は `4662` を返します。

```js
assert.equal(eth_mult(63, 74), 4662);
```

# --seed--

## --seed-contents--

```js
function eth_mult(a, b) {

}
```

# --solutions--

```js
function eth_mult(a, b) {
  let sum = 0; a = [a]; b = [b];

  let half = a => a / 2,
    double = a => a * 2,
    is_even = a => a % 2 == 0;

  while (a[0] !== 1) {
    a.unshift(Math.floor(half(a[0])));
    b.unshift(double(b[0]));
  }

  for (let i = a.length - 1; i > 0; i -= 1) {
    if (!is_even(a[i])) {
      sum += b[i];
    }
  }
  return sum + b[0];
}
```
