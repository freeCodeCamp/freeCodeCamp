---
id: 599d1566a02b571412643b84
title: 埃塞俄比亞乘法
challengeType: 1
forumTopicId: 302257
dashedName: ethiopian-multiplication
---

# --description--

Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.

**方法：**

<ol>
  <li>Take two numbers to be multiplied and write them down at the top of two columns</li>
  <li>In the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of <code>1</code></li>
  <li>In the right-hand column repeatedly double the last number and write the result below. stop when you add a result in the same row as where the left hand column shows <code>1</code></li>
  <li>Examine the table produced and discard any row where the value in the left column is even</li>
  <li>Sum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together</li>
</ol>

**例如：** `17 × 34`

<pre>17   34
</pre>

將第一列減半：

<pre>17   34
8
4
2
1
</pre>

將第二列加倍：

<pre>17   34
8    68
4   136
2   272
1   544
</pre>

第一個單元格爲偶數的刪除行：

<pre>17   34
8    <strike>68</strike>
4   <strike>136</strike>
2   <strike>272</strike>
1   544
</pre>

對右側欄中的剩餘數字求和：

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

所以`17`乘以`34`，按照埃塞俄比亞的方法是`578`。

# --instructions--

任務是定義三個命名的函數/方法/過程/子例程：

<ol>
  <li>one to halve an integer,</li>
  <li>一個整數加倍，和</li>
  <li>一個來檢測一個整數是否是偶數</li>
</ol>

使用這些函數創建一個執行埃塞俄比亞乘法的函數。

<!-- markdownlint-disable MD046-->

# --hints--

`eth_mult` 應該是一個函數。

```js
assert(typeof eth_mult === 'function');
```

`eth_mult(17,34)` 應該返回 `578`。

```js
assert.equal(eth_mult(17, 34), 578);
```

`eth_mult(23,46)` 應該返回 `1058`。

```js
assert.equal(eth_mult(23, 46), 1058);
```

`eth_mult(12,27)` 應該返回 `324`。

```js
assert.equal(eth_mult(12, 27), 324);
```

`eth_mult(56,98)` 應該返回 `5488`。

```js
assert.equal(eth_mult(56, 98), 5488);
```

`eth_mult(63,74)` 應該返回 `4662`。

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
