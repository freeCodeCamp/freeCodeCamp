---
id: 587d825b367417b2b2512c8c
title: Implementar la clasificación Heap (Montón) con un Heap mínimo
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

Ahora que podemos añadir y remover elementos, podremos ver que algunos de los montones de aplicaciones podran ser utilizados. Los Heaps (montones) son comunmente utilizados para implementar colas prioritarias porque siempre almacenan elementos de mayor o menor valor en la primera posición. Además, se usan para implementar un algoritmo de clasificación llamado ''orden de montón'' (orden Heap). Aquí veremos cómo hacer esto. La clasificación por montónes usa un montón mínimo (Heap mínimo), el opuesto del montón máximo (Heap máximo). Un montón mínimo siempre almacena el elemento de menor valor en la posición raíz.

La clasificación por montón (Heap Sort) trabaja tomando una colección sin ordenar, añadiendo cada item en la colección dentro de un montón mínimo (min Heap), y luego extrayendo cada item desde el montón mínimo a una nueva colección. La estructura de montón mínimo asegura que la nueva colección contendrá los elementos originales en orden de menor a mayor. Este es uno de los mas eficientes algoritmos de clasificación con un rendimiento tanto promedio como en el peor de los casos de O(nlog(n)).

# --instructions--

Implementemos la ordenación de montón con un montón mínimo. Siéntase libre de adaptar su código de montón máximo aquí. Cree un objeto `MinHeap` con los métodos `insert`, `remove` y `sort`. El método `sort` debe devolver una matriz de todos los elementos en el montón mínimo ordenados de menor a mayor.

# --hints--

Debe existir la estructura de datos `MinHeap`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MinHeap` debe tener un método llamado `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MinHeap` debe tener un método llamado `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

`MinHeap` debe tener un método llamado `sort`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.sort == 'function';
  })()
);
```

El método `sort` debe devolver una matriz que contiene todos los elementos al monto mínimo en orden.

```js
assert(
  (() => {
    if (typeof MinHeap === 'undefined') {
      return false;
    }

    const heap = new MinHeap();
    const arr = createRandomArray(25);

    for (let i of arr) {
      heap.insert(i);
    }

    const result = heap.sort();
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== result[i]) {
        return false;
      }
    }
    return true;
  })()
);
```

# --seed--

## --seed-contents--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);

  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
