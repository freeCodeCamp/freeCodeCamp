---
title: Python Powxy
localeTitle: Python Powxy
---
`pow(x, y, z)` es una función incorporada en Python 3 para calcular `x` a la potencia `y` , y si `z` está presente, devuelve `x` a la potencia `y` [módulo](https://processing.org/reference/modulo.html) `z` .

## Argumentos

Los argumentos deben tener tipos numéricos. Esta función toma dos argumentos, `x` e `y` , así como tres, `x` , `y` y `z` . Si `z` está presente, `x` e `y` deben ser de tipos enteros, y y deben ser no negativos.

## Regreso

Si `z` está presente, devuelve `x` a la potencia `y` módulo `z` . Si solo están presentes `x` e `y` , devuelve `x` a la potencia `y` (igual que `x**y` ).

## Ejemplo

```python
print(pow(2,4))    # prints 16 
 print(pow(10,-2))  # prints 0.01 
 print(pow(4,3,5))  # prints 4 
```

[🚀Código de ejecución](https://repl.it/CTGi)

[Documentacion oficial](https://docs.python.org/3/library/functions.html#pow)