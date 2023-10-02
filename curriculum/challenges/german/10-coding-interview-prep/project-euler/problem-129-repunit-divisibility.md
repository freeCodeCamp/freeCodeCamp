---
id: 5900f3ef1000cf542c50ff01
title: 'Problem 129: Teilbarkeit von Einheiten'
challengeType: 1
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

Eine Zahl, die ausschließlich aus Einsen besteht, nennt man ein Repunit. We shall define $R(k)$ to be a repunit of length $k$; for example, $R(6) = 111111$.

Unter der Voraussetzung, dass $n$ eine positive ganze Zahl ist und $GCD(n, 10) = 1$, kann man zeigen, dass es immer einen Wert $k$ gibt, für den $R(k)$ durch $n$ teilbar ist, und dass $A(n)$ der kleinste solche Wert von $k$ ist; zum Beispiel $A(7) = 6$ und $A(41) = 5$.

Der kleinste Wert von $n$, für den $A(n)$ zuerst zehn überschreitet, ist 17.

Finde den kleinsten Wert von $n$, für den $A(n)$ zuerst eine Million überschreitet.

# --hints--

`repunitDivisibility()` sollte `1000023` zurückgeben.

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
