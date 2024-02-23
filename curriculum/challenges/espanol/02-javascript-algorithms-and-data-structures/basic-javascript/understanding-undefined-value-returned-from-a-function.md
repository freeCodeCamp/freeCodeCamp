---
id: 598e8944f009e646fc236146
title: Comprendiendo el valor indefinido devuelto por una función
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

Una función puede incluir la declaración de devolución (`return`) pero no tiene por qué hacerlo. En el caso de que la función no tenga una declaración de devolución (`return`), cuando la llames, la función procesa el código interno, pero el valor devuelto es `undefined` (indefinido).

**Ejemplo**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` es una función sin una declaración de devolución (`return`). La función cambiará la variable global `sum` pero el valor devuelto de la función es `undefined`.

# --instructions--

Crea una función `addFive` sin ningún argumento. Esta función suma 5 a la variable `sum`, pero su valor devuelto es `undefined`.

# --hints--

`addFive` debe ser una función.

```js
assert(typeof addFive === 'function');
```

Una vez que ambas funciones hayan sido ejecutadas, la suma (`sum`) debe ser igual a `8`.

```js
assert(sum === 8);
```

El valor devuelto por `addFive` debe ser `undefined`.

```js
assert(addFive() === undefined);
```

Dentro de la función `addFive`, debes sumar `5` a la variable `sum`.

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
