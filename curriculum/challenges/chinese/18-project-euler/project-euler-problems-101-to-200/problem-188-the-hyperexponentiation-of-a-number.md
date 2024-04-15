---
id: 5900f4291000cf542c50ff3b
title: '问题188：数字的超指数'
challengeType: 1
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

The hyperexponentiation or tetration of a number $a$ by a positive integer $b$, denoted by $a↑↑b$ or ${}^ba$, is recursively defined by:

$a↑↑1 = a$,

$a↑↑(k+1) = a^{(a↑↑k)}$.

例如 $3↑↑2 = 3^3 = 27$，$3↑↑3 = 3^{27} = 7625597484987$，$3↑↑4$ 大约等于${10}^{3.6383346400240996 \times {10}^{12}}$， 请找出$1777↑↑1855$的最后8位数字。

# --hints--

`hyperexponentation()`应该返回 `95962097`.

```js
assert.strictEqual(hyperexponentation(), 95962097);
```

# --seed--

## --seed-contents--

```js
function hyperexponentation() {

  return true;
}

hyperexponentation();
```

# --solutions--

```js
// solution required
```
