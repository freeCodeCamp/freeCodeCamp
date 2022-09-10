---
id: 587d7b83367417b2b2512b37
title: Die Unterschiede zwischen der freeCodeCamp- und der Browser-Konsole verstehen
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Du hast vielleicht bemerkt, dass einige Aufgaben im freeCodeCamp eine eigene Konsole enthalten. Diese Konsole verhält sich ein wenig anders als die Browser-Konsole.

Es gibt viele Methoden, um mit `console` Nachrichten auszugeben. `log`, `warn`, und `clear`, um nur einige zu nennen. Die freeCodeCamp-Konsole gibt nur `log`-Meldungen aus, während die Browser-Konsole alle Meldungen ausgibt. Wenn du Änderungen an deinem Code vornimmst, wird er automatisch ausgeführt und die Protokolle werden angezeigt. Die freeCodeCamp-Konsole wird dann jedes Mal geleert, wenn dein Code ausgeführt wird.

# --instructions--

Öffne zunächst deine Browserkonsole, damit du die Logs sehen kannst. Um das zu tun, kannst du in den meisten Browsern mit der rechten Maustaste auf die freeCodeCamp-Navigationsleiste oben klicken und `inspect` (Untersuchen) anklicken. Dann suche in dem Fenster, das sich öffnet, den Reiter `console` (Konsole).

Verwende danach `console.log`, um die Variable `output` zu protokollieren. Sieh dir die beiden Konsolen an, um das Protokoll zu sehen. Verwende schließlich `console.clear` nach deinem Log, um die Browserkonsole zu löschen. Sieh dir den Unterschied zwischen den beiden Konsolen an.

# --hints--

Du solltest `console.log()` verwenden, um die Variable `output` auszugeben.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

Du solltest `console.clear()` verwenden, um die Browserkonsole zu löschen.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

Du solltest die Konsole nach deinem Log löschen.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
