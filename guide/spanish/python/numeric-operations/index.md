---
title: Python Numeric Operations
localeTitle: Operaciones Numéricas de Python
---
[Python Docs - Operaciones Numéricas](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

Python es totalmente compatible con aritmética mixta: cuando un operador aritmético binario tiene operandos de diferentes tipos numéricos, el operando con el tipo "más estrecho" se amplía al del otro, donde el entero es más estrecho que el punto flotante, que es más estrecho que complejo. Las comparaciones entre números de tipo mixto usan la misma regla. [2\] Los constructores int (), float () y complex () se pueden usar para producir números de un tipo específico.](https://docs.python.org/3/library/functions.html#abs)

Todos los tipos numéricos (excepto los complejos) admiten las siguientes operaciones, ordenadas por prioridad ascendente (todas las operaciones numéricas tienen una prioridad más alta que las operaciones de comparación):

Operacion | Resultados | Notas | Documentación completa  
\----------------- | -------------------------------------------------- ------------------------- | ------ | -------------------------------------------------- ---------------------  
`x + y` | suma de x y y | |  
`x - y` | diferencia de x y y | |  
`x * y` | producto de x y y | |  
`x / y` | cociente de x y y | |  
`x // y` | cociente piso de xey | (1) |  
`x % y` | resto de x / y | (2)  
`-x` | x negado | |  
`+x` | x sin cambios | |  
`abs(x)` | valor absoluto o magnitud de x | | \[ `abs()`  
`int(x)` | x convertido a entero | (3) (6) | [`int()`](https://docs.python.org/3/library/functions.html#int)  
`float(x)` | x convertido a punto flotante | (4) (6) | [`float()`](https://docs.python.org/3/library/functions.html#float)  
`complex(re, im)` | un número complejo con parte real re, parte imaginaria im. Im por defecto a cero. | (6) | [`complex()`](https://docs.python.org/3/library/functions.html#complex)  
`c.conjugate()` | conjugado del número complejo c | |  
`divmod(x, y)` | el par (x // y, x% y) | (2) | [`divmod()`](https://docs.python.org/3/library/functions.html#divmod)  
`pow(x, y)` | x al poder y | (5) | [`pow()`](https://docs.python.org/3/library/functions.html#pow)  
`x ** y` | x al poder y | (5)

**Notas:**

1.  También se conoce como división entera. El valor resultante es un entero entero, aunque el tipo del resultado no es necesariamente int. El resultado siempre se redondea hacia menos infinito: `1//2` es `0` , `(-1)//2` es `-1` , `1//(-2)` es `-1` , y `(-1)//(-2)` es `0` .
    
2.  No para números complejos. En su lugar, convierta a flotadores usando `abs()` si es apropiado.
    
3.  La conversión de punto flotante a entero puede redondear o truncar como en C; vea las funciones [`math.floor()`](https://docs.python.org/3/library/math.html#math.floor) y [`math.ceil()`](https://docs.python.org/3/library/math.html#math.ceil) para conversiones bien definidas.
    
4.  `float` también acepta las cadenas `“nan”` e `“inf”` con un prefijo opcional `“+”` o `“-”` para Not a Number (NaN) e infinito positivo o negativo.
    
5.  Python define `pow(0, 0)` y `0 ** 0` como `1` , como es común en los lenguajes de programación.
    
6.  Los literales numéricos aceptados incluyen los dígitos del 0 al 9 o cualquier equivalente de Unicode (puntos de código con la propiedad `Nd` ).
    

> Consulte [Tipo numérico derivado de Unicode](http://www.unicode.org/Public/8.0.0/ucd/extracted/DerivedNumericType.txt) para obtener una lista completa de puntos de código con la propiedad `Nd` .