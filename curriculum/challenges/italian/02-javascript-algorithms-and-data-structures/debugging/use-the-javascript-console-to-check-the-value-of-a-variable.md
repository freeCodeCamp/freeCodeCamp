---
id: 587d7b83367417b2b2512b33
title: Usare la console JavaScript per controllare il valore di una variabile
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

Sia Chrome che Firefox hanno ottime console JavaScript, note anche come DevTools (strumenti per sviluppatori), per effettuare il debugging del tuo JavaScript.

Puoi trovare gli Strumenti per sviluppatori nel menu di Chrome o la Web Console nel menu di Firefox. Se stai utilizzando un browser diverso, o un telefono cellulare, ti consigliamo vivamente di passare a Firefox o Chrome su desktop.

Il metodo `console.log()`, che "stampa" sulla console l'output di quello che c'è all'interno delle sue parentesi, sarà probabilmente lo strumento di debugging più utile. Posizionarlo in punti strategici nel codice può mostrarti i valori intermedi delle variabili. È buona pratica avere un'idea di cosa dovrebbe essere l'output prima di guardare quello che è. Avere punti di controllo per vedere lo stato dei tuoi calcoli lungo i passaggi del codice ti aiuterà a individuare il problema.

Ecco un esempio per stampare la stringa `Hello world!` sulla console:

```js
console.log('Hello world!');
```

# --instructions--

Utilizza il metodo `console.log()` per visualizzare il valore della variabile `a` dove annotato nel codice.

# --hints--

Il tuo codice dovrebbe utilizzare `console.log()` per controllare il valore della variabile `a`.

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```
