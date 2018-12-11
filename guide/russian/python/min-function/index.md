---
title: Python Min Function
localeTitle: Функция Python Min
---
`min()` является встроенной функцией в Python 3. Она возвращает наименьший элемент в итерабельном или наименьшем из двух или более аргументов.

## аргументы

Эта функция принимает в качестве аргумента два или более числа или любой итерабельный. Предоставляя итерабельность в качестве аргумента, мы должны убедиться, что все элементы в iterable имеют один и тот же тип. Это означает, что мы не можем передать список, в котором хранятся как строковые, так и целочисленные значения.

Допустимые аргументы:
```
min(2, 3) 
 min([1, 2, 3]) 
 min('a', 'b', 'c') 
```

Недопустимые аргументы:
```
min(2, 'a') 
 min([1, 2, 3, 'a']) 
 min([]) 
```

## Возвращаемое значение

Возвращается наименьший элемент в iterable. Если предоставляются два или более позиционных аргумента, наименьший из аргументов позиционирования  
возвращается. Если итерабельность пуста и значение по умолчанию не указано, повышается значение ValueError.

## Образец кода
```
print(min(2, 3)) # Returns 2 as 2 is the smallest of the two values 
 print(min(2, 3, -1)) # Returns -1 as -1 is the smallest of the two values 
 
 list1 = [1, 2, 4, 5, -54] 
 print(min(list1)) # Returns -54 as -54 is the smallest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(min(list2)) # Returns 'a' as 'a' is the smallest in the list in alphabetical order 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(min(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(min(list4)) # Gives ValueError as the argument is empty 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CVir/4)

[Официальные документы](https://docs.python.org/3/library/functions.html#min)