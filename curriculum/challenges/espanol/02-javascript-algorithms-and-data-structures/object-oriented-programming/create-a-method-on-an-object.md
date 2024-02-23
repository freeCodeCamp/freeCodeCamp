---
id: 587d7dad367417b2b2512b75
title: Crea un método en un objeto
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

Los objetos pueden tener un tipo de propiedad especial, llamada <dfn>método</dfn>.

Los métodos son propiedades que son funciones. Estos agregan diferentes comportamientos a los objetos. Aquí esta el ejemplo de `duck` con un método:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

Este ejemplo agrega el método `sayName`, el cual es una función que devuelve una oración que entrega el nombre del `duck` (pato). Ten en cuenta que el método accedió a la propiedad `name` en la sentencia de retorno usando `duck.name`. El siguiente desafío abarcara otra forma de hacer esto.

# --instructions--

Usando el objeto `dog`, asígnale un método llamado `sayLegs`. El método debe devolver la frase `This dog has 4 legs.`

# --hints--

`dog.sayLegs()` debe ser una función.

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` debe devolver la cadena asignada; ten cuenta que la puntuación y los espacios importan.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
