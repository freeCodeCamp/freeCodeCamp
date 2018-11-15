---
title: Truth Tables
---
## Truth Tables

A truth table is a mathematical tool used in Boolean Algebra. It consists of a column each for the function variables. A final column holds the functional value evaluated for the corresponding values of the variables. For a boolean function of n variables, its truth table expansion will have 2^n rows. This is because each variable has two possible states – true & false.

### AND
Let us explore the truth table for the AND operator:

| x | y | x AND y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | F  |
| T  | F  | F  |
| T  | T  | T  |

AND is binary operator. It operates on two variables, say `x`, `y`. 

Thus we have 2^2 = 4 columns in our truth table!

The last column is the functional value – x AND y.The logic for AND operation is that if values of x and y are both True only then the output would have the value True else it would be False. 

Similarly truth tables for other logical operators -

### NOT

| x | NOT X |
|---|---|
| F  | T  |
| T  | F  |

### OR

| x | y | x OR y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | T  |
| T  | F  | T  |
| T  | T  | T  |

### XOR

| x | y | x XOR y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | T  |
| T  | F  | T  |
| T  | T  | F  |

OR operator:

| x | y | x OR y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | T  |
| T  | F  | T  |
| T  | T  | T  |

NOT operator:

| x | NOT x |
|---|---|
| F  | T  |
| T  | F  |

NAND operator:

| x | y | x NAND y |
|---|---|---|
| F  | F  | T  |
| F  | T  | T  |
| T  | F  | T  |
| T  | T  | F  |

Implication operator:

| x | y | x IMPLY y  |
|---|---|---|
| F  | F  | T  |
| F  | T  | T  |
| T  | F  | F  |
| T  | T  | T  |

The implication operator can often be confusing to some. It is useful to relate real world examples to aid understanding for this operator. For example, consider: 
If it is raining then I use an umbrella. 
Here, assuming it is raining, then I use an umbrella (statement holds)
But if it is raining, and I don't use an umbrella, then the statement fails to hold.
Despite that, if it is not raining, and I still use an umbrella, then the statement also holds (it doesn't really matter if the umbrella is used or not, since it's not raining. Although it would look rather strange).

However, the implication operator can be puzzling for propositions involved that are false in the real world. Consider:
If the sun is made out of water then 1 + 1 = 3.
According to the implication truth table this propositional formula is true.

P implies Q can also be thought as an abbreviation for NOT(P) OR Q.

Double implication operator:

| x | y | x <-> y  |
|---|---|---|
| F  | F  | T  |
| F  | T  | F  |
| T  | F  | F  |
| T  | T  | T  |


Truth tables are a powerful tool. They can be used to express and evaluate simple boolean functions and operations, complex combinational circuits, and sequential logic circuits!



Here is the truth table for the OR operator


| x | y | x OR y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | T  |
| T  | F  | T  |
| T  | T  | T  |

Just like above the OR operator operates on two variables, notice that the only time the OR operator evaluates to True is when `x` & `y` negate eachother.

Let's do one more, let's do the table for the Negation, this operates on one value instead of two


| x | NOT x  |
|---|---|
| T  | F  |
| F  | T  |

This rule is simpler and it simply negates the original value of `x`

#### More Information:

- <a href='http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/truth.html' target='_blank' rel='nofollow'>Hyperphysics - Georgia State University</a>
- <a href='https://en.wikipedia.org/wiki/Truth_table' target='_blank' rel='nofollow'>Wikipedia</a>

