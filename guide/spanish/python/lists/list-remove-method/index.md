---
title: List Remove Method
localeTitle: Método de eliminación de lista
---
## Método de eliminación de lista

El método `remove()` elimina el argumento dado a él de la lista.

#### Ejemplo de uso

```py
words = ["I", "love", "Python"] 
 words.remove("I") 
 print(words) 
```

#### Salida

```py
["love","Python"] 
```

Tenga en cuenta que devuelve un error si el elemento que se va a eliminar no se encuentra en la lista, como se ilustra en el siguiente ejemplo.

```py
kiss = ["keep", "it", "simple", "stupid"] 
 kiss.remove("complex") 
 print(kiss) 
```

#### Salida
```
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: list.remove(x): x not in list 
```

#### Más información:

Más información sobre `remove()` se puede encontrar [aquí](https://docs.python.org/3.6/tutorial/datastructures.html)