---
title: The Tuples
localeTitle: Las Tuplas
---
## Las Tuplas

Una tupla es una secuencia de objetos de Python. Las tuplas son inmutables, lo que significa que no se pueden modificar después de la creación, a diferencia de las listas.

**Creación:**

Se crea una `tuple` vacía utilizando un par de paréntesis, `()` :

```shell
    >>> empty_tuple = () 
    >>> print(empty_tuple) 
    () 
    >>> type(empty_tuple) 
    <class 'tuple'> 
    >>> len(empty_tuple) 
    0 
```

Se crea una `tuple` con elementos al separar los elementos con comas (los corchetes circundantes, `()` , son opcionales con excepciones):

```shell
    >>> tuple_1 = 1, 2, 3       # Create tuple without round brackets. 
    >>> print(tuple_1) 
    (1, 2, 3) 
    >>> type(tuple_1) 
    <class 'tuple'> 
    >>> len(tuple_1) 
    3 
    >>> tuple_2 = (1, 2, 3)     # Create tuple with round brackets. 
    >>> print(tuple_2) 
    (1, 2, 3) 
    >>> tuple_3 = 1, 2, 3,      # Trailing comma is optional. 
    >>> print(tuple_3) 
    (1, 2, 3) 
    >>> tuple_4 = (1, 2, 3,)    # Trailing comma in round brackets is also optional. 
    >>> print(tuple_4) 
    (1, 2, 3) 
```

Una `tuple` con un solo elemento debe tener una coma al final (con o sin paréntesis):

```shell
    >>> not_tuple = (2)    # No trailing comma makes this not a tuple. 
    >>> print(not_tuple) 
    2 
    >>> type(not_tuple) 
    <class 'int'> 
    >>> a_tuple = (2,)     # Single element tuple. Requires trailing comma. 
    >>> print(a_tuple) 
    (2,) 
    >>> type(a_tuple) 
    <class 'tuple'> 
    >>> len(a_tuple) 
    1 
    >>> also_tuple = 2,    # Round brackets omitted. Requires trailing comma. 
    >>> print(also_tuple) 
    (2,) 
    >>> type(also_tuple) 
    <class 'tuple'> 
```

Los paréntesis se requieren en casos de ambigüedad (si la tupla es parte de una expresión más grande):

> Tenga en cuenta que en realidad es la coma la que forma una tupla, no los paréntesis. Los paréntesis son opcionales, excepto en el caso de la tupla vacía, o cuando son necesarios para evitar la ambigüedad sintáctica. Por ejemplo, `f(a, b, c)` es una llamada de función con tres argumentos, mientras que `f((a, b, c))` es una llamada de función con una tupla de 3 como único argumento.

```shell
    >>> print(1,2,3,4,)          # Calls print with 4 arguments: 1, 2, 3, and 4 
    1 2 3 4 
    >>> print((1,2,3,4,))        # Calls print with 1 argument: (1, 2, 3, 4,) 
    (1, 2, 3, 4) 
    >>> 1, 2, 3 == (1, 2, 3)     # Equivalent to 1, 2, (3 == (1, 2, 3)) 
    (1, 2, False) 
    >>> (1, 2, 3) == (1, 2, 3)   # Use surrounding round brackets when ambiguous. 
    True 
```

Una `tuple` también se puede crear con la `tuple` constructor:

```shell
    >>> empty_tuple = tuple() 
    >>> print(empty_tuple) 
    () 
    >>> tuple_from_list = tuple([1,2,3,4]) 
    >>> print(tuple_from_list) 
    (1, 2, 3, 4) 
    >>> tuple_from_string = tuple("Hello campers!") 
    >>> print(tuple_from_string) 
    ('H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!') 
    >>> a_tuple = 1, 2, 3 
    >>> b_tuple = tuple(a_tuple)    # If the constructor is called with a tuple for 
    the iterable, 
    >>> a_tuple is b_tuple          # the tuple argument is returned. 
    True 
```

**Accediendo a los elementos de una `tuple` :**

Se accede a los elementos de las `tuples` y se indexan de la misma manera que las `lists` .

```shell
    >>> my_tuple = 1, 2, 9, 16, 25 
    >>> print(my_tuple) 
    (1, 2, 9, 16, 25) 
```

_Cero indexado_

```shell
    >>> my_tuple[0] 
    1 
    >>> my_tuple[1] 
    2 
    >>> my_tuple[2] 
    9 
```

_Envolver alrededor de la indexación_

```shell
    >>> my_tuple[-1] 
    25 
    >>> my_tuple[-2] 
    16 
```

**Embalaje y desembalaje:**

La declaración `t = 12345, 54321, 'hello!'` es un ejemplo de empaquetamiento de tuplas: los valores `12345` , `54321` y `'hello!'` se empaquetan juntos en una tupla. La operación inversa también es posible:

```shell
    >>> x, y, z = t 
```

Esto se denomina, apropiadamente, desempaquetado de secuencias y funciona para cualquier secuencia en el lado derecho. El desempaquetado de secuencias requiere que haya tantas variables en el lado izquierdo del signo igual como elementos en la secuencia. Tenga en cuenta que la asignación múltiple es solo una combinación de empaquetamiento de tuplas y desempaquetado de secuencias.

```shell
    >>> t = 1, 2, 3    # Tuple packing. 
    >>> print(t) 
    (1, 2, 3) 
    >>> a, b, c = t    # Sequence unpacking. 
    >>> print(a) 
    1 
    >>> print(b) 
    2 
    >>> print(c) 
    3 
    >>> d, e, f = 4, 5, 6    # Multiple assignment combines packing and unpacking. 
    >>> print(d) 
    4 
    >>> print(e) 
    5 
    >>> print(f) 
    6 
    >>> a, b = 1, 2, 3       # Multiple assignment requires each variable (right) 
    have a matching element (left). 
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
    ValueError: too many values to unpack (expected 2) 
```

**Inmutable:**

`tuples` son contenedores inmutables, garantizando **que los** objetos que contienen no cambien. Esto **no** garantiza que los objetos que contiene no cambiarán:

```shell
    >>> a_list = [] 
    >>> a_tuple = (a_list,)    # A tuple (immutable) with a list (mutable) element. 
    >>> print(a_tuple) 
    ([],) 
 
    >>> a_list.append("Hello campers!") 
    >>> print(a_tuple)         # Element of the immutable is mutated. 
    (['Hello campers!'],) 
```

**Usos:**

Las funciones solo pueden devolver un solo valor, sin embargo, se puede usar una `tuple` heterogénea para devolver múltiples valores desde una función. Un ejemplo es la función de `enumerate` integrada que devuelve una iterable de `tuples` heterogéneas:

```shell
    >>> greeting = ["Hello", "campers!"] 
    >>> enumerator = enumerate(greeting) 
    >>> enumerator.next() 
    >>> enumerator.__next__() 
    (0, 'Hello') 
    >>> enumerator.__next__() 
    (1, 'campers!') 
```

### Más información:

[Python Docs - Tuples](https://docs.python.org/3/library/stdtypes.html#tuples)