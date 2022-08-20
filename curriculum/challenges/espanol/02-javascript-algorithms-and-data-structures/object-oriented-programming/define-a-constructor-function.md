---
id: 587d7dad367417b2b2512b77
title: Define una función "Constructor"
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

Las funciones <dfn>Constructors</dfn> crean nuevos objetos. Definen propiedades y comportamientos que pertenecerán al nuevo objeto. Piensa que son el modelo para la creación de nuevos objetos.

A continuación se muestra un ejemplo de un constructor:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

Este constructor define un objeto `Bird` con las propiedades `name`, `color` y `numLegs` establecidas a Albert, blue y 2 respectivamente. Los constructores tienen las siguientes convenciones:

<ul><li>Están definidos con un nombre en mayúscula para distinguirlos de otras funciones que no son <code>constructors</code>.</li><li>Utilizan la palabra clave <code>this</code> para establecer propiedades del objeto que crearán. Dentro del constructor, <code>this</code> se refiere al nuevo objeto que creará.</li><li>Los Constructors definen propiedades y comportamientos en vez de devolverlos como un valor como lo harían otras funciones.</li></ul>

# --instructions--

Crea un constructor, `Dog`, con las propiedades `name`, `color` y `numLegs` que se establecen a una cadena, una cadena y un número respectivamente.

# --hints--

`Dog` debe tener una propiedad `name` establecida a una cadena.

```js
assert(typeof new Dog().name === 'string');
```

`Dog` debe tener una propiedad `color` establecida a una cadena.

```js
assert(typeof new Dog().color === 'string');
```

`Dog` debe tener una propiedad `numLegs` establecida a un número.

```js
assert(typeof new Dog().numLegs === 'number');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```
