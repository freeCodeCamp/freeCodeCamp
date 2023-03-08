---
id: 5900f3d21000cf542c50fee4
title: 'Problem 101: Optimales Polynom'
challengeType: 1
forumTopicId: 301725
dashedName: problem-101-optimum-polynomial
---

# --description--

Wenn wir die ersten k Terme einer Folge erhalten, ist es unmöglich, den Wert des nächsten Terms mit Sicherheit zu bestimmen, da es unendlich viele Polynomfunktionen gibt, die die Folge modellieren können.

Betrachten wir als Beispiel die Folge von Würfelzahlen. Diese ist definiert durch die generierende Funktion $u_n = n^3: 1, 8, 27, 64, 125, 216, \ldots$

Nehmen wir an, wir hätten nur die ersten beiden Terme dieser Folge. Nach dem Prinzip "einfach ist am besten" sollten wir eine lineare Beziehung annehmen und den nächsten Term auf 15 (gemeinsame Differenz 7) vorhersagen. Selbst wenn wir die ersten drei Terme hätten, müsste nach demselben Prinzip der Einfachheit eine quadratische Beziehung angenommen werden.

Wir definieren $OP(k, n)$ als den $n^{th}$-Term der optimalen polynomialen generierenden Funktion für die ersten k Terme einer Folge. Es sollte klar sein, dass $OP(k, n)$ die Terme der Sequenz für $n ≤ k$ genau erzeugt, und dass der erste falsche Term (FIT) möglicherweise $OP(k, k+1)$ ist; in diesem Fall nennen wir ihn einen schlechten OP (BOP).

Als Grundlage wäre es am sinnvollsten, wenn man nur den ersten Term der Folge als konstant annimmt, d. h. für $n ≥ 2, OP(1, n) = u_1$.

Daraus ergeben sich die folgenden OPs für die kubische Folge:

$$\begin{array}{ll}   OP(1, n) = 1          & 1, {\color{red}1}, 1, 1, \ldots     \\\\
  OP(2, n) = 7n−6       & 1, 8, {\color{red}{15}}, \ldots     \\\\   OP(3, n) = 6n^2−11n+6 & 1, 8, 27, {\color{red}{58}}, \ldots \\\\
  OP(4, n) = n^3        & 1, 8, 27, 64, 125, \ldots \end{array}$$

Offensichtlich gibt es keine BOPs für k ≥ 4. Betrachtet man die Summe der von den BOPs erzeugten FITs (oben in $\color{red}{red}$ angegeben), erhält man 1 + 15 + 58 = 74. Betrachte die folgende polynomiale generierende Funktion zehnten Grades:

$$u_n = 1 − n + n^2 − n^3 + n^4 − n^5 + n^6 − n^7 + n^8 − n^9 + n^{10}$$

Ermittle die Summe der FITs für die BOPs.

# --hints--

`optimumPolynomial()` sollte `37076114526` zurückgeben.

```js
assert.strictEqual(optimumPolynomial(), 37076114526);
```

# --seed--

## --seed-contents--

```js
function optimumPolynomial() {

  return true;
}

optimumPolynomial();
```

# --solutions--

```js
// solution required
```
