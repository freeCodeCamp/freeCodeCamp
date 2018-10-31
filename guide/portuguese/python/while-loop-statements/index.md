---
title: While Loop Statements
localeTitle: While Loop Statements
---
## While Loop Statements

Python utiliza o `while` loop de forma semelhante a outras linguagens populares. A `while` ciclo avalia uma condição, em seguida, executa um bloco de código se a condição é verdadeira. O bloco de código é executado repetidamente até que a condição se torne falsa.

A sintaxe básica é:

```python
counter = 0 
 while counter < 10: 
   # Execute the block of code here as 
   # long as counter is less than 10 
```

Um exemplo é mostrado abaixo:

```python
days = 0 
 week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
 while days < 7: 
   print("Today is " + week[days]) 
   days += 1 
```

Saída:
```
Today is Monday 
 Today is Tuesday 
 Today is Wednesday 
 Today is Thursday 
 Today is Friday 
 Today is Saturday 
 Today is Sunday 
```

Explicação linha-a-linha do CÓDIGO acima:

1.  a variável 'dias' é definida como um valor 0.
2.  uma semana variável é atribuída a uma lista que contém todos os dias da semana.
3.  enquanto loop inicia
4.  o bloco de código será executado até que a condição retorne 'true'.
5.  a condição é 'dias <7', que rougly diz executar o loop while até o ponto que a variável days é menor que 7
6.  Então, quando os dias = 7, o loop while pára a execução.
7.  a variável dias é atualizada em cada iteração.
8.  Quando o loop while é executado pela primeira vez, a linha 'Today is Monday' é impressa no console e a variável days se torna igual a 1.
9.  Como a variável days é igual a 1, que é menor que 7, o loop while é executado novamente.
10.  Ele continua de novo e de novo e, quando o console imprime "Hoje é domingo", a variável days é agora igual a 7 e o loop while pára a execução.

#### Mais Informações:

*   [Python `while` documentação de declaração](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement)