---
id: 68480f431e8568b2056b140b
title: What Are Truthy and Falsy Values, and How Do Boolean Operators and Short-Circuiting Work?
challengeType: 19
dashedName: what-are-truthy-and-falsy-values-and-how-do-boolean-operators-and-short-circuiting-work
---

# --description--

In the previous lesson, you learned how to use comparison operators and conditional statements to control the flow of your programs.

While those are very powerful, you will often run into situations where you need to compare multiple values at once. This can lead to nested conditional statements, for example:

```python
is_citizen = True
age = 25

if is_citizen:
    if age >= 18:
        print('You are eligible to vote') # You are eligible to vote
else:
    print('You are not eligible to vote')
```

The above example will first check if `is_citizen` is `True`. If so, it will then go to the nested `if` statement and check if `age` is greater than or equal to `18`. Since `age` is greater than or equal to `18`, the message printed to the terminal will be `You are eligible to vote`. If `is_citizen` were `False`, then the message printed to the terminal would have been `You are not eligible to vote`.

If you are working with more complex conditional statements, then you can use Python’s `and`, `or`, and `not` operators.

But before we dive into those operators, let’s take a look at what truthy and falsy values are.

In Python, every value has an inherent boolean value, or a built-in sense of whether it should be treated as `True` or `False` in a logical context. Many values are considered **truthy**, that is, they evaluate to `True` in a logical context. Others are **falsy**, meaning they evaluate to `False`.

Here are a few falsy values:

- `None`
- `False`
- Integer `0`
- Float `0.0`
- Empty strings `""`

Other values like non-zero numbers, and non-empty strings are truthy.

If you want to check whether a value is truthy or falsy, you can use the built-in `bool()` function. It explicitly converts a value to its boolean equivalent and returns `True` for truthy values and `False` for falsy values. Here are a few examples:

```py
print(bool(False)) # False
print(bool(0))  # False
print(bool('')) # False

print(bool(True)) # True
print(bool(1)) # True
print(bool('Hello')) # True
```

Now that you understand truthy and falsy values, we can take a look at Boolean operators, which are also known as logical operators or Boolean operators. These are special operators that allow you to combine multiple expressions to create more complex decision-making logic in your code.

There are three Boolean operators in Python: `and`, `or`, and `not`.

Let’s first take a look at the `and` operator.

The `and` operator takes two operands and returns the first operand if it is falsy, otherwise, it returns the second operand. Both operands must be truthy for an expression to result in a truthy value.

Here is an example:

```python
is_citizen = True
age = 25

print(is_citizen and age) # 25
```

In the above example, the number 25 is printed to the terminal because the `and` operator will evaluate the second operand if the first operand is `True`. The `and` operator is known as a short-circuit operator. Short-circuiting means Python checks values from left to right and stops as soon as it determines the final result.

You'll often use `and` within `if` statements to check if multiple conditions are met. Here’s how you can refactor the earlier example to use the `and` operator instead of nested `if` statements:

```python
is_citizen = True
age = 25

if is_citizen and age >= 18:
    print('You are eligible to vote') # You are eligible to vote
else:
    print('You are not eligible to vote')
```

In the example above, `is_citizen` is `True`, and `age >= 18` evaluates to `True`. Since both operands of the `and` operator are truthy, the condition `is_citizen and age >= 18` evaluates to `True`, and the `print` call in the `if` block is executed.

Now let's take a look at the `or` operator. This operator returns the first operand if it is truthy, otherwise, it returns the second operand. An `or` expression results in a truthy value if at least one operand is truthy. The `or` operator is also known as a short-circuit operator. Here is an example:

```python
age = 19
is_employed = False

print(age or is_employed) # 19
```

The following code will print the number 19 because the first operand `age` is `True`.

If you need to check if one or more expressions is `True`, then you can use the `or` operator in a conditional like this:

```python
age = 19
is_student = True

if age < 18 or is_student:
    print('You are eligible for a student discount') # You are eligible for a student discount
else:
    print('You are not eligible for a student discount')
```

In this case, `age < 18` is `False`, but `is_student` is `True`. Since at least one condition is true, the entire `or` expression evaluates to `True`, and the discount message in the `if` block is printed.

The last operator we will look at is the `not` operator which takes a single operand and inverts its boolean value. It converts truthy values to `False` and falsy values to `True`. Unlike the previous operators we looked at, `not` always returns `True` or `False`.

Here are a few examples:

```python
print(not '') # True, because empty string is falsy
print(not 'Hello') # False, because non-empty string is truthy
print(not 0) # True, because 0 is falsy
print(not 1) # False, because 1 is truthy
print(not False) # True, because False is falsy
print(not True) # False, because True is truthy
```

It is common to use the `not` operator in conditionals to check if something is not `True` or `False`, like this:

```python
is_admin = False

if not is_admin:
    print('Access denied for non-administrators.') # Access denied for non-administrators.
else:
    print('Welcome, Administrator!')
```

Since `is_admin` is `False`, then `not is_admin` is saying not `False` which is `True`. So the message `Access denied for non-administrators.` will be printed.

Now that you understand truthy and falsy values, the `and`, `or`, and `not` operators, and short-circuiting work, you can write more flexible and readable conditional logic.

# --questions--

## --text--

What will the following code output?

```python
age = 20
has_ticket = True

if age >= 18 and has_ticket:
    print("You can watch the movie.")
else:
    print("You can't watch the movie.")
```

## --answers--

`You can watch the movie.`

---

`SyntaxError`

### --feedback--

Remember what happens when both conditions are `True`.

---

`TypeError`

### --feedback--

Remember what happens when both conditions are `True`.

---

`You can't watch the movie.`

### --feedback--

Remember what happens when both conditions are `True`.

## --video-solution--

1

## --text--

Which of the following is NOT considered a falsy value in Python?

## --answers--

`""`

### --feedback--

Remember that non-empty strings are considered truthy.

---

`0.0`

### --feedback--

Remember that non-empty strings are considered truthy.

---

`"False"`

---

`0`

### --feedback--

Remember that non-empty strings are considered truthy.

## --video-solution--

3

## --text--

What happens when Python evaluates the expression `x or y`?

## --answers--

It returns `x` only if both `x` and `y` evaluate to `True`

### --feedback--

Think about "short-circuiting" and when Python might not need to check the second value.

---

It returns `x` if it evaluates to `True`, and skips evaluating `y`

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
