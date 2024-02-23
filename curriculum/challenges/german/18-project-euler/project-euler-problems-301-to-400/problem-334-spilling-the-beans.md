---
id: 5900f4ba1000cf542c50ffcd
title: 'Problem 334: Die Bohnen verteilen'
challengeType: 1
forumTopicId: 301992
dashedName: problem-334-spilling-the-beans
---

# --description--

In Plato's heaven, there exist an infinite number of bowls in a straight line. Each bowl either contains some or none of a finite number of beans. A child plays a game, which allows only one kind of move: removing two beans from any bowl, and putting one in each of the two adjacent bowls. The game ends when each bowl contains either one or no beans.

Nehmen wir zum Beispiel zwei benachbarte Schüsseln, die 2 bzw. 3 Bohnen enthalten, während alle anderen Schüsseln leer sind. Die folgenden acht Züge beenden das Spiel:

<img class="img-responsive center-block" alt="Animation des Spiels, wenn zwei benachbarte Schalen 2 bzw. 3 Bohnen enthalten" src="https://cdn.freecodecamp.org/curriculum/project-euler/spilling-the-beans.gif" style="background-color: white; padding: 10px;" />

Dir wird die folgende Sequenz gegeben:

$$\begin{align}   & t_0 = 123456, \\\\
  & t_i = \begin{cases}          \frac{t_{i - 1}}{2},               & \text{if $t_{i - 1}$ is even} \\\\
         \left\lfloor\frac{t_{i - 1}}{2}\right\rfloor \oplus 926252, & \text{if $t_{i - 1}$ is odd}          \end{cases} \\\\
         & \qquad \text{where $⌊x⌋$ is the floor function and $\oplus$ is the bitwise XOR operator.} \\\\ & b_i = (t_i\bmod 2^{11}) + 1. \end{align}$$

Die ersten beiden Begriffe der letzten Sequenz sind $b_1 = 289$ und $b_2 = 145$. Wenn wir mit $b_1$ und $b_2$ Bohnen in zwei benachbarten Schüsseln beginnen, wären 3419100 Züge erforderlich, um das Spiel zu beenden.

Betrachte jetzt 1500 benachbarte Schüsseln, die $b_1, b_2, \ldots bzw. b_{1500}$ Bohnen enthalten, alle anderen Schüsseln sind leer. Finde heraus, wie viele Züge es benötigt, bevor das Spiel endet.

# --hints--

`spillingTheBeans()` should return `150320021261690850`.

```js
assert.strictEqual(spillingTheBeans(), 150320021261690850);
```

# --seed--

## --seed-contents--

```js
function spillingTheBeans() {

  return true;
}

spillingTheBeans();
```

# --solutions--

```js
// solution required
```
