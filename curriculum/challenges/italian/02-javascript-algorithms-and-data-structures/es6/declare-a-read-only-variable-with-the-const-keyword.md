---
id: 587d7b87367417b2b2512b41
title: Dichiarare una variabile di sola lettura con la parola chiave const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

La parola chiave `let` non è l'unico nuovo modo per dichiarare le variabili. In ES6, puoi anche dichiarare variabili usando la parola chiave `const`.

`const` ha tutte le fantastiche caratteristiche che ha `let`, con il il valore aggiunto che le variabili dichiarate utilizzando `const` sono di sola lettura. Esse sono un valore costante, il che significa che una volta assegnata una variabile con `const`, non può più essere riassegnata.

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

La console mostrerà un errore a causa della riassegnazione del valore di `FAV_PET`.

Come puoi vedere, cercare di riassegnare una variabile dichiarata con `const` genererà un errore. Dovresti sempre dichiarare le variabili che non vuoi riassegnare usando la parola chiave `const`. Questo aiuta quando nel caso dovessi tentare accidentalmente di riassegnare il valore a una variabile che è destinata a rimanere costante. Una pratica comune quando si dà il nome alle costanti è usare tutte le lettere maiuscole, separando le parole con un underscore.

**Nota:** È pratica comune per gli sviluppatori usare identificatori di variabili a lettere maiuscole per valori immutabili e a lettere minuscole o camelCase per valori mutabili (oggetti e array). In una sfida successiva vedrai un esempio di identificatore di variabile con lettere minuscole utilizzato per un array.

# --instructions--

Modifica il codice in modo che tutte le variabili siano dichiarate utilizzando `let` o `const`. Usa `let` quando vuoi che la variabile possa cambiare e `const` quando vuoi che la variabile rimanga costante. Inoltre, rinomina le variabili dichiarate con `const` per conformarti alle pratiche comuni, il che significa che le costanti dovrebbero essere tutte in maiuscolo.

# --hints--

`var` non dovrebbe esistere nel tuo codice.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE` dovrebbe essere una variabile costante dichiarata con `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

`i` dovrebbe essere dichiarata con `let`.

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

`console.log` dovrebbe essere cambiato per stampare la variabile `SENTENCE`.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
function printManyTimes(str) {

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
```

# --solutions--

```js
function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");
```
