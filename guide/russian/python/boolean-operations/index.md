---
title: Python Boolean Operations
localeTitle: Булевы операции на Python
---
[`and`](https://docs.python.org/3/reference/expressions.html#and) , [`or`](https://docs.python.org/3/reference/expressions.html#or) , [`not`](https://docs.python.org/3/reference/expressions.html#not)

[Документы Python - логические операции](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

Это булевские операции, упорядоченные по приоритету приоритета:

Операция | Результат | Заметки  
\--------- | ------------------------------------ | -----  
x или y | если x ложно, то y, else x | (1)  
x и y | если x ложно, то x, else y | (2)  
не x | если x является ложным, то True, else False | (3)

**Заметки:**

1.  Это оператор короткого замыкания, поэтому он оценивает только второй аргумент, если первый - False.
2.  Это оператор короткого замыкания, поэтому он вычисляет только второй аргумент, если первый имеет значение True.
3.  не имеет более низкого приоритета, чем небулевые операторы, поэтому не == b интерпретируется как нет (a == b), а a == not b является синтаксической ошибкой.

## Примеры:

### `not` :
```
>>> not True 
 False 
 >>> not False 
 True 
```

### `and` :
```
>>> True and False    # Short-circuited at first argument. 
 False 
 >>> False and True    # Second argument is evaluated. 
 False 
 >>> True and True     # Second argument is evaluated. 
 True 
```

### `or` :
```
>>> True or False    # Short-circuited at first argument. 
 True 
 >>> False or True    # Second argument is evaluated. 
 True 
 >>> False or False   # Second argument is evaluated. 
 False 

```