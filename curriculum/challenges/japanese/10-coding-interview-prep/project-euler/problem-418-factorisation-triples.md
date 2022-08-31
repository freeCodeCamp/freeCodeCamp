---
id: 5900f50f1000cf542c510021
title: '問題 418: 因数分解の三つ組数'
challengeType: 1
forumTopicId: 302087
dashedName: problem-418-factorisation-triples
---

# --description--

$n$ を正の整数とします。 三つ組整数 ($a$, $b$, $c$) が次の条件を満たすとき、それを $n$ の因数分解の三つ組数と呼びます。

- $1 ≤ a ≤ b ≤ c$
- $a \times b \times c = n$

$\frac{c}{a}$ が最小となるような $n$ の因数分解三つ組数 ($a$, $b$, $c$) について、$a + b + c$ を $f(n)$ と定義します。 この三つ組数が一意であることが分かっています。

例えば、$f(165) = 19$, $f(100\\,100) = 142$, $f(20!) = 4\\,034\\,872$ です。

$f(43!)$ を求めなさい。

# --hints--

`factorisationTriples()` は `1177163565297340400` を返す必要があります。

```js
assert.strictEqual(factorisationTriples(), 1177163565297340400);
```

# --seed--

## --seed-contents--

```js
function factorisationTriples() {

  return true;
}

factorisationTriples();
```

# --solutions--

```js
// solution required
```
