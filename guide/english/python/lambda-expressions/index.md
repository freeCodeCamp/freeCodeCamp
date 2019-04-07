---
title: Lambda Expressions
---
## Lambda Expressions

Lambda Expressions are used when an operation only has to be performed once, meaning that there is no need for defining a function as it will not be used again. Lambda expressions also known as anonymous functions, as they are not named (defined). 

Lambda functions can contain only one expression, so they are not well suited for functions with control-flow statements.

#### Syntax of Lambda Function
`lambda arguments: expression`

Lambda functions can have any number of arguments but only one expression.

#### Example code
```py
# Lambda function to calculate square of a number
square = lambda x: x ** 2
print(square(3)) # Output: 9

# Traditional function to calculate square of a number
def square1(num):
  return num ** 2
print(square1(5)) # Output: 25

```
In the above lambda example `lambda x: x ** 2` yields an anonymous function object which can be associated with any name.
So, we associated the function object with `square` and hence from now on we can call the object with `square` like any traditional function. e.g. `square(10)`

## Examples

### Beginner
```py
lambda_func = lambda x: x**2 # Function that takes an integer and returns its square
lambda_func(3) # Returns 9
```
### Intermediate
```py
lambda_func = lambda x: True if x**2 >= 10 else False  # Function that returns True if the square of x >= 10
lambda_func(3) # Returns False (3**2 = 9, which is < 10)
lambda_func(4) # Returns True (4**2 = 16, which is >= 10)
```
### Complex
```py
my_dict = {"A": 1, "B": 2, "C": 3}
sorted(my_dict, key=lambda x: my_dict[x]%3) # Returns ['C', 'A', 'B']  # sort dict by the values % 3 (remainders from division by 3)
```

### Passing lambda as fuction parameter
```py
def apply(x, y, fun):
  return fun(x, y)
  
res = apply(3, 5, lambda x, y: x + y)
print(res) # Output: 8
```

### Use-case

Say you want to filter out odd numbers from a `list`. You could use a `for` loop:

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filtered = []

for num in my_list:
     if num % 2 != 0:
         filtered.append(num)

print(filtered)      # Python 2: print filtered
# [1, 3, 5, 7, 9]
 ```

You could write this as a one-liner with list-comprehensions

```python
filtered = [x for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] if x % 2 != 0]
 ```

However, another option is to use the built-in `filter` function. Why? The first example is a bit to verbose, while the one-liner can be harder to understand. `filter` offers the best of both words, and the built-in functions are usually faster.

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

filtered = filter(lambda x: x % 2 != 0, my_list)

list(filtered)
# [1, 3, 5, 7, 9]
 ```
NOTE: In Python 3 built in functions return generator objects, so you have to call `list`, while in Python 2 they return a `list`, `tuple`or `string`.

What happened? You told `filter` to take each element in `my_list` and apply the lambda expressions. The values that return `False` are filtered out. 

#### More Information:
- [Official Doc](https://docs.python.org/3/reference/expressions.html#lambda)
- [Further Reading](https://dbader.org/blog/python-lambda-functions)
