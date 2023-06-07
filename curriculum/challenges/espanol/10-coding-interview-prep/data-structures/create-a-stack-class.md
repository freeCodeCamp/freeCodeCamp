---
id: 587d8250367417b2b2512c5f
title: Crea una Clase Pila
challengeType: 1
forumTopicId: 301633
dashedName: create-a-stack-class
---

# --description--

En la última sección, hablamos sobre lo que es una pila y como podemos usar un arreglo para representar una pila. En esta sección, crearemos nuestra propia clase pila. Aunque puedes usar arreglos para crear pilas, a veces es mejor limitar la cantidad de control que tenemos con nuestras pilas. Aparte de los métodos `push` y `pop`, las pilas tienen otros métodos. Añadamos métodos `peek`, `isEmpty`, y `clear` para nuestra clase pila.

# --instructions--

Escribe un método `push` que ponga un elemento en el tope de la pila, un método `pop` que elimine y devuelva el elemento del tope de la pila, un método `peek` que muestre el elemento del tope de la pila, un método `isEmpty` que compruebe si la pila esta vacía, y un método `clear` que elimine todos los elementos de la pila. Normalmente las pilas no tienen esto, pero hemos añadido un método ayudante `print` que registre en consola la colección.

# --hints--

La clase `Stack` debe tener un método `push`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.push === 'function';
  })()
);
```

La clase `Stack` debe tener un método `pop`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.pop === 'function';
  })()
);
```

La clase `Stack` debe tener un método `peek`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.peek === 'function';
  })()
);
```

La clase `Stack` debe tener un método `isEmpty`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.isEmpty === 'function';
  })()
);
```

La clase `Stack` debe tener un método `clear`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.clear === 'function';
  })()
);
```

El método `peek` debe devolver el elemento del tope de la pila

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    return test.peek() === 'CS50' && test.peek() === 'CS50';
  })()
);
```

El método `pop` debe eliminar y devolver el elemento del tope de la pila

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    return test.pop() === 'CS50' && test.pop() === 'CS61';
  })()
);
```

El método `isEmpty` debe devolver true si la pila no contiene elementos

```js
assert(
  (function () {
    var test = new Stack();
    return test.isEmpty();
  })()
);
```

El método `clear` debe eliminar todos los elementos de la pila

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    test.clear();
    return test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
class Stack {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  push(val) {
    this.collection.push(val);
  }
  pop() {
    return this.collection.pop();
  }
  peek() {
    return this.collection[this.collection.length - 1];
  }
  isEmpty() {
    return this.collection.length === 0;
  }
  clear() {
    return (this.collection.length = 0);
  }
}
```
