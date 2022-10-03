---
id: 587d7b8d367417b2b2512b5b
title: Lerne mehr über funktionale Programmierung
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

Funktionale Programmierung ist ein Programmierstil, bei dem die Lösungen einfache, isolierte Funktionen sind, ohne jegliche Nebeneffekte außerhalb des Funktionsumfangs: Eingabe -&gt Prozess -&gtAusgabe ( `INPUT -> PROCESS -> OUTPUT`)

Bei der funktionalen Programmierung geht es um:

1) Isolierte Funktionen - es gibt keine Abhängigkeit vom Status des Programms, das globale Variablen enthält, die geändert werden können

2) Reine Funktionen - die gleiche Eingabe gibt immer die gleiche Ausgabe

3) Funktionen mit begrenzten Nebeneffekten - alle Änderungen oder Mutationen des Programmzustands außerhalb der Funktion werden sorgfältig kontrolliert

# --instructions--

Die Mitglieder von FreeCodeCamp lieben Tee.

Im Code-Editor sind die Funktionen `prepareTea` und `getTea` bereits für dich definiert. Rufe die `getTea` Funktion auf, um 40 Tassen Tee für das Team zu erhalten, und speichere sie in der `tea4TeamFCC` Variable.

# --hints--

Die Variable `tea4TeamFCC` sollte 40 Tassen Tee für das Team enthalten.

```js
assert(tea4TeamFCC.length === 40);
```

Die Variable `tea4TeamFCC` sollte Tassen mit grünem Tee enthalten.

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
