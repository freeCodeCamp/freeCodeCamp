---
title: Python Max Function
localeTitle: Função Max do Python
---
`max()` é uma função embutida no Python 3. Ele retorna o maior item em um iterável ou o maior de dois ou mais argumentos.

## Argumentos

Essa função usa dois ou mais números ou qualquer tipo de iterável como argumento. Ao dar um iterável como um argumento, devemos nos certificar de que todos os elementos no iterável são do mesmo tipo. Isso significa que não podemos passar uma lista que tenha valores de string e inteiros armazenados nela. Sintaxe: max (iterável, \* iteráveis ​​\[, chave, padrão\]) max (arg1, arg2, \* args \[, chave\])

Argumentos válidos:
```
max(2, 3) 
 max([1, 2, 3]) 
 max('a', 'b', 'c') 
```

Argumentos inválidos:
```
max(2, 'a') 
 max([1, 2, 3, 'a']) 
 max([]) 
```

## Valor de retorno

O maior item no iterável é retornado. Se dois ou mais argumentos posicionais forem fornecidos, o maior dos argumentos posicionais será retornado. Se o iterable estiver vazio e o padrão não for fornecido, um `ValueError` será gerado.

## Amostra de código
```
print(max(2, 3)) # Returns 3 as 3 is the largest of the two values 
 print(max(2, 3, 23)) # Returns 23 as 23 is the largest of all the values 
 
 list1 = [1, 2, 4, 5, 54] 
 print(max(list1)) # Returns 54 as 54 is the largest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(max(list2)) # Returns 'c' as 'c' is the largest in the list because c has ascii value larger then 'a' ,'b'. 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(max(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(max(list4)) # Gives ValueError as the argument is empty 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CVok)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#max)