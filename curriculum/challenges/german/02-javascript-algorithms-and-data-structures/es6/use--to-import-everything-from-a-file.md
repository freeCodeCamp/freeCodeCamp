---
id: 587d7b8c367417b2b2512b57
title: Verwende *, um alles aus einer Datei zu importieren
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

Angenommen, du hast eine Datei und möchtest deren gesamten Inhalt in die aktuelle Datei importieren. Dies kann mit der `import * as` Syntax erledigt werden. Hier ist ein Beispiel, bei dem der Inhalt einer Datei namens `math_functions.js` in eine Datei im selben Verzeichnis importiert wird:

```js
import * as myMathModule from "./math_functions.js";
```

Die obige Anweisung `import` erzeugt ein Objekt mit dem Namen `myMathModule`. Dies ist nur ein Variablenname, du kannst es beliebig benennen. Das Objekt enthält alle Exporte aus `math_functions.js`, sodass du auf die Funktionen wie auf jede andere Objekteigenschaft zugreifen kannst. Hier erfährst du, wie du die importierten Funktionen `add` und `subtract` verwenden kannst:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

Der Code in dieser Datei benötigt den Inhalt der Datei: `string_functions.js`, die sich in demselben Verzeichnis wie die aktuelle Datei befindet. Verwende die Syntax `import * as`, um alles aus der Datei in ein Objekt namens `stringFunctions` zu importieren.

# --hints--

Dein Code sollte die Syntax `import * as` korrekt verwenden.

```js
assert(
  code.match(
    /import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// add code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
