---
id: 587d78b2367417b2b2512b0f
title: Rimuovere elementi da un array con pop() e shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

Sia `push()` che `unshift()` hanno metodi corrispondenti che sono quasi funzionalmente opposti: `pop()` e `shift()`. Come forse avrai già indovinato, invece di aggiungere, `pop()` *rimuove* un elemento dalla fine di un array, mentre `shift()` rimuove un elemento dall'inizio. La differenza chiave tra `pop()` e `shift()` e i loro cugini `push()` e `unshift()`, è che nessuno dei due metodi richiede parametri, e ognuno permette che l'array venga modificato di un solo elemento per volta.

Diamo un'occhiata:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` avrà il valore `['whats up?', 'hello']`.

```js
greetings.shift();
```

`greetings` avrà il valore `['hello']`.

Con entrambi i metodi possiamo anche restituire il valore dell'elemento rimosso in questo modo:

```js
let popped = greetings.pop();
```

`greetings` avrà il valore `[]` e `popped` avrà il valore `hello`.

# --instructions--

Abbiamo definito una funzione, `popShift`, che prende un array come argomento e restituisce un nuovo array. Modifica la funzione, usando `pop()` e `shift()`, per rimuovere il primo e l'ultimo elemento dell'array passato come argomento, e assegna gli elementi rimossi alle loro variabili corrispondenti, in modo che l'array restituito contenga i loro valori.

# --hints--

`popShift(["challenge", "is", "not", "complete"])` dovrebbe restituire `["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

La funzione `popShift` dovrebbe utilizzare il metodo `pop()`

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

La funzione `popShift` dovrebbe utilizzare il metodo `shift()`

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```
