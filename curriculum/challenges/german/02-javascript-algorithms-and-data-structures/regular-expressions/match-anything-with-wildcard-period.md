---
id: 587d7db5367417b2b2512b94
title: Alles mit der Punkt-Wildcard abgleichen
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

Manchmal wirst du die genauen Zeichen in deinen Mustern nicht kennen (oder musst sie nicht kennen). An alle Wörter zu denken, die z. B. mit einem Schreibfehler übereinstimmen, würde sehr lange dauern. Zum Glück kannst du mit dem Wildcardzeichen (Platzhalter) Zeit sparen: `.` (Punkt).

Das Wildcardzeichen `.` passt auf ein beliebiges Zeichen. Die Wildcard wird auch `dot` und `period` genannt. Du kannst das Wildcardzeichen genau wie jedes andere Zeichen in dem Regex verwenden. Wenn du zum Beispiel `hug`, `huh`, `hut` und `hum` finden möchtest, kannst du den Regex `/hu./` verwenden, um alle vier Wörter zu finden.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

Diese beiden `test`-Aufrufe würden `true` zurückgeben.

# --instructions--

Ergänze den Regex `unRegex` so, dass er auf die Strings `run`, `sun`, `fun`, `pun`, `nun`, und `bun` zutrifft. Dein Regex sollte das Wildcardzeichen verwenden.

# --hints--

Du solltest die Methode `.test()` verwenden.

```js
assert(code.match(/\.test\(.*\)/));
```

Du solltest das Wildcardzeichen in deinem Regex `unRegex` verwenden.

```js
assert(/\./.test(unRegex.source));
```

Dein Regex `unRegex` sollte mit `run` in dem String `Let us go on a run.` übereinstimmen.

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

Dein Regex `unRegex` sollte mit `sun` in dem String `The sun is out today.` übereinstimmen.

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

Dein Regex `unRegex` sollte mit `fun` in dem String `Coding is a lot of fun.` übereinstimmen.

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

Dein Regex `unRegex` sollte mit `pun` in dem String `Seven days without a pun makes one weak.` übereinstimmen.

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

Dein Regex `unRegex` sollte mit `nun` in dem String `One takes a vow to be a nun.` übereinstimmen.

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

Dein Regex `unRegex` sollte mit `bun` in dem String `She got fired from the hot dog stand for putting her hair in a bun.` übereinstimmen.

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

Dein Regex `unRegex` sollte nicht mit dem String `There is a bug in my code.` übereinstimmen.

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

Dein Regex `unRegex` sollte nicht mit dem String `Catch me if you can.` übereinstimmen.

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
