---
id: 587d8250367417b2b2512c60
title: Crea una clase Cola
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

Como las pilas, las colas son una colleción de elementos. Pero a diferencia de las pilas, las colas siguen el principio FIFO (First-In First-Out). Los elementos que son añadidos a la cola son puestos en la cola, o al final, de la cola, y solo el elemento del frente de la cola es posible extraerlo.

Podríamos usar un arreglo para representar una cola, pero como las pilas, queremos limitar la cantidad de control que tenemos sobre nuestras colas.

Los métodos principales de una clase cola son el enqueue y el dequeue. El método enqueue coloca un elemento al final de la cola, y el método dequeue elimina y devuelve el elemento al frente de la cola. Otros métodos útiles son el front, size e isEmpty.

# --instructions--

Escribe un método `enqueue` que ponga un elemento al final de la cola, un método `dequeue` que elimine y devuelva el elemento del frente, un método `front` que nos permita ver el elemento del frente, un método `size` que muestre la longitud, y un método `isEmpty` que compruebe si la cola está vacía.

# --hints--

La clase `Queue` debe tener un método `enqueue`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

La clase `Queue` debe tener un método `dequeue`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

La clase `Queue` debe tener un método `front`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

La clase `Queue` deber tener un método `size`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

La clase `Queue` debe tener un método `isEmpty`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

El método `dequeue` debe eliminar y devolver el elemento del frente de la cola

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.dequeue() === 'Smith';
  })()
);
```

El método `front` debe devolver el valor del elemento del frente de la cola

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.front() === 'Smith';
  })()
);
```

El método `size` debe devolver la longitud de la cola

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

El método `isEmpty` debe devolver `false` si hay elementos en la cola

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return !test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Queue() {
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
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        collection.push(item);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0 ? true : false;
    }
    // Only change code above this line
}
```
