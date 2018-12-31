---
title: List Remove Method
localeTitle: Список Удалить метод
---
## Метод удаления элемента из списка

Метод `remove()` удаляет аргумент, предоставленный ему из списка.

#### Пример использования

```py
words = ["I", "love", "Python"] 
 words.remove("I") 
 print(words) 
```

#### Вывод

```py
["love","Python"] 
```

Обратите внимание, что он возвращает ошибку, если элемент, который нужно удалить, не найден в списке, как показано в примере ниже.

```py
kiss = ["keep", "it", "simple", "stupid"] 
kiss.remove("complex") 
```

#### Вывод
```
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: list.remove(x): x not in list 
```

Если требуется удалить элемент с конкретным индексом, можно прибегнуть в функции `del`:

```python
kiss = ['keep', 'it', 'simple', 'stupid']
del kiss[3]
print(kiss)
```

#### Вывод

```python
['keep', 'it', 'simple']
```

#### Дополнительная информация:

Более подробную информацию о `remove()` можно найти [здесь.](https://docs.python.org/3.6/tutorial/datastructures.html)
