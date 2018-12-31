---
title: Python Return Statement
localeTitle: Declaración de retorno de Python
---
[Python Docs](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement)

Todas las funciones devuelven un valor cuando se llama.

Si una declaración de devolución va seguida de una lista de expresiones, esa lista de expresiones se evalúa y se devuelve el valor:
```
>>> def greater_than_1(n): 
 ...     return n > 1 
 ... 
 >>> print(greater_than_1(1)) 
 False 
 >>> print(greater_than_1(2)) 
 True 
```

Si no se especifica una lista de expresiones, se devuelve `None` :
```
>>> def no_expression_list(): 
 ...     return    # No return expression list. 
 ... 
 >>> print(no_expression_list()) 
 None 
```

Si se alcanza una declaración de retorno durante la ejecución de una función, la llamada a la función actual se deja en ese punto:
```
>>> def return_middle(): 
 ...     a = 1 
 ...     return a 
 ...     a = 2     # This assignment is never reached. 
 ... 
 >>> print(return_middle()) 
 1 
```

Si no hay una declaración de retorno, la función devuelve Ninguno cuando llega al final:
```
>>> def no_return(): 
 ...     pass     # No return statement. 
 ... 
 >>> print(no_return()) 
 None 
```

Una sola función puede tener múltiples declaraciones de `return` . La ejecución de la función finaliza cuando se alcanza una de estas declaraciones de `return` :
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

Una sola función puede devolver varios tipos:
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

Incluso es posible que una sola función devuelva varios valores con solo una única devolución:
```
 >>> def return_two_values(): 
 ...     a = 40 
 ...     b = 2 
 ...     return a,b 
 ... 
 >>> print("First value = %d,  Second value = %d" %(return_two_values())) 
 First value = 40,  Second value = 2 

```