---
title: Python Slicestartstopstep
localeTitle: Python Slicestartstopstep
---
`slice(start:stop[:step])` é um objeto que geralmente contém uma parte de uma sequência. Uma fatia é criada usando a notação subscrita, \[\] com dois pontos entre os números quando vários são dados, como em variable\_name \[1: 3: 5\].

## Argumentos

Esta função pode ser usada para dividir tuplas, matrizes e listas.

O valor do parâmetro `start` (ou None, se não fornecido)

O valor do parâmetro `stop` (ou último índice de sequência)

O valor do parâmetro da `step` (ou Nenhum, se não fornecido). Não pode ser 0.

Todos os três devem ser do tipo inteiro.

## Retorna

Se somente a `stop` for fornecida, ela gerará parte da sequência do índice `0` até a `stop` .

Se apenas o `start` for fornecido, ele gera parte da sequência após o `start` índice até o último elemento.

Se ambos `start` e `stop` são fornecidos, ele gera parte da seqüência após o `start` índice até a `stop` .

Se todos os três `start` , `stop` e `step` forem fornecidos, ele gerará a parte da sequência após o `start` índice até a `stop` com o incremento da `step` do índice.

## Exemplo
```
a = [1, 2, 3, 4, 5, 6, 7, 8] 
 print(a[:5])    # prints [1, 2, 3, 4, 5] 
 print(a[2:])    # prints [3, 4, 5, 6, 7, 8] 
 print(a[2:5])    # prints [3, 4, 5] 
 print(a[2:7:2])    # prints [3, 5, 7] 
```

Você pode indexar o último índice de uma sequência usando `-1` :
```
a = [1, 2, 3, 4, 5, 6] 
 print(a[-1])    # prints 6 
 print(a[2:-1])    # prints [3, 4, 5] 
```

Você pode inverter uma sequência usando a notação de fatia `[::-1]` :
```
a = [1, 2, 3, 4, 5, 6] 
 print(a[::-1])    # prints [6, 5, 4, 3, 2, 1] 
```

[Documentação Oficial](https://docs.python.org/3/library/functions.html#slice) ![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CT5h)