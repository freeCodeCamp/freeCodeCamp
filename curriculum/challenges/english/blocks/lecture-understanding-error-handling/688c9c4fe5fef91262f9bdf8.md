---
id: 688c9c4fe5fef91262f9bdf8
title: What Is the Raise Statement and How Does It Work?
challengeType: 19
dashedName: what-is-the-raise-statement-and-how-does-it-work
---

# --description--

In Python, the `raise` statement is a powerful tool that allows you to manually trigger exceptions in your code. It gives you control over when and how errors are generated, enabling you to create custom error conditions and enforce specific program behavior.

The `raise` statement is used to explicitly throw an exception at any point in your program, allowing you to signal that an error condition has occurred or that certain requirements haven't been met.

Python's `raise` statement can be used in several ways to trigger exceptions. At its most basic, you can raise built-in exceptions or create custom error messages. Here's a simple example:

```py
def check_age(age):
    if age < 0:
        raise ValueError('Age cannot be negative')
    return age

try:
    check_age(-5)
except ValueError as e:
    print(f'Error: {e}') # Error: Age cannot be negative
```

You can see here that `raise` is the keyword that triggers an exception.

In this example, we're raising a `ValueError` with a custom message when an invalid age is provided.

The `raise` statement can also be used to re-raise the current exception, which is particularly useful in exception handling:

```py
def process_data(data):
    try:
        result = int(data)
        return result * 2
    except ValueError:
        print('Logging: Invalid data received')
        raise  # Re-raises the same ValueError

try:
    process_data('abc')
except ValueError:
    print('Handled at higher level')
```

Here the keyword `raise` (without arguments), re-raises the current exception that's being handled.

This allows you to log or perform cleanup while still propagating the error up the call stack.

You can create and raise custom exceptions by defining your own exception classes:

```py
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(f'Insufficient funds: ${balance} available, ${amount} requested')

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    new_balance = withdraw(100, 150)
except InsufficientFundsError as e:
    print(f'Transaction failed: {e}')
```

Here you can see custom exception classes inherit from `Exception` or its subclasses. 

You'll learn more about classes and inheritance in future lessons. For now, know that this is a way to create your own exceptions with custom logic.

The `raise` statement can also be used with the `from` keyword to chain exceptions, showing the relationship between different errors:

```py
def parse_config(filename):
    try:
        with open(filename, 'r') as file:
            data = file.read()
            return int(data)
    except FileNotFoundError:
        raise ValueError('Configuration file is missing') from None
    except ValueError as e:
        raise ValueError('Invalid configuration format') from e

config = parse_config('config.txt')
```

Here you can see that `raise ... from None`, suppresses the original exception context:

```bash
Traceback (most recent call last):
  File "main.py", line 12, in <module>
    config = parse_config('config.txt')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "main.py", line 7, in parse_config
    raise ValueError('Configuration file is missing') from None
ValueError: Configuration file is missing
```

And `raise ... from e`, chains the new exception to the original one, preserving the error trail.

```bash
Traceback (most recent call last):
  File "main.py", line 5, in parse_config
    return int(data)
           ^^^^^^^^^
ValueError: invalid literal for int() with base 10: ''

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "main.py", line 12, in <module>
    config = parse_config('config.txt')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "main.py", line 9, in parse_config
    raise ValueError('Invalid configuration format') from e
ValueError: Invalid configuration format
```

You can also raise exceptions conditionally using `assert` statements, which are essentially shorthand for `raise` with `AssertionError`:

```py
def calculate_square_root(number):
    assert number >= 0, 'Cannot calculate square root of negative number'
    return number ** 0.5

try:
    result = calculate_square_root(-4)
except AssertionError as e:
    print(f'Assertion failed: {e}')
```

The `raise` statement is essential for creating robust applications where you need to enforce business rules, validate input, and provide meaningful error messages. By strategically using `raise`, you can make your code more predictable and easier to debug, while giving users clear feedback about what went wrong.

# --questions--

## --text--

What does the `raise` statement do in Python?

## --answers--

It catches exceptions.

### --feedback--

Refer back to the section about raising exceptions. 

---

It manually triggers an exception.

---

It ignores errors.

### --feedback--

Refer back to the section about raising exceptions.

---

It fixes broken code.

### --feedback--

Refer back to the section about raising exceptions.

## --video-solution--

2

## --text--

What happens when you use `raise` without any arguments?

## --answers--

It raises a generic `Exception`.

### --feedback--

Refer back to the section about `raise`. understand how it behaves without arguments.

---

It does nothing.

### --feedback--

Refer back to the section about `raise`. understand how it behaves without arguments.

---

It re-raises the current exception.

---

It raises a `TypeError`.

### --feedback--

Refer back to the section about `raise`. understand how it behaves without arguments.

## --video-solution--

3

## --text--

Which keyword is used to chain exceptions together?

## --answers--

`with`

### --feedback--

Refer back to the section about `raise` to understand which keyword connects exceptions.

---

`from`

---

`chain`

### --feedback--

Refer back to the section about `raise` to understand which keyword connects exceptions.

---

`link`

### --feedback--

Refer back to the section about `raise` to understand which keyword connects exceptions.

## --video-solution--

2
