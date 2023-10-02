---
id: 587d7dba367417b2b2512ba8
title: Riconoscere tutto o niente
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

A volte i pattern che vuoi cercare possono avere parti che possono esistere o meno. Del resto può essere importante verificarle comunque.

È possibile specificare la possibile esistenza di un elemento con un punto interrogativo, `?`. Questo controlla la presenza di zero o di uno dell'elemento precedente. Puoi pensare a questo simbolo come a un modo per dire che l'elemento precedente è opzionale.

Ad esempio, ci sono lievi differenze in inglese americano e britannico e si può utilizzare il punto interrogativo per trovare entrambe le ortografie.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

Entrambi gli usi del metodo `test` restituiranno `true`.

# --instructions--

Cambia l'espressione regolare `favRegex` in modo da riconoscere sia la versione inglese Americana (`favorite`) che quella Britannica (`favourite`) della parola.

# --hints--

La tua espressione regolare dovrebbe usare il simbolo opzionale `?`.

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

La tua espressione regolare dovrebbe riconoscere la stringa `favorite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `favourite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `fav`

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
