---
title: String Methods
localeTitle: Строковые методы
---
**TODO: `string` базовая информация**

[Документы Python - Строки](https://docs.python.org/3/library/stdtypes.html#strings)

**Создание:**

Пустая `string` создается с использованием пары кавычек или апострофов:

```shell
>>> new_string = '' 
 >>> type(new_string) 
 <class 'string'> 
 >>> len(new_string) 
 0 
```

[Python Docs - больше о струнах](https://docs.python.org/3/tutorial/datastructures.html#more-on-strings)

*   `string.find('you')` Возвращает самую низкую позицию, в которой находится подстрока.
    
*   `str.join(iterable)` Присоединяйте все элементы в `iterable` с указанной строкой.
    
*   `str.replace(old, new, max)` используется для замены подстроки `old` на строку `new` для `max` раз. Этот метод возвращает новую копию строки с заменой, а оригинал `str` неизменно.
    
*   `string.split(separator, maxsplit)` Возвращает список подстрок, разделенных `separator` , необязательное число `maxsplit` , а если не указано, строка будет разбита на все экземпляры `separator` .
    
*   `string.strip(to_strip)` Возвращает строку с `to_strip` как из начала, так и из конца строки. Если `to_strip` не указан, это приведет к `to_strip` всех пробельных символов.