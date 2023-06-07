---
id: 5900f52c1000cf542c51003f
title: 'Problema 448: Minor comune multiplo medio'
challengeType: 1
forumTopicId: 302120
dashedName: problem-448-average-least-common-multiple
---

# --description--

La funzione $lcm(a, b)$ indica il minor comune multiplo di $a$ e $b$.

Sia $A(n)$ la media dei valori di $lcm(n, i)$ per $1 ≤ i ≤ n$.

Ad esempio: $A(2) = \frac{2 + 2}{2} = 2$ e $A(10) = \frac{10 + 10 + 30 + 20 + 10 + 30 + 30 + 70 + 40 + 90 + 10}{10} = 32$.

Sia $S(n) = \sum A(k)$ per $1 ≤ k ≤ n$.

$S(100) = 122\\,726$.

Trova $S(99\\,999\\,999\\,019)\bmod 999\\,999\\,017$.

# --hints--

`averageLCM()` dovrebbe restituire `106467648`.

```js
assert.strictEqual(averageLCM(), 106467648);
```

# --seed--

## --seed-contents--

```js
function averageLCM() {

  return true;
}

averageLCM();
```

# --solutions--

```js
// solution required
```
