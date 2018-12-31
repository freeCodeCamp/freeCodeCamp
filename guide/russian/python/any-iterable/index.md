---
title: Python Any Iterable
localeTitle: Python Any Iterable
---
`any()` является встроенной функцией в Python 3 (и Python 2 начиная с версии 2.5), чтобы проверить, является ли какой-либо из элементов [_итерабельного_](https://docs.python.org/3/glossary.html#term-iterable) `True` . Он принимает один аргумент, `iterable` .

## аргументация

### итерируемый

`iterable` аргумент - это коллекция, чьи записи должны быть проверены. Обычно это `list` , `str` , `dict` , `tuple` и т. Д., Даже `file object` .

## Возвращаемое значение

Возвращаемое значение является логическим. В том и только том случае, если **все** записи итерабельны `False` , или `iterable` пуста; он возвращает `False` . Эта функция по существу выполняет логическую операцию `OR` по всем элементам.

Если даже один из них `True` , он возвращает `True` .

Операция `any()` эквивалентна (внутренне, не может быть реализована точно так же)
```
def any(iterable): 
    for element in iterable: 
        if element: 
            return True 
    return False 
```

## Образец кода
```
print(any([])) #=> False 
 print(any({})) #=> False 
 print(any([None])) #=> False 
 print(any(['', {}, 0])) #=> False 
 print(any([6, 7])) #=> True 
 print(any([6, 7, None])) #=> True 
 print(any([0, 6, 7])) #=> True 
 print(any([9, 8, [1, 2]])) #=> True 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CL9c/0)

[Официальные документы](https://docs.python.org/3/library/functions.html#any)