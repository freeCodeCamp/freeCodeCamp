---
title: Learn About Python Sets
localeTitle: Aprenda sobre os conjuntos de Python
---
`Set` s em Python são um tipo de estrutura de dados mutável, mas não ordenada, que pode conter apenas elementos _exclusivos_ .

**Criação:**

`set` literal:

Os colchetes encaracolados, `{}` , _não podem_ ser usados ​​para criar um conjunto vazio:

```python
>>> not_set = {}     # set constructor must be used to make empty sets. 
 >>> type(not_set)    # Empty curly brackets create empty dictionaries. 
 <class 'dict'> 
```

Você só pode criar um conjunto vazio usando o método `set()` .

```python
>>> example_set = set() 
 >>> type(example_set) 
 <class 'set'> 
```

No entanto, se os elementos forem incluídos entre chaves, então seria uma sintaxe aceitável criar um conjunto.

```python
>>> example_set_2 = {1, 2, 3} 
 >>> type(example_set_2) 
 <class 'set'> 
```

\`