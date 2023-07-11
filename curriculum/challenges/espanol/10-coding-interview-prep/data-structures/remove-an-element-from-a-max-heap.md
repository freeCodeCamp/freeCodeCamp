---
id: 587d825b367417b2b2512c8b
title: Elimina un elemento de un montón máximo
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

Ahora que podemos añadir elementos a nuestra pila veamos cómo podemos eliminar los elementos. Quitar e insertar elementos requieren una lógica similar. En un montón máximo normalmente querrá eliminar el mayor valor, por lo que esto implica simplemente extraerlo de la raíz de nuestro árbol. Esto romperá la propiedad pila de nuestro árbol, entonces debemos reestablecerla en alguna manera. Normalmente, para un apilado máximo esto se hace de la siguiente manera:

<ol>
  <li>Mueve el último elemento en la pila en la posición raíz.</li>
  <li>Si cualquiera de los dos hijos de la raíz es mayor que ella, intercambia la raíz con el hijo de mayor valor.</li>
  <li>Continúe intercambiando hasta que el padre sea mayor que ambos hijos o alcance el último nivel en el árbol.</li>
</ol>

# --instructions--

Instrucciones: Agrega un método a nuestro apilado máximo llamado `remove`. Este método debe devolver el mayor valor que ha sido agregado a nuestra pila máxima y eliminarlo de la pila. También debería reordenar la pila para que la propiedad de la pila sea mantenida. Luego de remover un elemento, el siguiente elemento más grande que queda en la pila debe convertirse en la raíz.

# --hints--

La estructura de datos `MaxHeap` debería existir.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MaxHeap` debería tener un método llamado `print`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

`MaxHeap` debería tener un método llamado `insert`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MaxHeap` debería tener un método llamado `remove`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

El método `remove` debería remover el mayor elemento de la pila máxima mientras se mantiene la propiedad máxima de la pila.

```js
function isHeap(arr, i, n) {
  if (i >= (n - 1) / 2) {
    return true;
  }
  if (
    arr[i] >= arr[2 * i + 1] &&
    arr[i] >= arr[2 * i + 2] &&
    isHeap(arr, 2 * i + 1, n) &&
    isHeap(arr, 2 * i + 2, n)
  ) {
    return true;
  }
  return false;
}

assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
  let max = Infinity;
  const [result, vals] = [[], [2, 15, 3, 7, 12, 7, 10, 90]];
  vals.forEach((val) => test.insert(val));
  for (let i = 0; i < vals.length; i++) {
    const curHeap = test.print();
    const arr = curHeap[0] === null ? curHeap.slice(1) : curHeap;
    if (!isHeap(arr, 0, arr.length - 1)) {
      return false;
    }
    const removed = test.remove();
    if (!vals.includes(removed)) return false;
    if (removed > max) return false
    max = removed;
    result.push(removed);
  }
  for (let i = 0; i < vals.length; i++) {
     if (!result.includes(vals[i])) {
       return false;
     }
  }
  return true
  })()
);
```

# --seed--

## --seed-contents--

```js
const MaxHeap = function () {
  this.heap = [];
  this.parent = index => {
    return Math.floor((index - 1) / 2);
  }
  this.insert = element => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }
  this.heapifyUp = index => {
    let currentIndex = index,
    parentIndex = this.parent(currentIndex);
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  this.print = () => {
    return this.heap;
  }
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
