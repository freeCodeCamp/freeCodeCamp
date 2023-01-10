---
id: 587d7b87367417b2b2512b3f
title: Erkunde die Unterschiede zwischen den Schlüsselwörtern var und let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

Eines der größten Probleme bei der Deklaration von Variablen mit dem Schlüsselwort `var` ist, dass du Variablendeklarationen leicht überschreiben kannst:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

In dem obigen Code ist die Variable `camper` ursprünglich als `James` deklariert und wird dann mit der Variable `David` überschrieben. In der Konsole wird dann der String `David` angezeigt.

In einer kleinen Anwendung wirst du möglicherweise nicht auf ein Problem dieser Art stoßen. Aber wenn deine Codebasis größer wird, könntest du versehentlich eine Variable überschreiben, die du nicht überschreiben wolltest. Da dieses Verhalten keine Fehler verursacht, wird die Suche nach dem Fehler und das Beheben des Fehlers schwieriger.

Ein Schlüsselwort namens `let` wurde in ES6 eingeführt, ein wichtiges Update für JavaScript, um dieses potentielle Problem mit dem Schlüsselwort `var` zu lösen. In späteren Aufgaben wirst du weitere ES6-Funktionen kennenlernen.

Wenn du in dem obigen Code `var` durch `let` ersetzt, wird dies zu einem Fehler führen:

```js
let camper = "James";
let camper = "David";
```

Den Fehler kannst du in der Konsole deines Browsers sehen.

Anders als bei `var`, kann bei der Verwendung von `let`, eine Variable mit demselben Namen nur einmal deklariert werden.

# --instructions--

Aktualisiere den Code, so dass es nur das Schlüsselwort `let` verwendet.

# --hints--

`var` sollte in deinem Code nicht existieren.

```js
assert.notMatch(code, /var/g);
```

`catName` sollte den String `Oliver` enthalten.

```js
assert.equal(catName, 'Oliver');
```

`catSound` sollte den String `Meow!` enthalten

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
