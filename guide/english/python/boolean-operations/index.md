---
title: Python Boolean Operations
---
<a href='https://docs.python.org/3/reference/expressions.html#or' target='_blank' rel='nofollow'>`or`</a>, <a href='https://docs.python.org/3/reference/expressions.html#and' target='_blank' rel='nofollow'>`and`</a>, <a href='https://docs.python.org/3/reference/expressions.html#not' target='_blank' rel='nofollow'>`not`</a>

<a href='https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not' target='_blank' rel='nofollow'>Python Docs - Boolean Operations</a>

These are the Boolean operations, ordered by ascending priority:
```
Operation | Result | Notes  
--------- | ------------------------------------ | -----  
x or y | if x is false, then y, else x | (1)  
x and y | if x is false, then x, else y | (2)  
not x | if x is false, then True, else False | (3)
```
**Notes:**

1.  This is a short-circuit operator, so it only evaluates the second argument if the first one is False.
2.  This is a short-circuit operator, so it only evaluates the second argument if the first one is True.
3.  `not` has a lower priority than non-Boolean operators, so `not a == b` is interpreted as `not (a == b)`, and `a == not b` is a syntax error.

## Examples:

### `or`:
```
    >>> True or False    # Short-circuited at first argument.
    True
    >>> False or True    # Second argument is evaluated.
    True
    >>> False or False   # Second argument is evaluated.
    False
```
### `and`:
``
    >>> True and False    # Second argument is evaluated.
    False
    >>> False and True    # Short-circuted at first argument.
    False
    >>> True and True     # Second argument is evaluated.
    True
```    
### `not`:
```
    >>> not True
    False
    >>> not False
    True
```

## Other boolean-operations:

These are other boolean operations which are not part of the Python language, you will have to define them yourself or use the boolean expression within the parenteses.
```
Operation | Result | Notes  
--------- | ------------------------------------ | -----  
nand ( not (x and y) ) | if x is True, then y, else x | (1) 
nor ( not (x or y) ) | if x is False, then x, else y | (2) 
xor ( not (not (x or y) or (x and y)) ) |  |  
xnor ( not (x or y) or (x and y) ) |  | 
```
**Notes:**

1.  This is a short-circuit operator, so it only evaluates the second argument if the first one is True.
2.  This is a short-circuit operator, so it only evaluates the second argument if the first one is False.

## Examples:

### `nand`:
#### Used in a defined way:
```python
    def nand(x, y):
        return not(x and y)
```

#### `output`:
```
    >>> nand(True, True) # Short-circuited at first argument.
    False
    >>> nand(False, True) # Second argument is evaluated.
    True
    >>> nand(True, False) # Short-circuited at first argument.
    True
    >>> nand(False, False) # Second argument is evaluated.
    True
```
#### Used in a direct way:
```python
    if not(x and y):
        do something....
```

#### `output`:
```
    >>> not(True and True): # Short-circuited at first argument.
    False
    >>> not(True and True) # Second argument is evaluated.
    True
    >>> not(True and True) # Short-circuited at first argument.
    True
    >>> not(True and True) # Second argument is evaluated.
    True
```
### `nor`:
#### Used in a defined way:
```python
    def nor(x, y):
        return not(x or y)
```
#### `output`:
```
    >>> nor(True, True) # Short-circuited at first argument.
    False
    >>> nor(False, True) # Second argument is evaluated.
    False
    >>> nor(True, False) # Short-circuited at first argument.
    False
    >>> nor(False, False) # Second argument is evaluated.
    True
```   
#### Used in a direct way:
```python
    if nor(x or y):
        do something....
```

#### `output`:
```
    >>> not(True or True): # Short-circuited at first argument.
    False
    >>> not(True or True) # Second argument is evaluated.
    False
    >>> not(True or True) # Short-circuited at first argument.
    False
    >>> not(True or True) # Second argument is evaluated.
    True
```   
### `xor`:
#### Used in a defined way:
```python
    def xor(x, y):
        return not(not(x or y) or (x and y))
```
#### `output`:
```
    >>> xor(True, True)
    False
    >>> xor(False, True)
    True
    >>> xor(True, False)
    True
    >>> xor(False, False)
    False
```

#### Used in a direct way:
```python
    if not(not(x or y) or (x and y)):
        do something....
```

#### `output`:
```
    >>> not(not(True or True) or (True and True)): # Short-circuited at first argument.
    False
    >>> not(not(True or False) or (True and False)) # Second argument is evaluated.
    True
    >>> not(not(False or True) or (False and True)) # Short-circuited at first argument.
    True
    >>> not(not(False or False) or (False and False)) # Second argument is evaluated.
    False
```
### `xnor`:
#### Used in a defined way:
```python
    def xnor(x, y):
        return not(x or y) or (x and y)
```
#### `output`: 
```
    >>> xnor(True, True)
    True
    >>> xnor(False, True)
    False
    >>> xnor(True, False)
    False
    >>> xnor(False, False)
    True
```
#### Used in a direct way:
```python
    if not(x or y) or (x and y):
        do something....
```

#### `output`:
```
    >>> not(not(True or True) or (True and True)): # Short-circuited at first argument.
    True
    >>> not(not(True or False) or (True and False)) # Second argument is evaluated.
    False
    >>> not(not(False or True) or (False and True)) # Short-circuited at first argument.
    False
    >>> not(not(False or False) or (False and False)) # Second argument is evaluated.
    True
