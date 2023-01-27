---
id: 5900f46d1000cf542c50ff7f
title: 'Problem 255: Gerundete Quadratwurzeln'
challengeType: 1
forumTopicId: 301903
dashedName: problem-255-rounded-square-roots
---

# --description--

Wir definieren die gerundete Quadratwurzel einer positiven ganzen Zahl $n$ als die Quadratwurzel von $n$, gerundet auf die nächste ganze Zahl.

Die folgende Prozedur (im Wesentlichen die Methode von Heron, angepasst an die ganzzahlige Arithmetik) findet die gerundete Quadratwurzel von $n$:

Lasse $d$ die Anzahl der Ziffern der Zahl $n$ sein.

Falls $d$ ungerade ist, setze $x_0 = 2 × {10}^{\frac{d - 1}{2}}}$.

Falls $d$ gerade ist, setze $x_0 = 7 × {10}^{d - 2}{2}}$.

Wiederhole:

$$x_{k + 1} = \left\lfloor\frac{x_k + \left\lceil\frac{n}{x_k}\right\rceil}{2}\right\rfloor$$

bis $x_{k + 1} = x_k$.

Als Beispiel wollen wir die gerundete Quadratwurzel von $n = 4321$ finden.

$n$ hat 4 Ziffern, also $x_0 = 7 × {10}^{frac{4-2}{2}}} = 70$.

$$x_1 = \left\lfloor\frac{70 + \left\lceil\frac{4321}{70}\right\rceil}{2}\right\rfloor = 66 \\\\
x_2 = \left\lfloor\frac{66 + \left\lceil\frac{4321}{66}\right\rceil}{2}\right\rfloor = 66$$

Da $x_2 = x_1$ ist, hören wir hier auf. Nach nur zwei Iterationen haben wir also festgestellt, dass die gerundete Quadratwurzel von 4321 66 ist (die tatsächliche Quadratwurzel ist 65,7343137...).

Die Anzahl der erforderlichen Iterationen ist bei dieser Methode erstaunlich gering. Zum Beispiel können wir die gerundete Quadratwurzel einer 5-stelligen ganzen Zahl ($10\\.000 ≤ n ≤ 99\\.999$) mit durchschnittlich 3,2102888889 Iterationen finden (der Durchschnittswert wurde auf 10 Dezimalstellen gerundet).

Wie viele Iterationen sind durchschnittlich erforderlich, um mit dem oben beschriebenen Verfahren die gerundete Quadratwurzel einer 14-stelligen Zahl (${10}^{13} ≤ n &lt; {10}^{14}$) zu finden? Gib deine Antwort auf 10 Dezimalstellen gerundet an.

**Hinweis:** Die Symbole $⌊x⌋$ und $⌈x⌉$ stehen für die Aufrundungs-und Abrundungsfunktion.

# --hints--

`roundedSquareRoots()` sollte `4.447401118` zurückgeben.

```js
assert.strictEqual(roundedSquareRoots(), 4.447401118);
```

# --seed--

## --seed-contents--

```js
function roundedSquareRoots() {

  return true;
}

roundedSquareRoots();
```

# --solutions--

```js
// solution required
```
