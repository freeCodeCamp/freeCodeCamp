---
id: 587d7db7367417b2b2512b9e
title: Riconoscere i pattern di fine stringa
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

Nell'ultima sfida, hai imparato a usare il carattere del cursore per cercare pattern all'inizio delle stringhe. C'è anche un modo per cercare i pattern alla fine delle stringhe.

È possibile cercare la fine delle stringhe utilizzando il carattere dollaro `$` alla fine dell'espressione regolare.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

La prima chiamata a `test` restituirà `true`, mentre la seconda restituirà `false`.

# --instructions--

Utilizza il carattere di ancoraggio (`$`) per riconoscere la stringa `caboose` alla fine della stringa `caboose`.

# --hints--

Dovresti cercare `caboose` con l'ancora dollaro `$` nella tua espressione regolare.

```js
assert(lastRegex.source == 'caboose$');
```

La tua espressione regolare non dovrebbe usare alcun flag.

```js
assert(lastRegex.flags == '');
```

Dovresti riconoscere `caboose` alla fine della stringa `The last car on a train is the caboose`

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
