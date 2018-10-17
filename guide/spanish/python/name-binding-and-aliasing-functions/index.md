---
title: Python Name Binding and Aliasing Functions
localeTitle: Funciones de vinculación y alias de nombres de Python
---
Una definición de función introduce el nombre de la función en la tabla de símbolos actual. El valor del nombre de la función tiene un tipo que el intérprete reconoce como una función definida por el usuario.
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

Este valor puede asignarse a otro nombre que también puede usarse como una función. Esto sirve como un mecanismo general de cambio de nombre:
```
>>> fib 
 <function fib at 10042ed0> 
 >>> f = fib 
 >>> f(100) 
 0 1 1 2 3 5 8 13 21 34 55 89 

```