---
title: Euler's Method
localeTitle: Método de Euler
---
# Método de Euler

El método de Euler es un procedimiento numérico de primer orden para resolver ecuaciones diferenciales ordinarias (EDO) con un valor inicial dado.

## El problema general del valor inicial

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn006.png)

## Metodología

El método de Euler utiliza la fórmula simple,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn3.png)

para construir la tangente en el punto `x` y obtener el valor de `y(x+h)` , cuya pendiente es,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn008.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/Euler.png)

En el método de Euler, puede aproximar la curva de la solución por la tangente en cada intervalo (es decir, por una secuencia de segmentos de línea corta), en los pasos de `h` .

_En general_ , si utiliza un tamaño de paso pequeño, la precisión de la aproximación aumenta.

## Formula general

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn7.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_2.png)

## Valor funcional en cualquier punto `b` , dado por `y(b)`

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn6.png)

dónde,

*   **n** = número de pasos
*   **h** = ancho del intervalo (tamaño de cada paso)

### Pseudocódigo

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_1.png)

## Ejemplo

Encuentra `y(1)` , dado

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn007.png)

Resolviendo analíticamente, la solución es _**y = e x**_ y `y(1)` = `2.71828` . (Nota: esta solución analítica es solo para comparar la precisión).

Usando el método de Euler, considerando `h` = `0.2` , `0.1` , `0.01` , puede ver los resultados en el diagrama a continuación.

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/comparison.png)

Cuando `h` = `0.2` , `y(1)` = `2.48832` (error = 8.46%)

Cuando `h` = `0.1` , `y(1)` = `2.59374` (error = 4.58%)

Cuando `h` = `0.01` , `y(1)` = `2.70481` (error = 0.50%)

Puedes notar, cómo mejora la precisión cuando los pasos son pequeños.

## Más información:

1.  [Métodos numéricos para resolver ecuaciones diferenciales](http://calculuslab.deltacollege.edu/ODE/7-C-1/7-C-1-h-c.html)
2.  [Método de euler](https://en.wikipedia.org/wiki/Euler_method)