---
title: Python Abs Function
localeTitle: Función Abs Python
---
`abs()` es una función incorporada en Python 3, para calcular el valor absoluto de cualquier número. El valor absoluto de un número "significa solo a qué distancia está un número de 0" 1 Toma un argumento `x` . El argumento puede ser incluso un [número complejo](https://docs.python.org/3.0/library/cmath.html) , y en ese caso se devuelve su [módulo](http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf) .

## Argumento

Toma un argumento `x` : un entero, un decimal o un número complejo.

## Valor de retorno

El valor de retorno sería un número positivo. Incluso si se pasa un número complejo, devolvería su magnitud, calculada según el álgebra de números complejos.

## Ejemplo de código

```python
print(abs(3.4)) # prints 3.4 
 print(abs(-6)) # prints 6 
 print(abs(3 + 4j)) # prints 5, because |3 + 4j| = 5 
```

[🚀 Ejecutar Código](https://repl.it/CL8k/0)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#abs)

### Fuentes

1.  [La matematica es divertida. Accedido: 25 de octubre de 2017](https://www.mathsisfun.com/numbers/absolute-value.html)