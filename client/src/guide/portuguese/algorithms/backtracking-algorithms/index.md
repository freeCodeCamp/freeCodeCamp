---
title: Backtracking Algorithms
localeTitle: Algoritmos de Retrocesso
---
# Algoritmos de Retrocesso

Backtracking é um algoritmo geral para encontrar todas (ou algumas) soluções para alguns problemas computacionais, notavelmente problemas de satisfação de restrições, que constroem candidatos para as soluções e abandona cada candidato parcial _("backtracks")_ assim que determina que o candidato não pode possivelmente ser completado para uma solução válida.

### Exemplo de problema (problema do passeio do cavaleiro)

_O cavaleiro é colocado no primeiro bloco de um tabuleiro vazio e, movendo-se de acordo com as regras do xadrez, deve visitar cada quadrado exatamente uma vez._

\### Caminho seguido por Knight para cobrir todas as células A seguir está o tabuleiro de xadrez com 8 x 8 células. Os números nas células indicam o número de movimento do Knight. [![A solução do passeio do cavaleiro - por Euler](https://upload.wikimedia.org/wikipedia/commons/d/df/Knights_tour_%28Euler%29.png)](https://commons.wikimedia.org/wiki/File:Knights_tour_(Euler).png)

### Algoritmo Naive para a turnê de Knight

O Naive Algorithm é para gerar todos os tours um por um e verificar se o tour gerado satisfaz as restrições.
```
while there are untried tours 
 { 
   generate the next tour 
   if this tour covers all squares 
   { 
      print this path; 
   } 
 } 
```

### Algoritmo de Backtracking para o tour de Knight

A seguir está o algoritmo Backtracking para o problema do passeio de Knight.
```
If all squares are visited 
    print the solution 
 Else 
   a) Add one of the next moves to solution vector and recursively 
   check if this move leads to a solution. (A Knight can make maximum 
   eight moves. We choose one of the 8 moves in this step). 
   b) If the move chosen in the above step doesn't lead to a solution 
   then remove this move from the solution vector and try other 
   alternative moves. 
   c) If none of the alternatives work then return false (Returning false 
   will remove the previously added item in recursion and if false is 
   returned by the initial call of recursion then "no solution exists" ) 
```

### Mais Informações

[Wikipedia](https://en.wikipedia.org/wiki/Backtracking)

[Geeks 4 Geeks](http://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/)

[Uma introdução muito interessante para o retrocesso](https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/)