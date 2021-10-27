---
id: cf1111c1c11feddfaeb5bdef
title: Iterare con i cicli For in Javascript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

È possibile eseguire lo stesso codice più volte utilizzando un ciclo.

Il tipo più comune di ciclo JavaScript è chiamato un ciclo `for` perché esso viene eseguito per ("for") un numero specifico di volte.

I cicli For sono dichiarati con tre espressioni facoltative separate da punti e virgola:

`for (a; b; c)`, dove `a` è l'istruzione di inizializzazione, `b` è la condizione, e `c` è l'espressione finale.

L'istruzione di inizializzazione viene eseguita una sola volta prima dell'inizio del ciclo. È tipicamente usata per definire e configurare la variabile del ciclo.

La condizione viene valutata all'inizio di ogni iterazione del ciclo, e continuerà finché essa vale `true`. Quando la condizione è `false` all'inizio dell'iterazione, il ciclo terminerà l'esecuzione. Ciò significa che se la condizione inizia come false, il tuo ciclo non verrà mai eseguito.

L'espressione finale è eseguita alla fine di ogni iterazione del ciclo, prima del prossimo controllo delle condizioni e di solito viene utilizzata per aumentare o diminuire il contatore del ciclo.

Nell'esempio seguente inizializziamo con `i = 0` e iteriamo finché la nostra condizione `i < 5` è vera. Incrementeremo `i` di `1` ad ogni iterazione del ciclo con `i++` come espressione finale.

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` ha ora il valore `[0, 1, 2, 3, 4]`.

# --instructions--

Usa un ciclo `for` per inserire i valori da 1 a 5 in `myArray`.

# --hints--

Dovresti usare un ciclo `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` dovrebbe essere uguale a `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --after-user-code--

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
```
