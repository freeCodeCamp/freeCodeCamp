---
id: 5ea2815a8640bcc6cb7dab3c
title: Lychrel-Zahlen
challengeType: 1
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>Take an integer <code>n₀</code>, greater than zero.</li>
  <li>Bilde die nächste Zahl <code>n</code> der Reihe, indem du <code>n₀</code> umdrehst und zu <code>n₀</code> hinzufügst</li>
  <li>Stopp, wenn <code>n</code> es palindromisch wird - d.h. die Ziffern von <code>n</code> in == <code>n</code>.</li>
</ol>

The above recurrence relation when applied to most starting numbers `n` = 1, 2, ... terminates in a palindrome quite quickly.

Zum Beispiel, wenn `n₀` = 12 erhalten wir:

```bash
12
12 + 21 = 33,  a palindrome!
```

Und wenn `n₀` = 55 erhalten wir:

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

Beachte, dass die Prüfung auf ein Palindrom *nach* einer Addition erfolgt.

Einige Anfangszahlen scheinen ewig zu dauern; die Rekursionsbeziehung für 196 wurde für Millionen von Wiederholungen berechnet, die Zahlen mit Millionen von Ziffern bilden, ohne ein Palindrom zu bilden. Diese Zahlen, die nicht mit einem Palindrom enden, werden **Lychrel-Zahlen** genannt.

Für die Zwecke dieser Aufgabe ist eine Lychrel-Zahl eine beliebige Ausgangszahl, die nicht innerhalb von 500 (oder mehr) Iterationen ein Palindrom bildet.

**Saatgut und verwandte Lychrel-Nummern:**

Jede Ganzzahl, die in der Folge einer Lychrel-Zahl entsteht, ist auch eine Lynchrel-Zahl.

Im Allgemeinen *kann* jede Sequenz von einer Lychrel-Zahl konvergieren, um der Sequenz von einem vorherigen Lychrel-Zahlen-Kandidaten beizutreten; die Sequenzen für die Zahlen 196 und dann 689 beginnen zum Beispiel wie folgt:

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

Wir sehen also, dass die Folge, die mit 689 beginnt, zu denselben Zahlen konvergiert wie die für 196 und mit ihnen fortfährt.

Aus diesem Grund können wir die Lychrel-Zahlen weiter unterteilen in echte **Saat** Lychrel-Zahlenkandidaten und **Verwandte** Zahlen, die keine Palindrome erzeugen, aber ganze Zahlen in ihrer Sequenz haben, die als Teil der aus einer niedrigeren Lychrel-Zahl erzeugten Sequenz angesehen werden.

# --instructions--

Schreibe eine Funktion, die eine Zahl als Parameter annimmt. True wird zurückgegeben, wenn die Zahl eine Lynchrel-Zahl ist. Andernfalls wird false zurückgegeben. Denke daran, dass die Iterationsgrenze bei 500 liegt.

# --hints--

`isLychrel` sollte eine Funktion sein.

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` sollte einen Boolean zurückgeben.

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` sollte `false` zurückgeben.

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` sollte `false` zurückgeben.

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` sollte `true` zurückgeben.

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` sollte `true` zurückgeben.

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` sollte `false` zurückgeben.

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` sollte `true` zurückgeben.

```js
assert.equal(isLychrel(7059), true);
```

# --seed--

## --seed-contents--

```js
function isLychrel(n) {

}
```

# --solutions--

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```
