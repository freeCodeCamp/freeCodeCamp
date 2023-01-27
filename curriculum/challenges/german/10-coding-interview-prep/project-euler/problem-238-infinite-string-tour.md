---
id: 5900f45b1000cf542c50ff6d
title: 'Problem 238: Unendliche String Tour'
challengeType: 1
forumTopicId: 301883
dashedName: problem-238-infinite-string-tour
---

# --description--

Erstelle eine Zahlensequenz, indem du den "Blum Blum Shub" pseudo-zufälligen Zahlengenerator verwendest:

$$ s_0 = 14025256 \\\\
s_{n + 1} = {s_n}^2 \\; mod \\; 20\\,300\\,713 $$

Verkette diese Zahlen $s_0s_1s_2\ldots$, um eine Zeichenkette $w$ von unendlicher Länge zu erzeugen. Dann $w = 14025256741014958470038053646\ldots$

Existiert für eine positive ganze Zahl $k$ kein Teilstring von $w$ mit einer Ziffernsumme gleich $k$, so ist $p(k)$ als Null definiert. Existiert mindestens eine Teilkette von $w$ mit einer Summe von Ziffern gleich $k$, so definieren wir $p(k) = z$, wobei $z$ die Anfangsposition der ersten Teilkette dieser Art ist.

Zum Beispiel:

Die Teilstrings 1, 14, 1402, ... mit den jeweiligen Quersummen 1, 5, 7, ... beginnen an der Position 1, also $p(1) = p(5) = p(7) = \ldots = 1$.

Die Teilstrings 4, 402, 4025, ... mit den jeweiligen Quersummen 4, 6, 11, ... beginnen an der Position 2, also $p(4) = p(6) = p(11) = \ldots = 2$.

Die Teilzeichenketten 02, 0252, ... mit den jeweiligen Ziffernsummen 2, 9, ... beginnen an Position 3, also $p(2) = p(9) = \ldots = 3$.

Man beachte, dass die Teilzeichenkette 025, die an Position 3 beginnt, eine Ziffernsumme von 7 hat, aber es gab eine frühere Teilzeichenkette (beginnend an Position 1) mit einer Ziffernsumme von 7, also $p(7) = 1$, nicht 3.

Wir können überprüfen, dass für $0 &lt; k ≤ {10}^3$, $\sum p(k) = 4742$.

Finde $\sum p(k)$, für $0 &lt; k ≤ 2 \times {10}^{15}$.

# --hints--

`infiniteStringTour()` sollte `9922545104535660` zurückgeben.

```js
assert.strictEqual(infiniteStringTour(), 9922545104535660);
```

# --seed--

## --seed-contents--

```js
function infiniteStringTour() {

  return true;
}

infiniteStringTour();
```

# --solutions--

```js
// solution required
```
