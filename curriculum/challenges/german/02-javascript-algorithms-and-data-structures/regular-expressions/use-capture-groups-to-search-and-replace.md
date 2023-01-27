---
id: 587d7dbb367417b2b2512bab
title: Erfassungsgruppen für das Suchen und Ersetzen verwenden
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

Die Suche ist nützlich. Du kannst die Suche aber noch leistungsfähiger machen, indem du den Text, den du gefunden hast, auch veränderst (oder ersetzt).

Du kannst Text in einem String suchen und ersetzen, indem du `.replace()` auf einen String anwendest. Die Eingabe für `.replace()` ist zunächst das Regex-Muster, nach dem du suchen willst. Der zweite Parameter ist der String, der die Übereinstimmung ersetzen soll, oder eine Funktion, die etwas tut.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

Der `replace`-Aufruf würde den String `The sky is blue.` zurückgeben.

Du kannst auch auf Erfassungsgruppen in dem Ersetzungsstring mit Dollarzeichen (`$`) zugreifen.

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

Der `replace`-Aufruf würde den String `Camp Code` zurückgeben.

# --instructions--

Schreibe einen regulären Ausdruck `fixRegex` mit drei Erfassungsgruppen, der nach jedem Wort in dem String `one two three` sucht. Aktualisiere dann die Variable `replaceText`, um `one two three` durch den String `three two one` zu ersetzen und weise das Ergebnis der Variablen `result` zu. Achte darauf, dass du Erfassungsgruppen in dem Ersetzungsstring mit der Syntax des Dollarzeichens (`$`) verwendest.

# --hints--

Du solltest `.replace()` für das Suchen und Ersetzen verwenden.

```js
assert(code.match(/\.replace\(.*\)/));
```

Dein regulärer Ausdruck sollte den String `one two three` in den String `three two one` ändern.

```js
assert(result === 'three two one');
```

Du solltest die letzte Zeile nicht ändern.

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` sollte mindestens drei Erfassungsgruppen verwenden.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` sollte eingeklammerte Teilmusterstrings verwenden (d.h. der n-te eingeklammerte Teilmusterstring, $n, entspricht der n-ten Erfassungsgruppe).

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```
