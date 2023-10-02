---
id: 5900f3f21000cf542c50ff04
title: '问题 133：纯元数非因子'
challengeType: 1
forumTopicId: 301761
dashedName: problem-133-repunit-nonfactors
---

# --description--

完全由 1 组成的数字称为纯元数。 定义 $R(k)$ 为长度为 $k$ 的纯元数；例如，$R(6) = 111111$。

让我们考虑形式为 $R({10}^n)$ 的纯元数。

尽管 $R(10)$、$R(100)$ 或 $R(1000)$ 不能被 17 整除，但 $R(10000)$ 可以被 17 整除。 然而没有 $R({10}^n)$ 可以被 19 整除。 值得注意的是，11、17、41 和 73 是仅有的四个小于 100 的质数可以是 $R({10}^n)$ 的因数。

求十万以内不能成为 $R({10}^n)$ 因子的素数的和。

# --hints--

`repunitNonfactors()` 应该返回 `453647705`。

```js
assert.strictEqual(repunitNonfactors(), 453647705);
```

# --seed--

## --seed-contents--

```js
function repunitNonfactors() {

  return true;
}

repunitNonfactors();
```

# --solutions--

```js
// solution required
```
