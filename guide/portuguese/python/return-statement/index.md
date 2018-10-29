---
title: Python Return Statement
localeTitle: Declaração de Devolução do Python
---
[Documentos em Python](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement)

Todas as funções retornam um valor quando chamado.

Se uma instrução de retorno for seguida por uma lista de expressões, essa lista de expressões será avaliada e o valor será retornado:
```
>>> def greater_than_1(n): 
 ...     return n > 1 
 ... 
 >>> print(greater_than_1(1)) 
 False 
 >>> print(greater_than_1(2)) 
 True 
```

Se nenhuma lista de expressões for especificada, `None` será retornado:
```
>>> def no_expression_list(): 
 ...     return    # No return expression list. 
 ... 
 >>> print(no_expression_list()) 
 None 
```

Se uma declaração de retorno for atingida durante a execução de uma função, a chamada de função atual é deixada nesse ponto:
```
>>> def return_middle(): 
 ...     a = 1 
 ...     return a 
 ...     a = 2     # This assignment is never reached. 
 ... 
 >>> print(return_middle()) 
 1 
```

Se não houver declaração de retorno, a função retornará None quando chegar ao final:
```
>>> def no_return(): 
 ...     pass     # No return statement. 
 ... 
 >>> print(no_return()) 
 None 
```

Uma única função pode ter várias instruções de `return` . A execução da função termina quando uma dessas instruções de `return` é atingida:
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

Uma única função pode retornar vários tipos:
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

É possível até mesmo que uma única função retorne vários valores com apenas um único retorno:
```
 >>> def return_two_values(): 
 ...     a = 40 
 ...     b = 2 
 ...     return a,b 
 ... 
 >>> print("First value = %d,  Second value = %d" %(return_two_values())) 
 First value = 40,  Second value = 2 

```