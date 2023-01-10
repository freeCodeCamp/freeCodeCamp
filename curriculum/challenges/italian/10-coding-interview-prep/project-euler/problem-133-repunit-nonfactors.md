---
id: 5900f3f21000cf542c50ff04
title: 'Problema 133: non-fattori di numeri repunit'
challengeType: 1
forumTopicId: 301761
dashedName: problem-133-repunit-nonfactors
---

# --description--

Un numero costituito interamente da uni è chiamato un repunit (ripetizione di uno). Definiamo $R(k)$ come repunit di lunghezza $k$, per esempio $R(6) = 111111$.

Consideriamo repunit della forma $R({10}^n)$.

Anche se $R(10)$, $R(100)$, or $R(1000)$ non sono divisibili per 17, $R(10000)$ è divisibile per 17. Però non c'è alcun valore di n per cui $R({10}^n)$ è divisibile per 19. Notevolmente, 11, 17, 41, e 73 sono i soli quattro numeri primi sotto cento che possono essere fattori di $R({10}^n)$.

Trova la somma di tutti i primi sotto centomila che non saranno mai un fattore di $R({10}^n)$.

# --hints--

`repunitNonfactors()` dovrebbe restituire `453647705`.

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
