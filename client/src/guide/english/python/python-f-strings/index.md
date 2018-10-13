---
title: Python f-strings
---
# f-strings in Python
In Python version 3.6, a new method of formatting strings was implemented. The new method is called Literal string interpolation (though commonly referred to as an f-string).

The use of f-string allows the programmer to dynamically insert a variable into a string in a clean and concise manner. In addition to inserting variables into a string this feature also also provides the ability for a programmer to evaluate expressions, join the contents of collection, and even invoke functions within the f-string.

To perform these dynamic behaviours within an f-string we wrap them inside curly brackets within the string, and prepend a lower case f to the beginning of the string (before the opening quote.

### Examples
1. Dynamically inserting a variable into a string at runtime:
    ```python
    name = 'Jon Snow'
    greeting = f'Hello! {name}'
    print(greeting)
    ```

2. Evaluate an expression in a string:
    ```python
    val1 = 2
    val2 = 3
    expr = f'The sum of {val1} + {val2} is {val1 + val2}'
    print(expr)
    ```
3. Calling a function and inserting output within a string:
    ```python
    def sum(*args):
        result = 0
        for arg in args:
            result += arg
        return result

    func = f'The sum of 3 + 5 is {sum(3, 5)}'
    print(func)
    ```
 4. Joining the contents of a collection within a string:

    ```python
    fruits = ['Apple', 'Banana', 'Pear']

    list_str = f'List of fruits: {", ".join(fruits)}'
    print(list_str)
    ```
### Sources
https://www.python.org/dev/peps/pep-0498/
