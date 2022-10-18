---
id: 587d7b8b367417b2b2512b53
title: Usa sintaxis de clases para definir una función constructora
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave <dfn>class</dfn>.

Debemos notar que la sintaxis `class` es sólo sintaxis, y no una implementación completa basada en clases de un paradigma orientado a objetos, a diferencia de lenguajes como Java, Python, Ruby, etc.

En ES5, se puede crear un objeto definiendo una funcion `constructor` y usando la palabra clave `new` para instanciar el objeto.

En ES6, una declaración `class` tiene un método `constructor` que se invoca con la palabra clave `new`. Si el método `constructor` no se define explícitamente, entonces se define implícitamente sin argumentos.

```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

Debe tenerse en cuenta que la palabra clave `class` declara una nueva función, a la cual se añade un constructor. Este constructor se invoca cuando `new` es llamado para crear un nuevo objeto.

**Nota:** UpperCamelCase debe ser utilizado por convención para nombres de clase en ES6, como `SpaceShuttle` fue usado arriba.

El método `constructor` es un método especial para crear e inicializar un objeto creado con una clase. Aprenderás más sobre ello en la sección de Programación Orientada a Objetos de la Certificación en Algoritmos de JavaScript y Estructuras de Datos.

# --instructions--

Usa la palabra clave `class` y escribe un `constructor` para crear la clase `Vegetable`.

La clase `Vegetable` te permite crear un objeto vegetal con una propiedad `name` que es pasada al `constructor`.

# --hints--

`Vegetable` debe ser una clase (`class`) con un método `constructor` definido.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

La palabra clave `class` debe ser utilizada.

```js
assert(code.match(/class/g));
```

`Vegetable` debe ser capaz de ser instanciada.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` debe devolver `carrot`.

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
