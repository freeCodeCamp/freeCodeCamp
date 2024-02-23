---
id: bd7123c9c441eddfaeb4bdef
title: Commentare il codice JavaScript
challengeType: 1
removeComments: false
videoUrl: 'https://scrimba.com/c/c7ynnTp'
forumTopicId: 16783
dashedName: comment-your-javascript-code
---

# --description--

I commenti sono linee di codice che JavaScript ignora intenzionalmente. Essi sono un ottimo modo per lasciare delle note a te stesso e ad altre persone che in seguito avranno bisogno di capire cosa fa quel codice.

Ci sono due modi per scrivere commenti in JavaScript:

Usando `//` dirai a JavaScript di ignorare il resto del testo sulla riga corrente. Questo è un commento in linea:

```js
// This is an in-line comment.
```

Puoi fare un commento multi-linea iniziando con `/*` e terminando con `*/`. Questo è un commento multi-linea:

```js
/* This is a
multi-line comment */
```

**NOTA:** Quando scrivi codice, dovresti aggiungere regolarmente dei commenti per chiarire la funzione di parti del tuo codice. Un buon commento può aiutare a comunicare l'intento del tuo codice, sia agli altri *che* a te stesso in futuro.

# --instructions--

Prova a creare un commento di ogni tipo.

# --hints--

Dovresti creare un commento in stile `//` che contenga almeno cinque lettere.

```js
assert(code.match(/(\/\/)...../g));
```

Dovresti creare un commento in stile `/* */` che contenga almeno cinque lettere.

```js
assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
// Fake Comment
/* Another Comment */
```
