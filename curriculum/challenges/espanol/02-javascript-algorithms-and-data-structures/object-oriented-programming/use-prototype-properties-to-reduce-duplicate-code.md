---
id: 587d7dae367417b2b2512b7c
title: Utiliza propiedades "prototype" para reducir código duplicado
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

Dado que `numLegs` probablemente tendrán el mismo valor para todas las instancias de `Bird`, esencialmente tienes una variable duplicada `numLegs` dentro de cada instancia de `Bird`.

Esto puede que no sea un problema cuando sólo hay dos instancias, pero imagina si hay millones de instancias. Eso sería un montón de variables duplicadas.

Una mejor forma es utilizar el `prototype` de `Bird`. Las propiedades del `prototype` se comparten entre TODAS las instancias de `Bird`. A continuación se explica cómo añadir `numLegs` al prototipo `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

Ahora todas las instancias de `Bird` tienen la propiedad `numLegs`.

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

Dado que todas las instancias tienen automáticamente las propiedades en el `prototype`, piensa en `prototype` como una "receta" para crear objetos. Ten en cuenta que el `prototype` de `duck` y `canary` es parte del constructor `Bird` como `Bird.prototype`.

# --instructions--

Añade una propiedad `numLegs` al `prototype` de `Dog`

# --hints--

`beagle` debe tener una propiedad `numLegs`.

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` debe ser un número.

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` debe ser una propiedad `prototype`, no una propiedad directa.

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
