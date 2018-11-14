---
title: Python Boolean Operations
localeTitle: Operações booleanas em Python
---
[`and`](https://docs.python.org/3/reference/expressions.html#and) , [`or`](https://docs.python.org/3/reference/expressions.html#or) , [`not`](https://docs.python.org/3/reference/expressions.html#not)

[Python Docs - Operações booleanas](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

Estas são as operações booleanas, ordenadas por prioridade crescente:

Operação | Resultado | Notas  
\--------- | ------------------------------------ | -----  
x ou y | se x é falso, então y, senão x | (1)  
x e y | se x é falso, então x, senão y | (2)  
não x | se x é falso, então True, else False | (3)

**Notas:**

1.  Este é um operador de curto-circuito, então só avalia o segundo argumento se o primeiro for Falso.
2.  Este é um operador de curto-circuito, por isso só avalia o segundo argumento se o primeiro for verdadeiro.
3.  não tem uma prioridade mais baixa que os operadores não booleanos, portanto, não a == b é interpretada como não (a == b), e a == não b é um erro de sintaxe.

## Exemplos:

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