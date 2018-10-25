---
title: Range Method
localeTitle: Método de intervalo
---
# Função de Faixa

Se você precisar iterar em uma sequência de números, o intervalo de funções interno range() será útil. Ele gera progressões aritméticas:

#### Exemplo de uso

`py for i in range(5): print(i)`

Saída #### `0 1 2 3 4`

A função range também pode usar uma variável como intervalo. Exemplo:

`valor = 5
for i in range(valor):
  print(i)`
   
Além disso, a função range também pode usar dois ou três elementos para definir o elemento inicial, o elemento final e o valor do intervalo de elementos. Veja o exemplo:

#### Exemplo de uso

`for i in range(1, 10, 2): #1 é o início, 10 é o fim e 2 é a quantidade de elementos que farão um intervalo. No caso, vamos de 1 até 10, pulando de 2 em 2 números.
print(i)`

Saída #### `1 3 5 7 9`
