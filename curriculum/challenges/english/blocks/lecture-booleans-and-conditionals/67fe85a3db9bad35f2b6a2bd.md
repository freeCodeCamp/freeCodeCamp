---
id: 67fe85a3db9bad35f2b6a2bd
title: How Do Conditional Statements and Logical Operators Work?
challengeType: 19
dashedName: how-do-conditional-statements-and-logical-operators-work
---

# --description--

Conditional statements, or conditionals, let you control the flow of your program based on whether certain conditions are true or false.

But before we get into all that, let's go over the basic building blocks of conditional statements, starting with comparison operators. Comparison operators are operators that let you compare two or more values, and return a boolean value.

In a previous lesson, you learned that booleans are one of the data types in Python, and can only be `True` or `False`.

Here's a table with the comparison operators in Python:

| Operator | Name | Description |
| --- | --- | --- |
| `==` | Equal | Checks if two values are equal |
| `!=` | Not equal | Checks if two values are not equal |
| `>` | Greater than | Checks if the value on the left is greater than the value on the right |
| `<` | Less than | Checks if the value on the left is less than the value on the right |
| `>=` | Greater than or equal | Checks if the value on the left is greater than or equal to the value on the right |
| `<=` | Less than or equal | Checks if the value on the left is less than or equal to the value on the right |

Here are some of those expressions that evaluate to `True` or `False`:

```python
print(3 > 4) # False
print(3 < 4) # True
print(3 == 4) # False
print(4 == 4) # True
print(3 != 4) # True
print(3 >= 4) # False
print(3 <= 4) # True
```

These operators can be used in conditionals to compare values and run certain code based on whether the conditional evaluates to `True` or `False`.

In Python, the most basic conditional is the `if` statement. Here's the basic syntax:

```python
if condition:
    pass # Code to execute if condition is True
```

* `if` statements start with the `if` keyword.
    
* `condition` is an expression that evaluates to `True` or `False`, followed by a colon (`:`).

* The body of the `if` statement constitutes a <dfn>code block</dfn>, which is a group of statements that belong together. In Python, the level of indentation is what defines a code block.
    
In the example above, the body of the `if` statement contains a `pass` statement. When a `pass` statement is executed, nothing happens. This is a special keyword that can be used as a placeholder for future code and it is useful when empty code blocks are not allowed.

The code within the body of the `if` statement runs only when the condition evaluates to `True`. For example:

```python
age = 18

if age >= 18:
    print('You are an adult') # You are an adult
```

Notice the indentation before `print('You are an adult')`. While other programming languages use characters like curly braces to define code blocks, and just use indentation for readability, in Python, code blocks are determined by indentation.

The following code would raise an `IndentationError`, which is Python's way to signal that indentation is required at a certain point of the code:

```py
age = 18

if age >= 18:
print('You are an adult') # IndentationError: expected an indented block after 'if' statement on line 3
```

Though you can use any number spaces (as long as you are consistent) to determine each level of indentation, the Python style guide recommends using four spaces.

Blocks are also found in loops and functions, which you'll learn about in future lessons.

Going back to our example, if `age` is anything less than `18`, nothing is printed in the terminal:

```python
age = 12

if age >= 18:
    print('You are an adult') # Nothing shows up in the terminal
```

But what if you also want to print something if `age` is less than `18`? That's where the `else` clause comes in. The `else` clause runs when the `if` condition is false. Here's the syntax for an `if…else` statement:

```python
if condition:
   pass # Code to execute if condition is True
else:
   pass # Code to execute if condition is False
```

For example:

```python
age = 12

if age >= 18:
    print('You are an adult')
else:
    print('You are not an adult yet') # You are not an adult yet
```

There might be situations in which you want to account for multiple conditions. To do that, Python lets you extend your if statement with the `elif` (else if) keyword.

Here's the syntax:

```python
if condition1:
   pass # Code to execute if condition1 is True
elif condition2:
   pass # Code to execute if condition1 is False and condition2 is True
else:
   pass # Code to execute if all conditions are False
```

For example:

```python
age = 12

if age >= 18:
    print('You are an adult')
elif age >= 13:
    print('You are a teenager')
else:
    print('You are a child') # You are a child
```

Note that you can use as many `elif` statements as you want:

```python
age = 2

if age >= 65:
    print('You are a senior citizen')
elif age >= 30:
    print('You are an adult in your prime')
elif age >= 18:
    print('You are a young adult')
elif age >= 13:
    print('You are a teenager')
elif age >= 3:
    print('You are a young child')
else:
    print('You are a toddler or an infant') # You are a toddler or an infant
```

Now that you understand how comparison operators and conditional statements work in Python, you can start writing programs that make decisions based on logic and input. Whether you’re comparing values or branching through multiple conditions, these tools are the foundation to writing flexible, responsive code.

# --questions--

## --text--

What do comparison operators do?

## --answers--

Perform mathematical calculations with boolean values

### --feedback--

These operators check things like equality or which value is greater, and the result is either `True` or `False`.

---

Convert strings to boolean values.

### --feedback--

These operators check things like equality or which value is greater, and the result is either `True` or `False`.

---

Compare two values and return a boolean value.

---

Create loops and iterations.

### --feedback--

These operators check things like equality or which value is greater, and the result is either `True` or `False`.

## --video-solution--

3

## --text--

What will be the result for the following code?

```python
age = 12

if age >= 18:
    print('You are an adult')
elif age >= 13:
    print('You are a teenager')
else:
    print('You are a child') 
```

## --answers--

`You are an adult` will be printed to the console.

### --feedback--

Review the last part of the lesson for the correct answer.

---

`You are a teenager` will be printed to the console.

### --feedback--

Review the last part of the lesson for the correct answer.

---

`You are a child` will be printed to the console.

---

An error will be printed to the console.

### --feedback--

Review the last part of the lesson for the correct answer.

## --video-solution--

3

## --text--

What will the expression `3 >= 4` evaluate to?

## --answers--

`True`

### --feedback--

3 is not greater than or equal to 4.

---

`SyntaxError`

### --feedback--

3 is not greater than or equal to 4.

---

`None`

### --feedback--

3 is not greater than or equal to 4.

---

`False`

## --video-solution--

4
