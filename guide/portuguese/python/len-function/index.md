---
title: Python Len Function
localeTitle: Função Python Len
---
`len()` é uma função embutida no Python 3. Esse método retorna o tamanho (o número de itens) de um objeto. Leva um argumento `x` .

## Argumentos

Leva um argumento, `x` . Esse argumento pode ser uma sequência (como uma string, bytes, tupla, lista ou intervalo) ou uma coleção (como um dicionário, conjunto ou conjunto congelado).

## Valor de retorno

Esta função retorna o número de elementos no argumento que é passado para a função `len()` .

## Amostra de código
```
list1 = [123, 'xyz', 'zara'] # list 
 print(len(list1)) # prints 3 as there are 3 elements in the list1 
 
 str1 = 'basketball' # string 
 print(len(str1)) # prints 10 as the str1 is made of 10 characters 
 
 tuple1 = (2, 3, 4, 5) # tuple 
 print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1 
 
 dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary 
 print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CUmt/15)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#len)