---
title: Python Frozenset
localeTitle: Python Frozenset
---
**información básica de `frozenset`** El tipo `frozenset` es un conjunto de tipos integrado que es inmutable y hashable; su contenido no puede modificarse después de su creación; sin embargo, se puede utilizar como clave de diccionario o como elemento de otro conjunto. Los frozensets son conjuntos a excepción de que no se pueden cambiar, es decir, son inmutables.
```
>>> cities = frozenset(["Frankfurt", "Basel", "Freiburg"]) 
 >>> cities.add("Strasbourg") 
 Traceback (most recent call last): 
    File "<stdin>", line 1, in <module> 
 AttributeError: 'frozenset' object has no attribute 'add' 
 >>> 
```

constructor `frozenset` : `frozenset([iterable])` El iterable contiene elementos para inicializar el frozenset con. El iterable se puede configurar, diccionario, tupla, etc. Si no se pasa ningún parámetro, el método `frozenset()` devuelve un frozenset vacío.

**Ejemplos**
```
>>> vowels = ('a', 'e', 'i', 'o', 'u') 
 >>> fSet = frozenset(vowels) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'i', 'e', 'a', 'u', 'o'}) 
 >>> print("The empty frozen set is: ", frozenset()) 
 The empty frozen set is: frozenset() 
 >>> 
```

**Otro ejemplo**
```
>>> person = {"name": "John", "age": 23, "sex": "male"} 
 >>> fSet = frozenset(person) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'sex', 'name', 'age'}) 
 >>> 
```

**Información Adicional** [Python Frozenset ()](https://www.programiz.com/python-programming/methods/built-in/frozenset) [Tipos de set - set, frozenset](https://docs.python.org/2.4/lib/types-set.html) [Tutorial de Python: Sets y Frozen Sets.](https://www.python-course.eu/sets_frozensets.php)