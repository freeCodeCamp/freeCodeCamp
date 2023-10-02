---
id: 587d7db0367417b2b2512b82
title: Comprende la cadena "prototype"
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

Todos los objetos en JavaScript (con algunas excepciones) tienen un `prototype`. Además, el `prototype` de un objeto en sí mismo es un objeto.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

Debido a que `prototype` es un objeto, ¡un`prototype` puede tener su propio `prototype`! En este caso, el `prototype` de `Bird.prototype` es `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

¿Por qué sería útil? Quizás recuerdes el método `hasOwnProperty` del desafío pasado:

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

El método `hasOwnProperty` se define en `Object.prototype` al cual se puede acceder con `Bird.prototype`, al que se puede acceder con `duck`. Este es un ejemplo de la cadena `prototype`. En esta cadena `prototype`, `Bird` es el `supertype` de `duck` mientras que `duck` es el `subtype`. `Object` es un `supertype` de `Bird` y `duck`. `Object` es un `supertype` de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede utilizar el método `hasOwnProperty`.

# --instructions--

Modifica el código para mostrar la cadena de prototipos correcta.

# --hints--

El código debe mostrar que `Object.prototype` es el prototipo de `Dog.prototype`

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```
