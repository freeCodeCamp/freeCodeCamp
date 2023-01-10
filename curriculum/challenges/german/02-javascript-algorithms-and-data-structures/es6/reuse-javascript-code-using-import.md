---
id: 587d7b8c367417b2b2512b55
title: Verwende JavaScript-Code mit import wieder
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

Mit `import` kannst du auswählen, welche Teile einer Datei oder eines Moduls du laden möchtest. In der vorherigen Aufgabe haben die Beispiele `add` aus der Datei `math_functions.js` exportiert. Hier erfährst du, wie du sie importieren und in einer anderen Datei verwenden kannst:

```js
import { add } from './math_functions.js';
```

`import` findet `add` in `math_functions.js`, und importiert nur diese Funktion, damit du sie verwenden kannst, und ignoriert den Rest. Das `./` sagt dem Import, dass er nach der Datei `math_functions.js` im gleichen Ordner wie die aktuelle Datei suchen soll. Der relative Dateipfad (`./`) und die Dateierweiterung (`.js`) sind erforderlich, wenn du auf diese Weise importierst.

Du kannst mehr als ein Element aus der Datei importieren, indem du sie in der Anweisung `import` wie folgt hinzufügst:

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

Füge die entsprechende Anweisung `import` hinzu, die es der aktuellen Datei ermöglicht, die Funktionen `uppercaseString` und `lowercaseString` zu verwenden, die du in der vorherigen Lektion exportiert hast. Diese Funktionen befinden sich in einer Datei namens `string_functions.js`, die sich im gleichen Verzeichnis wie die aktuelle Datei befindet.

# --hints--

Du solltest `uppercaseString` korrekt importieren.

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

Du solltest `lowercaseString` korrekt importieren.

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
