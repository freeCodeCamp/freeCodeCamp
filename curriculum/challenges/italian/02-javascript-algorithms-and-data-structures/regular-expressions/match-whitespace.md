---
id: 587d7db8367417b2b2512ba3
title: Riconoscere gli spazi bianchi
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

Le sfide finora hanno riguardato il riconoscimento delle lettere dell'alfabeto e dei numeri. Puoi anche riconoscere lo spazio bianco o gli spazi tra le lettere.

Puoi cercare spazi bianchi usando `\s`, che è una `s` minuscola. Questo pattern non coincide solo con lo spazio bianco, ma anche con il ritorno a capo, la tabulazione, il ritorno carrello e i caratteri di nuova riga. Potresti pensarlo simile alla classe di caratteri `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

Questa chiamata a `match` restituirà `[" ", " "]`.
# --instructions--

Cambia l'espressione regolare `countWhiteSpace` in modo da cercare spazi bianchi multipli in una stringa.

# --hints--

La tua espressione regolare dovrebbe usare il flag global.

```js
assert(countWhiteSpace.global);
```

La tua espressione regolare dovrebbe usare il carattere abbreviato `\s` per abbinare tutti i caratteri di spazio bianco.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

La tua espressione regolare dovrebbe trovare otto spazi nella stringa `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

La tua espressione regolare dovrebbe trovare tre spazi nella stringa `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

La tua espressione finale non dovrebbe trovare spazi nella stringa `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
