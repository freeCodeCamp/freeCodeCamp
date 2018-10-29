---
title: Navigation
localeTitle: Navegación
---
## Vim Navigation

### Movimiento basico

Hay muchas formas de mover el cursor en Vim, pero estos movimientos básicos permitirán Los nuevos usuarios se sentirán cómodos utilizando el modo normal para la navegación de archivos.

*   En el modo normal, las teclas `h` , `j` , `k` , `l` corresponden a mover el cursor un carácter a la izquierda, abajo, arriba y derecha, respectivamente.
    
*   Para navegar una palabra a la vez, las teclas `w` y `b` moverán el cursor a el comienzo de la siguiente palabra, o el comienzo de la palabra anterior. La `e` La tecla moverá el cursor al final de la palabra actual.
    
*   Para ir al principio de la línea actual, escriba `0` y para ir al final de la línea actual, escriba `$` .
    
*   Finalmente, para moverse a la primera línea en el archivo, escriba `gg` , y para moverse a la primera línea del archivo. última línea en el archivo, escriba `G` .
    

En resumen:

```vim
h   moves one character left 
 j   moves one row down 
 k   moves one row up 
 l   moves one character right 
 
 w   moves to the beginning of the next word 
 b   moves to the beginning of the previous word 
 e   moves to the end of the current word 
 
 0   moves to the beginning of the current line 
 $   moves to the end of the current line 
 :n  moves to line n (ex. :23 moves to line 23) can also use nG 
 
 ZZ  moves to the center of the line your on 
 H   moves to the top of the screen 
 M   moves to the middle of the screen 
 L   moves to the bottom of the screen 
 
 gg  moves to the first line in the file 
 G   moves to the last line in the file 

```