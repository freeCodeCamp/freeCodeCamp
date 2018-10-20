---
title: Python Function Divmod
localeTitle: Função Python Divmod
---
# `divmod(a,b)` Python `divmod(a,b)`

`divmod()` é uma função embutida no Python 3, que retorna o quociente e o resto ao dividir o número `a` pelo número `b` . Leva dois números como argumentos `a` & `b` . O argumento não pode ser um número complexo.

## Argumento

São necessários dois argumentos `a` & `b` - um inteiro ou um número decimal. Ele não pode ser um número complexo.

## Valor de retorno

O valor de retorno será o par de números positivos consistindo de quociente e resto obtido dividindo `a` por `b` . No caso de tipos de operandos mistos, regras para operadores aritméticos binários serão aplicadas.  
Para **argumentos numéricos inteiros** , o valor de retorno será o mesmo que `(a // b, a % b)` .  
Para **argumentos numéricos decimais** , o valor de retorno será o mesmo que `(q, a % b)` , onde `q` é geralmente **math.floor (a / b),** mas pode ser 1 menor que isso.

## Amostra de código
```
print(divmod(5,2)) # prints (2,1) 
 print(divmod(13.5,2.5)) # prints (5.0, 1.0) 
 q,r = divmod(13.5,2.5)  # Assigns q=quotient & r= remainder 
 print(q) # prints 5.0 because math.floor(13.5/2.5) = 5.0 
 print(r) # prints 1.0 because (13.5 % 2.5) = 1.0 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [REPL It!](https://repl.it/FGLK/0)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#divmod)