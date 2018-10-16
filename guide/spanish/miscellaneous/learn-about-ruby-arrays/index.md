---
title: Learn About Ruby Arrays
localeTitle: Aprenda acerca de matrices de rubí
---
### Lo esencial:

*   Las matrices son una lista de elementos indexados almacenados dentro de los corchetes `<a href='http://ruby-doc.org/core-2.2.0/Array.html' target='_blank' rel='nofollow'>]` .
*   Ruby usa indexación de base cero. Esto significa que el primer elemento de la matriz se almacena en el número de índice `0` , luego el segundo está en el número de índice `1` y, por lo tanto, aumenta en valores de 1 por cada elemento adicional almacenado en la matriz.
*   Las matrices se pueden crear usando la sintaxis `[]` o `Array.new` .
*   Ruby tiene muchos métodos integrados para realizar operaciones en matrices, como invertir o encontrar un elemento almacenado en la matriz.

## Ejemplos:
```
arr = [1,2,3] 
 # is equivalent to: 
 arr = Array.new(3) 
 arr[0] = 1 
 arr[1] = 2 
 arr[2] = 3 
 # is also equivalent to: 
 arr = Array(1..3) 
 # All three of these examples return: 
 [1,2,3] 
```

## Referencias:

*   [La documentación oficial de Ruby para arrays](https://docs.ruby-lang.org/en/2.0.0/Array.html) .