---
id: 587d7b84367417b2b2512b36
title: 'Nicht geschlossene Klammern, geschweifte Klammern und Anführungszeichen abfangen'
challengeType: 1
forumTopicId: 301190
dashedName: catch-unclosed-parentheses-brackets-braces-and-quotes
---

# --description--

Ein weiterer Syntaxfehler, auf den du achten solltest, ist, dass alle öffnenden Klammern, geschweifte Klammern und Anführungszeichen ein schließendes Paar besitzen. Das Vergessen eines Teils passiert oft, wenn du bestehenden Code bearbeitest und Elemente mit einem der Paartypen einfügst. Sei außerdem vorsichtig, wenn du Codeblöcke in andere verschachtelst, z. B. wenn du eine Rückruffunktion (Callback-Funktion) als Argument zu einer Methode hinzufügst.

Eine Möglichkeit, diesen Fehler zu vermeiden, besteht darin, dass du, sobald du das erste Zeichen getippt hast, sofort das letzte Zeichen einfügst, dann den Cursor wieder dazwischen setzt und mit der Programmierung fortfährst. Zum Glück erzeugen die meisten modernen Code-Editoren die zweite Hälfte des Paares automatisch.

# --instructions--

Behebe die beiden Paarfehler im Code.

# --hints--

Dein Code sollte das fehlende Stück des Arrays reparieren.

```js
assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
```

Dein Code sollte den fehlenden Teil der Methode `.reduce()` beheben. Die Konsolenausgabe sollte Folgendes anzeigen: `Sum of array values is: 6`.

```js
assert(arraySum === 6);
```

# --seed--

## --seed-contents--

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

# --solutions--

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```
