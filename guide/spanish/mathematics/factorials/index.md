---
title: Factorials
localeTitle: Factoriales
---
## Factoriales

### Definición de factorial

El factorial es multiplicarlo por cada intiger inferior y luego termina en uno. Si el número inicial es negativo, el resultado es infinito.

Un factorial de n , un entero no negativo, se define como:

¡norte! = 1 \* 2 \*… \* (n - 1) \* n

Un caso especial surge cuando n = 0 . A saber, 0! = 1 .

### Conveniencia de los factoriales

La definición anterior le proporciona comodidad en ciertos cálculos. Por ejemplo, los factoriales dentro de las fracciones a menudo se pueden simplificar de la siguiente manera:

Ejemplo 1: 7! / 5! = (1 \* 2 \* 3 \* 4 \* 5 \* 6 \* 7) / (1 \* 2 \* 3 \* 4 \* 5) = 6 \* 7 = 42

Ejemplo 2: (n + 1)! / n! = (1 \* 2 \*… \* n \* (n + 1)) / (1 \* 2 \*… \* n) = n + 1

### Definición alternativa

Alternativamente, los factoriales se pueden definir de la siguiente manera:

0! = 1

¡norte! = n \* (n - 1)! si n> 0

Esta definición recursiva significa exactamente lo mismo que la definición tradicional. Aplicando esto al segundo ejemplo anterior, obtenemos:

(n + 1)! / n! = (n + 1) \* n! / n! = n + 1

### Aparte: extensión a no enteros

Tenga en cuenta que el factorial como se definió anteriormente se aplica solo a los enteros no negativos. En realidad, hay una generalización de factoriales que se extiende también a los no enteros, que es la función Gamma. En particular, para cualquier número natural n , tienes n! = Gamma (n + 1) = n \* Gamma (n) .

Para más información, vea [Extensión de los valores factoriales a no enteros del argumento](https://en.wikipedia.org/wiki/Factorial#Extension_of_factorial_to_non-integer_values_of_argument) .

Un ejemplo complicado que muchos pueden no saber si es 0! = 1. Para más pruebas, vea el enlace en Más información.

#### Más información:

[Factoriales](http://www.purplemath.com/modules/factorial.htm)