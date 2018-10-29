---
title: Python Zip Function
localeTitle: Функция Zip Python
---
`zip()` - встроенная функция в Python, которая возвращает список кортежей. В n-м кортеже будет n-й элемент из каждого из повторяющихся аргументов. Если аргументы в последовательности имеют неравные длины, он вернет список, усеченный до длины кратчайшего итерабельного.

## аргументация

Любое количество итераций, разделенных запятой.

## Возвращаемое значение

Список кортежей n-го элемента из всех последовательностей

## Образец кода
```
nums = [1,2,3,4] 
 print(*nums) # prints 1 2 3 4 
 numsAndNames = zip([1,2,3],['one','two','three']) 
 print(*numsAndNames) # prints (1,'one') (2,'two') (3,'three') 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/@StuffsExplained/pythonZipFunction)

[Официальные документы - Python 3](https://docs.python.org/3.3/library/functions.html#zip)

[Официальные документы - Python 2.7](https://docs.python.org/2/library/functions.html#zip)