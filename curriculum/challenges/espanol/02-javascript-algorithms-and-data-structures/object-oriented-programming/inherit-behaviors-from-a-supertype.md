---
id: 587d7db0367417b2b2512b84
title: Hereda comportamientos de un supertipo (supertype)
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

En el desafío anterior, creaste un `supertype` llamado `Animal` que definía comportamientos compartidos por todos los animales:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

Este desafío y el siguiente cubrirán como reutilizar los métodos de `Animal` dentro de `Bird` y `Dog` sin tener que definirlos otra vez. Se utiliza una técnica llamada herencia. Este desafío cubre el primer paso: crear una instancia del `supertype` (o objecto padre). Ya conoces una forma de crear una instancia de `Animal` utilizando el operador `new`:

```js
let animal = new Animal();
```

Hay algunas desventajas cuando se utiliza esta sintaxis para la herencia, pero son demasiado complejas para el alcance de este desafío. En su lugar, hay un enfoque alternativo que no tiene esas desventajas:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` crea un objeto nuevo y establece `obj` como el `prototype` del nuevo objeto. Recuerda que `prototype` es como la "receta" para crear un objecto. Al establecer el `prototype` de `animal` como el `prototype` de `Animal`, estás dándole a la instancia `animal` la misma “receta" que a cualquier otra instancia de `Animal`.

```js
animal.eat();
animal instanceof Animal;
```

Aquí el método `instanceof` devolvería `true`.

# --instructions--

Utiliza `Object.create` para crear dos instancias de `Animal` llamadas `duck` y `beagle`.

# --hints--

La variable `duck` debe estar definida.

```js
assert(typeof duck !== 'undefined');
```

La variable `beagle` debe estar definida.

```js
assert(typeof beagle !== 'undefined');
```

La variable `duck` debe inicializarse con `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

La variable `beagle` debe inicializarse con `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` debe tener un `prototype` de `Animal`.

```js
assert(duck instanceof Animal);
```

`beagle` debe tener un `prototype` de `Animal`.

```js
assert(beagle instanceof Animal);
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
