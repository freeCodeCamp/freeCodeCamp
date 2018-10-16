---
title: The Python Range
localeTitle: El rango de Python
---
## Rangos de Python

En lugar de ser una función, un rango es en realidad un [tipo de secuencia inmutable](https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types) y se usa comúnmente para hacer un bucle un número específico de veces en los bucles.

**Creación:**

`ranges` se crean utilizando el constructor de `range` . Los parámetros para el constructor son:

*   `start` : primer valor inclusivo del rango (entero opcional, predeterminado en 0).
*   `stop` : valor de parada exclusivo, el rango se detiene cuando se proporcionará este valor o mayor (entero necesario).
*   `step` : la cantidad agregada al valor actual para obtener el siguiente valor (entero opcional, predeterminado en 1).

```python
>>> range(10)          # Only the stop parameter is required. 
 range(0, 10) 
 >>> range(0, 10)       # Default for start parameter is 0. 
 range(0, 10) 
 >>> range(0, 10, 1)    # Default for step is 1\. Start parameter is required if 
 step is needed. 
 range(0, 10) 
```

**Ejemplos:**

Como los `ranges` son iterables, se pueden pasar a la `list` y a los constructores de `tuple` para crear esos tipos de secuencias. Usando este hecho, podemos visualizar algunos ejemplos:

```python
>>> list(range(10))     # range as argument for list constructor. 
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
 >>> tuple(range(10))    # range as argument for tuple constructor. 
 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) 
```

`ranges` longitud cero:

```python
>>> list(range(10, 0))        # start greater than stop with postive step. 
 [] 
 >>> list(range(10, 10))       # start equal to stop with postive step. 
 [] 
 >>> list(range(10, 10, -1))   # start equal to stop with negative step. 
 [] 
 >>> list(range(0, 10, -1))    # start less than stop with negative step. 
 [] 
```

`ranges` con argumentos de paso:

```python
>>> list(range(0, 10, 2))       # next value would be 10, stops at 8. 
 [0, 2, 4, 6, 8] 
 >>> list(range(0, 10, 3))       # next value would be 12, stops at 9. 
 [0, 3, 6, 9] 
 >>> list(range(0, 10, 4))       # next value would be 12, stops at 8. 
 [0, 4, 8] 
 >>> list(range(10, 0, -1))      # negative step makes decreasing ranges. 
 [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 
 >>> list(range(-5, -30, -3))    # negative integers are valid arguments. 
 [-5, -8, -11, -14, -17, -20, -23, -26, -29] 
```

**Beneficios:**

La ventaja de utilizar el `range` es que, independientemente del tamaño del rango especificado, solo se necesita una pequeña cantidad de memoria para almacenar el `range` , los valores de inicio, parada y paso. Los valores individuales de los `ranges` se calculan por iteración.

```python
>>> import sys 
 >>> a_range = range(1000000) 
 >>> a_list = list(a_range) 
 >>> a_tuple = tuple(a_range) 
 >>> sys.getsizeof(a_range) 
 48 
 >>> sys.getsizeof(a_list) 
 9000112 
 >>> sys.getsizeof(a_tuple) 
 8000048 
```

### Más información:

[Python Doc - Rangos](https://docs.python.org/3/library/stdtypes.html#ranges)

**TODO: Métodos que los `ranges` implementan y no implementan.**