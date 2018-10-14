---
title: Python Frozenset
localeTitle: Python Frozenset
---
**`frozenset` informação básica** O tipo `frozenset` é um tipo de conjunto embutido que é imutável e hashable - seu conteúdo não pode ser alterado depois de criado; no entanto, ele pode ser usado como uma chave de dicionário ou como um elemento de outro conjunto. Frozensets são como conjuntos, exceto que eles não podem ser alterados, ou seja, são imutáveis.
```
>>> cities = frozenset(["Frankfurt", "Basel", "Freiburg"]) 
 >>> cities.add("Strasbourg") 
 Traceback (most recent call last): 
    File "<stdin>", line 1, in <module> 
 AttributeError: 'frozenset' object has no attribute 'add' 
 >>> 
```

construtor `frozenset` : `frozenset([iterable])` O iterável contém elementos para inicializar o frozenset com. O iterável pode ser definido, dicionário, tupla, etc. Se nenhum parâmetro for passado, o método `frozenset()` retornará um frozenset vazio.

**Exemplos**
```
>>> vowels = ('a', 'e', 'i', 'o', 'u') 
 >>> fSet = frozenset(vowels) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'i', 'e', 'a', 'u', 'o'}) 
 >>> print("The empty frozen set is: ", frozenset()) 
 The empty frozen set is: frozenset() 
 >>> 
```

**Outro exemplo**
```
>>> person = {"name": "John", "age": 23, "sex": "male"} 
 >>> fSet = frozenset(person) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'sex', 'name', 'age'}) 
 >>> 
```

**informação adicional** [Frozenset Python ()](https://www.programiz.com/python-programming/methods/built-in/frozenset) [Definir tipos - set, frozenset](https://docs.python.org/2.4/lib/types-set.html) [Tutorial Python: Conjuntos e Conjuntos Congelados](https://www.python-course.eu/sets_frozensets.php)