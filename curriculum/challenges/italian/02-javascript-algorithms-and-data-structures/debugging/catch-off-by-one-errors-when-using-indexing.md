---
id: 587d7b86367417b2b2512b3b
title: Trovare gli errori "fuori di uno" nell'indicizzazione
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

Gli errori <dfn>fuori di uno</dfn> (talvolta chiamati OBOE, "Off by one errors") si presentano quando si sta tentando di puntare ad un indice specifico di una stringa o di un array (per tagliare o accedere a un segmento), o quando si itera sui loro indici. L'indicizzazione JavaScript inizia da zero, non da uno, il che significa che l'ultimo indice è sempre inferiore di uno rispetto alla posizione dell'elemento. Se si tenta di accedere a un indice pari alla lunghezza, il programma potrebbe lanciare un errore di riferimento "index out of range" (indice fuori campo) o scrivere `undefined`.

Quando si utilizzano metodi di stringa o di array che prendono intervalli di indici come argomenti, è utile leggerne la documentazione e capire se sono inclusivi (l'elemento all'indice dato fa parte di ciò che è restituito) o no. Ecco alcuni esempi di errori fuori di uno:

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
```

Qui il primo esempio itera una volta di troppo, e il secondo itera una volta troppo poco (mancando il primo indice, 0). Il terzo esempio è corretto.

# --instructions--

Correggi i due errori di indicizzazione nella funzione seguente così che tutti i numeri da 1 a 5 vengano visualizzati nella console.

# --hints--

Il tuo codice dovrebbe impostare la condizione iniziale del ciclo in modo che inizi al primo indice.

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

Il tuo codice dovrebbe aggiustare la condizione iniziale del ciclo in modo che l'indice inizi da 0.

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

Il tuo codice dovrebbe impostare la condizione di chiusura del ciclo in modo che si interrompa all'ultimo indice.

```js
assert(code.match(/i\s*<\s*len\s*;|i\s*<=\s*len\s*-\s*1\s*;/g).length == 1);
```

Il tuo codice dovrebbe fissare la condizione di chiusura del ciclo in modo che si fermi a un passo dalla lunghezza.

```js
assert(!code.match(/i\s*?<=\s*?len;/g));
```

# --seed--

## --seed-contents--

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
```

# --solutions--

```js
function countToFive() {
 let firstFive = "12345";
 let len = firstFive.length;
 // Only change code below this line
 for (let i = 0; i < len; i++) {
 // Only change code above this line
   console.log(firstFive[i]);
 }
}

countToFive();
```
