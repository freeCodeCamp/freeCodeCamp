---
id: 5900f3f21000cf542c50ff04
title: '問題 133: レピュニット数の非因数'
challengeType: 1
forumTopicId: 301761
dashedName: problem-133-repunit-nonfactors
---

# --description--

1 のみで構成される数はレピュニット数と呼ばれます。 ここでは、長さ $k$ のレピュニット数を $R(k)$ とします。例えば、$R(6) = 111111$ です。

$R({10}^n)$ で表されるレピュニット数について考えます。

$R(10)$, $R(100)$, $R(1000)$ はいずれも 17 で割り切れませんが、$R(10000)$ は 17 で割り切れます。 しかし、$R({10}^n)$ が 19 で割り切れるような n の値は存在しません。 意外にも、$R({10}^n)$ の因数になり得る 100 未満の素数は 11, 17, 41, 73 の 4 つだけです。

$R({10}^n)$ の因数になり得ない 10 万未満の素数の総和を求めなさい。

# --hints--

`repunitNonfactors()` は `453647705` を返す必要があります。

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
