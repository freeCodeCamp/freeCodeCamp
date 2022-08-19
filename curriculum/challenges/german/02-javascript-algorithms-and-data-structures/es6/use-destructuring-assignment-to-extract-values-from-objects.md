---
id: 5cfa550e84205a357704ccb6
title: Verwende die Destrukturierungszuweisung, um Werte aus Objekten zu extrahieren
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>Destrukturierungszuweisung</dfn> ist eine spezielle Syntax, die in ES6 eingeführt wurde, um Werte, die direkt von einem Objekt übernommen werden, sauber zuzuweisen.

Betrachte den folgenden ES5-Code:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` hätte den Wert des Strings `John Doe` und `age` wäre die Zahl `34`.

Hier ist eine entsprechende Zuweisungsanweisung mit der ES6-Destrukturierungssyntax:

```js
const { name, age } = user;
```

Auch hier hätte `name` den Wert des Strings `John Doe` und `age` wäre die Zahl `34`.

Hier werden die Variablen `name` und `age` erstellt und mit den entsprechenden Werten aus dem Objekt `user` belegt. Du kannst sehen, wie viel sauberer das ist.

Du kannst so viele oder so wenige Werte aus dem Objekt extrahieren, wie du willst.

# --instructions--

Ersetze die beiden Zuweisungen durch eine gleichwertige Destrukturierungszuweisung. Es sollte den Variablen `today` und `tomorrow` trotzdem die Werte von `today` und `tomorrow` aus dem Objekt `HIGH_TEMPERATURES` zugewiesen werden.

# --hints--

Du solltest die ES5-Zuweisungssyntax entfernen.

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

Du solltest die Destrukturierung verwenden, um die Variable `today` zu erstellen.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

Du solltest die Destrukturierung verwenden, um die Variable `tomorrow` zu erstellen.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` sollte gleich `77` sein und `tomorrow` sollte gleich `80` sein.

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
