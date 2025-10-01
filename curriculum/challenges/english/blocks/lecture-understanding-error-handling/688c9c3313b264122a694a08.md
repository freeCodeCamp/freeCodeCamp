---
id: 688c9c3313b264122a694a08
title: How Does Exception Handling Work?
challengeType: 19
dashedName: how-does-exception-handling-work
---

# --description--

In Python, exception handling is a core part of writing robust and fault-tolerant programs. It allows you to anticipate, catch, and respond to errors in a structured way.

Exception handling is the process of catching and managing errors that occur during the execution of a program, so your code doesn't crash unexpectedly.

Python provides the `try`, `except`, `else`, and `finally` blocks to gracefully handle errors. Here's a basic example:

```py
try:
    x = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

- `try`: The block of code where you anticipate an error might occur.

- `except`: This block runs if an error of the specified type is raised inside the try.

- In this case, dividing by zero raises a `ZeroDivisionError`, which is then caught and handled.

And here's an example also showing how to use the `else` and `finally` blocks:

```py
try:
    x = 10 / 2
except ZeroDivisionError:
    print("You can't divide by zero!")
else:
    print('Division successful:', x)
finally:
    print('This block always runs.')
```

- `else`: Runs if no exception is raised in the try block.

- `finally`: Runs no matter what—whether or not an exception occurred. Useful for clean-up tasks like closing files or releasing resources.

You can also catch multiple exceptions with separate `except` blocks:

```py
try:
    number = int('abc')
    result = 10 / number
except ValueError:
    print('That was not a valid number.')
except ZeroDivisionError:
    print("Can't divide by zero.")
```

By using separate `except` clauses, you can make your error responses more specific and useful.

You can also use the exception object, which is typically aliased to another name with the `as` keyword. Here we're using `e` as an alias for the error object:

```py
try:
    x = 1 / 0
except ZeroDivisionError as e:
    print(f'Error occurred: {e}')
```

Using `e` lets you access the actual error message or object for logging or debugging.

You can also catch multiple exceptions in a single `except` clause by specifying the exceptions as a tuple:

```py
try:
    number = int(input('Enter a number: '))
    result = 10 / number
except (ValueError, ZeroDivisionError) as e:
    print(f'Error occurred: {e}')
```

Exception handling allows your programs to recover from errors gracefully. By using `try`, `except`, `else`, and `finally`, you can anticipate potential issues and build more resilient applications.

# --questions--

## --text--

What does the `try` block do in Python?

## --answers--

It ignores errors completely.

### --feedback--

Refer back to the section about `try` and `except` blocks.

---

It defines a block of code to test for errors.

---

It deletes all exceptions.

### --feedback--

Refer back to the section about `try` and `except` blocks.

---

It stops the program immediately.

### --feedback--

Refer back to the section about `try` and `except` blocks.

## --video-solution--

2

## --text--

When does the `finally` block execute?

## --answers--

Only when there is no error

### --feedback--

Refer back to the section about the `finally` block.

---

Only when an exception occurs

### --feedback--

Refer back to the section about the `finally` block.

---

Always, no matter what

---

Only if the `else` block executes

### --feedback--

Refer back to the section about the `finally` block.

## --video-solution--

3

## --text--

Which statement is used to catch a specific error?

## --answers--

`handle`

### --feedback--

Refer back to beginning of the lesson about Python error handling.

---

`catch`

### --feedback--

Refer back to beginning of the lesson about Python error handling.

---

`try`

### --feedback--

Refer back to beginning of the lesson about Python error handling.

---

`except`

## --video-solution--

4
