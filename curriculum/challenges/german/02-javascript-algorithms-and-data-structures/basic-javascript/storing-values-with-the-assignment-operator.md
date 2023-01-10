---
id: 56533eb9ac21ba0edf2244a8
title: Speichern von Werten mit dem Zuweisungsoperator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

In JavaScript kannst du mit dem <dfn>Zuweisungsoperator</dfn> (`=`) einen Wert in einer Variablen speichern.

```js
myVariable = 5;
```

Dies weist `myVariable` den `Number`-Wert `5` zu.

Wenn sich rechts vom Operator `=` Berechnungen befinden, werden diese durchgeführt, bevor der Wert der Variablen links vom Operator zugewiesen wird.

```js
var myVar;
myVar = 5;
```

Zunächst wird in diesem Code eine Variable mit dem Namen `myVar` erstellt. Danach weist der Code `5` zu `myVar` hinzu. Wenn nun `myVar` wieder im Code auftaucht, wird das Programm es so behandeln, als wäre es `5`.

# --instructions--

Weise den Wert `7` der Variablen `a` zu.

# --hints--

Du solltest den Code oberhalb des vorgegebenen Kommentars nicht ändern.

```js
assert(/var a;/.test(code));
```

`a` sollte einen Wert von 7 haben.

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
