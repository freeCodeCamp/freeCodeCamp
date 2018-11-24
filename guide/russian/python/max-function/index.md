---
title: Python Max Function
localeTitle: Функция Python Max
---
`max()` - встроенная функция в Python 3. Она возвращает наибольший элемент в итерабельном или самом большом из двух или более аргументов.

## аргументы

Эта функция принимает в качестве аргумента два или более числа или любой итерабельный. Предоставляя итерабельность в качестве аргумента, мы должны убедиться, что все элементы в iterable имеют один и тот же тип. Это означает, что мы не можем передать список, в котором хранятся как строковые, так и целочисленные значения. Синтаксис: max (iterable, \* iterables \[, key, default\]) max (arg1, arg2, \* args \[, key\])

Допустимые аргументы:
```
max(2, 3) 
 max([1, 2, 3]) 
 max('a', 'b', 'c') 
```

Недопустимые аргументы:
```
max(2, 'a') 
 max([1, 2, 3, 'a']) 
 max([]) 
```

## Возвращаемое значение

Возвращается самый большой элемент в iterable. Если предоставляются два или более позиционных аргумента, возвращается наибольший из аргументов positional. Если итерабельность пуста и значение по умолчанию не указано, повышается значение `ValueError` .

## Образец кода
```
print(max(2, 3)) # Returns 3 as 3 is the largest of the two values 
 print(max(2, 3, 23)) # Returns 23 as 23 is the largest of all the values 
 
 list1 = [1, 2, 4, 5, 54] 
 print(max(list1)) # Returns 54 as 54 is the largest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(max(list2)) # Returns 'c' as 'c' is the largest in the list because c has ascii value larger then 'a' ,'b'. 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(max(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(max(list4)) # Gives ValueError as the argument is empty 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CVok)

[Официальные документы](https://docs.python.org/3/library/functions.html#max)