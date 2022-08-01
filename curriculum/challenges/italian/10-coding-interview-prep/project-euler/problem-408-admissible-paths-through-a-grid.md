---
id: 5900f5091000cf542c51001b
title: 'Problema 408: Percorsi ammissibili attraverso una griglia'
challengeType: 1
forumTopicId: 302076
dashedName: problem-408-admissible-paths-through-a-grid
---

# --description--

Chiamiamo un punto del reticolo ($x$, $y$) inammissibile se $x$, $y$ e $x + y$ sono tutti quadrati positivi perfetti.

Ad esempio, (9, 16) è inammissibile, mentre (0, 4), (3, 1) e (9, 4) non lo sono.

Considera un percorso dal punto ($x_1$, $y_1$) al punto ($x_2$, $y_2$) usando solo i passi unitari nord o est. Chiamiamo tale percorso ammissibile se nessuno dei suoi punti intermedi è inammissibile.

Sia $P(n)$ il numero di percorsi ammissibili da (0, 0) a ($n$, $n$). Si può verificare che $P(5) = 252$, $P(16) = 596\\,994\\,440$ and $P(1\\,000)\bmod 1\\,000\\,000\\,007 = 341\\,920\\,854$.

Trova $P(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`admissiblePaths()` dovrebbe restituire `299742733`.

```js
assert.strictEqual(admissiblePaths(), 299742733);
```

# --seed--

## --seed-contents--

```js
function admissiblePaths() {

  return true;
}

admissiblePaths();
```

# --solutions--

```js
// solution required
```
