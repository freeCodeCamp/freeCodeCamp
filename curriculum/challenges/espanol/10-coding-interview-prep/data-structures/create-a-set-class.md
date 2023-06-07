---
id: 8d1323c8c441eddfaeb5bdef
title: Crea una Clase Set
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--

En este ejercicio vamos a crear una clase llamada `Set` para simular una estructura de datos abstracta llamada "set". Un set es como un arreglo, pero no puede contener valores duplicados. El uso típico para un set es simplemente verificar la presencia de un elemento. Podemos ver como funciona el objeto `Set` ES6 en el siguiente ejemplo:

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

Primero, crearemos un método add que agregará un valor a nuestra colección siempre y cuando el valor aun no exista en el set. Luego crearemos un método remove que eliminará un valor de la colleción set si ya existe. Y finalmente, crearemos un método size que devolverá el número de elementos en el interior de la colleción set.

# --instructions--

Cre un método `add` que añada un valor único a la colleción set y devuelva `true` si el valor fue añadido exitosamente y `false` de lo contrario.

Crea un método `remove` que acepte un valor y compruebe si existe en el set. Si existe, entonces este método debe eliminarlo de la colección set, y devolver `true`. De lo contrario, debe devolver `false`. Crea un método `size` que devuelva el tamaño de la colleción set.

# --hints--

Tu clase `Set` debe tener un método `add`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })()
);
```

Tu método `add` no debe agregar valores duplicados.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.add('a');
    var vals = test.values();
    return vals[0] === 'a' && vals[1] === 'b' && vals.length === 2;
  })()
);
```

Tu método `add` debe devolver `true` cuando un valor ha sido añadido exitosamente.

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

Tu método `add` debe devolver `false` cuando un valor duplicado es añadido.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    var result = test.add('a');
    return result != undefined && result === false;
  })()
);
```

Tu clase `Set` debe tener un método `remove`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.remove === 'function';
  })()
);
```

Tu método `remove` solo debe eliminar elementos que estén presentes en el set.

```js
assert.deepEqual(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('c');
    return test.values();
  })(),
  ['a', 'b']
);
```

Tu método `remove` debe eliminar el elemento dado del set.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    var vals = test.values();
    return vals[0] === 'b' && vals.length === 1;
  })()
);
```

Tu clase `Set` debe tener un método `size`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.size === 'function';
  })()
);
```

El método `size` debe devolver el número de elementos en la colleción.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    return test.size() === 1;
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
```
