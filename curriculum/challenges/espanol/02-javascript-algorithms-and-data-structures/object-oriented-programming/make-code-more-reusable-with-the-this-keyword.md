---
id: 587d7dad367417b2b2512b76
title: Haz el código más reutilizable con la palabra clave "this"
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

El último desafío introdujo un método al objeto `duck`. Usó la notación de puntos `duck.name` para acceder al valor de la propiedad `name` dentro de la declaración de retorno:

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

Aunque esta es una forma válida de acceder a la propiedad del objeto, existe un problema. Si el nombre de la variable cambia, cualquier código que haga referencia al nombre original también tendría que ser actualizado. En una definición breve de un objeto, esto no es un problema, pero si un objeto tiene muchas referencias a sus propiedades hay una mayor probabilidad de error.

Una forma de evitar estos problemas es con palabra clave `this`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` es un tema profundo, y el ejemplo anterior es sólo una forma de usarlo. En el contexto actual, `this` se refiere al objeto con el que el método está asociado: `duck`. Si el nombre del objeto se cambia a `mallard`, no es necesario encontrar todas las referencias a `duck` en el código. Hace que el código sea reutilizable y mas fácil de leer.

# --instructions--

Modifica el método `dog.sayLegs` para eliminar cualquier referencia a `dog`. Utiliza el ejemplo de `duck` como orientación.

# --hints--

`dog.sayLegs()` debe devolver una cadena.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

Tu código debe usar la palabra clave `this` para acceder a la propiedad `numLegs` de `dog`.

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
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
