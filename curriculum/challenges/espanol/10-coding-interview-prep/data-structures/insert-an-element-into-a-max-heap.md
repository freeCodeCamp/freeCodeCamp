---
id: 587d825a367417b2b2512c8a
title: Inserta un elemento en un montón máximo
challengeType: 1
forumTopicId: 301703
dashedName: insert-an-element-into-a-max-heap
---

# --description--

Ahora pasaremos a otra estructura de datos de árbol, la pila binaria. Una pila binaria es un árbol binario parcialmente ordenado que satisface la propiedad de la pila. La propiedad heap especifica una relación entre los nodos padre e hijo. Puede tener una pila máxima, en la que todos los nodos padre son mayores o iguales a sus nodos secundarios, o un montón de minutos, en el que lo contrario es cierto. Los montones binarios también son árboles binarios completos. Esto significa que todos los niveles del árbol se llenan completamente y si el último nivel está parcialmente llenado se llena de izquierda a derecha.

Mientras que los montones binarios pueden ser implementados como estructuras de árbol con nodos que contienen referencias izquierdas y derechas, el orden parcial según la propiedad del montón nos permite representar el montón con una matriz. La relación padre-hijos es lo que estamos interesados y con aritmética simple podemos calcular los hijos de cualquier padre y el padre de cualquier nodo hijo.

Por ejemplo, considere esta representación de matriz de un montón de minutos binarios:

```js
[ 6, 22, 30, 37, 63, 48, 42, 76 ]
```

El nodo raíz es el primer elemento, `6`. Sus hijos son `22` y `30`. Si analizamos la relación entre los índices de matriz de estos valores, para el índice `i` los hijos son `2 * i + 1` y `2 * i + 2`. Del mismo modo, el elemento en índice `0` es el padre de estos dos hijos en los índices `1` y `2`. Más generalmente, podemos encontrar el padre de un nodo en cualquier índice con lo siguiente: `Math.floor((i - 1) / 2)`. Estos patrones se mantendrán verdadero a medida que el árbol binario crece a cualquier tamaño. Por último, podemos hacer un ligero ajuste para facilitar aún más esta aritmética saltando el primer elemento de la matriz. Al hacer esto se crea la siguiente relación para cualquier elemento en un índice determinado `i`:

Ejemplo de representación de matrices:

```js
[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Un hijo izquierdo de un elemento: `i * 2`

Niño derecho de un elemento: `i * 2 + 1`

Padre de un elemento: `Math.floor(i / 2)`

Una vez envueltas la cabeza alrededor de las matemáticas, usar una representación de array es muy útil porque las ubicaciones de nodos se pueden determinar rápidamente con esta aritmética y el uso de memoria se disminuye porque no necesita mantener referencias a nodos secundarios.

# --instructions--

Instrucciones: Aquí crearemos una pila máxima. Comienza por crear un método `insert` que añade elementos a nuestra pila. Durante la inserción, es importante mantener siempre la propiedad del montón. Para una pila máxima, esto significa que el elemento raíz siempre debe tener el mayor valor en el árbol y todos los nodos padre deben ser mayores que sus hijos. Para una implementación de array de un montón, esto se logra típicamente en tres pasos:

<ol>
  <li>Agrega el nuevo elemento al final de la matriz.</li>
  <li>Si el elemento es más grande que su padre, conmutalos.</li>
  <li>Continúe cambiando hasta que el nuevo elemento sea más pequeño que el padre o llegue a la raíz del árbol.</li>
</ol>

Finalmente, añade un método `print` que devuelve un array de todos los elementos que se han añadido al heap.

# --hints--

Debe existir la estructura de datos de `MaxHeap`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MaxHeap` debe tener un método llamado `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MaxHeap` debe tener un método llamado `print`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

El método `insert` debe añadir elementos de acuerdo a la propiedad máxima del heap.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(50);
    test.insert(100);
    test.insert(700);
    test.insert(32);
    test.insert(51);
    test.insert(800);
    const result = test.print();
    const solution = JSON.stringify([null,800,51,700,32,50,100]);
    const solutionWithoutNull = JSON.stringify([800,51,700,32,50,100]);

    return (result.length == 6) ? (JSON.stringify(result) == solutionWithoutNull) : (JSON.stringify(result) == solution);
  })()
);
```

# --seed--

## --seed-contents--

```js
var MaxHeap = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var MaxHeap = function() {
    // Only change code below this line
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
    // Only change code above this line
};
```
