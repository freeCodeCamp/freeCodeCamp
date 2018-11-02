---
title: List Comprehension
localeTitle: Comprensión de lista
---
## Comprensión de lista

La comprensión de lista es una forma de recorrer una lista para generar una nueva lista basada en algunas condiciones. Puede ser confuso al principio, pero una vez que se haya aclimatado a la sintaxis es muy potente y rápido.

El primer paso para aprender a usar la comprensión de listas es observar la forma tradicional de recorrer una lista. El siguiente es un ejemplo simple que devuelve una nueva lista de números pares.

```python
# Example list for demonstration 
 some_list = [1, 2, 5, 7, 8, 10] 
 
 # Empty list that will be populate with a loop 
 even_list = [] 
 
 for number in some_list: 
  if number % 2 == 0: 
    even_list.append(number) 
 
 # even_list now equals [2, 8, 10] 
```

Primero se crea una lista con algunos números. A continuación, crea una lista vacía que contendrá sus resultados del bucle. En el bucle, verifica si cada número es divisible por 2 y, si es así, lo agregas a la lista\_incluso. Esto tomó 5 líneas de código sin incluir comentarios y espacios en blanco, lo cual no es mucho en este ejemplo.

Ahora para el ejemplo de la lista de comprensión.

```python
# Example list for demonstration 
 some_list = [1, 2, 5, 7, 8, 10] 
 
 # List Comprehension 
 even_list = [number for number in some_list if number % 2 == 0] 
 
 # even_list now equals [2, 8, 10] 
```

Otro ejemplo, con los mismos dos pasos: Lo siguiente creará una lista de números que corresponden a los números en `my_starting_list` multiplicados por 7.

```py
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8] 
 my_new_list = [] 
 
 for item in my_starting_list: 
 my_new_list.append(item * 7) 
```

Cuando se ejecuta este código, el valor final de `my_new_list` es: `[7, 14, 21, 28, 35, 42, 49, 56]`

Un desarrollador que usa la comprensión de la lista podría lograr el mismo resultado utilizando la siguiente comprensión de la lista, lo que da como resultado la misma `my_new_list` .

```py
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8] 
 
 my_new_list = [item * 7 for item in my_starting_list] 
```

Una fórmula simple para escribir en una lista de comprensión es:

`my_list = [{operation with input n} for n in {python iterable}]`

Reemplace `{operation with input n}` con sin embargo, desea cambiar el elemento devuelto desde el iterable. El ejemplo anterior utiliza `n * 7` pero la operación puede ser tan simple o tan compleja como sea necesario.

Reemplace `{python iterable}` con cualquier iterable. [Los tipos de secuencia](https://guide.freecodecamp.org/python/sequence-types) serán los más comunes. Se utilizó una lista en el ejemplo anterior, pero también son comunes las tuplas y los rangos.

La comprensión de la lista agrega un elemento de una lista existente a una nueva lista si se cumple alguna condición. Es más ordenado, pero también es mucho más rápido en la mayoría de los casos. En algunos casos, la comprensión de la lista puede dificultar la legibilidad, por lo que el desarrollador debe sopesar sus opciones al elegir utilizar la comprensión de la lista.

## Ejemplos de comprensión de lista con condicionales

El flujo de control en las listas de comprensión se puede controlar usando condicionales. Por ejemplo:

```py
only_even_list = [i for i in range(13) if i%2==0] 
```

Esto es equivalente al siguiente bucle:

```py
only_even_list = list() 
 for i in range(13): 
  if i%2 == 0: 
    only_even_list.append(i) 
```

Lista de comprensión también puede contener anidada si las condiciones. Considere el siguiente bucle:

```py
divisible = list() 
 for i in range(50): 
  if i%2 == 0: 
    if i%3 == 0: 
      divisible.append(i) 
```

Usando la lista de comprensión esto se puede escribir como:

```py
divisible = [i for i in range(50) if i%2==0 if i%3==0] 
```

La instrucción If-Else también se puede utilizar junto con la comprensión de la lista.

```py
list_1 = [i if i%2==0 else i*-1 for i in range(10)] 
```

#### Más información:

[Estructuras de datos Python - Listas](https://docs.python.org/2.7/tutorial/datastructures.html)

[Python For Loops](https://guide.freecodecamp.org/python/for-loop-statements)

[Listas de Python](https://guide.freecodecamp.org/python/learn-about-python-lists)

[Python para principiantes - List Comprehensions](http://www.pythonforbeginners.com/basics/list-comprehensions-in-python)