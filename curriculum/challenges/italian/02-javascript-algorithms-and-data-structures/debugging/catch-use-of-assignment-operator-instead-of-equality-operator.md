---
id: 587d7b85367417b2b2512b38
title: Intercettare l'uso dell'operatore di assegnazione anziché dell'operatore di uguaglianza
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

In JavaScript, programmi con ramificazioni, ad esempio quelli che fanno cose diverse se certi presupposti sono rispettati, si basano sulle condizioni `if`, `else if`, e `else`. La condizione a volte consiste nel verificare se un risultato è uguale a un valore.

Questa logica si può esprimere (in inglese e italiano, almeno) come "se x è uguale a y, allora ..." che può letteralmente tradursi in codice utilizzando l'`=` o operatore di assegnazione. Questo porta a un controllo del flusso inatteso nel tuo programma.

Come indicato nelle sfide precedenti, l'operatore di assegnazione (`=`) in JavaScript assegna un valore al nome di una variabile. E gli operatori `==` e `===` controllano l'uguaglianza (il triplo `===` controlla l'uguaglianza stretta, cioè sia il valore che il tipo devono essere uguali).

Il codice qui sotto assegna a `x` il valore 2, che viene valutato come `true`. Quasi ogni valore da solo in JavaScript viene considerato `true`, eccetto quelli che sono conosciuti come i valori "falsy": `false`, `0`, `""` (una stringa vuota), `NaN`, `undefined` e `null`.

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

In questo esempio, il blocco di codice all'interno dell'istruzione `if` verrà eseguito per qualsiasi valore di `y`, a meno che `y` non sia falsy. Il blocco `else`, che ci aspettiamo venga eseguito qui, non sarà effettivamente eseguito.

# --instructions--

Correggi la condizione in modo che il programma esegua il ramo giusto e il valore appropriato venga assegnato a `result`.

# --hints--

Il tuo codice dovrebbe aggiustare la condizione in modo che controlli l'uguaglianza invece di utilizzare l'assegnazione.

```js
assert(result == 'Not equal!');
```

La condizione dovrebbe usare `==` o `===` per verificare l'uguaglianza.

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
