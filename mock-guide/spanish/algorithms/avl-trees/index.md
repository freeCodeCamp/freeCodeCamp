---
title: AVL Trees
localeTitle: Árboles AVL
---
## Árboles AVL

Un árbol AVL es un subtipo de árbol de búsqueda binario.

Un BST es una estructura de datos compuesta por nodos. Cuenta con las siguientes garantías:

1.  Cada árbol tiene un nodo raíz (en la parte superior).
2.  El nodo raíz tiene cero o más nodos secundarios.
3.  Cada nodo secundario tiene cero o más nodos secundarios, y así sucesivamente.
4.  Cada nodo tiene hasta dos hijos.
5.  Para cada nodo, sus descendientes izquierdos son menores que el nodo actual, que es menor que los descendientes derechos.

Los árboles AVL tienen una garantía adicional:

6.  La diferencia entre la profundidad de los subárboles derecho e izquierdo no puede ser más de uno. Para mantener esta garantía, una implementación de una AVL incluirá un algoritmo para reequilibrar el árbol cuando agregar un elemento adicional alteraría esta garantía.

Los árboles AVL tienen un peor tiempo de búsqueda, inserción y eliminación de O (log n).

### Rotación a la derecha

![Rotación a la derecha del árbol AVL](https://raw.githubusercontent.com/HebleV/valet_parking/master/images/avl_right_rotation.jpg)

### Rotación a la izquierda

![Rotación izquierda del árbol AVL](https://raw.githubusercontent.com/HebleV/valet_parking/master/images/avl_left_rotation.jpg)

### Proceso de Inserción AVL

Hará una inserción similar a una inserción en el árbol de búsqueda binario normal. Después de la inserción, arregla la propiedad AVL usando rotaciones a la izquierda o derecha.

*   Si hay un desequilibrio en el hijo izquierdo del subárbol derecho, se realiza una rotación de izquierda a derecha.
*   Si hay un desequilibrio en el hijo izquierdo del subárbol izquierdo, se realiza una rotación a la derecha.
*   Si hay un desequilibrio en el elemento secundario derecho del subárbol derecho, se realiza una rotación hacia la izquierda.
*   Si hay un desequilibrio en el lado derecho del subárbol izquierdo, se realiza una rotación de derecha a izquierda.

#### Más información:

[YouTube - AVL Tree](https://www.youtube.com/watch?v=7m94k2Qhg68)

Un árbol AVL es un árbol de búsqueda binaria auto-equilibrado. Un árbol AVL es un árbol de búsqueda binario que tiene las siguientes propiedades: -> Los subárboles de cada nodo difieren en altura como máximo en uno. -> Cada subárbol es un árbol AVL.

El árbol AVL verifica la altura de los subárboles izquierdo y derecho y asegura que la diferencia no sea mayor que 1. Esta diferencia se denomina factor de balance. La altura de un árbol AVL es siempre O (Logn) donde n es el número de nodos en el árbol.

Rotaciones de árboles AVL: -

En el árbol AVL, después de realizar cada operación, como la inserción y la eliminación, debemos verificar el factor de equilibrio de cada nodo en el árbol. Si cada nodo satisface la condición del factor de equilibrio, entonces concluimos la operación, de lo contrario, debemos hacerlo equilibrado. Utilizamos las operaciones de rotación para equilibrar el árbol cuando este se desequilibra debido a cualquier operación.

Las operaciones de rotación se utilizan para hacer que un árbol esté equilibrado. Hay cuatro rotaciones y se clasifican en dos tipos: -> Rotación Izquierda Única (Rotación LL) En LL Rotation, cada nodo se mueve una posición hacia la izquierda desde la posición actual. -> Rotación única hacia la derecha (Rotación RR) En la rotación RR, cada nodo se mueve una posición hacia la derecha desde la posición actual. -> Rotación izquierda derecha (Rotación LR) La rotación LR es una combinación de una sola rotación a la izquierda seguida de una sola rotación a la derecha. En LR Rotation, primero cada nodo mueve una posición a la izquierda y luego una posición a la derecha desde la posición actual. -> Rotación derecha izquierda (Rotación RL) La rotación de RL es una combinación de una sola rotación a la derecha seguida de una sola rotación a la izquierda. En RL Rotation, primero, cada nodo mueve una posición a la derecha y luego una posición a la izquierda desde la posición actual.