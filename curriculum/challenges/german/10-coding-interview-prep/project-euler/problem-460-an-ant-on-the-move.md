---
id: 5900f5381000cf542c51004b
title: 'Problem 460: Ein Ameise auf dem Weg'
challengeType: 1
forumTopicId: 302135
dashedName: problem-460-an-ant-on-the-move
---

# --description--

Auf der euklidischen Ebene reist eine Ameise vom Punkt $A(0, 1)$ zum Punkt $B(d, 1)$ mit dem Integer $d$.

In jedem Schritt wählt die Ameise am Punkt ($x_0$, $y_0$) einen der Gitterpunkte ($x_1$, $y_1$), die die Bedingungen $x_1 ≥ 0$ und $y_1 ≥ 1$ erfüllen, und läuft mit einer konstanten Geschwindigkeit $v$ direkt zu ($x_1$, $y_1$). Der Wert von $v$ hängt von $y_0$ und $y_1$ wie folgt ab:

- Wenn $y_0 = y_1$, ist der Wert von $v$ gleich $y_0$.
- Wenn $y_0 ≠ y_1$, ist der Wert von $v$ gleich $\frac{y_1 - y_0}{\ln y_1 - \ln y_0}$.

Das linke Bild ist einer der möglichen Pfade für $d = 4$. Zunächst bewegt sich die Ameise von $A(0, 1)$ nach $P_1(1, 3)$ mit der Geschwindigkeit $\frac{3 - 1}{\ln 3 - \ln 1} ≈ 1,8205$. Dann ist die benötigte Zeit $\frac{\sqrt{5}}{1.820} ≈ 1.2283$.

Von $P_1(1, 3)$ bis $P_2(3, 3)$ bewegt sich die Ameise mit der Geschwindigkeit 3, so dass die benötigte Zeit $\frac{2}{3} ≈ 0,6667$ beträgt. Von $P_2(3, 3)$ nach $B(4, 1)$ bewegt sich die Ameise mit der Geschwindigkeit $\frac{1 - 3}{\ln 1 - \ln 3} ≈ 1,8205$, so dass die benötigte Zeit $\frac{\sqrt{5}}{1,8205} ≈ 1,2283$ beträgt.

Die benötigte Gesamtzeit beträgt also $1,2283 + 0,6667 + 1,2283 = 3,1233$.

Das rechte Bild ist ein anderer Pfad. Die benötigte Gesamtzeit errechnet sich aus $0.98026 + 1 + 0.98026 = 2.96052$. Man kann zeigen, dass dies der schnellste Weg für $d = 4$ ist.

<img class="img-responsive center-block" alt="zwei mögliche Wege für d = 4" src="https://cdn.freecodecamp.org/curriculum/project-euler/an-ant-on-the-move.jpg" style="background-color: white; padding: 10px;" />

Lasse $F(d)$ die insgesamt benötigte Zeit sein, wenn die Ameise den schnellsten Weg wählt. Zum Beispiel: $F(4) ≈ 2,960\\,516\,287$. Wir können nachweisen, dass $F(10) ≈ 4,668\\,187\,834$ und $F(100) ≈ 9,217\\,221\,972$.

Finde $F(10\\,000)$. Gib deine Antwort auf neun Dezimalstellen gerundet an.

# --hints--

`antOnTheMove()` sollte `18.420738199` zurückgeben.

```js
assert.strictEqual(antOnTheMove(), 18.420738199);
```

# --seed--

## --seed-contents--

```js
function antOnTheMove() {

  return true;
}

antOnTheMove();
```

# --solutions--

```js
// solution required
```
