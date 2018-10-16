---
title: Boundary Fill
localeTitle: Relleno de límites
---
## Relleno de límites

El relleno de límites es el algoritmo que se usa con frecuencia en los gráficos de computadora para rellenar el color deseado dentro de un polígono cerrado que tiene el mismo límite Color por todos sus lados.

La implementación más aproximada del algoritmo es una función recursiva basada en la pila.

### Trabajando:

El problema es bastante simple y generalmente sigue estos pasos:

1.  Tome la posición del punto de partida y el color del límite.
2.  Decida si desea ir en 4 direcciones (N, S, W, E) u 8 direcciones (N, S, W, E, NW, NE, SW, SE).
3.  Elija un color de relleno.
4.  Viaja en esas direcciones.
5.  Si el píxel en el que se encuentra no es el color de relleno o el color del límite, reemplácelo con el color de relleno.
6.  Repita 4 y 5 hasta que haya estado en todas partes dentro de los límites.

### Ciertas restricciones:

*   El color del límite debe ser el mismo para todos los bordes del polígono.
*   El punto de partida debe estar dentro del polígono.

### Fragmento de código:
```
void boundary_fill(int pos_x, int pos_y, int boundary_color, int fill_color) 
 { 
   current_color= getpixel(pos_x,pos_y);  //get the color of the current pixel position 
   if( current_color!= boundary_color || currrent_color != fill_color) // if pixel not already filled or part of the boundary then 
   { 
     putpixel(pos_x,pos_y,fill_color);  //change the color for this pixel to the desired fill_color 
     boundary_fill(pos_x + 1, pos_y,boundary_color,fill_color);  // perform same function for the east pixel 
     boundary_fill(pos_x - 1, pos_y,boundary_color,fill_color);  // perform same function for the west pixel 
     boundary_fill(pos_x, pos_y + 1,boundary_color,fill_color);  // perform same function for the north pixel 
     boundary_fill(pos_x, pos_y - 1,boundary_color,fill_color);  // perform same function for the south pixel 
    } 
 } 
```

Desde el código dado puede ver que para cualquier píxel en el que se encuentre, primero verifica si se puede cambiar a fill\_color y luego lo hace. para sus vecinos hasta que se hayan verificado todos los píxeles dentro del límite.