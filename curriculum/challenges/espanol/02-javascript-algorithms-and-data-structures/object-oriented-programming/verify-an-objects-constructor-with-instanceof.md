---
id: 587d7dae367417b2b2512b7a
title: Verifica el constructor de un objeto con "instanceof"
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una <dfn>instancia</dfn> de su constructor. JavaScript proporciona una manera conveniente de verificar esto con el operador `instanceof`. `instanceof` permite comparar un objeto con un constructor, devuelve `true` o `false` basado en si ese objeto fue creado o no con dicho constructor. Aquí hay un ejemplo:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

Aquí el método `instanceof` devolverá `true`.

Si un objeto es creado sin usar un constructor, `instanceof` verificará que no es una instancia de ese constructor:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

Aquí el método `instanceof` devolverá `false`.

# --instructions--

Crea una nueva instancia del constructor `House`, llamándola `myHouse` y pasando el número de habitaciones. Luego, usa `instanceof` para verificar que es una instancia de `House`.

# --hints--

`myHouse` debe tener un atributo `numBedrooms` establecido a un número.

```js
assert(typeof myHouse.numBedrooms === 'number');
```

Debes verificar que `myHouse` es una instancia de `House` usando el operador `instanceof`.

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
