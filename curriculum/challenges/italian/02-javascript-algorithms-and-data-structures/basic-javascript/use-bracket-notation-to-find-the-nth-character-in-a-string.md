---
id: bd7123c9c450eddfaeb5bdef
title: Usare la notazione parentesi per trovare l'n-esimo carattere in una stringa
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

Puoi usare <dfn>la notazione a parentesi</dfn> anche per ottenere il carattere in altre posizioni all'interno di una stringa.

Ricorda che i computer iniziano a contare da `0`, quindi il primo carattere è in realtà il carattere zero.

Esempio:

```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` dovrebbe acere un valore stringa `d`.

# --instructions--

Cerchiamo di impostare `thirdLetterOfLastName` per eguagliare la terza lettera della variabile `lastName` usando la notazione parentesi.

**Suggerimento:** Prova a guardare l'esempio qui sopra se ti blocchi.

# --hints--

La variabile `thirdLetterOfLastName` dovrebbe avere il valore di `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

Dovresti usare la notazione a parentesi.

```js
assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
```
