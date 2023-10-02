---
id: 587d7db8367417b2b2512ba1
title: Riconoscere tutti i caratteri non numerici
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

L'ultima sfida ha mostrato come cercare cifre usando la scorciatoia `\d` con una `d` minuscola. Puoi anche cercare dei caratteri non numerici usando una scorciatoia simile che invece sfrutta una `D` maiuscola.

La scorciatoia per cercare caratteri non numerici è `\D`. Questa corrisponde alla classe di caratteri `[^0-9]`, che cerca un singolo carattere che non sia un numero compreso tra zero e nove.

# --instructions--

Usa la classe di caratteri abbreviata `\D` per contare quanti caratteri non numerici sono presenti nei titoli dei film.

# --hints--

La tua espressione regolare dovrebbe usare il carattere scorciatoia per riconoscere caratteri non numerici

```js
assert(/\\D/.test(noNumRegex.source));
```

La tua espressione regolare dovrebbe usare il flag global.

```js
assert(noNumRegex.global);
```

La tua espressione regolare non dovrebbe trovare caratteri non numerici nella stringa `9`.

```js
assert('9'.match(noNumRegex) == null);
```

La tua espressione regolare dovrebbe trovare 6 caratteri non numerici nella stringa `Catch 22`.

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

La tua espressione regolare dovrebbe trovare 11 caratteri non numerici nella stringa `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

La tua espressione regolare dovrebbe trovare 15 caratteri non numerici nella stringa `One, Two, Three`.

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

La tua espressione regolare dovrebbe trovare 12 caratteri non numerici nella stringa `21 Jump Street`.

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

La tua espressione regolare dovrebbe trovare 17 caratteri non numerici nella stringa `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
