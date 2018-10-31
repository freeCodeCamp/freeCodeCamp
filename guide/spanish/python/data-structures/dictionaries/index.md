---
title: The Python Dict
localeTitle: El Dict Python
---
Un Diccionario (también conocido como "dict") en python es un tipo de datos incorporado que se puede usar para almacenar pares **`key-value`** . Esto le permite tratar un **`dict`** como si fuera una _base_ de _datos_ para almacenar y organizar datos.

Lo especial de los diccionarios es la forma en que se implementan. La estructura tipo tabla de hash facilita la comprobación de existencia, lo que significa que podemos determinar fácilmente si una clave específica está presente en el diccionario sin necesidad de examinar cada elemento El intérprete de Python puede simplemente ir a la clave de ubicación y verificar si la clave está allí.

Los diccionarios pueden usar casi cualquier tipo de datos arbitrarios, como cadenas, enteros, etc., para las claves. Sin embargo, los valores que no son hashable, es decir, los valores que contienen listas, diccionarios u otros tipos mutables (que se comparan por valor en lugar de por identidad de objeto) no se pueden usar como claves. Los tipos numéricos utilizados para las teclas obedecen las reglas normales para la comparación numérica: si dos números se comparan de la misma manera (como `1` y `1.0` ), se pueden usar indistintamente para indexar la misma entrada del diccionario. (Sin embargo, tenga en cuenta que dado que las computadoras almacenan números de punto flotante como aproximaciones, generalmente no es aconsejable usarlos como claves de diccionario).

Un requisito más importante de un diccionario es que las claves **deben** ser únicas.  
Para crear un diccionario vacío solo usa un par de llaves:

```python
    >>> teams = {} 
    >>> type(teams) 
    >>> <class 'dict'> 
```

  
Para crear un diccionario no vacío con algunos valores iniciales, coloque una lista separada por comas de pares clave-valor:

```python
    >>> teams = {'barcelona': 1875, 'chelsea': 1910} 
    >>> teams 
    {'barcelona': 1875, 'chelsea': 1910} 
```

Es fácil agregar pares clave-valor a un diccionario existente:

```python
    >>> teams['santos'] = 1787 
    >>> teams 
    {'chelsea': 1910, 'barcelona': 1875, 'santos': 1787} # Notice the order - Dictionaries are unordered ! 
    >>> # extracting value - Just provide the key 
    ... 
    >>> teams['barcelona'] 
    1875 
```

  
**`del`** operador se utiliza para eliminar un par clave-valor del dict. En los escenarios donde una clave que ya está en uso se usa de nuevo para almacenar valores, el valor antiguo asociado con esa clave se pierde por completo. Además, tenga en cuenta que es un error extraer el valor utilizando una clave que no existe.

```python
    >>> del teams['santos'] 
    >>> teams 
    {'chelsea': 1910, 'barcelona': 1875} 
    >>> teams['chelsea'] = 2017 # overwriting 
    >>> teams 
    {'chelsea': 2017, 'barcelona': 1875} 
```

  
**`in`** palabra clave se puede utilizar para verificar si existe una clave en el dict o no:

```python
    >>> 'sanots' in teams 
    False 
    >>> 'barcelona' in teams 
    True 
    >>> 'chelsea' not in teams 
    False 
```

  
**`keys`** es un _método_ incorporado que se puede usar para obtener las claves de un diccionario determinado. Para extraer las claves presentes en un dict como listas:

```python
    >>> club_names = list(teams.keys()) 
    >>> club_names 
    ['chelsea', 'barcelona'] 
```

  
Otra forma de crear un diccionario es mediante el método **`dict()`** :

```python
    >>> players = dict( [('messi','argentina'), ('ronaldo','portugal'), ('kaka','brazil')] ) # sequence of key-value pair is passed 
    >>> players 
    {'ronaldo': 'portugal', 'kaka': 'brazil', 'messi': 'argentina'} 
    >>> 
    >>> # If keys are simple strings, it's quite easier to specify pairs using keyword arguments 
    ... 
    >>> dict( totti = 38, zidane = 43 ) 
    {'zidane': 43, 'totti': 38} 
```

Las comprensiones de Dict también se pueden utilizar para crear diccionarios a partir de expresiones de valor y clave arbitrarias:

```python
    >>> {x: x**2 for x in (2, 4, 6)} 
    {2: 4, 4: 16, 6: 36} 
```

**Bucle en Diccionario**  
Para simplemente pasar las claves en el diccionario, en lugar de las claves y valores:

```python
    >>> d = {'x': 1, 'y': 2, 'z': 3} 
    >>> for key in d: 
    ...     print(key) # do something 
    ... 
    x 
    y 
    z 
```

Para recorrer tanto la clave como el valor, puede utilizar lo siguiente:  
Para Python 2.x:

```python
    >>> for key, item in d.iteritems(): 
    ...     print items 
    ... 
    1 
    2 
    3 
```

Use **`items()`** para Python 3.x:

```python
    >>> for key, item in d.items(): 
    ...     print(key, items) 
    ... 
    x 1 
    y 2 
    z 3 

```