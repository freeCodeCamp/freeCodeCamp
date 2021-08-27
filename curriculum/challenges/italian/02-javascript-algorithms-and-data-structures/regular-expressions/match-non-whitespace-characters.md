---
id: 587d7db9367417b2b2512ba4
title: Riconoscere i caratteri diversi dagli spazi
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

Hai imparato come cercare spazi bianchi usando `\s`, con una `s` minuscola. Puoi anche cercare tutto tranne gli spazi bianchi.

Cerca caratteri non bianchi usando `\S`, che è una `s` maiuscola. Questo pattern non riconoscerà lo spazio bianco, i ritorni a capo, le tabulazioni, i caratteri di avanzamento carrello e di nuova linea. Puoi pensare che sia simile alla classe di caratteri `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

Il valore restituito dal metodo `.length` sarà `32`.

# --instructions--

Cambia l'espressione regolare `countNonWhiteSpace` in modo che cerchi caratteri non bianchi multipli in una stringa.

# --hints--

La tua espressione regolare dovrebbe usare il flag global.

```js
assert(countNonWhiteSpace.global);
```

La tua espressione regolare dovrebbe usare il carattere abbreviato `\S` per riconoscere tutti i caratteri non bianchi.

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

La tua espressione regolare dovrebbe trovare 35 non-spazi nella stringa `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

La tua espressione regolare dovrebbe trovare 23 non-spazi nella stringa `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

La tua espressione regolare dovrebbe trovare 21 non-spazi nella stringa `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
