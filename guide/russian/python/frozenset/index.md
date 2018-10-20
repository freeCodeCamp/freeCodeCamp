---
title: Python Frozenset
localeTitle: Python Frozenset
---
**Основная информация о `frozenset`** Тип `frozenset` - встроенный набор типов, который является неизменным и хешируемым - его содержимое не может быть изменено после его создания; однако он может использоваться как ключ словаря или как элемент другого набора. Frozensets подобны наборам, за исключением того, что они не могут быть изменены, т. Е. Они являются immutale.
```
>>> cities = frozenset(["Frankfurt", "Basel", "Freiburg"]) 
 >>> cities.add("Strasbourg") 
 Traceback (most recent call last): 
    File "<stdin>", line 1, in <module> 
 AttributeError: 'frozenset' object has no attribute 'add' 
 >>> 
```

`frozenset` : `frozenset([iterable])` Итерируемый содержит элементы для инициализации frozenset. Итерируемый может быть установлен, словарь, кортеж и т. Д. Если параметр не передан, метод `frozenset()` возвращает пустой фризонсет.

**Примеры**
```
>>> vowels = ('a', 'e', 'i', 'o', 'u') 
 >>> fSet = frozenset(vowels) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'i', 'e', 'a', 'u', 'o'}) 
 >>> print("The empty frozen set is: ", frozenset()) 
 The empty frozen set is: frozenset() 
 >>> 
```

**Другой пример**
```
>>> person = {"name": "John", "age": 23, "sex": "male"} 
 >>> fSet = frozenset(person) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'sex', 'name', 'age'}) 
 >>> 
```

**Дополнительная информация** [Python Frozenset ()](https://www.programiz.com/python-programming/methods/built-in/frozenset) [Set Types - set, frozenset](https://docs.python.org/2.4/lib/types-set.html) [Учебник Python: наборы и замороженные наборы](https://www.python-course.eu/sets_frozensets.php)