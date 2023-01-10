---
id: 599a789b454f2bbd91a3ff4d
title: Confrontare diversi valori
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

Nelle ultime due sfide, abbiamo imparato a conoscere l'operatore di uguaglianza (`==`) e l'operatore di uguaglianza stretta (`===`). Facciamo un rapido ripasso usando ancora un po' questi operatori.

Se i valori confrontati non sono dello stesso tipo, l'operatore di uguaglianza eseguirà una conversione di tipo e quindi valuterà i valori. L'operatore di uguaglianza stretta invece confronterà sia il tipo di dati che il valore così com'è, senza convertire un tipo in un altro.

**Esempi**

`3 == '3'` restituisce `true` perché JavaScript esegue la conversione di tipo da string a number. `3 === '3'` restituisce `false` perché i tipi sono diversi e la conversione di tipo non viene eseguita.

**Nota:** In JavaScript, è possibile determinare il tipo di una variabile o di un valore con l'operatore `typeof`, come segue:

```js
typeof 3
typeof '3'
```

`typeof 3` restituisce la stringa `number`e `typeof '3'` restituisce la stringa `string`.

# --instructions--

La funzione `compareEquality` nell'editor confronta due valori utilizzando l'operatore di uguaglianza. Modificare la funzione in modo che restituisca la stringa `Equal` solo quando i valori sono strettamente uguali.

# --hints--

`compareEquality(10, "10")` dovrebbe restituire la stringa `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` dovrebbe restituire la stringa `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

Dovresti usare l'operatore `===`

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
