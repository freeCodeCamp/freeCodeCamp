---
id: 599a789b454f2bbd91a3ff4d
title: Übe den Vergleich verschiedener Werte
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

In den letzten beiden Aufgaben haben wir den Gleichheitsoperator (`==`) und den strikten Gleichheitsoperator (`===`) kennengelernt. Lass uns noch einmal kurz den Umgang mit diesen Operatoren üben.

Wenn die zu vergleichenden Werte nicht vom gleichen Typ sind, führt der Gleichheitsoperator eine Typkonvertierung durch und wertet dann die Werte aus. Der strikte Gleichheitsoperator vergleicht jedoch sowohl den Datentyp als auch den Wert wie er ist, ohne einen Typ in den anderen zu konvertieren.

**Beispiele**

`3 == '3'` gibt `true` zurück, weil JavaScript eine Typkonvertierung von String zu Zahl durchführt. `3 === '3'` gibt `false` zurück, weil die Typen unterschiedlich sind und die Typkonvertierung nicht durchgeführt wird.

**Hinweis:** In JavaScript kannst du den Typ einer Variablen oder eines Wertes mit dem `typeof`-Operator bestimmen, und zwar wie folgt:

```js
typeof 3
typeof '3'
```

`typeof 3` gibt den String `number` zurück, und `typeof '3'` gibt den String `string` zurück.

# --instructions--

Die `compareEquality`-Funktion im Editor vergleicht zwei Werte mit dem Gleichheitsoperator. Ändere die Funktion so, dass sie den String `Equal` nur dann zurückgibt, wenn die Werte strikt gleich sind.

# --hints--

`compareEquality(10, "10")` sollte den String `Not Equal` zurückgeben

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` sollte den String `Not Equal` zurückgeben

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

Du solltest den Operator `===` verwenden

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
