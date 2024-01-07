---
id: 587d7dac367417b2b2512b74
title: Utiliza notación de puntos para acceder a las propiedades de un objeto
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

En el último desafío creaste un objeto con varias propiedades. Ahora verás cómo acceder a los valores de esas propiedades. Por ejemplo:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

Se utiliza notación de puntos con el nombre del objeto, `duck`, seguido por el nombre de la propiedad, `name`, para acceder al valor de `Aflac`.

# --instructions--

Imprime ambas propiedades del objeto `dog` en tu consola.

# --hints--

Tu código debe usar `console.log` para imprimir el valor de la propiedad `name` del objeto `dog`.

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

Tu código debe usar `console.log` para imprimir el valor de la propiedad `numLegs` del objeto `dog`.

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
