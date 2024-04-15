---
id: 5900f5041000cf542c510016
title: '問題 407: 冪等元'
challengeType: 1
forumTopicId: 302075
dashedName: problem-407-idempotents
---

# --description--

$0 ≤ a ≤ 5$ のとき $a^2\bmod 6$ を求めると、0, 1, 4, 3, 4, 1 になります。

$a^2 ≡ a\bmod 6$ となる a の最大値は $4$ です。

$a^2 ≡ a (\text{mod } n)$ となる $a &lt; n$ の最大値を $M(n)$ とします。 したがって、$M(6) = 4$ です。

$1 ≤ n ≤ {10}^7$ のとき、$\sum M(n)$ を求めなさい。

# --hints--

`idempotents()` は `39782849136421` を返す必要があります。

```js
assert.strictEqual(idempotents(), 39782849136421);
```

# --seed--

## --seed-contents--

```js
function idempotents() {

  return true;
}

idempotents();
```

# --solutions--

```js
// solution required
```
