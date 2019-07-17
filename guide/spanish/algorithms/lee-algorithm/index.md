---
title: Lee's Algorithm
localeTitle: Algoritmo de Lee
---
## Algoritmo de Lee

El algoritmo de Lee es una solución posible para problemas de enrutamiento de laberinto. Siempre da una solución óptima, si existe, pero es Lento y requiere gran memoria para un diseño denso.

### Entendiendo como funciona

El algoritmo es un algoritmo basado en `breadth-first` que usa `queues` para almacenar los pasos. Por lo general, utiliza los siguientes pasos:

1.  Elija un punto de partida y agréguelo a la cola.
2.  Agregue las celdas vecinas válidas a la cola.
3.  Elimine la posición en la que se encuentra de la cola y continúe con el siguiente elemento.
4.  Repita los pasos 2 y 3 hasta que la cola esté vacía.

### Implementación

C ++ ya tiene la cola implementada en la biblioteca `<queue>` , pero si está utilizando algo más, puede implementar tu propia versión de la cola.

Código C ++:

```cpp
int dl[] = {-1, 0, 1, 0}; // these arrays will help you travel in the 4 directions more easily 
 int dc[] = {0, 1, 0, -1}; 
 
 queue<int> X, Y; // the queues used to get the positions in the matrix 
 
 X.push(start_x); //initialize the queues with the start position 
 Y.push(start_y); 
 
 void lee() 
 { 
  int x, y, xx, yy; 
  while(!X.empty()) // while there are still positions in the queue 
  { 
    x = X.front(); // set the current position 
    y = Y.front(); 
    for(int i = 0; i < 4; i++) 
    { 
      xx = x + dl[i]; // travel in an adiacent cell from the current position 
      yy = y + dc[i]; 
      if('position is valid') //here you should insert whatever conditions should apply for your position (xx, yy) 
      { 
          X.push(xx); // add the position to the queue 
          Y.push(yy); 
          mat[xx][yy] = -1; // you usually mark that you have been to this position in the matrix 
      } 
 
    } 
 
    X.pop(); // eliminate the first position, as you have no more use for it 
    Y.pop(); 
 
  } 
 
 
 } 

```