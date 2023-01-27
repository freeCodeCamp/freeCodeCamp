---
id: 5900f4601000cf542c50ff73
title: 'Problema 243: Resilienza'
challengeType: 1
forumTopicId: 301890
dashedName: problem-243-resilience
---

# --description--

Una frazione positiva il cui numeratore è inferiore al suo denominatore è chiamata una frazione propria.

Per qualsiasi denominatore, $d$, ci saranno $d−1$ frazioni proprie; per esempio, con $d = 12$:

$$\frac{1}{12}, \frac{2}{12}, \frac{3}{12}, \frac{4}{12}, \frac{5}{12}, \frac{6}{12}, \frac{7}{12}, \frac{8}{12}, \frac{9}{12}, \frac{10}{12}, \frac{11}{12}$$

Chiameremo una frazione che non può essere semplificata una frazione resiliente.

Inoltre definiremo la resilienza di un denominatore, $R(d)$, come il rapporto delle sue frazioni proprie che sono resilienti; per esempio, $R(12) = \frac{4}{11}$.

Infatti, $d = 12$ è il più piccolo denominatore con una resilienza $R(d) &lt; \frac{4}{10}$.

Trova il più piccolo denominatore $d$, avente una resilienza $R(d) &lt; \frac{15\\,499}{94\\,744}$.

# --hints--

`resilience()` dovrebbe restituire `892371480`.

```js
assert.strictEqual(resilience(), 892371480);
```

# --seed--

## --seed-contents--

```js
function resilience() {

  return true;
}

resilience();
```

# --solutions--

```js
// solution required
```
