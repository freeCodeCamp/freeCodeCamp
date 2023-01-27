---
id: 5a2efd662fb457916e1fe604
title: Iterare con i cicli Do...While in Javascript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

Il prossimo tipo di ciclo che vedremo si chiama `do...while`. Si chiama ciclo `do... while` perché prima eseguirà (`do`) un passaggio del codice all'interno del ciclo indipendentemente dalle condizioni, e poi continuerà ad eseguire il ciclo finché (`while`) la condizione specificata avrà valore `true`.

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

L'esempio sopra si comporta come altri tipi di cicli, e l'array risultante sarà `[0, 1, 2, 3, 4]`. Tuttavia, ciò che rende il `do...while` diverso da altri cicli è come si comporta quando la condizione fallisce al primo controllo. Vediamolo in azione. Ecco un loop `while` regolare che esegue il codice nel loop finché `i < 5`:

```js
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

In questo esempio, inizializziamo il valore di `ourArray` a un array vuoto e il valore di `i` a 5. Quando eseguiamo il ciclo `while`, la condizione vale `false` perché `i` non è inferiore a 5, e in questo modo non eseguiremo il codice all'interno del ciclo. Il risultato è che `ourArray` finirà per non avere valori aggiunti, e sarà ancora simile a `[]` quando tutto il codice nell'esempio precedente sarà stato completato. Ora, dai un'occhiata a un ciclo `do...while`:

```js
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

In questo caso, inizializziamo il valore di `i` a 5, proprio come abbiamo fatto con il ciclo `while`. Quando arriviamo alla linea successiva, non c'è alcuna condizione da valutare, così passiamo al codice all'interno delle parentesi graffe e lo eseguiamo. Aggiungeremo un singolo elemento all'array e quindi incrementeremo `i` prima di arrivare al controllo delle condizioni. Quando finalmente valutiamo la condizione `i < 5` sull'ultima riga, vediamo che `i` è ora 6, che fallisce il controllo condizionale, quindi usciamo dal ciclo e terminiamo l'esecuzione. Alla fine dell'esempio visto sopra, il valore di `ourArray` è `[5]`. Essenzialmente, un ciclo `do...while` assicura che il codice all'interno del ciclo venga eseguito almeno una volta. Proviamo ad ottenere un ciclo `do...while` che ci permetta di inserire dei valori in un array.

# --instructions--

Cambia il ciclo `while` nel codice con un ciclo `do...while` in modo che il ciclo inserisca solo il numero `10` in `myArray`, e `i` sia uguale a `11` una volta che il codice sarà terminato.

# --hints--

Dovresti usare un ciclo `do...while` per questo esercizio.

```js
assert(code.match(/do/g));
```

`myArray` dovrebbe essere uguale a `[10]`.

```js
assert.deepEqual(myArray, [10]);
```

`i` dovrebbe essere uguale a `11`

```js
assert.equal(i, 11);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
```

# --solutions--

```js
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```
