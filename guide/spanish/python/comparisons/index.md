---
title: Python Comparisons
localeTitle: Comparaciones de Python
---
[Python Docs - Comparaciones](https://docs.python.org/3/library/stdtypes.html#comparisons)

Hay ocho operaciones de comparación en Python. Todos tienen la misma prioridad (que es más alta que la de las operaciones booleanas). Las comparaciones pueden ser encadenadas arbitrariamente; por ejemplo, `x < y <= z` es equivalente a `x < y and y <= z` , excepto que `y` se evalúa solo una vez (pero en ambos casos `z` no se evalúa en absoluto cuando se encuentra que `x < y` es falso).

Esta tabla resume las operaciones de comparación:

Operacion | Sentido  
\--------- | -----------------------  
`<` | estrictamente menos que  
`<=` | Menos que o igual a `>` | estrictamente mayor que `>=` | Mayor qué o igual a `==` | igual a `!=` | no igual a `is` | identidad de objeto  
`is not` | identidad de objeto negado

Los objetos de diferentes tipos, excepto los diferentes tipos numéricos, nunca se comparan igual. Además, algunos tipos (por ejemplo, objetos de función) admiten solo una noción degenerada de comparación donde dos objetos de ese tipo son desiguales. Los operadores `<` , `<=` , `>` y `>=` generarán una excepción `TypeError` al comparar un número complejo con otro tipo numérico incorporado, cuando los objetos son de diferentes tipos que no pueden compararse, o en otros casos donde no hay definidos ordenando

Las instancias no idénticas de una clase normalmente se comparan como no iguales a menos que la clase defina el `__eq__()` .

Las instancias de una clase no pueden ordenarse con respecto a otras instancias de la misma clase u otros tipos de objetos, a menos que la clase defina suficientes métodos `__lt__()` , `__le__()` , `__gt__()` y `__ge__()` (en general , `__lt__()` y `__eq__()` son suficientes, si desea los significados convencionales de los operadores de comparación).

El comportamiento de los operadores `is` y `is not` puede ser personalizado; también se pueden aplicar a cualquiera de los dos objetos y nunca generar una excepción.

También podemos encadenar `<` y `>` operadores juntos. Por ejemplo, `3 < 4 < 5` devolverá `True` , pero `3 < 4 > 5` no. También podemos encadenar el operador de igualdad. Por ejemplo, `3 == 3 < 5` devolverá `True` pero `3 == 5 < 5` no lo hará.

### Comparaciones de igualdad - "es" vs "=="

En Python, hay dos operadores de comparación que nos permiten verificar si dos objetos son iguales. El operador `is` y el operador `==` . Sin embargo, hay una diferencia clave entre ellos!

La diferencia clave entre 'es' y '==' se puede resumir como:

*   `is` usado para comparar **identidad**
*   `==` se usa para comparar la **igualdad**

## Ejemplo

Primero, crea una lista en Python.

```python
myListA = [1,2,3] 
```

A continuación, crea una copia de esa lista.

```python
myListB = myListA 
```

Si usamos el operador '==' o el operador 'is', ambos darán como resultado una salida **True** .

```python
>>> myListA == myListB # both lists contains similar elements 
 True 
 >>> myListB is myListA # myListB contains the same elements 
 True 
```

Esto se debe a que myListA y myListB están apuntando a la misma variable de lista, que definí al principio de mi programa Python. Ambas listas son exactamente iguales, tanto en identidad como en contenido.

Sin embargo, ¿qué pasa si ahora creo una nueva lista?

```python
myListC = [1,2,3] 
```

La ejecución del operador `==` aún muestra que ambas listas son iguales, en términos de contenido.

```python
>>> myListA == myListC 
 True 
```

Sin embargo, la realización de la `is` operador ahora producir una `False` salida. Esto se debe a que myListA y myListC son dos variables diferentes, a pesar de que contienen los mismos datos. A pesar de que se ven iguales, son **diferentes** .

```python
>>> myListA is myListC 
 False # both lists have different reference 
```

Para resumir:

*   Una `is` salidas de expresión `True` si ambas variables están apuntando a la misma referencia
*   Una expresión `==` produce `True` si ambas variables contienen los mismos datos