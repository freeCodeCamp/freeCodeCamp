---
id: 67fe85a3db9bad35f2b6a2bd
title: How Do Conditional Statements and Logical Operators Work?
# change back to 11 when video is updated
challengeType: 19
# videoId: new-id-goes-here-when-ready
dashedName: how-do-conditional-statements-and-logical-operators-work
---

# --description--

The video for this lecture isn't available yet, one will be available soon. Here is a transcript of the lecture for now:

# --transcript--

Conditional statements, or conditionals, let you control the flow of your program based on whether certain conditions are true or false.

But before we get into all that, let's go over the basic building blocks of conditional statements, starting with comparison operators. Comparison operators are operators that let you compare two or more values, and return a boolean value.

In a previous lecture, you learned that booleans are one of the data types in Python, and can only be `True` or `False`.

Here's a table with the comparison operators in Python:

| Operator | Name | Description |
| --- | --- | --- |
| `==` | Equals | Checks if two values are equal |
| `!=` | Not equals | Checks if two values are not equal |
| `>` | Greater than | Checks if the value on the left is greater than the value on the right |
| `<` | Less than | Checks if the value on the left is less than the value on the right |
| `>=` | Greater than or equal to | Checks if the value on the left is greater than or equal to the value on the right |
| `<=` | Less than or equal to | Checks if the value on the left is less than or equal to the value on the right |

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

Logical operators let you combine multiple conditions or booleans within conditional statements so you can create more complex decision-making logic. There are three logical operators in Python: `and`, `or`, and `not`.

The `and` logical operator takes two operands and returns `True` if both operands are true. Otherwise, it returns `False`.

Here's an example:

```python
age = 25
is_citizen = True

if age >= 18 and is_citizen:
    print('You are eligible to vote') # You are eligible to vote
else:
    print('You are not eligible to vote')
```

The logical `or` operator takes two operands and returns `True` if at least one operand is true, and `False` if both operands are false. If the first operand is `True`, Python will ignore the second condition in a process called "short-circuiting".

The `and` logical operator also uses short-circuiting, but in reverse — if the first operand is `False`, it stops and returns `False` right away.

Here's an example of the `or` logical operator:

```python
day = 'Saturday'

if day == 'Saturday' or day == 'Sunday':
   print('It\'s the weekend!') # It's the weekend!
elif day == 'Monday' or day == 'Tuesday':
   print('It\'s the start of the week')
elif day == 'Thursday' or day == 'Friday':
   print('It\'s almost the weekend')
else:
   print('It\'s a weekday')
```

Here's another example that shows short-circuiting:

```python
def truthy():
  print('I\'m truthy!')
  return True

def falsy():
  print('I\'m falsy!')
  return False

condition1 = falsy() and falsy()
# I'm falsy!

condition2 = falsy() and truthy()
# I'm falsy!

condition3 = truthy() and truthy()
# I'm truthy!
# I'm truthy!

condition4 = truthy() and falsy()
# I'm truthy!
# I'm falsy!

condition5 = falsy() or falsy()
# I'm falsy!
# I'm falsy!

condition6 = falsy() or truthy()
# I'm falsy!
# I'm truthy!

condition7 = truthy() or truthy()
# I'm truthy!

condition8 = truthy() or falsy()
# I'm truthy!
```

The `not` logical operator inverts a boolean value, and makes `True` values `False`, and `False` values `True`.

Here's an example:

```python
is_raining = False

if not is_raining:
    print('It\'s not raining. You can go outside!')
else:
    print('It\'s raining. Better to stay indoors.')
```

# --questions--

## --text--

What do logical operators do? 

## --answers--

Perform mathematical calculations with boolean values.

### --feedback--

They help create more complex decision-making logic by working with multiple conditions.

---

Convert strings to boolean values.

### --feedback--

They help create more complex decision-making logic by working with multiple conditions.

---

Combine multiple conditions within conditional statements.

---

Create loops and iterations.

### --feedback--

They help create more complex decision-making logic by working with multiple conditions.

## --video-solution--

3

## --text--

What is the primary purpose of comparison operators in programming?

## --answers--

To modify variable values.

### --feedback--

Think about how they evaluate relationships between values.

---

To return `True` or `False` based on value comparisons.

---

To concatenate strings together.

### --feedback--

Think about how they evaluate relationships between values.

---

To perform mathematical calculations.

### --feedback--

Think about how they evaluate relationships between values.

## --video-solution--

2

## --text--

What happens when Python evaluates the expression `x or y`?

## --answers--

It returns True only if both `x` and `y` are `True`

### --feedback--

Think about "short-circuiting" and when Python might not need to check the second value.

---

It returns `True` if at least one condition is `True` and may skip evaluating `y`

---

It always evaluates both `x` and `y` regardless of their values

### --feedback--

Think about "short-circuiting" and when Python might not need to check the second value.

---

It returns `False` if either `x` or `y` is `False`

### --feedback--

Think about "short-circuiting" and when Python might not need to check the second value.

## --video-solution--

2
