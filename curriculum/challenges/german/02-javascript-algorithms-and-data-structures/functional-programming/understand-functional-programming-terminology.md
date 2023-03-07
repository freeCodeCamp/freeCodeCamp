---
id: 587d7b8e367417b2b2512b5c
title: Die Terminologie der funktionalen Programmierung verstehen
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

Das FCC-Team hatte einen Stimmungswandel und will jetzt zwei Sorten Tee: grünen und schwarzen Tee. Allgemeiner Fakt: Stimmungsschwankungen bei Kunden sind ziemlich normal.

Mit diesen Informationen müssen wir die Funktion `getTea` aus der letzten Aufgabe wieder aufgreifen, um verschiedene Teeanfragen zu bearbeiten. Wir können `getTea` so abändern, dass es eine Funktion als Parameter akzeptiert, um die Art des Tees zu ändern, den es zubereitet. Das macht `getTea` flexibler und gibt dem Programmierer mehr Kontrolle, wenn sich die Kundenanforderungen ändern.

Aber zuerst wollen wir ein paar funktionale Begriffe klären:

<dfn>Callbacks</dfn> sind die Funktionen, die in eine andere Funktion eingeschleust oder übergeben werden, um den Aufruf dieser Funktion zu bestimmen. Du hast sie vielleicht schon an andere Methoden weitergegeben, zum Beispiel in `filter`. Die Callback-Funktion teilt JavaScript die Kriterien mit, nach denen ein Array gefiltert werden soll.

Funktionen, die einer Variable zugewiesen, an eine andere Funktion übergeben oder von einer anderen Funktion zurückgegeben werden können, werden <dfn>Funktionen erster Klasse</dfn> genannt. Alle Funktionen in JavaScript sind Funktionen erster Klasse.

The functions that take a function as an argument, or return a function as a return value, are called <dfn>higher order</dfn> functions.

Wenn Funktionen an eine andere Funktion übergeben oder von einer anderen Funktion zurückgegeben werden, dann können die übergebenen oder zurückgegebenen Funktionen als <dfn>Lambda</dfn> bezeichnet werden.

# --instructions--

Bereite 27 Tassen grünen Tee und 13 Tassen schwarzen Tee zu und speichere sie in den Variablen `tea4GreenTeamFCC` und `tea4BlackTeamFCC`. Beachte, dass die Funktion `getTea` geändert wurde, so dass sie jetzt eine Funktion als erstes Argument nimmt.

Hinweis: Die Daten (die Anzahl der Tassen Tee) werden als letztes Argument angegeben. Wir werden das in späteren Lektionen genauer besprechen.

# --hints--

Die Variable `tea4GreenTeamFCC` sollte 27 Tassen grünen Tee für das Team enthalten.

```js
assert(tea4GreenTeamFCC.length === 27);
```

Die Variable `tea4GreenTeamFCC` sollte Tassen mit grünem Tee enthalten.

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

Die Variable `tea4BlackTeamFCC` sollte 13 Tassen schwarzen Tee enthalten.

```js
assert(tea4BlackTeamFCC.length === 13);
```

Die Variable `tea4BlackTeamFCC` sollte Tassen mit schwarzem Tee enthalten.

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```
