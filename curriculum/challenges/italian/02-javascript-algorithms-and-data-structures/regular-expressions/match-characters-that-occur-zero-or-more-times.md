---
id: 587d7db6367417b2b2512b9a
title: Riconoscere i caratteri che compaiono zero o più volte
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

L'ultima sfida ha usato il segno più `+` per cercare caratteri che compaiono una o più volte. C'è anche un'opzione che riconosce i caratteri che sono presenti zero o più volte.

Il simbolo per farlo è l'asterisco: `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

In ordine, le tre chiamate a `match` restituiranno i valori `["goooooooo"]`, `["g"]`, e `null`.

# --instructions--

Per questa sfida, `chewieQuote` è stato inizializzato con la stringa `Aaaaaaaaaaaaaaaarrrgh!` dietro le quinte. Crea un'espressione regolare `chewieRegex` che utilizza il carattere `*` per riconoscere un carattere `A` immediatamente seguito da zero o più caratteri `a` minuscola in `chewieQuote`. La tua espressione regolare non avrà bisogno di flag o classi di caratteri, e non dovrebbe riconoscere nessuna delle altre frasi.

# --hints--

La tua espressione regolare `chewieRegex` dovrebbe usare il carattere `*` per riconoscere zero o più caratteri `a`.

```js
assert(/\*/.test(chewieRegex.source));
```

La tua espressione regolare dovrebbe riconoscere la stringa `A` in `chewieQuote`.

```js
assert(result[0][0] === 'A');
```

La tua espressione regolare dovrebbe riconoscdre la stringa `Aaaaaaaaaaaaaaaa` in `chewieQuote`.

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

La tua espressione regolare `chewieRegex` dovrebbe riconoscere 16 caratteri in `chewieQuote`.

```js
assert(result[0].length === 16);
```

Il tuo regex non dovrebbe trovare nessun carattere nella stringa `He made a fair move. Screaming about it can't help you.`

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

Il tuo regex non dovrebbe corrispondere a nessun carattere nella stringa `Let him have it. It's not wise to upset a Wookiee.`

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
