---
title: Python All Iterable
localeTitle: Python All Iterable
---
`all()` является встроенной функцией в Python 3 (и Python 2 начиная с версии 2.5), чтобы проверить, являются ли все элементы [_итерабельны_](https://docs.python.org/3/glossary.html#term-iterable) `True` . Он принимает один аргумент, `iterable` .

## аргументация

### итерируемый

`iterable` аргумент - это коллекция, чьи записи должны быть проверены. Это может быть `list` , `str` , `dict` , `tuple` и т. Д.

## Возвращаемое значение

Возвращаемое значение является логическим. Если и только если **все** записи `iterable` [правдивы](https://guide.freecodecamp.org/python/truth-value-testing) , он возвращает `True` . Эта функция по существу выполняет логическую операцию `AND` по всем элементам.

Если даже один из них не является правдивым, он возвращает `False` .

Операция `all()` эквивалентна (не внутренне реализована точно так же)
```
def all(iterable): 
    for element in iterable: 
        if not element: 
            return False 
    return True 
```

## Образец кода
```
print(all([])) #=> True  # Because an empty iterable has no non-truthy elements 
 print(all([6, 7])) #=> True 
 print(all([6, 7, None])) #=> False  # Because it has None 
 print(all([0, 6, 7])) #=> False  # Because it has zero 
 print(all([9, 8, [1, 2]])) #=> True 
 print(all([9, 8, []])) #=> False  # Because it has [] 
 print(all([9, 8, [1, 2, []]])) #=> True 
 print(all([9, 8, {}])) #=> False  # Because it has {} 
 print(all([9, 8, {'engine': 'Gcloud'}])) #=> True 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CL9U/0)

[Официальные документы](https://docs.python.org/3/library/functions.html#all)