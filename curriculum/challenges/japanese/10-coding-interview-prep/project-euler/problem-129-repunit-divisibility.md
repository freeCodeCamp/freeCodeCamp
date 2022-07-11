---
id: 5900f3ef1000cf542c50ff01
title: '問題 129: レピュニット数の被整除性'
challengeType: 1
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

1 のみで構成される数はレピュニット数と呼ばれます。 ここでは、長さ $k$ のレピュニット数を $R(k)$ とします。例えば、$R(6) = 111111$ です。

$n$ を正の整数とし、$GCD(n, 10) = 1$ が与えられる場合、$R(k)$ が $n$ で割り切れるような値 $k$ が必ず存在することを証明できます。また、そのような $k$ の最小値を $A(n)$ とします。例えば、$A(7) = 6$, $A(41) = 5$ です。

$A(n)$ が初めて 10 を超えるときの $n$ の最小値は 17 です。

$A(n)$ が初めて 100 万を超えるときの $n$ の最小値を求めなさい。

# --hints--

`repunitDivisibility()` は `1000023` を返す必要があります。

```js
assert.strictEqual(repunitDivisibility(), 1000023);
```

# --seed--

## --seed-contents--

```js
function repunitDivisibility() {

  return true;
}

repunitDivisibility();
```

# --solutions--

```js
// solution required
```
