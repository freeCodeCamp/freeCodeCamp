---
id: 587d8255367417b2b2512c75
title: Crear un Cola Circular
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

En este desafío crearás un cola circular. Una cola circular es una cola que escribe al final de una colección luego comienza a sobreecribirse al principio de la colección. Este tipo de estructura de datos es útil en ciertas situaciones. Por ejemplo, una cola circular puede ser usada para streaming de medios. Una vez que la cola esté llena, los nuevos datos de multimedia reescribirán a los datos antiguos.

Una buena forma de ilustrar este concepto es con un arreglo de longitud `5`:

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

Aquí la lectura y escritura están ambos en la posición `0`. Ahora la cola obtiene 3 nuevos registros `a`,`b`, y `c`. Nuestra cola ahora luce así:

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

Como la lectura lee el encabezado, puede eliminar los valores o mantenerlos:

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

Ahora escribimos los valores `d`,`e`, y `f` a la cola. Una vez que la escritura alcance el final del arreglo vuelve al inicio:

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

Esta aproximación requiere una constante cantidad de memoria pero permite procesar archivos de un tamaño muy grande.

# --instructions--

En este desafío implementaremos una cola circular. La cola circular debe proporcionar los métodos `enqueue` y `dequeue` que permitan leer y escribir en la cola. La clase misma debe también aceptar un argumento entero el cual puedes usar para especificar el tamaño de la cola cuado sea creada. Hemos escrito la versión inicial de esta clase para tí en el editor de código.

Cuando añades elementos a la cola, el puntero de escritura debe avazar hacia adelante y volver al inicio una vez que llegue al final de la cola. El método `enqueue` debe devolver el elemento que añadido a la cola si es exitoso; de lo contrario devolverá `null`.

De la misma forma, el puntero de lectura debe avanzar hacia adelante mientras elimines elementos de la cola. Cuando elimines un elemento de la cola, ese elemento debe ser devuelto. Si tu no puedes eliminar el elemento de la cola, debes devolver `null`.

El puntero de escritura no debe sobrepasar el puntero de lectura ( nuestra clase no permitirá sobreescribir datos sin haberlo leído antes) y el puntero de lectura no debe avanzar más que sobre los datos que se han escrito.

# --hints--

El método `enqueue` debe agregar elementos a la cola circular.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

No debes agregar elementos más allá del puntero de lectura.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    test.enqueue(13);
    test.enqueue(25);
    test.enqueue(59);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

El método `dequeue` debe remover elementos de la cola.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591
    );
  })()
);
```

Después de que un elemento sea removido de la cola, su posición en la cola debe volver a `null`.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(672);
    test.dequeue();
    test.dequeue();
    var print = test.print();
    return print[0] === null && print[1] === null && print[2] === 672;
  })()
);
```

Al tratar de eliminar un elemento más allá del puntero de lectura debe devolver `null` y no avanzará el puntero de escritura.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 &&
      test.dequeue() === 32 &&
      test.dequeue() === 591 &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.enqueue(100) === 100 &&
      test.dequeue() === 100
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line

    // Only change code above this line
  }
}
```

# --solutions--

```js
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    console.log(this.write, this.max);
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) {
        this.write = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) {
        this.read = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }
}
```
