---
title: Python f-strings
---
# f-strings in Python
In Python version 3.6, a new method of formatting strings was implemented. The new method is called Literal string interpolation (though commonly referred to as an f-string, due to f prefix at the beginning of the string).

The use of f-string allows the programmer to dynamically insert a variable into a string in a clean and concise manner. In addition to inserting variables into a string this feature also provides the ability for a programmer to evaluate expressions, join the contents of collection, and even invoke functions within the f-string.

To perform these dynamic behaviours within an f-string we wrap them inside curly brackets within the string, and prepend a lower case f to the beginning of the string (before the opening quote).

## Examples
### Dynamically inserting a variable into a string at runtime:

#### Input

```python
name = 'Jon Snow'
greeting = f'Hello! {name}.'
print(greeting)
```

#### Output

```
Hello! Jon Snow.
```

### Multiple variables, of different types, can be inserted in the same string:

### Input

```python
item_id = 'P12305'
price = 425.50
print(f'Item {item_id} costs {price} USD.')
```

#### Output

```
Item P12305 costs 425.50 USD.
```

### Evaluate an expression in a string:

#### Input

```python
val1 = 2
val2 = 3
expr = f'The sum of {val1} + {val2} is {val1 + val2}'
print(expr)
```

#### Output
```
The sum of 2 + 3 is 5
```

### Calling a function and inserting output within a string:

#### Input
```python
def sum(*args):
    result = 0
    for arg in args:
        result += arg
    return result

func = f'The sum of 3 + 5 is {sum(3, 5)}'
print(func)
```

#### Output
```
The sum of 3 + 5 is 8
```
### Joining the contents of a collection within a string:

#### Input

```python
fruits = ['Apple', 'Banana', 'Pear']

list_str = f'List of fruits: {", ".join(fruits)}'
print(list_str)
```

#### Output
```
List of fruits: Apple, Banana, Pear
```
### Convert an integer to 8-bit binary

### Input

```python
num = 42

print(f'The binary of {num} is {num:08b}')
```

### Output
```
The binary of 42 is 00101010
```

### Sources
https://www.python.org/dev/peps/pep-0498/
