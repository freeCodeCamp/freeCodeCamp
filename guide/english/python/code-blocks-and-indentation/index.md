---
title: Python Code Blocks and Indentation
---
It is generally good practice for you not to mix tabs and spaces when coding in Python. Doing this can possibly cause a ```TabError```, and your program will crash. [PEP8](https://www.python.org/dev/peps/pep-0008/#tabs-or-spaces) recommends spaces as the preferred method of indentation. This is because in Python 3, mixing tabs and spaces are not allowed.

That being said, it is a good idea to follow the formatting convention that your team agreed to use. Be consistent when you code - choose either to indent using tabs or spaces and follow your chosen convention throughout your program. Many code editors and IDEs allow you to specify how many spaces you want in a tab to ensure consistency.

#### Code Blocks and Indentation
One of the most distinctive features of Python is its use of indentation to mark blocks of code. Consider the if-statement from our simple password-checking program:

``` python
if pwd == 'apple':
    print('Logging on ...')
else:
    print('Incorrect password.')

print('All done!')
```

The lines print('Logging on ...') and print('Incorrect password.') are two separate code blocks. These ones happen to be only a single line long, but Python lets you write code blocks consisting of any number of statements.

To indicate a block of code in Python, you must indent each line of the block by the same amount. The two blocks of code in our example if-statement are both indented four spaces, which is a typical amount of indentation for Python.

In most other programming languages, indentation is used only to help make the code look pretty. But in Python, it is required for indicating what block of code a statement belongs to. For instance, the final print('All done!') is not indented, and so is not part of the else-block.

Programmers familiar with other languages often bristle at the thought that indentation matters: Many programmers like the freedom to format their code how they please. However, Python indentation rules are quite simple, and most programmers already use indentation to make their code readable. Python simply takes this idea one step further and gives meaning to the indentation.

#### If/elif-statements
An if/elif-statement is a generalized if-statement with more than one condition. It is used for making complex decisions. For example, suppose an airline has the following “child” ticket rates: Kids 2 years old or younger fly for free, kids older than 2 but younger than 13 pay a discounted child fare, and anyone 13 years or older pays a regular adult fare. The following program determines how much a passenger should pay:

```python
# airfare.py
age = int(input('How old are you? '))
if age <= 2:
    print(' free')
elif 2 < age < 13:
    print(' child fare)
else:
    print('adult fare')
```

After Python gets age from the user, it enters the if/elif-statement and checks each condition one after the other in the order they are given. So first it checks if age is less than 2, and if so, it indicates that the flying is free and jumps out of the elif-condition. If age is not less than 2, then it checks the next elif-condition to see if age is between 2 and 13. If so, it prints the appropriate message and jumps out of the if/elif-statement. If neither the if-condition nor the elif-condition is True, then it executes the code in the else-block. 

Along the lines of how crucial indentation is, regard how the rest of the structure may be equally important. For instance, the use of a semicolon `:` after the if- or elif-conditions indicates that the conditions to be met have all been described and allow for the actions, the next line that is further indented such as the print arguments, to be understood by Python.

#### Conditional expressions
Python has one more logical operator that some programmers like (and some don’t!). It’s essentially a shorthand notation for if-statements that can be used directly within expressions. Consider this code:

```python
food = input("What's your favorite food? ")
reply = 'yuck' if food == 'lamb' else 'yum'
```

The expression on the right-hand side of = in the second line is called a conditional expression, and it evaluates to either 'yuck' or 'yum'. It’s equivalent to the following:

```python
food = input("What's your favorite food? ")
if food == 'lamb':
   reply = 'yuck'
else:
   reply = 'yum'
```

Conditional expressions are usually shorter than the corresponding if/else-statements, although not quite as flexible or easy to read. In general, you should use them when they make your code simpler.

[Python Documentation - Indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation)
