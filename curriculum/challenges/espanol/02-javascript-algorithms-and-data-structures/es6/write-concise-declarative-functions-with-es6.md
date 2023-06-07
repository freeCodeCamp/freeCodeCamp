---
id: 587d7b8b367417b2b2512b50
title: Escribe funciones breves y declarativas con ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

Al definir funciones dentro de objetos en ES5, tenemos que utilizar la palabra clave `function` de la siguiente manera:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Con ES6, puedes eliminar la palabra clave `function` y los dos puntos al definir funciones en objetos. Aquí hay un ejemplo de esta sintaxis:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

Refactoriza la función `setGear` dentro del objeto `bicycle` para que utilice la sintaxis abreviada descrita arriba.

# --hints--

La expresión tradicional "function" no debe ser utilizada.

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` debe ser una función declarativa.

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` debe cambiar el valor de `gear` a 48.

```js
bicycle.setGear(48);
assert(bicycle.gear === 48);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```
