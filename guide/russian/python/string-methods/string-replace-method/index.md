---
title: String Replace Method
localeTitle: Метод замены строки
---
## Метод замены строки

Метод `str.replace(old, new, max)` используется для замены подстроки `old` на строку `new` для общего количества `max` . Этот метод возвращает новую копию строки с заменой. Исходная строка `str` не изменяется.

#### Примеры

1.  Заменить все вхождения `"is"` на `"WAS"`

```python
string = "This is nice. This is good." 
 newString = string.replace("is","WAS") 
 print(newString) 
```

Вывод

```python
ThWAS WAS nice. ThWAS WAS good. 
```

2.  Замените первые 2 вхождения `"is"` на `"WAS"`

```python
string = "This is nice. This is good." 
 newString = string.replace("is","WAS", 2) 
 print(newString) 
```

Вывод

```python
ThWAS WAS nice. This is good. 
```

#### Дополнительная информация:

Подробнее о замене строк в [документах Python](https://docs.python.org/2/library/string.html#string.replace)