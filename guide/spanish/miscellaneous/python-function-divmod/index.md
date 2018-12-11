---
title: Python Function Divmod
localeTitle: Función Python Divmod
---
# `divmod(a,b)` Python `divmod(a,b)`

`divmod()` es una función incorporada en Python 3, que devuelve el cociente y el resto al dividir el número `a` por el número `b` . Toma dos números como argumentos `a` y `b` . El argumento no puede ser un número complejo.

## Argumento

Toma dos argumentos `a` y `b` : un número entero o un número decimal. No puede ser un número complejo.

## Valor de retorno

El valor de retorno será el par de números positivos que consiste en el cociente y el resto obtenido dividiendo `a` por `b` . En el caso de tipos de operandos mixtos, se aplicarán reglas para operadores aritméticos binarios.  
Para los **argumentos de números enteros** , el valor de retorno será el mismo que `(a // b, a % b)` .  
Para los **argumentos de número decimal** , el valor de retorno será el mismo que `(q, a % b)` , donde `q` suele ser **math.floor (a / b)** pero puede ser 1 menos que eso.

## Ejemplo de código
```
print(divmod(5,2)) # prints (2,1) 
 print(divmod(13.5,2.5)) # prints (5.0, 1.0) 
 q,r = divmod(13.5,2.5)  # Assigns q=quotient & r= remainder 
 print(q) # prints 5.0 because math.floor(13.5/2.5) = 5.0 
 print(r) # prints 1.0 because (13.5 % 2.5) = 1.0 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [REPL It!](https://repl.it/FGLK/0)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#divmod)