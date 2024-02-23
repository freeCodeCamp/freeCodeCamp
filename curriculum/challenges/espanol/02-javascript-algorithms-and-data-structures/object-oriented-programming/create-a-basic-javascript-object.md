---
id: 587d7dac367417b2b2512b73
title: Crea un objeto básico de JavaScript
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

Piensa en cosas que la gente ve todos los días, como coches, tiendas y aves. Todos estos son <dfn>objetos</dfn>: cosas tangibles con las que la gente puede observar e interactuar.

¿Cuáles son algunas de las cualidades de estos objetos? Un coche tiene ruedas. Las tiendas venden artículos. Las aves tienen alas.

Estas cualidades, o <dfn>propiedades</dfn>, definen los que constituye un objeto. Ten en cuenta que objetos similares comparten las mismas propiedades, pero posiblemente tengan valores diferentes para estas propiedades. Por ejemplo, todos los coches tienen ruedas, pero no todos los coches tienen la misma cantidad de ruedas.

Los objetos en JavaScript son usados para modelar objetos del mundo real, dándoles propiedades y comportamientos como sus contrapartes del mundo real. Aquí hay un ejemplo usando estos conceptos para crear un objeto `duck` (pato):

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

El objeto `duck` tiene dos pares propiedad/valor: un `name` (nombre) de `Aflac` y un `numLegs` (número de patas) de 2.

# --instructions--

Crea un objeto `dog` con las propiedades `name` y `numLegs` y asígnales una cadena y un número, respectivamente.

# --hints--

`dog` debe ser un objeto.

```js
assert(typeof dog === 'object');
```

`dog` debe tener una propiedad `name` establecida en una cadena.

```js
assert(typeof dog.name === 'string');
```

`dog` debe tener una propiedad `numLegs` establecida en un número.

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
