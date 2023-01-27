---
id: 587d7b8c367417b2b2512b56
title: Verwende Export um einen Codeblock zu teilen
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

Stell dir eine Datei namens `math_functions.js` vor, die verschiedene Funktionen für mathematische Operationen enthält. Eine davon wird in einer Variablen, `add`, gespeichert, die zwei Zahlen aufnimmt und ihre Summe zurückgibt. Du willst diese Funktion in mehreren verschiedenen JavaScript-Dateien verwenden. Um sie mit diesen anderen Dateien zu teilen, musst du sie zuerst exportieren (`export`).

```js
export const add = (x, y) => {
  return x + y;
}
```

Dies ist eine gängige Methode, um eine einzelne Funktion zu exportieren, aber du kannst das Gleiche auch auf diese Weise erreichen:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

Wenn du eine Variable oder Funktion exportierst, kannst du sie in eine andere Datei importieren und verwenden, ohne den Code neu schreiben zu müssen. Du kannst mehrere Dinge exportieren, indem du das erste Beispiel für jedes Ding wiederholst, das du exportieren willst, oder indem du sie alle in die Exportanweisung des zweiten Beispiels einfügst, so wie hier:

```js
export { add, subtract };
```

# --instructions--

Im Editor gibt es zwei Funktionen, die sich auf Strings beziehen. Exportiere beide mit der Methode deiner Wahl.

# --hints--

Du solltest `uppercaseString` richtig exportieren.

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

Du solltest `lowercaseString` richtig exportieren.

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
