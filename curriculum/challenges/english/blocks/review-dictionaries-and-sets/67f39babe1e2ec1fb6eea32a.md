---
id: 67f39babe1e2ec1fb6eea32a
title: Dictionaries and Sets Review
challengeType: 31
dashedName: review-dictionaries-and-sets
---

# --description--

## Dictionaries

- **Dictionaries**: Dictionaries are built-in data structures that store collections of key-value pairs. Each key must be unique, while values can be repeated and of any data type. In modern Python, dictionaries maintain insertion order. Keys must be of immutable types, such as numbers, strings, or tuples containing only immutable objects (a tuple containing a list cannot be used as a key). This is the general syntax of a Python dictionary:

```python
dictionary = {
    key1: value1,
    key2: value2
}
```

- **`dict()` Constructor**: The `dict()` constructor is an alternative way to build the dictionary. You pass a list of tuples as an argument to the `dict()` constructor. These tuples contain the key as the first element and the value as the second element.

```python
pizza = dict([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250), ('toppings', ['mozzarella', 'basil'])])
```

- **Bracket Notation**: To access the value of a key-value pair, you can use bracket notation with the key inside square brackets.

```python
dictionary[key]
```

- **Adding and Updating Entries**: You can add a new key-value pair or update an existing one using bracket assignment. If the key already exists, its value is replaced; otherwise, the new key-value pair is added:

```python
pizza = {
    'name': 'Margherita Pizza',
    'price': 8.9
}

# Update an existing key
pizza['name'] = 'Margherita'

# Add a new key
pizza['calories_per_slice'] = 250
```

- **Unpacking Operator (`**`)**: The `**` operator can unpack dictionary elements into keyword arguments in a function call:

```python
def make_pizza(name, price):
    return f'{name} costs ${price}'

info = {'name': 'Margherita', 'price': 8.9}
print(make_pizza(**info)) # Margherita costs $8.9
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

You can also update values in place while iterating over items:

```python
for product, price in products.items():
    products[product] = round(price * 0.8)

print(products)
# {'Laptop': 792, 'Smartphone': 480, 'Tablet': 200, 'Headphones': 56}
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

- **Sets**: Sets are built-in data structures in Python that do not allow duplicate values. Sets are mutable and unordered, which means that their elements are not stored in any specific order, so you cannot use indices or keys to access them. Sets can contain values of immutable data types, such as numbers, strings, and tuples containing only immutable objects (a tuple containing a list cannot be a set element).

- **Defining a Set**: To define a set, you need to write its elements within curly brackets and separate them with commas.

```python
my_set = {1, 2, 3, 4, 5}
```

- **Defining an Empty Set**: If you need to define an empty set, you must use the `set()` function. Only writing empty curly braces will automatically create a dictionary.

```python
set() # Set
{}    # Dictionary
```

- **Constructing a Set from an Iterable**: You can create a set from an iterable, such as a list or a dictionary's keys, using the `set()` function. Any duplicates in the iterable are automatically discarded:

```python
numbers = set([1, 2, 2, 3, 4, 4])
print(numbers) # {1, 2, 3, 4}
```

This is useful for comparing the keys in a dictionary against an expected set of keys:

```python
user = {'name': 'Alice', 'age': 30}
expected_keys = {'name', 'age'}

if set(user.keys()) == expected_keys:
    print('All expected keys are present.')
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

- **Compound Set Assignment Operators**: Each set operator has a corresponding compound assignment operator (`|=`, `&=`, `-=`, `^=`) that performs the operation and updates the original set in place:

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 6}

my_set -= your_set
print(my_set) # {1, 5}
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

- **Import Statement with Asterisk (`*`)**: The asterisk (`*`) imports all public names from a module into the current namespace without requiring the module prefix:

```python
from module_name import *
```

When `__all__` is defined in the module, it controls which names are imported. If `__all__` is not defined, all names that do not begin with an underscore (`_`) are imported. For example, a module defining `visible = 1` and `_hidden = 2` without `__all__` exposes `visible` through a wildcard import, but not `_hidden`.

Wildcard imports are generally discouraged because they can lead to namespace collisions and make it harder to know where names come from.

## `if __name__ == '__main__'`

- **`__name__` Variable**: `__name__` is a special built-in variable in Python. When a Python file is executed directly, Python sets the value of this variable to the string `"__main__"`. But if the Python file is imported as a module into another Python script, the value of the `__name__` variable is set to the name of that module.

This is why you'll often find this conditional in Python scripts. It contains the code that you want to run only if the Python script is running as the main program.

```python
if __name__ == '__main__': 
    # Code
```

## Regular Expressions

- **Regular Expressions**: A regular expression (regex) is a pattern used to match a sequence of characters in text. The `re` module provides functions for working with regular expressions.

- **`re.search()`**: The `search()` function searches a string for a match to a pattern. It returns a match object if the pattern is found, or `None` if it is not:

```python
import re

text = 'Patient ID: P1001'
match = re.search(r'P1001', text)
print(match) # <re.Match object; span=(12, 17), match='P1001'>
```

- **`re.fullmatch()`**: The `fullmatch()` function returns a match object only when the pattern matches the entire string from start to finish. If extra characters are found, it returns `None`:

```python
import re

print(re.fullmatch(r'P\d+', 'P1001'))  # <re.Match object ...>
print(re.fullmatch(r'P\d+', 'P1001!')) # None
```

- **Case-Insensitive Matching**: Pass `re.IGNORECASE` as an optional flag argument to match characters without regard to case:

```python
import re

print(re.search(r'p\d+', 'P1001', re.IGNORECASE)) # <re.Match object ...>
```

- **Raw Strings and `\d`**: Prefixing a string literal with `r` creates a raw string, which treats backslashes literally instead of as escape characters. The `\d` sequence matches any decimal digit (`0` through `9`):

```python
pattern = r'\d'
```

- **The `+` Quantifier**: Quantifiers specify how many times a character or group can repeat. The `+` quantifier matches the preceding pattern one or more times:

```python
import re

print(re.search(r'\d+', 'Patient 1001')) # <re.Match object; span=(8, 12), match='1001'>
```

## Object Identity and Built-in Functions

- **`is` and `is not` Operators**: The `is` and `is not` operators check whether two values refer to the same object in memory (identity comparison). They are commonly used to check if a value is the `None` object:

```python
value = None

print(value is None)     # True
print(value is not None) # False
```

- **`all()` Function**: The `all()` function returns `True` if every element in the given iterable is truthy, and `False` otherwise:

```python
print(all([True, True, True]))  # True
print(all([True, False, True])) # False
print(all([1, 2, 3]))           # True
print(all([0, 1, 2]))           # False
```

# --assignment--

Review the Dictionaries and Sets topics and concepts.
