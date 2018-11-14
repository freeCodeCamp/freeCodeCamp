---
title: Exceptions and Errors Handling
---
## Exceptions and Errors Handling

When creating a program we can make mistakes that end with errors and the worst programs we make stop running,
it would be even more annoying if we could not find errors in the code that we made or what was wrong.
In simple words, errors are something that programmers avoid in making a program.
To solve this problem in python we can use `try` and `except`

Example:

```python
try:
    print("this is not a string " + 1)
except:
    print("error")

>>> error
```
And if you want to get error messages in more detail from your code, you can add arguments `except Exception as err`

```python
try:
    print("this is not a string " + 1)
except Exception as err:
    print("error:\n" + str(err))
    
>>> error:
>>> must be str, not int
```
Two additional clauses for the try-except statement are `else` and `finally`. The `else` clause executes when the program runs successfully without any error. While the `finally` clause will always execute no matter what:

```python
try:
    print("this is a " + "string")
except Exception as err:
    print("error:\n" + str(err))
else:
    print("successfully concatenated string")
finally:
    print("end execution")
    
>>> this is a string
>>> successfully concatenated string
>>> end execution
```
More Information:

Errors and Exceptions <a href='https://docs.python.org/3.6/tutorial/errors.html' target='_blank' rel='nofollow'>documentation</a>.
