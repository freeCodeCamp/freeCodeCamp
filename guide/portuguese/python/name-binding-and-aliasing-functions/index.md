---
title: Python Name Binding and Aliasing Functions
localeTitle: Funções de vinculação e aliasing de nome do Python
---
Uma definição de função introduz o nome da função na tabela de símbolos atual. O valor do nome da função tem um tipo que é reconhecido pelo interpretador como uma função definida pelo usuário.
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

Este valor pode ser atribuído a outro nome, que também pode ser usado como uma função. Isso serve como um mecanismo geral de renomeação:
```
>>> fib 
 <function fib at 10042ed0> 
 >>> f = fib 
 >>> f(100) 
 0 1 1 2 3 5 8 13 21 34 55 89 

```