---
title: If / Elif / Else Statements
---

## If / Elif / Else Statements

The `if`/`elif`/`else` structure is a common way to control the flow of a program, allowing you to execute specific blocks of code depending on the value of some data. If the condition following the keyword `if` evaluates as `True`, the block of code will execute:
Note that parenthesis are not used before and after the condition check such as in other languages.

```python
if True:
  print('If block will execute!')
```

```python
x = 5

if x > 4:
  print("The condition was true!") #this statement executes
```
> **Tips** : You can use **1** as alternative to **True** and **0** as an alternative to **False**

_Example_:
```python
if 1:   # 1 evaluates to true
  print('If block will execute!')
 ```
***Else statement***

You can optionally add an `else` response that will execute if the condition is `False`:
```python
if not True:
  print('If statement will execute!')
else:
  print('Else statement will execute!')
```
Or you can also see this example
```python
y = 3

if y > 4:
  print("I won't print!") #this statement does not execute
else:
  print("The condition wasn't true!") #this statement executes
```

*Note that there is no condition following the `else` keyword - it catches all situations where the condition was `False`*

***Elif statement***

Multiple conditions can be checked by including one or more `elif` checks after your initial `if` statement but only one condition will execute:

```python
z = 7

if z > 8:
  print("I won't print!") #this statement does not execute
elif z > 5:
  print("I will!") #this statement will execute
elif z > 6:
  print("I also won't print!") #this statement does not execute
else:
  print("Neither will I!") #this statement does not execute
```

*Note only the first condition that evaluates as `True` will execute. Even though `z > 6` is `True`, the `if/elif/else` block terminates after the first true condition. This means that an `else` will only execute if none of the conditions prior to it were `True`.*

***Nested if statement***

We can also create nested if statements for decision making. Before preceding please refer to the <a href='https://guide.freecodecamp.org/python/code-blocks-and-indentation' target='_blank' rel='nofollow'>indentation guide once</a> before preceding. 

Let's take an example of finding a number which is even and also greater than '10':
```python 
x = 34
if x %  2 == 0:  # this is how you create a comment and now, checking for even.
  if x > 10:
    print("This number is even and is greater than 10")
  else:
    print("This number is even, but not greater than 10")
else:
  print ("The number is not even. So no point checking further.")
```
Output

```python
This number is even and is greater than 10
```
This was just a simple example of a nested if statement. Please feel free to explore more online.

While the examples above are simple, you can create complex conditions using <a href='https://guide.freecodecamp.org/python/comparisons' target='_blank' rel='nofollow'>boolean comparisons</a> and <a href='https://guide.freecodecamp.org/python/boolean-operations' target='_blank' rel='nofollow'>boolean operators</a>.


***Inline python if-else statement***

We can also use if-else statements with inline python functions.
The following example should check if the number is greater or equal than 50, if yes return True:

```python 
x = 89
is_greater = True if x >= 50 else False

print(is_greater)
```

Output
```python
>
True
>
```
## Rock-Paper-Scissors Game using if-elif in Python

```python
#importing random library
import random
#make the set of moves
moves = ["rock","paper","scissors"]
keep_playing = "True"

while keep_playing == "True":
    cmove = random.choice(moves)
    pmove = input("What is your move: rock , paper or scissors?")
    print("computer chose ",cmove)
    if cmove == pmove:
        print("Tie")
    elif pmove=="rock" and cmove == "scissors":
        print("player Wins")
    elif pmove == "rock" and cmove == "paper":
        print("computer wins")
    elif pmove == "paper" and cmove =="scissors":
        print("computer wins")
    elif pmove == "paper" and cmove == "rock":
        print ("player wins")
    elif pmove == "scissors" and cmove =="rock":
        print("computter wins")
    elif pmove == "scissors" and cmove =="paper":
        print ("Player wins")  

```

