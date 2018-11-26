---
title: Difference between Python 'is' and '==' operators
---

## Purpose
`is` is a check for object identity - i.e., checking if two or more variables are referring to the same object. You can't overload `is`.

`==` evaluates to true if object referred to by the variables are equal. You can overload `==` via the `__eq__` method.


## Return Value

The return value for both would be either `True` or `False`.

## Code Sample
```python
a = 2.3
a is 2.3  # => False
a == 2.3  # => True

a = [234,123,321]
b = [234,123,321]
a == b  # => True
a is b  # => False
a = b
a == b  # => True
a is b  # => True, because if we change a, b changes too
```
This means that `is` operator checks whether both the variables refer to the same memory location and hence are the same objects.
On the other hand, `==` operator checks whether the values stored by those variables are equal. (One can also choose to provide some custom functionality other than equality of values for their classes by overloading it).

**Note** - *Using the assignment operator `=` between two variables causes `is` operator to be true.*
```python    
a = b # => Assignment
a is b # => True
```
## Usage with common data types

### Ints and strings
For ints and strings, separately assigning the same value in two variables result in both `is` and `==` operator being evaluated to True.
This is because for same value of integers and strings, a unique memory is allocated and all variables storing that value point to that same location. This is done because integers and strings do not have a bounded length in python and hence it is better to allow multiple variables to access the same value in memory.
And since ints and strings are immutable, only way to modify an int or string variable is to reassign them to a new value and that will always result in both the variables pointing to different memory locations.
```python
a = 2
b = 2
b is a # => True

b = a
b = 3 #Reassignment of one variable
print(a) # => 2
    
a = "str"
b = "str"
b is a # => True
    
b = a 
b = "newstr" #Reassignment of one variable
print(a) # => 'str'
```  
The only exception is in case of strings when the `str()` function is used to create the same string and the argument passed is not of type string. This results a new memory space being created for the same string and hence `is` operator results in False while `==` operator results in True (as values are equal but memory location is not).
```python
a = "1"
b = str(1) # str() function used with integer argument
b is a # => False even though both a and b have the same string "1"
```    
### Floats and Tuples
For floats and tuples, separately assigning the same value in two variables results in `is` being evaluated to False whereas `==` being evaluated to True. This is because floats in python have a fixed size (unlike ints) and everytime a float or a tuple value is assigned to a variable, a new memory location is allocated to that variable.
And since floats and tuples are immutable, only way to modify a float or tuple variable is to reassign them to a new value and that will always result in both the variables pointing to different memory locations even if they weren't earlier.
```python
a = 2.4
b = 2.4
b is a # => False
#Same case for tuples
    
b = a #Here both point to same memory location and 'is' operator, if used here, will result in True
b = 3.3 #Reassignment of one variable
print(a) # => 2.4
#Same case for tuples
```
### Lists, sets and dictionaries
For lists, sets and dictionaries, separately assigning the same value in two variables results in `is` being evaluated to False whereas `==` being evaluated to True. This is because for each assignment, a new memory location is allocated to that variable. Here each variable can be modified separately.
```python
a = [234,123,321]
b = [234,123,321]
a == b  # => True
a is b  # => False
#Same case for dictionaries and sets
```    
However, if `=` assignment operator is used to give the same value to both variables, `is` operator too results in True. And now modifying (not reassigning) any variable will also result in modification of the other variable as lists, sets and dictionaries are mutable in nature.
```python
a = [1, 2]
b = a
b is a # => True
b.append(3) #Modifying b only
print(a) # => [1, 2, 3]
#Same case for dictionaries and sets
```   
### None
Any variable with value `None` points to the same location in memory as there is always only one `None` memory location created. Hence comparing two variable with `is` or `==` operator both of whom point to `None` will always result in True.
```python
a = None
b = None
b == a # => True
b is a # => True
```    
### Objects
If two variables are assigned instances of custom made classes separately, then `is` operator will always result in False. The output of `==` operator depends on what functionality is defined in the overloaded `__eq__` method.
````python
a = MyClass() # Every time a constructor is called for user defined classes, new memory is allocated
b = MyClass()
b is a # =>  False
b == a # => Output depends on '__eq__ method of MyClass()
```    
However if an assignment operator is used to make both variables refer to the same object, `is` will result in True.
```python
a = MyClass()
b = a
b is a # => True
b == a # => Output depends on '__eq__ method of MyClass()
```
