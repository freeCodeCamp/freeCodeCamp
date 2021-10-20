---
id: 587d7b8a367417b2b2512b4f
title: Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 añade un buen soporte para definir fácilmente objetos literales.

Considera el siguiente código:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` es una función simple que devuelve un objeto que contiene dos propiedades. ES6 proporciona el azúcar sintáctico para eliminar la redundancia de tener que escribir `x: x`. Puedes simplemente escribir `x` una vez, y se convertirá en `x: x` (o algo equivalente) de la nada. Aquí está la misma función de arriba reescrita para usar esta nueva sintaxis:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

Utiliza la abreviatura de propiedad de objeto con objetos literales para crear y devolver un objeto con las propiedades `name`, `age` y `gender`.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` debe devolver `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

Tu código no debe usar `key:value`.

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
