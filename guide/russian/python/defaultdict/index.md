---
title: Python defaultdict
localeTitle: Python defaultdict
---
## Python defaultdict

Словарь - одна из наиболее используемых структур данных в Python. Словарь представляет собой неупорядоченный набор элементов, и мы обычно имеем ключи и значения, хранящиеся в словаре. Давайте рассмотрим несколько примеров того, как обычно используется словарь.

```python
# dictionary declaration 1 
 dict1 = dict() 
 
 # dictionary declaration 2 
 dict2 = {} 
 
 # Add items to the dictionary 
 # The syntax to add and retrieve items is same for either of the two objects we defined above. 
 key = "X" 
 value = "Y" 
 dict1[key] = value 
 
 # The dictionary doesn't have any specific data-type. 
 # So, the values can be pretty diverse. 
 dict1[key] = dict2 
```

Давайте посмотрим на некоторые способы поиска.

```python
# Since "X" exists in our dictionary, this will retrieve the value 
 value = dict1[key] 
 
 # This key doesn't exist in the dictionary. 
 # So, we will get a `KeyError` 
 value = dict1["random"] 
```

### Избегайте KeyError: используйте функцию .get

В случае, если данный ключ не существует в словаре, Python будет бросать `KeyError` . Для этого есть простой способ обхода. Давайте посмотрим, как мы можем избежать `KeyError` используя встроенная функция `.get` для словарей.

```python
dict_ = {} 
 
 # Some random key 
 random_key = "random" 
 
 # The most basic way of doing this is to check if the key 
 # exists in the dictionary or not and only retrieve if the 
 # key exists. Otherwise not. 
 if random_key in dict_: 
  print(dict_[random_key]) 
 else: 
  print("Key = {} doesn't exist in the dictionary".format(dict_)) 
```

Много раз мы нормально получаем значение по умолчанию, когда ключ не существует. Например, когда построение счетчика. Существует лучший способ получить значения по умолчанию из словаря в случае отсутствующие ключи, а не полагаться на стандартное `if-else` .

```python
# Let's say we want to build a frequency counter for items in the following array 
 arr = [1,2,3,1,2,3,4,1,2,1,4,1,2,3,1] 
 
 freq = {} 
 
 for item in arr: 
  # Fetch a value of 0 in case the key doesn't exist. Otherwise, fetch the stored value 
  freq[item] = freq.get(item, 0) + 1 
```

Таким образом, `get(<key>, <defaultval>)` - это удобная операция для получения значения по умолчанию для любого заданного ключа из словаря. Проблема с этим методом возникает, когда мы хотим иметь дело с изменяемыми структурами данных как значения, например, `list` или `set` .

```python
dict_ = {} 
 
 # Some random key 
 random_key = "random" 
 
 dict_[random_key] = dict_.get(random_key, []).append("Hello World!") 
 print(dict_) # {'random': None} 
 
 dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()).add("Hello World!") 
 print(dict_) # {'random': None} 
```

Вы видели проблему?

Новый `set` или `list` не привязаны к ключу словаря. Мы должны назначить новый `list` или `set` к ключу в случае отсутствия значения, а затем `append` или `add` соответственно. Лей смотрит на пример для этого.

```python
dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
 print(dict_) # {'random': set(['Hello World!'])}. Yay! 
```

### Избегайте KeyError: используйте defaultdict

Это работает большую часть времени. Однако есть лучший способ сделать это. Более `pythonic` путь. `defaultdict` является подклассом встроенного класса dict. `defaultdict` просто присваивает значение по умолчанию, которое мы укажем в случае отсутствия ключа. Итак, два шага:

```python
dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
```

теперь можно объединить в один шаг. Например, для

```python
from collections import defaultdict 
 
 # Yet another random key 
 random_key = "random_key" 
 
 # list defaultdict 
 list_dict_ = defaultdict(list) 
 
 # set defaultdict 
 set_dict_ = defaultdict(set) 
 
 # integer defaultdict 
 int_dict_ = defaultdict(int) 
 
 list_dict_[random_key].append("Hello World!") 
 set_dict_[random_key].add("Hello World!") 
 int_dict_[random_key] += 1 
 
 """ 
  defaultdict(<class 'list'>, {'random_key': ['Hello World!']}) 
  defaultdict(<class 'set'>, {'random_key': {'Hello World!'}}) 
  defaultdict(<class 'int'>, {'random_key': 1}) 
 """ 
 print(list_dict_, set_dict_, int_dict_) 
```

* * *

[Официальные документы](https://docs.python.org/2/library/collections.html)