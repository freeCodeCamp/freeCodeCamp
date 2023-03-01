---
id: 5900f54c1000cf542c51005e
title: 'Problem 478: Mischungen'
challengeType: 1
forumTopicId: 302155
dashedName: problem-478-mixtures
---

# --description--

Wir betrachten Gemische aus drei Stoffen: $A$, $B$ und $C$. Ein Gemisch kann durch ein Verhältnis der Mengen von $A$, $B$ und $C$ zusammengesetzt werden, d. h. $(a : b : c)$. Ein Gemisch, das durch das Verhältnis (2 : 3 : 5) beschrieben wird, enthält beispielsweise 20% $A$, 30% $B$ und 50% $C$.

Für diesen Zweck können wir die einzelnen Bestandteile eines Gemischs nicht trennen. Wir können jedoch unterschiedliche Mengen verschiedener Gemische kombinieren, um Gemische mit neuen Verhältnissen zu bilden.

Nehmen wir zum Beispiel an, wir haben drei Gemische mit den Verhältnissen (3 : 0 : 2), (3 : 6 : 11) und (3 : 3 : 4). Wenn man 10 Einheiten des ersten, 20 Einheiten des zweiten und 30 Einheiten des dritten Stoffes mischt, erhält man eine neue Mischung im Verhältnis (6 : 5 : 9), denn: ($10 \times \frac{3}{5} + 20 \times \frac{3}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{0}{5} + 20 \times \frac{6}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{2}{5} + 20 \times \frac{11}{20} + 30 \times \frac{4}{10}$) = (18 : 15 : 27) = (6 : 5 : 9)

Mit denselben drei Gemischen ist es jedoch unmöglich, das Verhältnis (3 : 2 : 1) zu bilden, da die Menge von $B$ immer kleiner ist als die Menge von $C$.

Lasse $n$ eine positive ganze Zahl sein. Angenommen, für jedes Tripel der Integer $(a, b, c)$ mit $0 ≤ a, b, c ≤ n$ und $gcd(a, b, c) = 1$ gibt es eine Mischung mit dem Verhältnis $(a : b : c)$. Lasse $M(n)$ die Menge aller solcher Mischungen sein.

Zum Beispiel enthält $M(2)$ die 19 Gemische mit den folgenden Verhältnissen:

{(0 : 0 : 1), (0 : 1 : 0), (0 : 1 : 1), (0 : 1 : 2), (0 : 2 : 1), (1 : 0 : 0), (1 : 0 : 1), (1 : 0 : 2), (1 : 1 : 0), (1 : 1 : 1), (1 : 1 : 2), (1 : 2 : 0), (1 : 2 : 1), (1 : 2 : 2), (2 : 0 : 1), (2 : 1 : 0), (2 : 1 : 1), (2 : 1 : 2), (2 : 2 : 1)}.

Lasse $E(n)$ die Anzahl der Teilmengen von $M(n)$ sein, die das Gemisch mit dem Verhältnis (1 : 1 : 1), d.h. das Gemisch mit gleichen Anteilen $A$, $B$ und $C$, ergeben können.

Wir können überprüfen, dass $E(1) = 103$, $E(2) = 520\\,447$, $E(10)\bmod {11}^8 = 82\\,608\\,406$ und $E(500)\bmod {11}^8 = 13\\,801\\,403$.

Finde $E(10\\,000\\,000)\bmod {11}^8$.

# --hints--

`mixtures()` sollte `59510340` zurückgeben.

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
