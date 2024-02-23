---
id: 587d7db7367417b2b2512b9e
title: Encontrar padrões ao final da string
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

No desafio anterior, você aprendeu a usar o circunflexo para capturar padrões no início de strings. Há também uma maneira de buscar padrões no fim de strings.

Se você colocar um cifrão, `$`, no fim da regex, você pode buscar no fim de strings.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

A primeira chamada a `test` retorna `true` enquanto a segunda retorna `false`.

# --instructions--

Use o cifrão (`$`) para capturar a string `caboose` no fim da string `caboose`.

# --hints--

Você deve usar o cifrão `$` na sua regex para buscar a string `caboose`.

```js
assert(lastRegex.source == 'caboose$');
```

A regex não deve usar nenhuma flag.

```js
assert(lastRegex.flags == '');
```

Você deve capturar `caboose` no fim da string `The last car on a train is the caboose`

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
