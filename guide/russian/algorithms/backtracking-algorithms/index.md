---
title: Backtracking Algorithms
localeTitle: Алгоритмы обратного слежения
---
# Алгоритмы обратного слежения

Backtracking - это общий алгоритм поиска всех (или некоторых) решений некоторых вычислительных задач, в частности ограничение проблем с удовлетворенностью, который постепенно создает кандидатов в решения и отказывается от каждого частичного кандидата _(«backtracks»),_ как только он определяет, что кандидат не может возможно, будет завершено до действительного решения.

### Пример проблемы (проблема с рыцарским туром)

_Рыцарь помещается в первый блок пустой доски и, перемещаясь по правилам шахмат, должен посещать каждый квадрат ровно один раз._

\### Путь, за которым следует Рыцарь, чтобы охватить все ячейки Ниже показана шахматная доска с 8 x 8 ячейками. Числа в ячейках указывают количество движения рыцаря. [![Турнирное решение рыцаря - Эйлером](https://upload.wikimedia.org/wikipedia/commons/d/df/Knights_tour_%28Euler%29.png)](https://commons.wikimedia.org/wiki/File:Knights_tour_(Euler).png)

### Наивный алгоритм для рыцарского тура

Наивный алгоритм состоит в том, чтобы генерировать все туры по одному и проверять, удовлетворяет ли сгенерированный тур по ограничениям.
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

### Алгоритм обратной трассировки для рыцарского тура

Ниже приведен алгоритм Backtracking для проблемы тура Knight.
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

### Больше информации

[Википедия](https://en.wikipedia.org/wiki/Backtracking)

[Geeks 4 Geeks](http://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/)

[Очень интересное введение в откат](https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/)