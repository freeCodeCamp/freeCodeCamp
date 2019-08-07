---
title: Dynamic Programming
localeTitle: Programación dinámica
---
## Programación dinámica

La Programación Dinámica (DP) es una técnica de programación para resolver problemas donde los cálculos de sus subproblemas se superponen: usted escribe su programa de manera que evite volver a calcular los problemas ya resueltos. Esta técnica, por lo general, se aplica junto con la memorización, que es una técnica de optimización en la que se almacenan en caché los resultados calculados anteriormente y se devuelve el resultado almacenado en caché cuando se necesita nuevamente el mismo cálculo.

Un ejemplo con la serie de Fibonacci que se define como:

`F(N) = F(N-1) + F(N-2)`

Este es el árbol para encontrar F (5):

![Árbol de la serie fibonacci](https://cdn-media-1.freecodecamp.org/imgr/59Rpw.png)

Para calcular F (5) tendrá que calcular muchas veces la misma F (i). Utilizando la recursividad:

```python
def fib(n) 
 { 
    if n <= 1: 
        return n 
    return fib(n-1) + fib(n-2); 
 } 
```

Y a continuación se muestra la solución optimizada (utilizando DP).

Para F (5), esta solución generará las llamadas mostradas en la imagen de arriba, ejecutándose en O (2 ^ N).

Aquí hay una solución optimizada que utiliza DP y memoización:

```python
lookup = {1 : 1, 2 : 1} # Create a lookup-table (a map) inizialized with the first 2 Fibonacci's numbers 
 
 def fib(n) 
 { 
    if n in lookup: # If n is already computed 
        return n # Return the previous computed solution 
    else 
        lookup[n] = fib(n-1) + fib(n-2) # Else, do the recursion. 
    return lookup[n] 
 } 
```

El almacenamiento en caché de las soluciones computadas en una tabla de búsqueda y la consulta antes de ir a la recursión permitirá que el programa tenga un tiempo de ejecución de O (N).

#### Más información:

[¿Qué es la programación dinámica en StackOverflow?](https://stackoverflow.com/questions/1065433/what-is-dynamic-programming) [Diferencia entre memoización y DP en StackOverflow](https://stackoverflow.com/questions/6184869/what-is-the-difference-between-memoization-and-dynamic-programming)