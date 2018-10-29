---
title: Python Truth Value Testing
localeTitle: Prueba del valor de la verdad de Python
---
[Python Docs - Prueba de valor de verdad](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)

Cualquier objeto puede ser probado para valor de verdad, para uso en una condición `if` o `while` o como operando de una operación booleana como `and` , `or` , o `not` .

Los siguientes valores se consideran falsos:

*   `None`
*   `False`
*   cero de cualquier tipo numérico, por ejemplo, `0` , `0.0` , `0j` , `Decimal(0)` , `Fraction(0, 1)` .
*   cualquier secuencia vacía, por ejemplo, `''` , `()` , `[]` , `set()` , `range(0)` .
*   cualquier mapeo vacío, por ejemplo, `{}` .
*   instancias de clases definidas por el usuario, si la clase define un `__bool__()` o `__len__()` , cuando ese método devuelve `False` o `0` .

Todos los demás valores se consideran verdaderos, por lo que los objetos de muchos tipos siempre son verdaderos.

Las operaciones y las funciones incorporadas que tienen un resultado booleano siempre devuelven `0` o `False` para falso y `1` o `True` para verdadero, a menos que se indique lo contrario. (Excepción importante: las operaciones booleanas `or` y `and` siempre devuelven uno de sus operandos).