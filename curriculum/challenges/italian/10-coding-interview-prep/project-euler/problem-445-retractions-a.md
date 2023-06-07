---
id: 5900f52a1000cf542c51003c
title: 'Problema 445: Retrazioni A'
challengeType: 1
forumTopicId: 302117
dashedName: problem-445-retractions-a
---

# --description--

Per ogni intero $n > 1$, la famiglia di funzioni $f_{n, a, b}$ è definita da:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ per $a, b, x$ interi e $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Chiameremo $f_{n, a, b}$ una retrazione se $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ per ogni $0 \le x \lt n$.

Sia $R(n)$ il numero di retrazioni per $n$.

Ti è dato che

$$\sum_{k = 1}^{99\\,999} R(\displaystyle\binom{100\\,000}{k}) \equiv 628\\,701\\,600\bmod 1\\,000\\,000\\,007$$

Trova $$\sum_{k = 1}^{9\\,999\\,999} R(\displaystyle\binom{10\\,000\\,000}{k})$$ Dai la tua risposta modulo $1\\,000\\,000\\,007$.

# --hints--

`retractionsA()` dovrebbe restituire `659104042`.

```js
assert.strictEqual(retractionsA(), 659104042);
```

# --seed--

## --seed-contents--

```js
function retractionsA() {

  return true;
}

retractionsA();
```

# --solutions--

```js
// solution required
```
