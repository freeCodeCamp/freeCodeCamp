---
id: 5900f4971000cf542c50ffaa
title: 'Problem 299: Drei ähnliche Dreiecke'
challengeType: 1
forumTopicId: 301951
dashedName: problem-299-three-similar-triangles
---

# --description--

Es werden vier Punkte mit ganzzahligen Koordinaten ausgewählt:

$A(a, 0)$, $B(b, 0)$, $C(0, c)$ und $D(0, d)$, mit $0 &lt; a &lt; b$ und $0 &lt; c &lt; d$.

Der Punkt $P$, ebenfalls mit ganzzahligen Koordinaten, wird auf der Geraden $AC$ so gewählt, dass die drei Dreiecke $ABP$, $CDP$ und $BDP$ alle ähnlich sind.

<img class="img-responsive center-block" alt="die Punkte A, B, C, D und P bilden drei Dreiecke: ABP, CDP und BDP" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;" />

Es ist leicht zu beweisen, dass die drei Dreiecke nur ähnlich sein können, wenn $a = c$.

Gesetzt den Fall, dass $a = c$ ist, suchen wir also nach Tripletts ($a$, $b$, $d$), die so beschaffen sind, dass mindestens ein Punkt $P$ (mit ganzzahligen Koordinaten) auf $AC$ existiert, wodurch die drei Dreiecke $ABP$, $CDP$ und $BDP$ alle ähnlich sind.

Ist beispielsweise $(a, b, d) = (2, 3, 4)$, so lässt sich leicht überprüfen, ob der Punkt $P(1, 1)$ die obige Bedingung erfüllt. Man beachte, dass die Tripletts (2,3,4) und (2,4,3) als unterschiedlich betrachtet werden, obwohl $P(1, 1)$ ein gemeinsamer Punkt ist.

Wenn $b + d &lt; 100$, gibt es 92 verschiedene Tripel ($a$, $b$, $d$), sodass der Punkt $P$ existiert.

Wenn $b + d &lt; 100\\,000$, gibt es 320471 verschiedene Tripel ($a$, $b$, $d$), sodass der Punkt $P$ existiert.

Wenn $b + d &lt; 100\\,000\\,000$ ist, wie viele verschiedene Dreiergruppen ($a$, $b$, $d$) gibt es dann, sodass der Punkt $P$ existiert?

# --hints--

`threeSimilarTriangles()` sollte `549936643` zurückgeben.

```js
assert.strictEqual(threeSimilarTriangles(), 549936643);
```

# --seed--

## --seed-contents--

```js
function threeSimilarTriangles() {

  return true;
}

threeSimilarTriangles();
```

# --solutions--

```js
// solution required
```
