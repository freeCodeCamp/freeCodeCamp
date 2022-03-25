---
id: bd7123c9c549eddfaeb5bdef
title: Usare la notazione a parentesi per trovare il primo carattere in una stringa
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>La notazione a parentesi</dfn> è un modo per ottenere il carattere a un indice specifico all'interno di una stringa.

La maggior parte dei moderni linguaggi di programmazione, come JavaScript, non inizia a contare da 1 come gli esseri umani. Loro iniziano dallo 0. Questo è indicato come indicizzazione <dfn>Zero-based</dfn>.

Ad esempio, il carattere all'indice 0 nella parola `Charles` è `C`. Quindi, se `const firstName = "Charles"`, è possibile ottenere il valore della prima lettera della stringa utilizzando `firstName[0]`.

Esempio:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` dovrebbe avere un valore stringa `C`.

# --instructions--

Usa la notazione parentesi per trovare il primo carattere nella variabile `lastName` e assegnala a `firstLetterOfLastName`.

**Suggerimento:** Prova a guardare l'esempio qui sopra se sei bloccato.

# --hints--

La variabile `firstLetterOfLastName` dovrebbe avere il valore di `L`.

```js
assert(firstLetterOfLastName === 'L');
```

Dovresti usare la notazione a parentesi.

```js
assert(code.match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
