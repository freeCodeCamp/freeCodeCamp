---
id: 587d7b87367417b2b2512b42
title: Ein mit const deklariertes Array modifizieren
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

Wenn du mit `const` nicht vertraut bist, schau dir <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow">diese Aufgabe über das <code>const</code>-Schlüsselwort</a> an.

Die `const`-Deklaration hat viele Anwendungsfälle in modernem JavaScript.

Manche Entwickler ziehen es vor, alle ihre Variablen standardmäßig mit `const` zuzuweisen, es sei denn, sie wissen, dass sie den Wert neu zuweisen müssen. Nur in diesem Fall verwenden sie `let`.

Es ist jedoch wichtig zu verstehen, dass Objekte (einschließlich Arrays und Funktionen), die einer Variablen mit `const` zugewiesen werden, weiterhin veränderbar sind. Die Verwendung der `const`-Deklaration verhindert nur die Neuzuweisung des Variablennamens.

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` wird zu einem Fehler führen. Nachdem du diese Zeile auskommentiert hast, wird `console.log` den Wert `[5, 6, 45]` ausgeben.

Wie du siehst, kannst du das Objekt `[5, 6, 7]` selbst verändern und die Variable `s` wird immer noch auf das veränderte Array `[5, 6, 45]` zeigen. Wie alle Arrays sind die Arrayelemente in `s` veränderbar, aber weil `const` verwendet wurde, kannst du den Variablennamen `s` nicht verwenden, um mit dem Zuweisungsoperator auf ein anderes Array zu zeigen.

# --instructions--

Ein Array wird als `const s = [5, 7, 2]` deklariert. Ändere das Array zu `[2, 5, 7]` mit Hilfe verschiedener Elementzuweisungen.

# --hints--

Du solltest das Schlüsselwort `const` nicht ersetzen.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` sollte eine konstante Variable sein (indem du `const` verwendest).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

Du solltest die ursprüngliche Array-Deklaration nicht ändern.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` sollte gleich `[2, 5, 7]` sein.

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
