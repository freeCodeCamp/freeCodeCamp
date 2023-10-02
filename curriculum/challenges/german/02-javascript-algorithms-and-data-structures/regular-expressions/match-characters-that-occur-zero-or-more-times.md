---
id: 587d7db6367417b2b2512b9a
title: Finde Zeichen, die null oder mehr Mal vorkommen
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

Bei der letzten Aufgabe wurde das Pluszeichen `+` verwendet, um nach Zeichen zu suchen, die ein oder mehrere Male vorkommen. Es gibt auch eine Option, die Zeichen findet, die null oder mehr Mal vorkommen.

Das Zeichen dafür ist das Sternchen oder der Stern: `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

In dieser Reihenfolge würden die drei `match`-Aufrufe die Werte `["goooooooo"]`, `["g"]` und `null` zurückgeben.

# --instructions--

Für diese Aufgabe wurde `chewieQuote` hinter den Kulissen als String `Aaaaaaaaaaaaaaaarrrgh!` initialisiert. Erstelle nun einen regulären Ausdruck `chewieRegex`, der das `*`-Zeichen verwendet, um ein großgeschriebenes `A`-Zeichen, das unmittelbar von null oder mehr kleingeschriebenen `a`-Zeichen gefolgt wird, in `chewieQuote` zu finden. Dein regulärer Ausdruck braucht keine Flags oder Zeichenklassen und er sollte mit keinem der anderen Zitate übereinstimmen.

# --hints--

Dein regulärer Ausdruck `chewieRegex` sollte das Zeichen `*` verwenden, um auf null oder mehr `a`-Zeichen zu passen.

```js
assert(/\*/.test(chewieRegex.source));
```

Dein regulärer Ausdruck sollte auf den String `A` in `chewieQuote` passen.

```js
assert(result[0][0] === 'A');
```

Dein regulärer Ausdruck sollte auf den String `Aaaaaaaaaaaaaaaa` in `chewieQuote` passen.

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

Dein regulärer Ausdruck `chewieRegex` sollte 16 Zeichen in `chewieQuote` finden.

```js
assert(result[0].length === 16);
```

Dein regulärer Ausdruck sollte auf keine Zeichen in dem String `He made a fair move. Screaming about it can't help you.` passen.

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

Dein regulärer Ausdruck sollte auf kein Zeichen in dem String `Let him have it. It's not wise to upset a Wookiee.` passen.

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
