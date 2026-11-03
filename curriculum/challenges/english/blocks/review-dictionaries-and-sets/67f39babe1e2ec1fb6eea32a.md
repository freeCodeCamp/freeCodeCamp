---
id: 67f39babe1e2ec1fb6eea32a
title: Dictionaries and Sets Review
challengeType: 31
dashedName: review-dictionaries-and-sets
---

# --description--

## Dictionaries

- **Dictionaries**: Dictionaries are built-in data structures that store collections of key-value pairs. Keys must be unique. Numbers, strings, and tuples of numbers and strings can be used as keys, but a tuple that contains a list can't. Values can be repeated and can be any data type. Dictionaries also keep the order in which items were added. This is the general syntax of a Python dictionary:

```python
dictionary = {
    key1: value1,
    key2: value2
}
```

- **`dict()` Constructor**: The `dict()` constructor is an alternative way to build the dictionary. You pass a list of tuples as an argument to the `dict()` constructor. These tuples contain the key as the first element and the value as the second element.

```python
pizza = dict([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250), ('toppings', ['mozzarella', 'basil'])])
```

- **Bracket Notation**: To access the value of a key-value pair, you can use the syntax known as bracket notation.

```python
dictionary[key]
```

- **Bracket Assignment**: You can add a new key-value pair or update the value of an existing key with bracket notation. If the key doesn't exist, it's added. If it already exists, its value is replaced.

```python
dictionary[key] = value
```

- **Updating Values While Looping**: You can update the values of existing keys inside a loop over `items()` by assigning to each key.

```python
products = {'apple': 10, 'pear': 20}

for product, price in products.items():
    products[product] = round(price * 0.8)

print(products)  # {'apple': 8, 'pear': 16}
```

## Common Dictionary Methods

- **`get()` Method**: The `get()` method retrieves the value associated with a key. It's similar to the bracket notation, but it lets you set a default value, preventing errors if the key doesn't exist.

```python
dictionary.get(key, default)
```

- **`keys()` and `values()` Methods**: The `keys()` and `values()` methods return a view object with all the keys and values in the dictionary, respectively. A view object is a way to see the content of a dictionary without creating a separate copy of the data.

```python
pizza = {
    'name': 'Margherita Pizza',
    'price': 8.9,
    'calories_per_slice': 250
}

pizza.keys()
# dict_keys(['name', 'price', 'calories_per_slice'])

pizza.values()
# dict_values(['Margherita Pizza', 8.9, 250])
```

- **`items()` Method**: The `items()` method returns a view object with all the key-value pairs in the dictionary, including both the keys and the values.

```python
pizza.items()
# dict_items([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250)])
```

- **`clear()` Method**: The `clear()` method removes all the key-value pairs from the dictionary.

```python
pizza.clear()
```

- **`pop()` Method**: The `pop()` method removes the key-value pair with the key specified as the first argument and returns its value. If the key doesn't exist, it returns the default value specified as the second argument. If the key doesn't exist and the default value is not specified, a `KeyError` is raised.

```python
pizza.pop('price', 10)
pizza.pop('total_price') # KeyError
```

- **`popitem()` Method**: In Python 3.7 and above, the `popitem()` method removes the last inserted item.

```python
pizza.popitem()
```

- **`update()` Method**: The `update()` method updates the key-value pairs with the key-value pairs of another dictionary. If they have keys in common, their values are overwritten. New keys will be added to the dictionary as new key-value pairs.

```python
pizza.update({ 'price': 15, 'total_time': 25 })
```

## Looping Over a Dictionary

- **Iterating Over Values**: If you need to iterate over the values in a dictionary, you can write a `for` loop with `values()` to get all the values of a dictionary.

```python
products = {
    'Laptop': 990,
    'Smartphone': 600,
    'Tablet': 250,
    'Headphones': 70,
}

for price in products.values():
    print(price)
```

Output:

```md
990
600
250
70
```

- **Iterating Over Keys**: If you need to iterate over the keys in the `products` dictionary above, you can write `products.keys()` or `products` directly.

```python
for product in products.keys():
    print(product)

# Or

for product in products:
    print(product)
```

Output:

```md
Laptop
Smartphone
Tablet
Headphones
```

- **Iterating Over Key-Value Pairs**: If you need to iterate over the keys and their corresponding values simultaneously, you can iterate over `products.items()`. You get individual tuples with the keys and their corresponding values.

```python
for product in products.items():
    print(product)
```

Output:

```md
('Laptop', 990)
('Smartphone', 600)
('Tablet', 250)
('Headphones', 70)
```

To store the key and value in separate loop variables, you need to separate them with a comma. The first variable stores the key, and the second stores the value.

```python
for product, price in products.items():
    print(product, price)
```

Output:

```md
Laptop 990
Smartphone 600
Tablet 250
Headphones 70
```

- **`enumerate()` Function**: If you need to iterate over a dictionary while keeping track of a counter, you can call the `enumerate()` function. The function returns an `enumerate` object, which assigns an integer to each item, like a counter. You can start the counter from any number, but by default, it starts from 0.

