---
id: 5ea2815a8640bcc6cb7dab3c
title: 莱克瑞尔数
challengeType: 1
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>Take an integer <code>n₀</code>, greater than zero.</li>
  <li>通过反转 <code>n₀</code> 并将其添加到 <code>n₀</code> 中，形成系列的下一个数字 <code>n</code></li>
  <li>当 <code>n</code> 变成回文时停止 - 即 <code>n</code> 的数字倒序 == <code>n</code>。</li>
</ol>

The above recurrence relation when applied to most starting numbers `n` = 1, 2, ... terminates in a palindrome quite quickly.

例如，如果 `n₀` = 12 我们得到：

```bash
12
12 + 21 = 33,  a palindrome!
```

如果 `n₀` = 55 我们得到：

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

请注意，回文检查发生在添加 *之后*。

一些起始数字似乎永远持续下去； 196 的递推关系已经计算了数百万次重复，形成数百万位的数字，而不形成回文。 这些不以回文结尾的数字称为 **莱克瑞尔数字**。

出于此任务的目的，Lychrel 数是在 500（或更多）次迭代内不形成回文的任何起始数。

**种子和相关的 Lychrel 数：**

在利克瑞尔数的序列中产生的任何整数也是利克瑞尔数。

一般来说，来自一个 Lychrel 数的任何序列 *可能* 收敛以加入来自先前 Lychrel 数候选的序列；例如数字 196 和 689 的序列开始：

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

所以我们看到从 689 开始的序列收敛到，并以与 196 相同的数字继续。

因此，我们可以将 Lychrel 数进一步拆分为真正的 **Seed** 候选 Lychrel 数；以及没有产生回文，但在它们的序列中有整数被视为从较低的 Lychrel 数生成的序列的一部分的 ** Related ** 数。

# --instructions--

编写一个以数字为参数的函数。 如果数字是 Lynchrel 数字，则返回 true。 否则，返回 false。 请记住，迭代限制为 500。

# --hints--

`isLychrel` 应该是一个函数。

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` 应该返回一个布尔值。

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` 应该返回 `false`。

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` 应该返回 `false`。

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` 应该返回 `true`。

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` 应该返回 `true`。

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` 应该返回 `false`。

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` 应该返回 `true`。

```js
assert.equal(isLychrel(7059), true);
```

# --seed--

## --seed-contents--

```js
function isLychrel(n) {

}
```

# --solutions--

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```
