---
id: 587d825a367417b2b2512c8a
title: Insert an Element into a Max Heap
localeTitle: Insertar un elemento en un montón máximo
challengeType: 1
---

## Description
<section id='description'> 
Ahora vamos a pasar a otra estructura de datos de árbol, el montón binario. Un montón binario es un árbol binario parcialmente ordenado que satisface la propiedad de montón. La propiedad del montón especifica una relación entre los nodos padre e hijo. Puede tener un montón máximo, en el que todos los nodos principales son mayores o iguales que sus nodos secundarios, o un montón mínimo, en el que lo contrario es cierto. Los montones binarios también son árboles binarios completos. Esto significa que todos los niveles del árbol están completamente llenos y si el último nivel está parcialmente lleno, se llenará de izquierda a derecha. 
Mientras que los montones binarios se pueden implementar como estructuras de árbol con nodos que contienen referencias a la izquierda y a la derecha, el orden parcial de acuerdo con la propiedad del montón nos permite representar el montón con una matriz. Lo que nos interesa es la relación padre-hijo y con aritmética simple podemos calcular los hijos de cualquier padre y el padre de cualquier nodo hijo. 
Por ejemplo, considere esta representación matricial de un montón binario mínimo: 
<code>[ 6, 22, 30, 37, 63, 48, 42, 76 ]</code> 
El nodo raíz es el primer elemento, 6. Sus hijos son 22 y 30. Si observamos la relación entre los índices de matriz de estos valores, para el índice i, los hijos son 2 * i + 1 y 2 * i + 2. Del mismo modo, el elemento en el índice 0 es el padre de estos dos hijos en los índices 1 y 2. Más generalmente, podemos encontrar el padre de un nodo en cualquier índice con lo siguiente: (i - 1) / 2. Estos patrones se mantendrán como verdaderos a medida que el árbol binario crezca a cualquier tamaño. Finalmente, podemos hacer un ligero ajuste para facilitar aún más esta aritmética al omitir el primer elemento de la matriz. Al hacer esto, se crea la siguiente relación para cualquier elemento en un índice dado i: 
Ejemplo Representación de matriz: 
<code>[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]</code> 
Hijo de un elemento a la izquierda: i * 2 
El elemento derecho de un elemento: i * 2 + 1 
El elemento primario de un elemento: i / 2 
Una vez que encierre su cabeza alrededor de las matemáticas, usar una representación de matriz es muy útil porque las ubicaciones de los nodos se pueden determinar rápidamente con esta aritmética y el uso de la memoria disminuye. porque no es necesario mantener las referencias a los nodos secundarios. 
Instrucciones: Aquí crearemos un montón máximo. Comience simplemente creando un método de inserción que agregue elementos a nuestro montón. Durante la inserción, es importante mantener siempre la propiedad de montón. Para un montón máximo, esto significa que el elemento raíz siempre debe tener el mayor valor en el árbol y todos los nodos primarios deben ser mayores que sus secundarios. Para una implementación de matriz de un montón, esto normalmente se logra en tres pasos: 
Agregue el nuevo elemento al final de la matriz. 
Si el elemento es más grande que sus padres, cámbielos. 
Continúa cambiando hasta que el nuevo elemento sea más pequeño que su padre o llegues a la raíz del árbol. 
Finalmente, agregue un método de impresión que devuelva una matriz de todos los elementos que se han agregado al montón. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos MaxHeap existe.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() }; return (typeof test == "object")})(), "The MaxHeap data structure exists.");'
  - text: MaxHeap tiene un método llamado insertar.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.insert == "function")})(), "MaxHeap has a method called insert.");'
  - text: MaxHeap tiene un método llamado imprimir.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.print == "function")})(), "MaxHeap has a method called print.");'
  - text: El método de inserción agrega elementos de acuerdo con la propiedad max heap.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; test.insert(50); test.insert(100); test.insert(700); test.insert(32); test.insert(51); let result = test.print(); return ((result.length == 5) ? result[0] == 700 : result[1] == 700) })(), "The insert method adds elements according to the max heap property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var MaxHeap = function() {
  // change code below this line
  // change code above this line
};
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
