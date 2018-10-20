---
title: Python Min Function
localeTitle: Função Min do Python
---
`min()` é uma função embutida no Python 3. Ele retorna o menor item em um iterável ou o menor de dois ou mais argumentos.

## Argumentos

Essa função usa dois ou mais números ou qualquer tipo de iterável como argumento. Ao dar um iterável como um argumento, devemos nos certificar de que todos os elementos no iterável são do mesmo tipo. Isso significa que não podemos passar uma lista que tenha valores de string e inteiros armazenados nela.

Argumentos válidos:
```
min(2, 3) 
 min([1, 2, 3]) 
 min('a', 'b', 'c') 
```

Argumentos inválidos:
```
min(2, 'a') 
 min([1, 2, 3, 'a']) 
 min([]) 
```

## Valor de retorno

O menor item no iterável é retornado. Se dois ou mais argumentos posicionais forem fornecidos, o menor dos argumentos posicionais  
é retornado. Se o iterable estiver vazio e o padrão não for fornecido, um ValueError será gerado.

## Amostra de código
```
print(min(2, 3)) # Returns 2 as 2 is the smallest of the two values 
 print(min(2, 3, -1)) # Returns -1 as -1 is the smallest of the two values 
 
 list1 = [1, 2, 4, 5, -54] 
 print(min(list1)) # Returns -54 as -54 is the smallest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(min(list2)) # Returns 'a' as 'a' is the smallest in the list in alphabetical order 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(min(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(min(list4)) # Gives ValueError as the argument is empty 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CVir/4)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#min)