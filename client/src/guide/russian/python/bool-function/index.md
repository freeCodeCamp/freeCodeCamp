---
title: Python Bool Function
localeTitle: Функция Python Bool
---
`bool()` - встроенная функция в Python 3. Эта функция возвращает логическое значение, то есть True или False. Он принимает один аргумент, `x` .

## аргументы

Он принимает один аргумент, `x` . `x` преобразуется с использованием стандартной [процедуры тестирования прав](https://docs.python.org/3/library/stdtypes.html#truth) .

## Возвращаемое значение

Если `x` является ложным или опускается, это возвращает `False` ; иначе он вернет `True` .

## Образец кода
```
print(bool(4 > 2)) # Returns True as 4 is greater than 2 
 print(bool(4 < 2)) # Returns False as 4 is not less than 2 
 print(bool(4 == 4)) # Returns True as 4 is equal to 4 
 print(bool(4 != 4)) # Returns False as 4 is equal to 4 so inequality doesn't holds 
 print(bool(4)) # Returns True as 4 is a non-zero value 
 print(bool(-4)) # Returns True as -4 is a non-zero value 
 print(bool(0)) # Returns False as it is a zero value 
 print(bool('dskl')) # Returns True as the string is a non-zero value 
 print(bool([1, 2, 3])) # Returns True as the list is a non-zero value 
 print(bool((2,3,4))) # Returns True as tuple is a non-zero value 
 print(bool([])) # Returns False as list is empty and equal to 0 according to truth value testing 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CVCS/2)

[Официальные документы](https://docs.python.org/3/library/functions.html#bool)