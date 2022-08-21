---
id: 587d7db7367417b2b2512b9e
title: Abgleich von String-Mustern am Ende
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

In der letzten Aufgabe hast du gelernt, das Caret-Zeichen zu verwenden, um nach Mustern am Anfang von Strings zu suchen. Es gibt auch eine Möglichkeit, nach Mustern am Ende von Strings zu suchen.

Du kannst das Ende von Strings suchen, indem du das Dollarzeichen `$` am Ende des regulären Ausdrucks verwendest.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

Der erste `test`-Aufruf würde `true` zurückgeben, während der zweite `false` zurückgeben würde.

# --instructions--

Verwende das Ankerzeichen (`$`), um den String `caboose` am Ende des Strings `caboose` zu finden.

# --hints--

Du solltest nach `caboose` mit dem Dollarzeichen `$` als Anker in deinem regulären Ausdruck suchen.

```js
assert(lastRegex.source == 'caboose$');
```

Dein regulärer Ausdruck sollte keine Flags verwenden.

```js
assert(lastRegex.flags == '');
```

Du solltest `caboose` am Ende des Strings `The last car on a train is the caboose` finden.

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
