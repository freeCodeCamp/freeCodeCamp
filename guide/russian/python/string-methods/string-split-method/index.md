---
title: String Split Method
localeTitle: Метод разделения строк
---
Функция `split()` обычно используется для разделения строк в Python.

#### Метод `split()`

Шаблон: `string.split(separator, maxsplit)`

`separator` : строка разделителя. Вы разделили строку на основе этого символа. Напр. возможно " ", ":", ";" и т.д

`maxsplit` : количество раз, чтобы разбить строку на основе `separator` . Если не указано или -1, строка разделяется на основе всех вхождений `separator`

Этот метод возвращает список подстрок, разделенных `separator`

#### Примеры

1) Разделить строку на пробел: ""

```python
string = "freeCodeCamp is fun." 
 print(string.split(" ")) 
```

Вывод:

```python
['freeCodeCamp', 'is', 'fun.'] 
```

2) Разделить строку на запятую: ","

```python
string = "freeCodeCamp,is fun, and informative" 
 print(string.split(",")) 
```

Вывод:

```python
['freeCodeCamp', 'is fun', ' and informative'] 
```

3) Не указан `separator`

```python
string = "freeCodeCamp is fun and informative" 
 print(string.split()) 
```

Вывод:

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative'] 
```

Примечание. Если `separator` не указан, строка будет удалена из **всех** пробелов

```python
string = "freeCodeCamp        is     fun and    informative" 
 print(string.split()) 
```

Вывод:

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative'] 
```

3) Разделите строку, используя `maxsplit` . Здесь мы разделили строку на "" дважды:

```python
string = "freeCodeCamp is fun and informative" 
 print(string.split(" ", 2)) 
```

Вывод:

```python
['freeCodeCamp', 'is', 'fun and informative'] 
```

#### Больше информации

Проверьте [документы Python на разделение строк](https://docs.python.org/2/library/stdtypes.html#str.split)