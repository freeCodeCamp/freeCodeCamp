---
id: 587d7b89367417b2b2512b4b
title: Verwende die Destrukturierungszuweisung, um Variablen aus Arrays zuzuweisen
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

ES6 macht die Destrukturierung von Arrays so einfach wie die Destrukturierung von Objekten.

Ein wesentlicher Unterschied zwischen dem Spread-Operator und der Array-Destrukturierung ist, dass der Spread-Operator alle Inhalte eines Arrays in eine kommagetrennte Liste auspackt. Du kannst also nicht auswählen, welche Elemente du den Variablen zuweisen möchtest.

Mit der Destrukturierung eines Arrays können wir genau das tun:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

Die Konsole wird die Werte von `a` und `b` als `1, 2` anzeigen.

Der Variablen `a` wird der erste Wert des Arrays zugewiesen und `b` wird der zweite Wert des Arrays zugewiesen. Wir können auch auf den Wert an einem beliebigen Index in einem Array mit Destrukturierung zugreifen, indem wir Kommas verwenden, um den gewünschten Index zu erreichen:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

Die Konsole wird die Werte von `a`, `b` und `c` als `1, 2, 5` anzeigen.

# --instructions--

Verwende die Destrukturierungszuweisung, um die Werte von `a` und `b` zu vertauschen, so dass `a` den in `b` gespeicherten Wert erhält und `b` den in `a` gespeicherten Wert erhält.

# --hints--

Der Wert von `a` sollte nach dem Austausch `6` sein.

```js
assert(a === 6);
```

Der Wert von `b` sollte nach dem Austausch `8` sein.

```js
assert(b === 8);
```

Du solltest die Array-Destrukturierung verwenden, um `a` und `b` zu tauschen.

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Only change code below this line
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```
