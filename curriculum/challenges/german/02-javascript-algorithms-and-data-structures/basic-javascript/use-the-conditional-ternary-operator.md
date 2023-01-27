---
id: 587d7b7e367417b2b2512b24
title: Den bedingten (ternären) Operator verwenden
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

Der <dfn>bedingte Operator</dfn>, auch <dfn>Dreifach-Operator</dfn> genannt, kann als einzeiliger if-else-Ausdruck verwendet werden.

Die Syntax lautet `a ? b : c`, wobei `a` die Bedingung ist, `b` ist der Code, der ausgeführt werden soll, wenn die Bedingung `true` zurückgibt und `c` der Code ist, der ausgeführt werden soll, wenn die Bedingung `false` zurückgibt.

Die folgende Funktion verwendet eine `if/else`-Anweisung, um eine Bedingung zu prüfen:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

Dies kann mit dem bedingten Operator umgeschrieben werden:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

Verwende den bedingten Operator in der Funktion `checkEqual`, um zu prüfen, ob zwei Zahlen gleich sind oder nicht. Die Funktion sollte entweder den String `Equal` oder den String `Not Equal` zurückgeben.

# --hints--

`checkEqual` sollte den bedingten Operator verwenden

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` sollte den String `Not Equal` zurückgeben

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` sollte den String `Equal` zurückgeben

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` sollte den String `Not Equal` zurückgeben

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```
