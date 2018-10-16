---
title: Functions
---
## Functions

A function allows you to define a reusable block of code that can be executed many times within your program. 

Functions allow you to create more modular and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) solutions to complex problems.

While Python already provides many built-in functions such as `print()` and `len()`, you can also define your own functions to use within your projects.

One of the great advantages of using functions in your code is that it reduces the overall number of lines of code in your project.

### Syntax

In Python, a function definition has the following features:

1. The keyword `def`
2. a function name
3. paranthesis'()', and within paranthesis input parameters,although the input parameters are optional.
4. a colon ':'
5. some block of code to execute
6. a return statement (optional)

```python
# a function with no parameters or returned values
def sayHello():
  print("Hello!")

sayHello()  # calls the function, 'Hello!' is printed to the console

# a function with a parameter
def helloWithName(name):
  print("Hello " + name + "!")

helloWithName("Ada")  # calls the function, 'Hello Ada!' is printed to the console

# a function with multiple parameters with a return statement
def multiply(val1, val2):
  return val1 * val2

multiply(3, 5)  # prints 15 to the console
```

Functions are blocks of code that can be reused simply by calling the function. This enables simple, elegant code reuse without explicitly re-writing sections of code. This makes code both more readable, makes for easier debugging, and limits typing errors. 

Functions in Python are created using the `def` keyword, followed by a function name and function parameters inside parentheses.

A function always returns a value,The `return` keyword is used by the function to return a value, if you don't want to return any value, the default value `None` will returned. 

The function name is used to call the function, passing the needed parameters inside parentheses.

```python
# this is a basic sum function
def sum(a, b):
  return a + b

result = sum(1, 2)
# result = 3
```

You can define default values for the parameters, that way Python will interpretate that the value of that parameter is the default one if none is given.

```python
def sum(a, b=3):
  return a + b

result = sum(1)
# result = 4
```

You can pass the parameters in the order you want, using the name of the parameter.

```python
result = sum(b=2, a=2)
# result = 4
```

However, it is not possible to pass a keyword argument before a non-keyword one

```Python
result = sum(3, b=2)
#result = 5
result2 = sum(b=2, 3)
#Will raise SyntaxError
```

Functions are also Objects, so you can assign them to a variable, and use that variable like a function.

```python
s = sum
result = s(1, 2)
# result = 3
```

### Notes

- If a function definition includes parameters, you must provide the same number of parameters when you call the function.

  ```python
  print(multiply(3))  # TypeError: multiply() takes exactly 2 arguments (0 given)

  print(multiply('a', 5))  # 'aaaaa' printed to the console

  print(multiply('a', 'b'))  # TypeError: Python can't multiply two strings
  ```

- The block of code that the function will run includes all statements indented within the function.

  ```python
  def myFunc():
    print('this will print')
    print('so will this')

  x = 7
  # the assignment of x is not a part of the function since it is not indented
  ```

- Variables defined within a function only exist within the scope of that function.

  ```python
  def double(num):
    x = num * 2
    return x

  print(x)  # error - x is not defined
  print(double(4))  # prints 8
  ```
-Python interprets the function block only when the function is called and not when the function is defined.So even if the function definition block contains some sort of error,the python interpretar will point that out only when the function is called. 
### More Information:
- <a href='https://docs.python.org/3/tutorial/controlflow.html#defining-functions' target='_blank' rel='nofollow'>Python 3 Docs: Defining Functions</a>
