---
id: 594810f028c0303b75339acf
title: Ackermannfunktion
challengeType: 1
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

The Ackermann function is a classic example of a recursive function, notable especially because it is not a primitive recursive function. It grows very quickly in value, as does the size of its call tree.

Die Ackermann-Funktion ist normalerweise wie folgt definiert:

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

Ihre Argumente sind niemals negativ und sie enden immer.

# --instructions--

Schreibe eine Funktion, die den Wert von $A(m, n)$ zurückgibt. Beliebige Präzision wird bevorzugt (da die Funktion so schnell wächst), aber sie ist nicht erforderlich.

# --hints--

`ack` sollte eine Funktion sein.

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` sollte 1 zurückgeben.

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` sollte 3 zurückgeben.

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` sollte 13 zurückgeben.

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` sollte 61 zurückgeben.

```js
assert(ack(3, 3) === 61);
```

# --seed--

## --seed-contents--

```js
function ack(m, n) {

}
```

# --solutions--

```js
function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
```
