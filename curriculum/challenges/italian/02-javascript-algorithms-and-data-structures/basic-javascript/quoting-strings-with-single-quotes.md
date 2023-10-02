---
id: 56533eb9ac21ba0edf2244b4
title: Definire le stringhe con virgolette singole
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

I valori <dfn>Stringa</dfn> in JavaScript possono essere scritti con virgolette singole o doppie, purché si inizi e si termini con lo stesso tipo di virgolette. A differenza di alcuni altri linguaggi di programmazione, le virgolette singole e doppie funzionano allo stesso modo in JavaScript.

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

Il motivo per cui potresti voler usare un tipo di virgolette piuttosto dell'altro è se volessi usare entrambi in una stringa. Questo potrebbe accadere volendo salvare una conversazione in una stringa e avendo la conversazione tra virgolette. Un altro uso sarebbe salvare un tag `<a>` con vari attributi tra virgolette, tutto all'interno di una stringa.

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

Tuttavia, questo diventa un problema se è necessario utilizzare le virgolette più esterne al suo interno. Ricorda, una stringa ha lo stesso tipo di virgolette all'inizio e alla fine. Ma se hai la stessa virgoletta da qualche parte nel mezzo, la stringa si fermerà anzitempo e lancerà un errore.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

Qui `badStr` genererà un errore.

Nel <dfn>goodStr</dfn> di cui sopra, puoi usare entrambe le virgolette in modo sicuro utilizzando la barra rovesciata `\` come carattere di escape.

**Nota:** La barra rovesciata `\` non dovrebbe essere confusa con la barra obliqua `/`. Non fanno la stessa cosa.

# --instructions--

Cambia la stringa fornita in una stringa con virgolette singole all'inizio e alla fine e senza caratteri di escape.

In questo momento, il tag `<a>` nella stringa utilizza virgolette doppie dappertutto. È necessario cambiare le virgolette esterne in virgolette singole in modo da poter rimuovere i caratteri di escape.

# --hints--

Dovresti rimuovere tutte le barre rovesciate (`\`).

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

Dovresti avere due virgolette singole `'` e quattro virgolette doppie `"`.

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
