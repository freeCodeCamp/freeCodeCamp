---
id: 587d7b85367417b2b2512b39
title: Scoprire la mancanza di parentesi aperte o chiuse dopo la chiamata di una funzione
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

Quando una funzione o un metodo non prende alcun argomento, potresti dimenticare di includere le parentesi (vuote) di apertura e chiusura quando la chiami. Spesso il risultato di una chiamata di funzione viene salvato in una variabile per altri utilizzi nel tuo codice. Questo errore può essere rilevato scrivendo sulla console i valori delle variabili (o i loro tipi) e vedendo che uno è impostato su un riferimento a una funzione, invece che sul valore che ci aspettiamo vanga restituito dalla funzione.

Le variabili nell'esempio seguente sono diverse:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

Qui `varOne` è la funzione `myFunction` e `varTwo` è la stringa `You rock!`.

# --instructions--

Correggi il codice in modo che la variabile `result` sia impostata al valore restituito dalla funzione `getNine`.

# --hints--

Il tuo codice dovrebbe correggere la variabile `result` in modo da impostarla sul numero che la funzione `getNine` restituisce.

```js
assert(result == 9);
```

Il tuo codice dovrebbe chiamare la funzione `getNine`.

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
