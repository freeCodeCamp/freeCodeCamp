---
id: 587d8254367417b2b2512c70
title: Crear y añadir Sets en ES6
challengeType: 1
forumTopicId: 301636
dashedName: create-and-add-to-sets-in-es6
---

# --description--

Ahora que has trabajado a través de ES5, vas a hcer algo similar en ES6. Esto será considerablemente fácil. ES6 contiene una estructura de datos integrada `Set` muchas de las operaciones que escribiste a mano ahora están disponibles para tí. Echemos un vistazo:

Para crear un nuevo set vacío:

```js
var set = new Set();
```

Tu puedes crear un set con un valor:

```js
var set = new Set(1);
```

Puedes crear un set con un arreglo:

```js
var set = new Set([1, 2, 3]);
```

Una vez que hayas creado un set, puedes añadir los valores que desees usando el método `add`:

```js
var set = new Set([1, 2, 3]);
set.add([4, 5, 6]);
```

Como un recordatorio, un set es una estructura de datos que no puede contener valores duplicados:

```js
var set = new Set([1, 2, 3, 1, 2, 3]);
// set contains [1, 2, 3] only
```

# --instructions--

Para este ejercicio, devuelve un set con los siguientes valores:`1, 2, 3, 'Taco', 'Cat', 'Awesome'`

# --hints--

Tu `Set` debe contener solamente los valores `1, 2, 3, Taco, Cat, Awesome`.

```js
assert(
  (function () {
    var test = checkSet();
    return (
      test.size == 6 &&
      test.has(1) &&
      test.has(2) &&
      test.has(3) &&
      test.has('Taco') &&
      test.has('Cat') &&
      test.has('Awesome')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line

  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();
```

# --solutions--

```js
function checkSet(){var set = new Set([1,2,3,'Taco','Cat','Awesome']);
return set;}
```
