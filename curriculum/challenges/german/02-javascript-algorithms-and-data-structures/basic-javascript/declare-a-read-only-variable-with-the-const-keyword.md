---
id: 587d7b87367417b2b2512b41
title: Deklariere eine schreibgeschützte Variable mit dem Schlüsselwort const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

Das Schlüsselwort `let` ist nicht die einzige neue Möglichkeit, Variablen zu deklarieren. In ES6 kannst du Variablen auch mit dem Schlüsselwort `const` deklarieren.

`const` hat die gleichen tollen Funktionen die auch `let` hat, mit dem zusätzlichen Vorteil, dass Variablen, die mit `const` deklariert werden, schreibgeschützt sind. Sie sind ein konstanter Wert, was bedeutet, dass eine Variable, die einmal mit `const` zugewiesen wurde, nicht mehr neu zugewiesen werden kann:

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

Die Konsole zeigt einen Fehler an, weil der Wert von `FAV_PET` neu zugewiesen wurde.

Du solltest Variablen, die du nicht neu zuweisen willst, immer mit dem Schlüsselwort `const` benennen. Das hilft, wenn du versehentlich versuchst, eine Variable neu zuzuweisen, die eigentlich konstant bleiben soll.

**Hinweis:** Es ist üblich, dass Entwickler für unveränderliche Werte Variablenbezeichnungen in Großbuchstaben schreiben und für Werte, die verändert werden können (Objekte und Arrays), Kleinbuchstaben oder CamelCase verwenden. In späteren Aufgaben wirst du mehr über Objekte, Arrays und veränderliche bzw. unveränderliche Werte erfahren. Du wirst dort ebenfalls mit Beispielen für Variablenbezeichnungen in Großbuchstaben, Kleinbuchstaben oder CamelCase vertraut gemacht.

# --instructions--

Verändere den Code so, dass alle Variablen mit `let` oder `const` deklariert werden. Nutze `let` wenn du willst, dass sich die Variable verändert und nutze `const`, wenn die Variable konstant bleiben soll. Benenne mit `const` deklarierte Variablen um, damit diese gängigen Standards entsprechen. Verändere keine den Variablen zugewiesenen Strings.

# --hints--

`var` sollte in deinem Code nicht vorkommen.

```js
assert.notMatch(code, /var/g);
```

Du solltest `fCC` komplett in Großbuchtsaben schreiben.

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

`FCC` sollte eine konstante Variable sein, die mit `const` deklariert wurde.

```js
assert.match(code, /const\s+FCC/);
```

Der an `FCC` zugewiesene String sollte nicht verändert werden.

```js
assert.equal(FCC, 'freeCodeCamp');
```

`fact` sollte mit `let` deklariert werden.

```js
assert.match(code, /(let\s+fact)/g);
```

`console.log` sollte so verändert werden, dass die Variablen `FCC` und `fact` ausgegeben werden.

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
