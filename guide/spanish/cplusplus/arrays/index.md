---
title: C++ Arrays
localeTitle: Arrays C ++
---
## ¿Qué son las matrices?

Una matriz es una serie de elementos del mismo tipo de datos que se almacenan en ubicaciones de memoria contiguas y pueden referenciarse individualmente.

Por ejemplo, una matriz que contiene 5 valores enteros llamados números se declara así:

```C++
int numbers [5]; 
```

Inicialización:

```C++
//Initialization with entries: 
 int numbers [5] = {1, 2, 3, 4, 5}; 
 
 //Initialization with no values: 
 int numbers [5] = {}; 
 
 //Initialization with declaration: 
 int numbers [] = {1, 2, 3, 4, 5}; 
 //Note that here the number of values defines the size of the array. 
 //In the examples above, the size was fixed beforehand 
```

**Tenga** en **cuenta** que las matrices en C ++ no son permutables en tamaño, lo que significa que una vez que haya declarado una matriz con tamaño 5, no se puede ampliar o reducir. En caso de que realmente necesite una matriz más grande con las mismas entradas, tendría que copiar todas las entradas a una nueva matriz de mayor tamaño.

### Acceso:

Se puede acceder a los elementos de una matriz a través de la referencia de su posición en la matriz. (Comience contando desde 0).  
Ejemplo:

```C++
x = numbers[0]; // = 1. [0] == first position 
 numbers[2] = 55; // Sets the third position (3) to the new number 55 
 //numbers[] is now: {1, 2, 55, 4, 5} 

```