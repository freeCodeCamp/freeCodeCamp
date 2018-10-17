---
title: Learn About Python Sets
localeTitle: Aprenda acerca de los conjuntos de Python
---
`Set` s en Python son un tipo de estructura de datos mutable pero desordenada, que solo puede contener elementos _únicos_ .

**Creación:**

`set` literal:

Los corchetes, `{}` , _no se_ pueden usar para crear un conjunto vacío:

```python
>>> not_set = {}     # set constructor must be used to make empty sets. 
 >>> type(not_set)    # Empty curly brackets create empty dictionaries. 
 <class 'dict'> 
```

Solo puede crear un conjunto vacío utilizando el método `set()` .

```python
>>> example_set = set() 
 >>> type(example_set) 
 <class 'set'> 
```

Sin embargo, si los elementos se incluyen dentro de los corchetes, sería sintaxis aceptable crear un conjunto.

```python
>>> example_set_2 = {1, 2, 3} 
 >>> type(example_set_2) 
 <class 'set'> 
```

\`