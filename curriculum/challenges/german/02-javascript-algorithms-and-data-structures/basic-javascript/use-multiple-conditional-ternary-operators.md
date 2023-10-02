---
id: 587d7b7e367417b2b2512b21
title: Verwende mehrere bedingte (ternäre) Operatoren
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

In der vorherigen Aufgabe hast du einen einzelnen bedingten Operator verwendet. Du kannst sie auch miteinander verketten, um mehrere Bedingungen zu prüfen.

Die folgende Funktion verwendet `if`, `else if` und `else`-Anweisungen, um mehrere Bedingungen zu prüfen:

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

Die obige Funktion kann mit mehreren bedingten Operatoren umgeschrieben werden:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

Es gilt als bewährte Praxis, mehrere bedingte Operatoren so zu formatieren, dass jede Bedingung in einer eigenen Zeile steht, wie oben gezeigt. Wenn du mehrere bedingte Operatoren ohne korrekte Einrückung verwendest, kann dein Code schwer zu lesen sein. Zum Beispiel:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

In der Funktion `checkSign` verwendest du mehrere bedingte Operatoren - in Anlehnung an das empfohlene Format in `findGreaterOrEqual` - um zu prüfen, ob eine Zahl positiv, negativ oder Null ist. Die Funktion sollte `positive`, `negative` oder `zero` zurückgeben.

# --hints--

`checkSign` sollte mehrere bedingte Operatoren verwenden

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` sollte den String `positive` zurückgeben. Beachte, dass die Großschreibung wichtig ist

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` sollte den String `negative` zurückgeben. Beachte, dass die Großschreibung wichtig ist

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` sollte den String `zero` zurückgeben. Beachte, dass die Großschreibung wichtig ist

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
