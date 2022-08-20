---
id: 5900f54c1000cf542c51005e
title: 'Problema 478: Miscele'
challengeType: 1
forumTopicId: 302155
dashedName: problem-478-mixtures
---

# --description--

Consideriamo miscele di tre sostanze: $A$, $B$ e $C$. Una miscela può essere descritta da un rapporto tra le quantità di $A$, $B$e $C$ in essa, cioè, $(a : b : c)$. Ad esempio, una miscela descritta dal rapporto (2 : 3 : 5) contiene il 20% $A$, il 30% $B$ e il 50% $C$.

Ai fini di questo problema, non possiamo separare i singoli componenti da una miscela. Tuttavia, possiamo combinare diverse quantità di miscele diverse per formare miscele con nuovi rapporti.

Per esempio, diciamo che abbiamo tre miscele con rapporti (3 : 0 : 2), (3 : 6 : 11) e (3 : 3 : 4). Mescolando 10 unità della prima, 20 unità della seconda e 30 unità della terza, otteniamo una nuova miscela con rapporto (6 : 5 : 9), poiché: ($10 \times \frac{3}{5} + 20 \times \frac{3}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{0}{5} + 20 \times \frac{6}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{2}{5} + 20 \times \frac{11}{20} + 30 \times \frac{4}{10}$) = (18 : 15 : 27) = (6 : 5 : 9)

Tuttavia, con le stesse tre miscele, è impossibile formare il rapporto (3 : 2 : 1), poiché la quantità di $B$ è sempre inferiore alla quantità di $C$.

Sia $n$ un numero intero positivo. Supponiamo che per ogni tripletta di interi $(a, b, c)$ con $0 ≤ a, b, c ≤ n$ e $gcd(a, b, c) = 1$, abbiamo una miscela con rapporto $(a : b : c)$. Sia $M(n)$ l'insieme di tutte queste miscele.

Ad esempio, $M(2)$ contiene le 19 miscele con i seguenti rapporti:

{(0 : 0 : 1), (0 : 1 : 0), (0 : 1 : 1), (0 : 1 : 2), (0 : 2 : 1), (1 : 0 : 0), (1 : 0 : 1), (1 : 0 : 2), (1 : 1 : 0), (1 : 1 : 1), (1 : 1 : 2), (1 : 2 : 0), (1 : 2 : 1), (1 : 2 : 2), (2 : 0 : 1), (2 : 1 : 0), (2 : 1 : 1), (2 : 1 : 2), (2 : 2 : 1)}.

Sia $E(n)$ il numero di sottoinsiemi di $M(n)$ che possono produrre la miscela con rapporto (1 : 1 : 1), cioè, la miscela con parti uguali $A$, $B$ e $C$.

Possiamo verificare che $E(1) = 103$, $E(2) = 520\\,447$, $E(10)\bmod {11}^8 = 82\\,608\\,406$ e $E(500)\bmod {11}^8 = 13\\,801\\,403$.

Trova $E(10\\,000\\,000)\bmod {11}^8$.

# --hints--

`mixtures()` dovrebbe restituire `59510340`.

```js
assert.strictEqual(mixtures(), 59510340);
```

# --seed--

## --seed-contents--

```js
function mixtures() {

  return true;
}

mixtures();
```

# --solutions--

```js
// solution required
```
