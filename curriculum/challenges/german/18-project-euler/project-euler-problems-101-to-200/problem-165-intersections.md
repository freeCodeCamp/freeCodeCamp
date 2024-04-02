---
id: 5900f4111000cf542c50ff24
title: 'Problem 165: Schnittstellen'
challengeType: 1
forumTopicId: 301799
dashedName: problem-165-intersections
---

# --description--

Ein Segment ist eindeutig durch seine beiden Endpunkte definiert. By considering two line segments in plane geometry there are three possibilities: the segments have zero points, one point, or infinitely many points in common.

Wenn zwei Segmente genau einen Punkt gemeinsam haben, kann es außerdem sein, dass dieser gemeinsame Punkt ein Endpunkt entweder eines der Segmente oder beider ist. Wenn ein gemeinsamer Punkt zweier Segmente kein Endpunkt eines der beiden Segmente ist, ist er ein Innenpunkt beider Segmente.

Wir nennen einen gemeinsamen Punkt $T$ zweier Segmente $L_1$ und $L_2$ einen echten Schnittpunkt von $L_1$ und $L_2$, wenn $T$ der einzige gemeinsame Punkt von $L_1$ und $L_2$ ist und $T$ ein innerer Punkt der beiden Segmente ist.

Betrachte die drei Segmente $L_1$, $L_2$ und $L_3$:

$$\begin{align}   & L_1: (27, 44) \\;\text{to}\\; (12, 32) \\\\
  & L_2: (46, 53) \\;\text{to}\\; (17, 62) \\\\   & L_3: (46, 70) \\;\text{to}\\; (22, 40) \\\\
\end{align}$$

Es lässt sich nachweisen, dass die Liniensegmente $L_2$ und $L_3$ einen echten Schnittpunkt haben. Da einer der Endpunkte von $L_3$: (22, 40) auf $L_1$ liegt, wird er nicht als echter Schnittpunkt betrachtet. $L_1$ und $L_2$ haben keinen gemeinsamen Punkt. Unter den drei Liniensegmenten finden wir also einen echten Schnittpunkt.

Lass uns nun dasselbe für 5000 Liniensegmente tun. Zu diesem Zweck generieren wir 20000 Zahlen mit dem sogenannten "Blum Blum Shub"-Pseudo-Zufallszahlengenerator.

$$\begin{align}   & s_0 = 290797 \\\\
  & s_{n + 1} = s_n × s_n (\text{modulo}\\; 50515093) \\\\   & t_n = s_n (\text{modulo}\\; 500) \\\\
\end{align}$$

Für jedes Liniensegment verwenden wir vier aufeinanderfolgende Zahlen $t_n$. Das heißt, das erste Liniensegment ist gegeben durch:

($_t$1, $t_2$) bis ($t_3$, $t_4$)

Die ersten vier Zahlen, die nach dem obigen Generator berechnet werden, sind: 27, 144, 12 und 232. Der erste Abschnitt wäre also (27, 144) bis (12, 232).

Wie viele eindeutige echte Schnittpunkte finden sich unter den 5000 Liniensegmenten?

# --hints--

`distinctIntersections()` sollte `2868868` zurückgeben.

```js
assert.strictEqual(distinctIntersections(), 2868868);
```

# --seed--

## --seed-contents--

```js
function distinctIntersections() {

  return true;
}

distinctIntersections();
```

# --solutions--

```js
// solution required
```
