---
title: List Remove Method
localeTitle: Список Удалить метод
---
## Список Удалить метод

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
 print(kiss) 
```

#### Вывод
```
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: list.remove(x): x not in list 
```

#### Дополнительная информация:

Более подробную информацию о `remove()` можно найти [здесь.](https://docs.python.org/3.6/tutorial/datastructures.html)