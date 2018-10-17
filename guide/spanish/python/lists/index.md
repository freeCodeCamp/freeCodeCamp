---
title: Lists
localeTitle: Liza
---
**TODO: `list` información básica**

[Python Docs - Listas](https://docs.python.org/3/library/stdtypes.html#lists)

**Creación:**

Una `list` vacía se crea utilizando un par de corchetes:

```shell
>>> empty_list = [] 
 >>> type(empty_list) 
 <class 'list'> 
 >>> len(empty_list) 
 0 
```

Se puede crear una `list` con elementos encerrando una lista de elementos separados por comas entre corchetes. Las listas permiten que los elementos sean de diferentes tipos (heterogéneos), pero generalmente son de un solo tipo (homogéneos):

```shell
>>> homogeneous_list = [1, 1, 2, 3, 5, 8] 
 >>> type(homogeneous_list) 
 <class 'list'> 
 >>> print(homogeneous_list) 
 [1, 1, 2, 3, 5, 8] 
 >>> len(homogeneous_list) 
 6 
 >>> heterogeneous_list = [1, "Hello Campers!"] 
 >>> print(heterogeneous_list) 
 [1, "Hello Campers!"] 
 >>> len(heterogeneous_list) 
 2 
```

El constructor de `list` también se puede utilizar para crear una `list` :

```shell
>>> empty_list = list()                            # Creates an empty list 
 >>> print(empty_list) 
 [] 
 >>> list_from_iterable = list("Hello campers!")    # Creates a list from an iterable. 
 >>> print(list_from_iterable) 
 ['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!'] 
```

**Accediendo a los elementos de una `list` :**

```shell
>>> my_list = [1, 2, 9, 16, 25] 
 >>> print(my_list) 
 [1, 2, 9, 16, 25] 
```

_Cero indexado_

```shell
>>> my_list[0] 
 1 
 >>> my_list[1] 
 2 
 >>> my_list[2] 
 9 
```

_Envolver alrededor de la indexación_

```shell
>>> my_list[-1] 
 25 
 >>> my_list[-2] 
 16 
```

_Desembalaje de listas para python-3_

```shell
>>> print(*my_list) 
 1 2 9 16 25 
```

**Mudable:**

`lists` son contenedores mutables. Los contenedores mutables son contenedores que permiten cambios en los objetos que contiene el contenedor. **TODO: AÑADIR MÁS?**

_Reorganizar elementos en una lista._

Los elementos de una `list` pueden extraerse y reorganizarse utilizando otra `list` como índice.

```shell
>>> my_list = [1, 2, 9, 16, 25, 34, 53, 21] 
 >>> my_index = [5, 2, 0] 
 >>> my_new_list = [my_list[i] for i in my_index] 
 >>> print(my_new_list) 
 [34, 9, 1] 
```

**TODO: ¿Cuál de estos debería ser discutido aquí?**

[Python Docs - Más en las listas](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

*   `list.append(x)` Agrega un elemento al final de la lista. Equivalente a un \[len (a):\] = \[x\].
    
*   `list.extend(L)` Extienda la lista agregando todos los elementos en la lista dada. Equivalente a un \[len (a):\] = L.
    
*   `list.insert(i, x)` Insertar un elemento en una posición dada. El primer argumento es el índice del elemento antes del cual se inserta, por lo que a.insert (0, x) se inserta al principio de la lista, y a.insert (len (a), x) es equivalente a a.append ( X).
    
*   `list.remove(x)` Elimina el primer elemento de la lista cuyo valor es x. Es un error si no hay tal artículo.
    
*   `list.pop([i])` Elimine el elemento en la posición dada en la lista y devuélvalo. Si no se especifica ningún índice, a.pop () elimina y devuelve el último elemento de la lista. (Los corchetes alrededor de la i en la firma del método indican que el parámetro es opcional, no que se deben escribir corchetes en esa posición. Verá esta notación con frecuencia en la Referencia de la biblioteca de Python).
    
*   `list.clear()` Eliminar todos los elementos de la lista. Equivalente a del a \[:\].
    
*   `list.index(x)` Devuelve el índice en la lista del primer elemento cuyo valor es x. Es un error si no hay tal artículo.
    
*   `list.count(x)` Devuelve el número de veces que x aparece en la lista.
    
*   `list.sort(key=None, reverse=False)` Ordena los elementos de la lista en su lugar (los argumentos se pueden usar para la personalización de la clasificación, consulta ordenados () para su explicación).
    
*   `list.reverse()` Invierta los elementos de la lista en su lugar.
    
*   `list.copy()` Devuelve una copia superficial de la lista. Equivalente a un \[:\].