---
title: The Tuples
localeTitle: As tuplas
---
## As tuplas

Uma tupla é uma sequência de objetos Python. As tuplas são imutáveis, o que significa que não podem ser modificadas após a criação, ao contrário das listas.

**Criação:**

Uma `tuple` vazia é criada usando um par de parênteses, `()` :

```shell
    >>> empty_tuple = () 
    >>> print(empty_tuple) 
    () 
    >>> type(empty_tuple) 
    <class 'tuple'> 
    >>> len(empty_tuple) 
    0 
```

Uma `tuple` com elementos é criada ao separar os elementos com vírgulas (os parêntesis circundantes, `()` são opcionais com exceções):

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

Uma `tuple` com um único elemento deve ter a vírgula final (com ou sem colchetes):

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

Colchetes são necessários em casos de ambigüidade (se a tupla fizer parte de uma expressão maior):

> Note que na verdade é a vírgula que faz uma tupla, não os parênteses. Os parênteses são opcionais, exceto no caso da tupla vazia, ou quando são necessários para evitar ambigüidade sintática. Por exemplo, `f(a, b, c)` é uma chamada de função com três argumentos, enquanto `f((a, b, c))` é uma chamada de função com uma 3-tupla como o único argumento.

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

Uma `tuple` também pode ser criada com o construtor da `tuple` :

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

**Acessando elementos de uma `tuple` :**

Elementos de `tuples` são acessados ​​e indexados da mesma maneira que as `lists` .

```shell
    >>> my_tuple = 1, 2, 9, 16, 25 
    >>> print(my_tuple) 
    (1, 2, 9, 16, 25) 
```

_Zero indexado_

```shell
    >>> my_tuple[0] 
    1 
    >>> my_tuple[1] 
    2 
    >>> my_tuple[2] 
    9 
```

_Envolva a indexação_

```shell
    >>> my_tuple[-1] 
    25 
    >>> my_tuple[-2] 
    16 
```

**Embalagem e Desembalagem:**

A declaração `t = 12345, 54321, 'hello!'` é um exemplo de empacotamento de tupla: os valores `12345` , `54321` e `'hello!'` são embalados juntos em uma tupla. A operação inversa também é possível:

```shell
    >>> x, y, z = t 
```

Isso é chamado, apropriadamente, de descompactação de seqüência e funciona para qualquer sequência do lado direito. A descompactação de sequências requer que haja tantas variáveis ​​no lado esquerdo do sinal de igual quanto há elementos na sequência. Observe que a atribuição múltipla é realmente apenas uma combinação de empacotamento de tupla e descompactação de sequência.

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

**Imutável:**

`tuples` são contêineres imutáveis, garantindo **que os** objetos que contêm não serão alterados. Ele **não** garante que os objetos que contém não mudará:

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

Funções só podem retornar um único valor, no entanto, uma `tuple` heterogênea pode ser usada para retornar vários valores de uma função. Um exemplo é a função de `enumerate` interna que retorna um iterável de `tuples` heterogêneas:

```shell
    >>> greeting = ["Hello", "campers!"] 
    >>> enumerator = enumerate(greeting) 
    >>> enumerator.next() 
    >>> enumerator.__next__() 
    (0, 'Hello') 
    >>> enumerator.__next__() 
    (1, 'campers!') 
```

### Mais Inforamtion:

[Documentos em Python - Tuplas](https://docs.python.org/3/library/stdtypes.html#tuples)