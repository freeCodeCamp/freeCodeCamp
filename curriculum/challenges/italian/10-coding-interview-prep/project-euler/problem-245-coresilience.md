---
id: 5900f4621000cf542c50ff74
title: 'Problema 245: Coresilienza'
challengeType: 1
forumTopicId: 301892
dashedName: problem-245-coresilience
---

# --description--

Chiameremo una frazione che non può essere semplificata una frazione resiliente.

Inoltre definiremo la resilienza di un denominatore, $R(d)$, come il rapporto delle sue frazioni proprie che sono resilienti; per esempio, $R(12) = \frac{4}{11}$.

La resilienza di un numero $d > 1$ è allora $\frac{φ(d)}{d − 1}$ , dove $φ$ è la funzione toziente di Eulero.

Definiamo inoltre la coresilienza di un numero $n > 1$ come $C(n) = \frac{n − φ(n)}{n − 1}$.

La coresilienza di un primo $p$ è $C(p) = \frac{1}{p − 1}$.

Trova la somma di tutti i numeri interi $1 &lt; n ≤ 2 × {10}^{11}$, per cui $C(n)$ è una frazione unitaria.

# --hints--

`coresilience()` dovrebbe restituire `288084712410001`.

```js
assert.strictEqual(coresilience(), 288084712410001);
```

# --seed--

## --seed-contents--

```js
function coresilience() {

  return true;
}

coresilience();
```

# --solutions--

```js
// solution required
```
