---
title: Red Black Trees
localeTitle: Árboles negros rojos
---
## Árboles negros rojos

Red-Black Tree es un árbol de búsqueda binaria (BST) en el que todos los nodos siguen las siguientes reglas.

1.  Cada nodo tiene dos hijos, de color rojo o negro.
2.  Cada nodo de la hoja del árbol es siempre negro.
3.  Cada nodo rojo tiene sus dos hijos de color negro.
4.  No hay dos nodos rojos adyacentes (Un nodo rojo no puede tener un padre rojo o un hijo rojo).
5.  Cada ruta desde la raíz a un nodo de hoja de árbol tiene el mismo número de nodos negros (llamado "altura negra").

Estilo de referencia: ![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fibonacci_Tree_as_Red-Black_Tree.svg/2000px-Fibonacci_Tree_as_Red-Black_Tree.svg.png "Ejemplo de Fibonacci de arboles negros y rojos.")

### ¿Por qué los árboles rojo-negro?

La mayoría de las operaciones BST (p. Ej., Search, max, min, insert, delete .. etc) toman O (h) tiempo donde h es la altura del BST. El costo de estas operaciones puede convertirse en O (n) para un árbol binario sesgado. Si nos aseguramos de que la altura del árbol permanezca en O (Logn) después de cada inserción y eliminación, podemos garantizar un límite superior de O (Logn) para todas estas operaciones. La altura de un árbol Negro Rojo es siempre O (Logn) donde n es el número de nodos en el árbol.

### Comparación con AVL Tree

Los árboles AVL son más equilibrados en comparación con los árboles rojos y negros, pero pueden causar más rotaciones durante la inserción y eliminación. Entonces, si su aplicación involucra muchas inserciones y eliminaciones frecuentes, entonces se deben preferir los árboles Rojo Negro. Y si las inserciones y eliminaciones son menos frecuentes y la búsqueda es más frecuente, entonces se debe preferir el árbol AVL sobre el Árbol Negro Rojo.

### Árbol inclinado a la izquierda rojo-negro

Un árbol rojo-negro (LLRB) que se inclina hacia la izquierda es un tipo de árbol de búsqueda binaria con equilibrio automático. Es una variante del árbol rojo-negro y garantiza la misma complejidad asintótica para las operaciones, pero está diseñado para ser más fácil de implementar.

### Propiedades de los árboles inclinados a la izquierda rojo-negro

Todos los algoritmos de árbol rojo-negro que se han propuesto se caracterizan por un tiempo de búsqueda en el peor de los casos limitado por un pequeño múltiplo constante del registro N en un árbol de N teclas, y el comportamiento observado en la práctica es típicamente el mismo múltiplo más rápido que el peor de los casos, cercano a los nodos N de registro óptimos examinados que se observarían en un árbol perfectamente equilibrado.

Específicamente, en un árbol 2-3 rojo-negro inclinado a la izquierda construido a partir de N teclas aleatorias: -> Una búsqueda exitosa aleatoria examina log2 N - 0.5 nodos. -> La altura promedio del árbol es de aproximadamente 2 log2 N

#### Más información:

*   [Video de algoritmos y estructuras de datos](https://www.youtube.com/watch?v=2Ae0D6EXBV4)