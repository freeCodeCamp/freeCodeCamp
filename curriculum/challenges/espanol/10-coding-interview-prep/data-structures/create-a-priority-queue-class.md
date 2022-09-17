---
id: 587d8255367417b2b2512c74
title: Crear una Clase Cola de Prioridad
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

En este desafío crearás una Cola de Prioridad. Una cola de Prioridad es un tipo especial de cola en la que los elementos pueden tener una información adicional que especifica su proridad. Esto podría ser simplemente representado con un entero. La prioridad del elemento anulará el orden de colocación para determinar la secuencia de los elementos se debe sacar los elementos de la cola. Si un elemento con una prioridad más alta se pone en cola después de elementos con una prioridad más baja, el elemento con mayor prioridad será extraído antes que los demás elementos.

Por ejemplo, imaginemos que tenemos una cola de prioridad con tres elementos:

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Aquí el segundo valor ( un entero) representa la prioridad del elemento. Si ponemos en cola `['human', 1]` con una prioridad `1` ( asumiendo que las prioridades inferiores tengan precedencia) entonces sería el primer elemento en ser extraído de la cola. La colección se vería así:

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Hemos empezado a escribir una `PriorityQueue` en el editor de código. Necesitarás agregar un método `enqueue` para agregar elementos con una prioridad, un método `dequeue` para eliminar y devolver elementos, un método `size` que devuelva el número de elementos en la cola, un método `front` que devuelva el elemento al inicio de la cola, y finalmente un método `isEmpty` que devolverá `true` si la cola esta vacía o `false` si no lo está.

`enqueue` debe aceptar elementos con el formato mostrado arriba(`['human', 1]`) donde `1` representa la prioridad. `dequeue` y `front` debe devolver sole el nombre del elementos, no su prioridad.

# --hints--

Tu clase `PriorityQueue` debe tener un método `enqueue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

Tu clase `PriorityQueue` debe tener una método `dequeue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

Tu clase `PriorityQueue` debe tener un método `size`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

Tu clase `PriorityQueue` debe tener un método `front`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

Tu clase `PriorityQueue` debe tener un método `isEmpty`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

Tu clase `PriorityQueue` debe guardar un seguimiento correctamente al número actual de elementos usando el método `size` como elementos encolados y desencolados.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    test.enqueue(['Jon Snow', 1]);
    var size1 = test.size();
    test.dequeue();
    var size2 = test.size();
    test.enqueue(['A', 3]);
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    return size1 === 2 && size2 === 1 && test.size() === 4;
  })()
);
```

El método `front` debe devolver el elemento correcto que está al frente de la cola ya que los elementos están encolados y desencolados.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    var front1 = test.front();
    test.enqueue(['Jon Snow', 1]);
    var front2 = test.front();
    test.dequeue();
    test.enqueue(['A', 3]);
    var front3 = test.front();
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    test.dequeue();
    var front4 = test.front();
    return (
      front1 === 'David Brown' &&
      front2 === 'Jon Snow' &&
      front3 === 'David Brown' &&
      front4 === 'A'
    );
  })()
);
```

El método `isEmpty` debe devolver `true` cuando la cola esté vacía.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 1]);
    test.enqueue(['B', 1]);
    test.dequeue();
    var first = test.isEmpty();
    test.dequeue();
    return !first && test.isEmpty();
  })()
);
```

La cola de prioridad debe devolver los elementos con una prioridad mayor antes que los elementos con una prioridad más baja y devolver los elementos en orden first-in-first-out de lo contrario.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 5]);
    test.enqueue(['B', 5]);
    test.enqueue(['C', 5]);
    test.enqueue(['D', 3]);
    test.enqueue(['E', 1]);
    test.enqueue(['F', 7]);
    var result = [];
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    return result.join('') === 'EDABCF';
  })()
);
```

# --seed--

## --seed-contents--

```js
function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // Only change code above this line
}
```
