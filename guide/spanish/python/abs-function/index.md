---
title: Python Abs Function
localeTitle: Función Abs Python
---
`abs()` es una función incorporada en Python 3, para calcular el valor absoluto de cualquier número. El valor absoluto de un número repesenta matemáticamente su magnitud numérica, es decir, su distancia del 0.

## Argumento

Toma un argumento `x` que puede ser un entero (`int`), un decimal (`float`) o un número complejo (de la forma `a + bj`).

## Valor de retorno

El valor de retorno será un número no negativo, determinado por:

- `x` si `x` es mayor o igual a 0.
- `-x` si `x` es menor a 0.
- `sqr(a**2 + b** 2)` si es un número complejo (siendo este el valor de su módulo).

El tipo numérico del valor a retornar dependerá también del argumento entregado. Para números reales este valor mantendrá el tipo numérico del argumento, y para números complejos entregará un número flotante (`float`).

## Ejemplo de código

```python
print(abs(3.4)) # prints 3.4
 print(abs(-6)) # prints 6
 print(abs(3 + 4j)) # prints 5.0, because |3 + 4j| = 5
```

[🚀 Ejecutar Código](https://repl.it/CL8k/0)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#abs)

### Fuentes

1.  [La matematica es divertida. Accedido: 25 de octubre de 2017](https://www.mathsisfun.com/numbers/absolute-value.html)
