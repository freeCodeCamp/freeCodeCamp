---
title: Python Name Binding and Aliasing Functions
localeTitle: Функции связывания и слияния имени Python
---
Определение функции вводит имя функции в текущей таблице символов. Значение имени функции имеет тип, который распознается интерпретатором как пользовательская функция.
```
>>> something = 1 
 >>> type(something) 
 <type 'int'> 
 >>> def something(): 
 ...     pass 
 ... 
 >>> type(something) 
 <type 'function'> 
 >>> something = [] 
 >>> type(something) 
 <type 'list'> 
```

Это значение может быть присвоено другому имени, которое затем также может использоваться как функция. Это служит общим механизмом переименования:
```
>>> fib 
 <function fib at 10042ed0> 
 >>> f = fib 
 >>> f(100) 
 0 1 1 2 3 5 8 13 21 34 55 89 

```