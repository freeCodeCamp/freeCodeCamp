---
title: Searching Linked Lists Versus Arrays
localeTitle: Búsqueda de listas enlazadas frente a matrices
---
## Búsqueda de listas enlazadas frente a matrices

Supongamos que tiene que buscar un elemento en una lista y matriz enlazada _sin clasificar_ . En ese caso, necesita hacer una búsqueda lineal (recuerde, sin clasificar). Realizar una búsqueda lineal de un elemento en cualquiera de las estructuras de datos será una operación O (n).

Ahora, si tiene una lista y una matriz vinculadas _ordenadas_ , aún puede buscar en ambas estructuras de datos en tiempo O (log n) utilizando la búsqueda binaria. Sin embargo, será un poco tedioso codificar mientras se usan listas vinculadas.

Las listas enlazadas generalmente se prefieren a las matrices donde la inserción es una operación frecuente. Es más fácil de insertar en listas vinculadas ya que solo cambia un puntero. Pero para insertar en una matriz (la mitad o el principio), necesita mover todos los elementos después del que insertó. Otro lugar donde debería usar listas vinculadas es donde el tamaño es incierto (no sabe el tamaño cuando está empezando), porque los arreglos tienen un tamaño fijo.

Las matrices proporcionan algunas ventajas sobre las listas enlazadas:

1.  Acceso aleatorio
2.  Menos memoria en comparación con las listas enlazadas
3.  Las matrices tienen mejor localidad de caché, lo que proporciona un mejor rendimiento

Depende completamente del caso de uso de si las matrices o las listas enlazadas son mejores.

### Más información:

*   Enfoque de un programador de mirar la lista vinculada vs matriz: [Geeks for Geeks](http://www.geeksforgeeks.org/programmers-approach-looking-array-vs-linked-list/)