---
id: 587d8250367417b2b2512c5e
title: Aprende cómo funciona una Pila
challengeType: 1
forumTopicId: 301705
dashedName: learn-how-a-stack-works
---

# --description--

Probablemente esté familiarizado con la pila de libros en su mesa. Es probable que haya usado la característica de deshacer de un editor de texto. Probablemente también estés acostumbrado a pulsar el botón atrás de tu teléfono para volver a la vista anterior de tu aplicación.

¿Sabes lo que todos tienen en común? Todos almacenan los datos de una manera que usted puede atravesar hacia atrás.

El libro más alto de la pila fue el que se puso a lo último. Si eliminas ese libro de la parte superior de tu pila, expondrías el libro que se puso allí antes del último libro y así sucesivamente.

Si lo piensas, en todos los ejemplos anteriores, obtienes el tipo de servicio de <dfn>Last-In-First-Out</dfn>. Intentaremos imitar esto con nuestro código.

Este esquema de almacenamiento de datos se llama una pila <dfn></dfn>. En particular, tendríamos que implementar el método `push()` que empuja objetos JavaScript en la parte superior de la pila; y el método `pop()` , que elimina el objeto JavaScript que está en la parte superior de la pila en el momento actual.

# --instructions--

Aquí tenemos una pila de tareas de inicio representadas como un arreglo: `"BIO12"` está en la base, y `"PSY44"` está en la parte superior de la pila.

Modifique el array dado y trate como una pila `` usando los métodos de JavaScript mencionados anteriormente. Elimina el elemento superior `"PSY44"` de la pila. Luego añade `"CS50"` para ser el nuevo elemento superior de la pila.

# --hints--

`homeworkStack` solo debe contener 4 elementos.

```js
assert(homeworkStack.length === 4);
```

El último elemento en `homeworkStack` debe ser `"CS50"`.

```js
assert(homeworkStack[3] === 'CS50');
```

`homeworkStack` no debe contener `"PSY44"`.

```js
assert(homeworkStack.indexOf('PSY44') === -1);
```

La declaración inicial de `homeworkStack` no debe ser cambiada.

```js
assert(
  code.match(/=/g).length === 1 &&
    /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(
      code
    )
);
```

# --seed--

## --seed-contents--

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line
```

# --solutions--

```js
// solution required
```
