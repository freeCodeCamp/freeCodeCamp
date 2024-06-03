---
id: 5900f4fe1000cf542c510010
title: 'Problem 400: Fibonacci-Baum-Spiel'
challengeType: 1
forumTopicId: 302067
dashedName: problem-400-fibonacci-tree-game
---

# --description--

A Fibonacci tree is a binary tree recursively defined as:

- $T(0)$ is the empty tree.
- $T(1)$ ist der Binärbaum mit nur einem Knoten.
- $T(k)$ besteht aus einem Wurzelknoten, der $T(k - 1)$ und $T(k - 2)$ als Kinder hat.

An einem solchen Baum spielen zwei Spieler ein Mitnahmespiel. In jedem Zug wählt ein Spieler einen Knoten aus und entfernt diesen Knoten zusammen mit dem Unterbaum, der an diesem Knoten wurzelt ist. Der Spieler, der gezwungen ist, den Wurzelknoten des gesamten Baumes zu nehmen, hat verloren.

Hier sind die Gewinnzüge des ersten Spielers im ersten Zug für $T(k)$ von $k = 1$ bis $k = 6$.

<img class="img-responsive center-block" alt="gewinnende Züge des ersten Spielers, im ersten Zug für k = 1 bis k = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/fibonacci-tree-game.png" style="background-color: white; padding: 10px;" />

Lasse $f(k)$ die Anzahl der Gewinnzüge des ersten Spielers (d.h. der Züge, für die der zweite Spieler keine Gewinnstrategie hat) im ersten Zug des Spiels sein, wenn dieses Spiel auf $T(k)$ gespielt wird.

For example, $f(5) = 1$ and $f(10) = 17$.

Find $f(10000)$. Give the last 18 digits of your answer.

# --hints--

`fibonacciTreeGame()` should return `438505383468410600`.

```js
assert.strictEqual(fibonacciTreeGame(), 438505383468410600);
```

# --seed--

## --seed-contents--

```js
function fibonacciTreeGame() {

  return true;
}

fibonacciTreeGame();
```

# --solutions--

```js
// solution required
```
