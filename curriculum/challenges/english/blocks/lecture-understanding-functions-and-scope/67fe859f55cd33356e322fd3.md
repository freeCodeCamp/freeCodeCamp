---
id: 67fe859f55cd33356e322fd3
title: How Do Functions Work in Python?
challengeType: 19
dashedName: how-do-functions-work-in-python
---

# --description--

Functions are reusable pieces of code that run when you call them. Many programming languages come with built-in functions that make it easier to get started. Python is no exception, and we've already covered some built-in functions like `print()` in previous lessons.

Another helpful built-in function is `input()`, which lets you prompt the user for input:

```python
name = input('What is your name?') # User types "Kolade" and presses Enter  
print('Hello', name) # Output: Hello Kolade
```

On the other hand, `int()` converts a number, boolean, and a numeric string into an integer:

```python
print(int(3.14)) # 3
print(int('42')) # 42
print(int(True)) # 1
print(int(False)) # 0 
```

You can also write your own custom functions. To do that, you use the `def` keyword, followed by the name you want to give your function, a pair of parentheses, and a colon. Then on a new line, you write the code your function should run. The code the function runs is also referred to as the function's body.

Here's an example of a custom function named `hello` that prints the string `Hello World` to the terminal:

```python
def hello():
    print('Hello World')
```

To run the function, you need to call it with its name followed by a pair of parentheses:

```python
hello() # Hello World
```

Notice the indentation before `print('Hello World')`. As you may recall from previous lessons, Python relies on indentation to determine which groups of statements belong together. These groups of statements are called code blocks.

Here's another simple function that prints the sum of two numbers to the terminal:

```python
def calculate_sum(a, b):
    print(a + b)
```

You can see that our function, `calculate_sum`, has `a` and `b` in its parentheses, separated by a comma. Those are called parameters. Think of parameters as placeholder variables that act as "slots" for the values you pass into functions when you call them.

To use the parameters, you have to pass in "arguments". Arguments are the values you pass to a function when you call it.

Here's how to call the `calculate_sum` function to sum together the numbers `3` and `1`:

```python
calculate_sum(3, 1) # 4
```

If you call the function without the correct number of arguments, you'll get a `TypeError`:

```python
calculate_sum()

# TypeError: calculate_sum() missing 2 required positional arguments: 'a' and 'b'
```

Functions also use a special `return` keyword to exit the function and return a value. If you don't explicitly use `return`, Python will return `None` by default.

Here's an example:

```python
def calculate_sum(a, b):
    print(a + b)

my_sum = calculate_sum(3, 1) # 4
print(my_sum) # None
```

You can see that the `calculate_sum` function prints the sum of `a` and `b`, but it doesn't return anything explicitly. So when we assign its result to `my_sum`, the value is actually `None`. To fix that, you can use the `return` keyword to send back the result:

```python
def calculate_sum(a, b):
    return a + b

my_sum = calculate_sum(3, 1)
print(my_sum) # 4
```

Now, `calculate_sum` returns the sum of `a` and `b`, which gets stored in `my_sum`.

# --questions--

## --text--

What is the default return value of a function in Python?

## --answers--

`0`

### --feedback--

If a function has no `return` statement, it automatically returns this value.

---

`None`

---

`""` (empty string)

### --feedback--

If a function has no `return` statement, it automatically returns this value.

---

`False`

### --feedback--

If a function has no `return` statement, it automatically returns this value.

## --video-solution--

2

## --text--

What is the term for a placeholder variable in a function?

## --answers--

Parameter

---

Argument

### --feedback--

It's defined in the function declaration, not when calling it.

---

Return value

### --feedback--

It's defined in the function declaration, not when calling it.

---

Decorator

### --feedback--

It's defined in the function declaration, not when calling it.

## --video-solution--

1

## --text--

What keyword is used to define a custom function in Python?

## --answers--

`function`

### --feedback--

Python uses a specific keyword to start a function definition.

---

`def`

---

`func`

### --feedback--

Python uses a specific keyword to start a function definition.

---

`define`

### --feedback--

Python uses a specific keyword to start a function definition.

## --video-solution--

2
