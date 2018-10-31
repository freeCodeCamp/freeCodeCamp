---
title: Bitwise Operators
localeTitle: Operadores de Bitwise
---
`<<` , `>>` , `&` , `|` , `~` , y `^` son los operadores bitwise que operan en uno o más patrones de bits o números binarios al nivel de sus bits individuales.

## Y operador

`x & y`

Hace un "bitwise y". Cada bit de la salida es 1 si el bit correspondiente de x AND de y es 1, de lo contrario es 0.

## O operador

`x | y`

Hace un "bitwise o". Cada bit de la salida es 0 si el bit correspondiente de x AND de y es 0, de lo contrario es 1.

## Operador de complemento

`~ x`

Devuelve el complemento de x: el número que se obtiene al cambiar cada 1 por un 0 y cada 0 por un 1. Esto es lo mismo que -x - 1.

## Operador XOR

`x ^ y`

Hace un "bitwise exclusivo o". Cada bit de la salida es el mismo que el bit correspondiente en x si ese bit en y es 0, y es el complemento del bit en x si ese bit en y es 1.

## Desplazamiento aritmético izquierdo operador

`x << y`

Devuelve x con los bits desplazados a la izquierda por y lugares (y los nuevos bits en el lado derecho son ceros). Esto es lo mismo que multiplicar x por 2 \*\* y, conservando el signo del número. La mayoría de los compiladores lanzan una advertencia cuando cambias con un conteo> = sizeof (type). Generalmente terminas con un 0 cuando haces eso.

## Desplazamiento aritmético derecho operador

`x >> y`

Devuelve x con los bits desplazados a la derecha por y lugares. Esto es lo mismo que dividir x por 2 \*\* y para un entero sin signo. El desplazamiento hacia la derecha de un número con signo negativo tiene un comportamiento definido por la implementación. La mayoría de los compiladores lanzan una advertencia cuando cambias con un conteo> = sizeof (type). Si se desplaza hacia la derecha puede rellenar los bits "vacíos" con el Bit más significativo original (es decir, realizar una extensión de signo) o puede cambiar en ceros, según la plataforma y / o el compilador.

## Desplazamiento lógico derecho operador

`x >>> y`

Devuelve x con los bits desplazados a la derecha por y lugares. A diferencia del cambio aritmético, los cambios lógicos no prevén un signo. Por ejemplo: -2 representado en 8 bits sería 11111110 (porque el bit más significativo tiene un peso negativo). Desplazándolo hacia la derecha un bit usando el cambio aritmético le daría 11111111, o -1. Sin embargo, el cambio lógico hacia la derecha no le importa que el valor pueda representar un número; simplemente mueve todo a la derecha y rellena desde la izquierda con 0s. Cambiar nuestro -2 a la derecha con un cambio lógico daría 01111111. Este operador no está necesariamente presente en todos los idiomas.