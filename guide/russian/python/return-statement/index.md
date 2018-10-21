---
title: Python Return Statement
localeTitle: Заявление о возврате Python
---
[Документы Python](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement)

Все функции возвращают значение при вызове.

Если за оператором return следует список выражений, этот список выражений вычисляется и возвращается значение:
```
>>> def greater_than_1(n): 
 ...     return n > 1 
 ... 
 >>> print(greater_than_1(1)) 
 False 
 >>> print(greater_than_1(2)) 
 True 
```

Если список выражений не указан, возвращается `None` :
```
>>> def no_expression_list(): 
 ...     return    # No return expression list. 
 ... 
 >>> print(no_expression_list()) 
 None 
```

Если во время выполнения функции достигается оператор return, текущий вызов функции остается в этой точке:
```
>>> def return_middle(): 
 ...     a = 1 
 ...     return a 
 ...     a = 2     # This assignment is never reached. 
 ... 
 >>> print(return_middle()) 
 1 
```

Если нет оператора возврата, функция возвращает None при достижении конца:
```
>>> def no_return(): 
 ...     pass     # No return statement. 
 ... 
 >>> print(no_return()) 
 None 
```

Одна функция может иметь несколько операторов `return` . Выполнение функции заканчивается при достижении одного из этих `return` операторов:
```
 >>> def multiple_returns(n): 
 ...    if(n): 
 ...        return "First Return Statement" 
 ...    else: 
 ...        return "Second Return Statement" 
 ... 
 >>> print(multiple_returns(True)) 
 First Return Statement 
 >>> print(multiple_returns(False)) 
 Second Return Statement 
```

Одна функция может возвращать различные типы:
```
 >>> def various_return_types(n): 
 ...     if(n==1): 
 ...         return "Hello World."   # Return a string 
 ...     elif(n==2): 
 ...         return 42               # Return a value 
 ...     else: 
 ...         return True             # Return a boolean 
 ... 
 >>> print(various_return_types(1)) 
 Hello World. 
 >>> print(various_return_types(2)) 
 42 
 >>> print(various_return_types(3)) 
 True 
```

Возможно даже, что одна функция возвращает несколько значений только с одним возвратом:
```
 >>> def return_two_values(): 
 ...     a = 40 
 ...     b = 2 
 ...     return a,b 
 ... 
 >>> print("First value = %d,  Second value = %d" %(return_two_values())) 
 First value = 40,  Second value = 2 

```