Assigning the index and item to separate loop variables is the common way to use `enumerate()`. For example, with `products.items()`, you can get the entire key-value pair in addition to the index:

```python
for index, product in enumerate(products.items()):
    print(index, product)
```

Output:

```md
0 ('Laptop', 990)
1 ('Smartphone', 600)
2 ('Tablet', 250)
3 ('Headphones', 70)
```

To customize the initial value of the count, you can pass a second argument to `enumerate()`. For example, here we are starting the count from 1.

```python
for index, product in enumerate(products.items(), 1):
    print(index, product)
```

Output:

```md
1 ('Laptop', 990)
2 ('Smartphone', 600)
3 ('Tablet', 250)
4 ('Headphones', 70)
```

## Sets

- **Sets**: Sets are built-in data structures in Python that do not allow duplicate values. Sets are mutable and unordered, which means that their elements are not stored in any specific order, so you cannot use indices or keys to access them. Numbers, strings, and tuples of numbers and strings can be set elements, but a tuple that contains a list can't.

- **Defining a Set**: To define a set, you need to write its elements within curly brackets and separate them with commas.

```python
my_set = {1, 2, 3, 4, 5}
```

- **Defining an Empty Set**: If you need to define an empty set, you must use the `set()` function. Only writing empty curly braces will automatically create a dictionary.

```python
set() # Set
{}    # Dictionary
```

## Common Set Methods

- **`add()` Method**: You can add an element to a set with the `add()` method, passing the new element as an argument.

```python
my_set.add(6)
```

- **`remove()` and `discard()` Methods**: To remove an element from a set, you can either use the `remove()` method or the `discard()` method, passing the element you want to remove as an argument. The `remove()` method will raise a `KeyError` if the element is not found while the `discard()` method will not.

```python
my_set.remove(4)
my_set.discard(4)
```

- **`clear()` method**:  The `clear()` method removes all the elements from the set.

```python
my_set.clear()
```

## Mathematical Set Operations

- **`issubset()` and `issuperset()` Methods**: The `issubset()` and the `issuperset()` methods check if a set is a subset or superset of another set, respectively.

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 5}

print(your_set.issubset(my_set)) # True
print(my_set.issuperset(your_set)) # True
```

- **`isdisjoint()` Method**: The `isdisjoint()` method checks if two sets are disjoint, if they don't have elements in common.

```python
my_set = {1, 2, 3}
your_set = {4, 5, 6}

print(my_set.isdisjoint(your_set)) # True
```

- **Union Operator (`|`)**: The union operator `|` returns a new set with all the elements from both sets.

```python
my_set = {1, 2, 3}
your_set = {4, 5, 6}

my_set | your_set # {1, 2, 3, 4, 5, 6}
```

- **Intersection Operator (`&`)**: The intersection operator `&` returns a new set with only the elements that the sets have in common.

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 6}

my_set & your_set # {2, 3, 4}
```

- **Difference Operator (`-`)**: The difference operator `-` returns a new set with the elements of the first set that are not in the other set.

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 6}

my_set - your_set # {1, 5}
```

- **Symmetric Difference Operator (`^`)**: The symmetric difference operator `^` returns a new set with the elements that are either in the first or the second set, but not both.

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 6}

my_set ^ your_set # {1, 5, 6}
```

- **Compound Set Operators**: The operators `|=`, `&=`, `-=`, and `^=` perform the union, intersection, difference, and symmetric difference operations, but they update the existing set instead of creating a new one.

```python
my_set = {1, 2, 3}

my_set |= {3, 4}          # {1, 2, 3, 4}
my_set &= {2, 3, 4, 5}    # {2, 3, 4}
my_set -= {4}             # {2, 3}
my_set ^= {3, 5}          # {2, 5}
```

- **`in` Operator**: You can check if an element is in a set or not with the `in` operator.

```python
print(5 in my_set) # True
```

## Python Standard Library

- **Python Standard Library**: A library gives you pre-written and reusable code, like functions, classes, and data structures, that you can reuse in your projects. Python has an extensive standard library with built-in modules that implement standardized solutions for many problems and tasks. Some examples of popular built-in modules are `math`, `random`, `re` (short for "regular expressions"), and `datetime`.

## Import Statement

- **Import Statement**: To access the elements defined in built-in modules, you use an import statement. Import statements are generally written at the top of the file. Import statements work the same for functions, classes, constants, variables, and any other elements defined in the module.

- **Basic Import Statement**: You can use the `import` keyword followed by the name of the module:

```python
import module_name
```

Then, if you need to call a function from that module, you would use dot notation, with the name of the module followed by the name of the function.

```python
module_name.function_name()
```

For example, you would write the following in your code to import the `math` module and get the square root of 36:

```python
import math

math.sqrt(36)
```

- **Importing a Module with a Different Name**: If you need to import the module with a different name (also known as an "alias"), you can use `as` followed by the alias at the end of the import statement. This is often used for long module names or to avoid naming conflicts.

