---
title: Flood Fill Algorithm
localeTitle: Algoritmo de relleno de inundación
---
## Algoritmo de relleno de inundación

El relleno de inundación es un algoritmo utilizado principalmente para determinar un área limitada conectada a un nodo determinado en una matriz multidimensional. Es un parecido cercano a la herramienta de cubeta en programas de pintura.

La implementación más aproximada del algoritmo es una función recursiva basada en pila, y de eso vamos a hablar siguiente.

### ¿Como funciona?

El problema es bastante simple y generalmente sigue estos pasos:

1.  Tomar la posición del punto de partida.
2.  Decida si desea ir en 4 direcciones ( **N, S, W, E** ) u 8 direcciones ( **N, S, W, E, NW, NE, SW, SE** ).
3.  Elija un color de reemplazo y un color de destino.
4.  Viaja en esas direcciones.
5.  Si la ficha en la que caes es un objetivo, reaplícala con el color elegido.
6.  Repita 4 y 5 hasta que haya estado en todas partes dentro de los límites.

Tomemos como ejemplo la siguiente matriz:

![texto alternativo](https://github.com/firealex2/Codingame/blob/master/small%208%20grid%20paintefffd.png)

El cuadrado rojo es el punto de partida y los cuadrados grises son los llamados muros.

Para más detalles, aquí hay un código que describe la función:

```cpp
int wall = -1; 
 
 void flood_fill(int pos_x, int pos_y, int target_color, int color) 
 { 
 
   if(a[pos_x][pos_y] == wall || a[pos_x][pos_y] == color) // if there is no wall or if i haven't been there 
      return;                                              // already go back 
 
   if(a[pos_x][pos_y] != target_color) // if it's not color go back 
      return; 
 
   a[pos_x][pos_y] = color; // mark the point so that I know if I passed through it. 
 
   flood_fill(pos_x + 1, pos_y, color);  // then i can either go south 
   flood_fill(pos_x - 1, pos_y, color);  // or north 
   flood_fill(pos_x, pos_y + 1, color);  // or east 
   flood_fill(pos_x, pos_y - 1, color);  // or west 
 
   return; 
 
 } 
```

Como se ve arriba, mi punto de partida es (4,4). Después de llamar a la función para las coordenadas de inicio **x = 4** e **y = 4** , Puedo comenzar a verificar si no hay pared o color en el lugar. Si eso es válido, señalo el lugar con un **"color"** y comienza a revisar los otros cuadrados adiacentes.

Hacia el sur llegaremos al punto (5,4) y la función se ejecutará de nuevo.

### Problema de ejercicio

Siempre consideré que resolver un (o más) problema (s) usando un algoritmo recién aprendido es la mejor manera de entenderlo. el concepto.

Así que aquí está uno:

**Declaración:**

En una matriz bidimensional se le da un número n de **"islas"** . Intenta encontrar el área más grande de una isla y El número de la isla correspondiente. 0 marcas de agua y cualquier otra x entre 1 y n marca una casilla de la superficie correspondiente a la isla x.

**Entrada**

*   **n** - el número de islas.
*   **l, c** - las dimensiones de la matriz.
*   los próximos **l** líneas, números **c** dando el **l** º fila de la matriz.

**Salida**

*   **i** - el número de la isla con el área más grande.
*   **A** - el área de la isla **i** '.

**Ex:**

Tienes la siguiente entrada:

```cpp
2 4 4 
 0 0 0 1 
 0 0 1 1 
 0 0 0 2 
 2 2 2 2 
```

Por lo que obtendrá la isla no. 2 como la isla más grande con el área de 5 plazas.

### Consejos

El problema es bastante fácil, pero aquí hay algunos consejos:
```
1. Use the flood-fill algorithm whenever you encounter a new island. 
 2. As opposed to the sample code, you should go through the area of the island and not on the ocean (0 tiles). 

```