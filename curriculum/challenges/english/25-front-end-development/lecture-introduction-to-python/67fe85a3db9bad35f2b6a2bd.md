---
id: 67fe85a3db9bad35f2b6a2bd
title: How Do Conditional Statements and Logical Operators Work?
# change back to 11 when video is updated
challengeType: 19
# videoId: new-id-goes-here-when-ready
dashedName: how-do-conditional-statements-and-logical-operators-work
---

# --description--

Conditional statements, or conditionals, let you control the flow of your program based on whether certain conditions are true or false.

But before we get into all that, let's go over the basic building blocks of conditional statements, starting with comparison operators. Comparison operators are operators that let you compare two or more values, and return a boolean value.

In a previous lecture, you learned that booleans are one of the data types in Python, and can only be `True` or `False`.

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
    # Code to execute if condition is True
```

* `if` statements start with the `if` keyword.
    
* `condition` is an expression that evaluates to `True` of `False`, followed by a colon (`:`).

* The indentation specifies the block of code within the body of the `if` statement.
    

And here's an example:

```python
age = 18

if age >= 18:
    print('You are an adult') # You are an adult
```

But if `age` is anything less than `18`, nothing is printed in the terminal:

```python
age = 12

if age >= 18:
    print('You are an adult') # Nothing shows up in the terminal
```

But what if you also want to print something if `age` is less than `18`? That's where the `else` clause comes in. The `else` clause runs when the `if` condition is false. Here's the syntax for an `if…else` statement:

```python
if condition:
   # Code to execute if condition is True
else:
   # Code to execute if condition is False
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
if condition:
   # Code to execute if condition is True
elif condition2:
   # Code to execute if condition2 is True
else:
   # Code to execute if all conditions are False
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

Review the last part of the lecture for the correct answer.

---

`You are a teenager` will be printed to the console.

### --feedback--

Review the last part of the lecture for the correct answer.

---

`You are a child` will be printed to the console.

---

An error will be printed to the console.

### --feedback--

Review the last part of the lecture for the correct answer.

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
