---
title: Python Zip Function
localeTitle: Função Zip Python
---
`zip()` é uma função embutida no Python que retorna uma lista de tuplas. A enésima tupla terá o enésimo elemento de cada um dos argumentos iteráveis. Se os argumentos na seqüência forem de comprimentos desiguais, ele retornará uma lista truncada para o tamanho do menor iterável.

## Argumento

Qualquer número de iteráveis ​​separados por vírgula.

## Valor de retorno

Uma lista de tupla do enésimo elemento de todas as seqüências

## Amostra de código
```
nums = [1,2,3,4] 
 print(*nums) # prints 1 2 3 4 
 numsAndNames = zip([1,2,3],['one','two','three']) 
 print(*numsAndNames) # prints (1,'one') (2,'two') (3,'three') 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/@StuffsExplained/pythonZipFunction)

[Documentos oficiais - Python 3](https://docs.python.org/3.3/library/functions.html#zip)

[Documentos oficiais - Python 2.7](https://docs.python.org/2/library/functions.html#zip)