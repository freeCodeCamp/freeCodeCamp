---
id: 598e8944f009e646fc236146
title: Comprendere il valore undefined restituito da una funzione
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

Una funzione può includere l'istruzione `return` ma questa non deve essere necessariamente inclusa. Nel caso in cui la funzione non abbia un'istruzione `return`, quando la chiami, la funzione elabora il codice interno ma il valore restituito è `undefined`.

**Esempio**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` è una funzione senza un'istruzione `return`. La funzione cambierà la variabile globale `sum` ma il valore restituito dalla funzione sarà `undefined`.

# --instructions--

Crea una funzione `addFive` senza argomenti. Questa funzione aggiunge 5 alla variabile `sum`, ma il valore restituito è `undefined`.

# --hints--

`addFive` dovrebbe essere una funzione.

```js
assert(typeof addFive === 'function');
```

Una volta che entrambe le funzioni saranno state eseguite, `sum` dovrebbe essere uguale a `8`.

```js
assert(sum === 8);
```

Il valore restituito da `addFive` dovrebbe essere `undefined`.

```js
assert(addFive() === undefined);
```

All'interno della funzione `addFive`, dovresti aggiungere `5` alla variabile `sum`.

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
