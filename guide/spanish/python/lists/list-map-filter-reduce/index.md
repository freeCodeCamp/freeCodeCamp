---
title: Map, Reduce, Filter
localeTitle: Mapa, Reducir, Filtrar
---# Mapa, Reducir y Filtrar

La mayoría de los ingenieros trabajan con listas para procesar la lista de pedidos / usuarios, etc. El análisis de las listas puede complicarse y desordenarse rápidamente si se usan varios bucles for y loops anidados. Por lo tanto, estos métodos anteriores pueden simplificar el uso de las operaciones de lista.

## Mapa

Si su tarea es aplicar un método específico a cada elemento de una lista, el mapa será útil. Supongamos que tiene una lista de valores de grado y desea convertir todos estos valores en una lista de valores en unidades Fahrenheit.

#### Ejemplo de uso

```py
inputs = [10,32,5,40,25] 
 
 def degreesToFahren(deg): 
    fahrenheit = (9.0/5)*deg +32 
    return fahrenheit 
 
 # The most common way of doing this 
 result=[] 
 for i in inputs: 
    iTofahren = degreesToFahren(i) 
    result.append(iTofahren) 
 print(result)   # [50.0, 89.6, 41.0, 104.0, 77.0] 
```

```py
# Using Map 
 result = list(map(degreesToFahren,inputs)) 
 print(result) # [50.0, 89.6, 41.0, 104.0, 77.0] 
```

Como habrás notado, el uso de mapas es simplemente una operación de una sola línea. Generalmente, si tiene datos = `[a1,a2,...,an]` y una función `f()` , entonces `map(f,data):` devuelve un iterador sobre `f(a1),f(a2)...f(an).` use `list()` para convertir el objeto iterador en una lista de python.

## Filtrar

La función de filtro elimina los datos de una lista que necesita / no necesita, de ahí el nombre. Supongamos que desea filtrar una lista según los valores que no necesita, por ejemplo, valores superiores a 2.

#### Ejemplo de uso

```py
data = [1.2,2.5,5.8,0.4,4.7,9.9] 
 result = list(filter(lambda x:x > 2,data)) 
 print(result) 
```

#### Salida
```
[2.5, 5.8, 4.7, 9.9] 
```

Este también es un simple 1 liner similar a la función map () anterior. Consulte el tutorial sobre las funciones de lambda si encuentra este término desconocido.

## Reducir

Del creador de Python, Guido van Rossum. `"Use functools.reduce if you really need it; however, 99% of the time an explicit for loop is more readable"`

Lo que generalmente hace es aplicar una función `f()` a elementos de datos en una lista y usar ese resultado para el siguiente valor en la lista. Visualmente,

Datos = \[a 1 , a 2 ,…, a n \] función = f (x, y)

reducir (f, datos): Paso 1: val 1 = f (a 1 , a 2 ) Paso 2: val 2 = f (val 1 , a 3 ) Paso 3: val 3 = f (val 2 , a 4 ) . . . Paso n-1: val n-1 = f (val n-2 , a n )

Por ejemplo, usted quiere multiplicar todos los números en una lista.

#### Ejemplo de uso

```py
from functools import reduce 
 
 input = [1,2,3,4,5,6] 
 multiplier = lambda x,y:x*y 
 answer = reduce(multiplier,input) 
 print(answer) 
```

#### Salida
```
720 
```

Sin embargo, lo anterior podría calcularse utilizando un bucle simple y el uso de estos métodos está sujeto a preferencias.

#### Más información:

La documentación oficial de los métodos anteriores se puede encontrar en http://book.pythontips.com/en/latest/map\_filter.html