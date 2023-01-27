---
id: 5900f3f21000cf542c50ff04
title: '問題 133：純元數非因子'
challengeType: 1
forumTopicId: 301761
dashedName: problem-133-repunit-nonfactors
---

# --description--

完全由 1 組成的數字稱爲純元數。 定義 $R(k)$ 爲長度爲 $k$ 的純元數；例如，$R(6) = 111111$。

讓我們考慮形式爲 $R({10}^n)$ 的純元數。

儘管 $R(10)$、$R(100)$ 或 $R(1000)$ 不能被 17 整除，但 $R(10000)$ 可以被 17 整除。 然而沒有 $R({10}^n)$ 可以被 19 整除。 值得注意的是，11、17、41 和 73 是僅有的四個小於 100 的質數可以是 $R({10}^n)$ 的因數。

求十萬以內不能成爲 $R({10}^n)$ 因子的素數的和。

# --hints--

`repunitNonfactors()` 應該返回 `453647705`。

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
