---
title: For Loop Statements
localeTitle: Para declaraciones de bucle
---
## Para declaraciones de bucle

Python utiliza un bucle for para iterar sobre una lista de elementos. A diferencia de C o Java, que usan el bucle for para cambiar un valor en pasos y acceder a algo como una matriz que usa ese valor.

Para los bucles, repita sobre las estructuras de datos basadas en recopilación, como listas, tuplas y diccionarios.

La sintaxis básica es:

```python
for value in list_of_values: 
  # use value inside this block 
```

En general, puede usar cualquier cosa como el valor del iterador, donde se pueden asignar las entradas del iterable. Por ejemplo, puede desempaquetar tuplas de una lista de tuplas:

```python
list_of_tuples = [(1,2), (3,4)] 
 
 for a, b in list_of_tuples: 
  print("a:", a, "b:", b) 
```

Por otro lado, puedes hacer un bucle sobre cualquier cosa que sea iterable. Puedes llamar a una función o usar una lista literal.

```python
for person in load_persons(): 
  print("The name is:", person.name) 
```

```python
for character in ["P", "y", "t", "h", "o", "n"]: 
  print("Give me a '{}'!".format(character)) 
```

Algunas formas en que se utilizan los bucles For:

**Iterar sobre la función de rango ()**

```python
for i in range(10): 
    print(i) 
```

En lugar de ser una función, el rango es en realidad un tipo de secuencia inmutable. La salida contendrá los resultados del límite inferior, es decir, 0 al límite superior, es decir, 10, pero excluyendo 10. Por defecto, el límite inferior o el índice de inicio se establece en cero. Salida:
```
> 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 8 
 9 
 > 
```

Además, se puede especificar el límite inferior de la secuencia e incluso el paso de la secuencia agregando un segundo y un tercer parámetro.

```python
for i in range(4,10,2): #From 4 to 9 using a step of two 
    print(i) 
```

Salida:
```
> 
 4 
 6 
 8 
 > 
```

**función xrange ()**

En su mayor parte, xrange y rango son exactamente iguales en términos de funcionalidad. Ambos proporcionan una forma de generar una lista de enteros para que los uses, como desees. La única diferencia es que el rango devuelve un objeto de lista Python y xrange devuelve un objeto xrange. Significa que xrange en realidad no genera una lista estática en tiempo de ejecución como lo hace el rango. Crea los valores a medida que los necesita con una técnica especial llamada rendimiento. Esta técnica se utiliza con un tipo de objeto conocido como generadores.

Una cosa mas que agregar. En Python 3.x, la función xrange ya no existe. La función de rango ahora hace lo que xrange hace en Python 2.x

**Iterar sobre los valores en una lista o tupla**

```python
A = ["hello", 1, 65, "thank you", [2, 3]] 
 for value in A: 
    print(value) 
```

Salida:
```
> 
 hello 
 1 
 65 
 thank you 
 [2, 3] 
 > 
```

**Iterar sobre las claves en un diccionario (también conocido como hashmap)**

```python
fruits_to_colors = {"apple": "#ff0000", 
                    "lemon": "#ffff00", 
                    "orange": "#ffa500"} 
 
 for key in fruits_to_colors: 
    print(key, fruits_to_colors[key]) 
```

Salida:
```
> 
 apple #ff0000 
 lemon #ffff00 
 orange #ffa500 
 > 
```

**Iterar sobre dos listas del mismo tamaño en un solo bucle con la función zip ()**

\`\` \`pitón A = \["a", "b", "c"\] B = \["a", "d", "e"\]

para a, b en zip (A, B): imprimir a, b, a == b
```
Output: 
```

\> aa cierto bd falso ce falso >
```
**Iterate over a list and get the corresponding index with the enumerate() function** 
```

pitón A = \["este", "es", "algo", "diversión"\]

para índice, palabra en enumerar (A): imprimir (índice, palabra)
```
Output: 
```

\> 0 esto 1 es 2 algo 3 diversión >
```
A common use case is iterating over a dictionary: 
```

pitón Para el nombre, número de teléfono en contacts.items (): imprimir (nombre, "es accesible", número de teléfono)
```
If you absolutely need to access the current index of your iteration, do **NOT** use `range(len(iterable))`! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function `enumerate()` instead: 
```

pitón para el índice, artículo en enumerar (shopping\_basket): imprimir ("Artículo", índice, "es un", artículo)
```
**for/else statements** 
 Pyhton permits you to use else with for loops, the else case is executed when none of the conditions with in the loop body was satisfied. To use the else we have to make use of `break` statement so that we can break out of the loop on a satsfied condition.If we do not break out then the else part will be executed. 
```

pitón _días de la_ semana _\= \['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'\] hoy = 'sábado' por día en_ días de _semana_ : si día == hoy: imprimir ('hoy es un día de la semana') descanso más: imprimir ('hoy no es un día de la semana')
```
In the above case the output will be `today is not a week day` since the break within the loop will never be executed. 
 
 **Iterate over a list using inline loop function** 
 
 We could also iterate inline using python, for example if we need to uppercase all the words in a list from a list we could simply do the following: 
```

pitón A = \["this", "is", "awesome", "shinning", "star"\]

MAYÚSCULAS = \[word.upper () para word en A\] imprimir (MAYÚSCULAS)
```
Output: 
```

\> \['ESTE', 'ES', 'IMPRESIONANTE', 'SHINNING', 'ESTRELLA'\] > \`\` \`

#### Más información:

*   [Python2 para documentación de bucles.](https://docs.python.org/2.7/tutorial/controlflow.html#for-statements)
    
*   [Python3 para documentación de bucles.](https://docs.python.org/3/tutorial/controlflow.html#for-statements)