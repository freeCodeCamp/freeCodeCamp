---
title: Backtracking Algorithms
---

# Backtracking Algorithms

Backtracking is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons each partial candidate *("backtracks")* as soon as it determines that the candidate cannot possibly be completed to a valid solution.

### Example Problem (The Knight’s tour problem)

   *The knight is placed on the first block of an empty board and, moving according to the rules of chess, must visit each square exactly once.*



 ### Path followed by Knight to cover all the cells
  Following is chessboard with 8 x 8 cells. Numbers in cells indicate move number of Knight.
  [![The knight's tour solution - by Euler](https://upload.wikimedia.org/wikipedia/commons/d/df/Knights_tour_%28Euler%29.png)](https://commons.wikimedia.org/wiki/File:Knights_tour_(Euler).png)

### Naive Algorithm for Knight’s tour
The Naive Algorithm is to generate all tours one by one and check if the generated tour satisfies the constraints.
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

### Backtracking Algorithm for Knight’s tour
Following is the Backtracking algorithm for Knight’s tour problem.
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


### More Information

[Wikipedia](https://en.wikipedia.org/wiki/Backtracking)

[Geeks 4 Geeks](http://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/)

[A very interesting introduction to backtracking](https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/)

[A YouTube demonstration](https://www.youtube.com/watch?v=gBC_Fd8EE8A)