```python
import module_name as module_alias
```

For example, to refer to the `math` module as `m` in your code, you can assign an alias like this:

```python
import math as m
```

Then, you can access the elements of the module using the alias:

```python
m.sqrt(36)
```

- **Importing Specific Elements**: If you don't need everything from a module, you can import specific elements using `from`. In this case, the import statement starts with `from`, followed by the module name, then the `import` keyword, and finally the names of the elements you want to import.

```python
from module_name import name1, name2
```

Then, you can use these names without the module prefix in your Python script. For example:

```python
from math import radians, sin, cos

angle_degrees = 40
angle_radians = radians(angle_degrees)

sine_value = sin(angle_radians)
cos_value = cos(angle_radians)

print(sine_value) # 0.6427876096865393
print(cos_value)  # 0.766044443118978
```
 
This is helpful, but it can result in naming conflicts if you already have functions or variables with the same name. Keep it in mind when choosing which type of import statement you want to use.

If you need to assign aliases to these names, you can do so as well, using the `as` keyword followed by the alias.

```python
from module_name import name1 as alias1, name2 as alias2
```

- **Import Statement with Asterisk (`*`)**: The asterisk tells Python that you want to import the module's public names so that you don't need to use the name of the module as a prefix. If the module defines `__all__`, that list controls which names are imported. Otherwise, names that start with an underscore are excluded.

```python
from module_name import *
```

For example, if you use this to import the `math` module, you'll be able to call any function defined in that module without specifying the name of the module as a prefix.

```python
from math import *
print(sqrt(36))  # 6.0
```

However, this is generally discouraged because it can lead to namespace collisions and make it harder to know where names come from.

## `if __name__ == '__main__'`

- **`__name__` Variable**: `__name__` is a special built-in variable in Python. When a Python file is executed directly, Python sets the value of this variable to the string `"__main__"`. But if the Python file is imported as a module into another Python script, the value of the `__name__` variable is set to the name of that module.

This is why you'll often find this conditional in Python scripts. It contains the code that you want to run **only** if the Python script is running as the main program.

```python
if __name__ == '__main__': 
    # Code
```

## Validating Data

- **Creating a Set from an Iterable**: The `set()` constructor accepts an iterable, such as a list, a string, or a dictionary (which gives its keys), provided its elements can be stored in a set. For example, a list of numbers is valid, but a list containing other lists is not. This is useful for comparing the keys you expect with the keys you actually have.

```python
expected_keys = {'name', 'age'}
data = {'name': 'Jessica', 'age': 30}

print(set(data) == expected_keys)  # True
```

- **Dictionary Unpacking with `**`**: The `**` operator unpacks a dictionary into keyword arguments, where each key is used as a parameter name.

```python
def greet(name, age):
    print(f'{name} is {age}')

data = {'name': 'Jessica', 'age': 30}
greet(**data)  # Jessica is 30
```

- **Regular Expressions and `re.search()`**: A regular expression describes a text pattern. The `re.search()` function looks for the pattern anywhere in a string. It returns a match object if it finds one, or `None` if it doesn't.

```python
import re

print(re.search('cat', 'concatenate'))  # <re.Match object; span=(3, 6), match='cat'>
print(re.search('dog', 'concatenate'))  # None
```

- **Case-Insensitive Matching with `re.IGNORECASE`**: Pass `re.IGNORECASE` as the third argument to ignore the difference between uppercase and lowercase letters.

```python
print(re.search('cat', 'CAT', re.IGNORECASE))  # <re.Match object; span=(0, 3), match='CAT'>
```

- **Raw Strings and `\d`**: A raw string starts with `r` and treats backslashes as literal characters, which keeps regular expressions readable. In a pattern, `\d` matches any single digit.

```python
print(re.search(r'\d', 'room 5'))  # <re.Match object; span=(5, 6), match='5'>
```

- **The `+` Quantifier**: The `+` quantifier matches one or more repetitions of the pattern before it.

```python
print(re.search(r'\d+', 'room 305'))  # <re.Match object; span=(5, 8), match='305'>
```

- **`re.fullmatch()` Function**: The `re.fullmatch()` function only returns a match object if the entire string matches the pattern. Otherwise, it returns `None`.

```python
print(re.fullmatch(r'\d+', '305'))      # <re.Match object; span=(0, 3), match='305'>
print(re.fullmatch(r'\d+', 'room 305')) # None
```

- **Object Identity with `is` and `is not`**: The `is` operator checks if two names refer to the same object, while `is not` checks that they don't. These operators are the standard way to check whether a value is `None`.

```python
result = None

print(result is None)      # True
print(result is not None)  # False
```

- **The `all()` Function**: The `all()` function returns `True` if every element in an iterable is truthy. It also returns `True` for an empty iterable.

```python
print(all([1, 'a', True]))  # True
print(all([1, 0, True]))    # False
```

# --assignment--

Review the Dictionaries and Sets topics and concepts.
