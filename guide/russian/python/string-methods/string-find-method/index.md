---
title: String Find Method
localeTitle: Метод поиска строк
---
## Метод поиска строк

Существует два варианта поиска подстроки внутри строки в Python, `find()` и `rfind()` .

Каждый из них вернет позицию, в которой находится подстрока. Разница между ними заключается в том, что `find()` возвращает нижнюю позицию, а `rfind()` возвращает наивысшую позицию.

Необязательные начальные и конечные аргументы могут быть предоставлены для ограничения поиска подстроки внутри частей строки.

Пример:

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you') 
 6 
 >>> string.rfind('you') 
 42 
```

Если подстрока не найдена, возвращается -1.

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you', 43)  # find 'you' in string anywhere from position 43 to the end of the string 
 -1 
```

Дополнительная информация:

[Документация по](https://docs.python.org/3/library/stdtypes.html#string-methods) строковым методам.