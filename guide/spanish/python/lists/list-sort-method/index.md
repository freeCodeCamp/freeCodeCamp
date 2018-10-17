---
title: List Sort Method
localeTitle: Método de clasificación de lista
---
## Método de clasificación de lista

Las listas de Python tienen un método `sort()` incorporado que modifica la lista en el lugar y una función incorporada `sorted()` que construye una nueva lista ordenada a partir de una iterable.

list.sort (key =…, reverse = \[True / False\])

### Parámetros

Hay dos parámetros opcionales para este método. _clave_ : el valor de entrada para el parámetro clave debe ser una función que tome un solo argumento y devuelva un valor utilizado para las comparaciones para ordenar los elementos de la lista _revertir = \[valor\]_ _valor = Verdadero_ : ordena los elementos de la lista en orden descendente _valor = falso_ : ordena los elementos de la lista en orden ascendente. Esto se considera el valor predeterminado. Tenga en cuenta que el método `sort()` no devuelve ningún valor. Modifica la lista original.

### Ejemplo de uso

```py
a = [4, 2, 5, 3, 1] 
 a.sort() 
 print a # prints [1, 2, 3, 4, 5] 
 
 b = ['free', 'code', 'camp'] 
 b.sort() 
 print b # prints ['camp', 'code', 'free'] 
```

Considere un ejemplo con el parámetro **inverso**

```py
a = [4, 2, 5, 3, 1] 
 
 #Sorts the list in descending order 
 a.sort(reverse=True) 
 
 print a # prints [5, 4, 3, 2, 1] 
```

Si desea ordenar la lista en función de su propia función, utilice el parámetro **clave** . Aquí hay un ejemplo para ordenar las cadenas en la lista por longitud, en orden ascendente

```py
a = ["hello", "hi", "hey"] 
 
 #The built-in len() function is given as an input to key parameter to sort the strings by length 
 a.sort(key = len) 
 
 print a # prints ['hi', 'hey', 'hello'] 
```

Aquí hay otro ejemplo, donde la lista contiene tuplas (nombre, edad). El uso a continuación muestra cómo ordenar la lista por edad, en orden ascendente.

```py
#Consider the second element in the tuple for sorting 
 >>> def compareByAge(element): 
 ...     return element[1] 
 
 b = [('Adam', 20), ('Rahman', 30), ('Rahul', 25)] 
 
 #Sort the list by age 
 b.sort(key = compareByAge) 
 
 #Output 
 print b # prints [('Adam', 20), ('Rahul', 25), ('Rahman', 30)] 
```

### Conceptos básicos de clasificación

Una ordenación ascendente simple es muy fácil, simplemente llame a la función ordenada (). Devuelve una nueva lista ordenada:

```python
>>> sorted([5, 2, 3, 1, 4]) 
 [1, 2, 3, 4, 5] 
```

También puede utilizar el método list.sort () de una lista. Modifica la lista en el lugar (y devuelve Ninguno para evitar confusiones). Por lo general, es menos conveniente que el ordenado (), pero si no necesita la lista original, es un poco más eficiente.

```python
>>> a = [5, 2, 3, 1, 4] 
 >>> a.sort() 
 >>> a 
 [1, 2, 3, 4, 5] 
```

Otra diferencia es que el método list.sort () solo se define para listas. En contraste, la función ordenada () acepta cualquier iterable.

```python
>>> sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'}) 
 [1, 2, 3, 4, 5] 
```

#### Detalles de implementacion

Si desea conocer detalles sobre la implementación de la función de clasificación, el algoritmo y la complejidad del tiempo, etc., consulte [aquí](http://svn.python.org/projects/python/trunk/Objects/listsort.txt) . En resumen, la función de clasificación utiliza el algoritmo TimSort, que según Python Developers es:

> una combinación adaptativa, estable y natural, llamada modestamente timsort (hey, me lo gané ). Tiene un rendimiento sobrenatural en muchos tipos de arreglos ordenados parcialmente (se necesitan menos de lg (N!) comparaciones, y tan pocos como N-1), pero tan rápido como el sampleort altamente afinado anterior de Python híbrido en matrices aleatorias.

#### ordenar () Parámetros

Por defecto, sort () no requiere ningún parámetro extra. Sin embargo, tiene dos parámetros opcionales:

*   Invertir: si es verdadero, la lista ordenada se invierte (o se ordena en orden descendente)
*   tecla - función que sirve como una tecla para la comparación de ordenación

#### Más información:

Más información sobre `sort()` se puede encontrar [aquí](https://docs.python.org/3/library/functions.html#sorted)

Puede encontrar más información sobre sort () y sorted () [aquí.](https://docs.python.org/3.6/tutorial/datastructures.html)

Más información sobre sort () y sorted () se puede encontrar [aquí](https://docs.python.org/3.6/tutorial/datastructures.html) .