---
title: Backtracking Algorithms
localeTitle: 回溯算法
---
# 回溯算法

回溯是一种通用算法，用于查找某些计算问题的所有（或某些）解决方案，特别是约束满足问题，逐步构建候选解决方案，并在确定候选不能时立即放弃每个部分候选_（“回溯”）_可能完成一个有效的解决方案。

### 示例问题（骑士游览问题）

_骑士被放置在空板的第一块上，按照国际象棋的规则移动，必须完全访问每个方块一次。_

###路径跟随Knight覆盖所有细胞 以下是8 x 8单元的棋盘。单元格中的数字表示骑士的移动数量。 [![骑士的旅行解决方案 - 由欧拉](https://upload.wikimedia.org/wikipedia/commons/d/df/Knights_tour_%28Euler%29.png)](https://commons.wikimedia.org/wiki/File:Knights_tour_(Euler).png)

### 骑士之旅的天真算法

朴素算法是逐个生成所有游览并检查生成的游览是否满足约束。
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

### 骑士巡回赛的回溯算法

以下是奈特巡回赛问题的回溯算法。
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

### 更多信息

[维基百科](https://en.wikipedia.org/wiki/Backtracking)

[极客4极客](http://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/)

[一个非常有趣的回溯介绍](https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/)