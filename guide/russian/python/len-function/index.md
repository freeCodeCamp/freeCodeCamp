---
title: Python Len Function
localeTitle: Функция Python Len
---
`len()` - встроенная функция в Python 3. Этот метод возвращает длину (количество элементов) объекта. Он принимает один аргумент `x` .

## аргументы

Он принимает один аргумент, `x` . Этот аргумент может быть последовательностью (например, строкой, байтами, кортежем, списком или диапазоном) или набором (например, словарем, набором или замороженным набором).

## Возвращаемое значение

Эта функция возвращает количество элементов в аргументе, передаваемом функции `len()` .

## Образец кода
```
list1 = [123, 'xyz', 'zara'] # list 
 print(len(list1)) # prints 3 as there are 3 elements in the list1 
 
 str1 = 'basketball' # string 
 print(len(str1)) # prints 10 as the str1 is made of 10 characters 
 
 tuple1 = (2, 3, 4, 5) # tuple 
 print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1 
 
 dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary 
 print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CUmt/15)

[Официальные документы](https://docs.python.org/3/library/functions.html#len)