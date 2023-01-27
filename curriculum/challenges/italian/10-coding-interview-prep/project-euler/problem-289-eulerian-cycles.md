---
id: 5900f48d1000cf542c50ffa0
title: 'Problema 289: Cicli Euleriani'
challengeType: 1
forumTopicId: 301940
dashedName: problem-289-eulerian-cycles
---

# --description--

Sia $C(x,y)$ una circonferenza che passa attraverso i punti ($x$, $y$), ($x$, $y + 1$), ($x + 1$, $y$) e ($x + 1$, $y + 1$).

Dati i numeri interi positivi $m$ e $n$, sia $E(m,n)$ una configurazione che consiste di $m·n$ circonferenze: { $C(x,y)$: $0 ≤ x &lt; m$, $0 ≤ y &lt; n$, con $x$ e $y$ interi }

Un ciclo Euleriano su $E(m,n)$ è un percorso chiuso che passa attraverso ogni arco esattamente una volta. Molti di questi percorsi sono possibili su $E(m,n)$, ma siamo interessati solo a quelli che non sono auto-attraversanti: un sentiero non incrociato si tocca solo ai punti di reticolo, ma non si attraversa mai.

L'immagine qui sotto mostra $E(3,3)$ e un esempio di un percorso Euleriano senza incroci.

<img class="img-responsive center-block" alt="Ciclo Euleriano E(3, 3) e percorso Euleriano senza incroci" src="https://cdn.freecodecamp.org/curriculum/project-euler/eulerian-cycles.gif" style="background-color: white; padding: 10px;" />

Sia $L(m,n)$ il numero di percorsi Euleriani senza incroci su $E(m,n)$. Per esempio, $L(1,2) = 2$, $L(2,2) = 37$ e $L(3,3) = 104290$.

Trova $L(6,10)\bmod {10}^{10}$.

# --hints--

`eulerianCycles()` dovrebbe restituire `6567944538`.

```js
assert.strictEqual(eulerianCycles(), 6567944538);
```

# --seed--

## --seed-contents--

```js
function eulerianCycles() {

  return true;
}

eulerianCycles();
```

# --solutions--

```js
// solution required
```
