---
title: Python Bool Function
localeTitle: Função Python Bool
---
`bool()` é uma função interna do Python 3. Essa função retorna um valor booleano, ou seja, True ou False. Leva um argumento, `x` .

## Argumentos

Leva um argumento, `x` . `x` é convertido usando o [procedimento](https://docs.python.org/3/library/stdtypes.html#truth) padrão de [teste da verdade](https://docs.python.org/3/library/stdtypes.html#truth) .

## Valor de retorno

Se `x` for falso ou omitido, isso retornará `False` ; caso contrário, retorna `True` .

## Amostra de código
```
print(bool(4 > 2)) # Returns True as 4 is greater than 2 
 print(bool(4 < 2)) # Returns False as 4 is not less than 2 
 print(bool(4 == 4)) # Returns True as 4 is equal to 4 
 print(bool(4 != 4)) # Returns False as 4 is equal to 4 so inequality doesn't holds 
 print(bool(4)) # Returns True as 4 is a non-zero value 
 print(bool(-4)) # Returns True as -4 is a non-zero value 
 print(bool(0)) # Returns False as it is a zero value 
 print(bool('dskl')) # Returns True as the string is a non-zero value 
 print(bool([1, 2, 3])) # Returns True as the list is a non-zero value 
 print(bool((2,3,4))) # Returns True as tuple is a non-zero value 
 print(bool([])) # Returns False as list is empty and equal to 0 according to truth value testing 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CVCS/2)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#bool)