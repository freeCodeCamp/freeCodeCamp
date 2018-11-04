---
title: While Loop Statements
---
## While Loop Statements

<!-- Please add any articles you think might be helpful to read before writing the article -->

Python utilizes the `while` loop similarly to other popular languages.  The `while` loop evaluates a condition then executes a block of code if the condition is true. The block of code executes repeatedly until the condition becomes false.

The basic syntax is:

```python
counter = 0
while counter < 10:
   # Execute the block of code here as
   # long as counter is less than 10
   counter += 1
```

An example is shown below:
```python
days = 0    
week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
while days < 7:
   print("Today is " + week[days])
   days += 1
```

Output:

```
Today is Monday
Today is Tuesday
Today is Wednesday
Today is Thursday
Today is Friday
Today is Saturday
Today is Sunday
```
Line-by-Line Explanation of the above code:
1. the variable 'days' is set to a value 0.
2. a variable week is assigned to a list containing all the days of the week.
3. while loop begins if the variable 'days' is less than 7
4. executes the code within the while loop
5. the variable 'days' is increased by 1
The code will then return to line 3 and repeat until days = > 7


## Infinite Loops:

As previously noted, a 'while' loop will run until the conditional logic is false. Because of this, it is important to  set a "false" condition within the executable code. If no false is included, the while loop will run infinitely. Use caution when setting logic parameters to prevent the infinite loop unless that is the desired output. 

Because `while` loops are conditioned controlled loops, they are great for programs that need to be run for an indefinite number of times. This allows for input to be taken time and time again until the condition is met. A good practical example would be for a game in which the player has the option to try again. Until the player responds with the response that meets the `while` loop condition, the player can continue to play the game, simulating the loop as many times as they please.

#### More Information:

- <a href='https://docs.python.org/3/reference/compound_stmts.html#the-while-statement' target='_blank' rel='nofollow'>Python `while` statement documentation</a>
