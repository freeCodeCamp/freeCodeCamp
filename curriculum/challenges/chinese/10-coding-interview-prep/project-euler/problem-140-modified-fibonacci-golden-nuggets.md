---
id: 5900f3fa1000cf542c50ff0c
title: '问题 140：改进的斐波那契金块'
challengeType: 1
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--

考虑无穷级数 $A_G(x) = xG_1 + x^2G_2 + x^3G_3 + \cdots$，其中 $G_k$ 是二阶递归关系的第 $k$ 项，$G_k = G_{k − 1} + G_{k − 2}, G_1 = 1$，且 $G_2 = 4$；该数列为 $1, 4, 5, 9, 14, 23, \ldots$。

在这个问题中，我们关注的是那些使得 $A_G(x)$ 为正整数的 $x$ 的值。

前五个对应的自然数 $x$ 如下。

| $x$                           | $A_G(x)$ |
| ----------------------------- | -------- |
| $\frac{\sqrt{5} − 1}{4}$    | $1$      |
| $\frac{2}{5}$                | $2$      |
| $\frac{\sqrt{22} − 2}{6}$   | $3$      |
| $\frac{\sqrt{137} − 5}{14}$ | $4$      |
| $\frac{1}{2}$                | $5$      |

当 $x$ 是有理数时，我们称 $A_G(x)$ 是一个金砖，因为这样的数字逐渐变得稀少；例如，第 20 个金砖是 211345365。 请计算出前三十个金砖之和。

# --hints--

`modifiedGoldenNuggets()` 应该返回 `5673835352990`

```js
assert.strictEqual(modifiedGoldenNuggets(), 5673835352990);
```

# --seed--

## --seed-contents--

```js
function modifiedGoldenNuggets() {

  return true;
}

modifiedGoldenNuggets();
```

# --solutions--

```js
// solution required
```
