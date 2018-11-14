---
title: Converting Integer to String in Python
---
## Converting Integer to String in Python

Unlike many other languages out there, Python does not implicitly typecast integers (or floats) to strings when concatenating with strings. Fortunately, Python has a handy built-in function `str()` which will convert the argument passed in to a string format.

#### The Wrong Way

Programmers coming from other languages may attempt to do the following string concatenation which produces an error:

```py
age = 18

string = "Hello, I am " + age + " years old"
```
<a href='https://repl.it/JyYH/0' target='_blank' rel='nofollow'>Run code on repl.it</a>

The error that shows up is
```
Traceback (most recent call last):
  File "python", line 3, in <module>
TypeError: must be str, not int
```

`TypeError: must be str, not int` indicates that the integer must first be converted to a string to be concatenated.

#### The Correct Way

Simple concatenation example:

```py
age = 18

print("Hello, I am " + str(age) + " years old")

# Output
# Hello, I am 18 years old
```
<a href='https://repl.it/Jz8Q/0' target='_blank' rel='nofollow'>Run code on repl.it</a>

Print `1 2 3 4 5 6 7 8 9 10` using a single string
```py
result = ""

for i in range(1, 11):
    result += str(i) + " "

print(result)

# Output
# 1 2 3 4 5 6 7 8 9 10
```
<a href='https://repl.it/KBLB/0' target='_blank' rel='nofollow'>Run code on repl.it</a>

#### Line by Line explanation of the above code

1. First, a variable 'result' is assigned to an empty string.
2. For loop is being used to iterate over a list of numbers.
3. This list of numbers is generated using the range function.
4. So range(1,11) is going to generate a list of numbers from 1 to 10.
5. On each for loop iteration, the 'i' variable is going to take up values from 1 to 10.
6. On first iteration when the variable i=1, then the variable [result=result+str(i)+"(space character)"],str(i) converts the 'i' which is an integer value to a string value.
7. Since i=1, on the first iteration finally result=1.
8. And the same process goes on until i=10 and finally after the last iteration result=1 2 3 4 5 6 7 8 9 10.
9. Therefore when we finally print the result after the for loop the output on the console is '1 2 3 4 5 6 7 8 9 10'.


#### More Information:
<a href='https://docs.python.org/3/library/stdtypes.html#str' target='_blank' rel='nofollow'>Official Python documentation for `str()`</a>



