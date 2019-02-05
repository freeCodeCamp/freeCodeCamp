---
title: Basics of Simplex Solutions
---

## Reason for Sthe Simplex Method

In linear algebra, some problems have multiple solutions that can be accepted as feasible, but in order to get the Optimal solution it becomes necessary to use a method such as the Simplex method.
Note: Alternative methods such as a Graphical LP can also be used but this is not always possible.

## Different Simplex Methods:

Here are the 3 most used methods for solving a LP using Simplex:
1. Primal Simplex - Used to solve MAXIMUM Problems.
2. Dual Simplex - Used when a derived problem exists within a Primal Simplex Solution (Duality).
3. 2-Phase Simplex - Used to solve MIN Problems.


## Solving Linear Programming Problems using Simplex

In order to use the Simplex method, first the Linear model needs to be converted into canonical form.
The canonical for is when all inequality expressions are changed into equal expressions.

Example:

Basic LP

MAX Z = 5X + 4Y
Subject to Constraints:
                      1. 8X + 6Y <= 120
                      2. 2X + 1Y <= 50
                      3. X >= 10
                      4. X, y >= 0
                      
Canonical Form

MAX Z = -5X - 4Y                                      Note: Z Row becomes negative.
ST:
    1. 8X + 6Y + S1 = 120                             Note: In order to set a Smaller-than equation to equal a Slack variable is introduced.
    2. 2X - 1y + S2 = 50
    3. X - E1 + A1 = 10                               Note: In order to set a Larger-than equation to equal a Excess variable is added and an Artificial variable is subtracted.
    
Now the Initial Tablau can be created:

Note: X & Y will be the Non-Basic-Variables as they are Negative and Slack/Axcess/Artificial variables do not count in this case.

      *
T0  | X  | Y  | S1  | S2  | E1  | A1  ||  RHS | Ratio
Z   | -5 | -4 | 0   | 0   | 0   | 0   ||  0   | ---
1   | 8  | 6  | 1   | 0   | 0   | 0   ||  120 | 15
2   | 2  | 1  | 0   | 1   | 0   | 0   ||  50  | 25
3   | 1  | 0  | 0   | 0   | -1  | 1   ||  10  | 10    *

Note: * Represents the Column with the Smallest Negative and the Column with the Smallest Positive.

Steps:
1. Find the Column with the Smallest Negative.
2. Devide the RHS with the selected column to calculate the Ratio.
3. Find the Row with the Smallest Positive Ratio
4. Pivot on the selected Row & Column.
5. Continue doing this until no more negative NBVs remain.

Optimal Table:

T2  | X  | Y  | S1  | S2  | E1  | A1  ||  RHS 
Z   | 0  | 0  | 0.67| 0   | 0.3 | -0.3||  76.67   
1   | 0  | 1  | 1.67| 0   | 1.3 | -1.3||  6.67 
2   | 0  | 0  | -0.1| 1   | 0.6 | -0.6||  23.33  
3   | 1  | 0  | 0   | 0   | -1  | 1   ||  10  

Steps:
1. Identify all Basic Variables:
  1.1. Only Columns with a single '1' and rest '0' can be a Basic Variable.
  1.2. Order of identification is determined by Row number.
2. The RHS value corresponding to the '1' value for each BV is the Value of that variable.

Eg:

cBV:  Y = 6.67 ;  S1 = 23.33  ; X = 10

Thus the Optimal Solution to the LP is Z = 5(10) + 4(6.67)

----------------------------------------------------------------------------------------------------------------------









