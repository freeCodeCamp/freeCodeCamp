---
title: Python Boolean Operations
localeTitle: Operaciones Booleanas Python
---
[`and`](https://docs.python.org/3/reference/expressions.html#and) , [`or`](https://docs.python.org/3/reference/expressions.html#or) , [`not`](https://docs.python.org/3/reference/expressions.html#not)

[Python Docs - Operaciones Booleanas](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

Estas son las operaciones booleanas, ordenadas por prioridad ascendente:

Operacion | Resultado | Notas  
\--------- | ------------------------------------ | -----  
x o y | si x es falso, entonces y, si no x | (1)  
x y y | si x es falso, entonces x, si no y | (2)  
no x si x es falso, entonces verdadero, sino falso | (3)

**Notas:**

1.  Este es un operador de cortocircuito, por lo que solo evalúa el segundo argumento si el primero es Falso.
2.  Este es un operador de cortocircuito, por lo que solo evalúa el segundo argumento si el primero es Verdadero.
3.  no tiene una prioridad más baja que los operadores no booleanos, por lo que no a == b se interpreta como no (a == b), y a == not b es un error de sintaxis.

## Ejemplos:

### `not`
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