---
title: Backtracking Algorithms
localeTitle: Algoritmos de retroceso
---
# Algoritmos de retroceso

Backtracking es un algoritmo general para encontrar todas (o algunas) soluciones a algunos problemas de cómputo, especialmente los problemas de satisfacción restringida, que incrementan los candidatos a las soluciones y abandonan cada candidato parcial _("backtracks")_ tan pronto como determina que el candidato no puede posiblemente se completará a una solución válida.

### Problema de ejemplo (El problema de la gira del caballero)

_El caballero se coloca en el primer bloque de un tablero vacío y, moviéndose de acuerdo con las reglas del ajedrez, debe visitar cada casilla exactamente una vez._

\### Ruta seguida por Knight para cubrir todas las celdas A continuación se muestra el tablero de ajedrez con 8 x 8 celdas. Los números en las celdas indican el número de movimiento de Caballero. [![La solución de la gira del caballero - por Euler](https://upload.wikimedia.org/wikipedia/commons/d/df/Knights_tour_%28Euler%29.png)](https://commons.wikimedia.org/wiki/File:Knights_tour_(Euler).png)

### Algoritmo ingenuo para la gira del caballero

El algoritmo ingenuo es generar todos los recorridos uno por uno y verificar si el recorrido generado satisface las restricciones.
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

### Algoritmo de retroceso para la gira de Knight

A continuación se muestra el algoritmo de Backtracking para el problema de la gira de Knight.
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

### Más información

[Wikipedia](https://en.wikipedia.org/wiki/Backtracking)

[Geeks 4 Geeks](http://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/)

[Una introducción muy interesante al backtracking.](https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/)