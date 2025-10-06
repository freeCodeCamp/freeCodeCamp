---
id: 68420bacf395f15cd73f8118
title: What Are Some Common Error Messages in Python?
challengeType: 19
dashedName: what-are-some-common-error-messages-in-python
---

# --description--

When writing Python code, it's common to run into errors. Understanding these errors is key to debugging your code quickly and efficiently. These messages tell you exactly what went wrong, if you know how to read them.

Common Python errors include `SyntaxError`, `NameError`, `TypeError`, `IndexError`, and `AttributeError`. These occur when Python doesn't understand your code, or when your logic doesn't match the data you're working with.

Here is an example of a `SyntaxError`:

```py
print("Hello, world!"
# SyntaxError: unexpected EOF while parsing
```

This line is missing a closing parenthesis. Python raises a `SyntaxError` because the code doesn't follow proper syntax rules.

Here is an example of a `NameError`:

```py
print(name)
# NameError: name 'name' is not defined
```

You're trying to print a variable that hasn't been defined yet. Python raises a `NameError` when it can't find a variable by that name.

Here is an example of a `TypeError`:

```py
5 + "5"
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

You can't add an integer and a string together. Python raises a `TypeError` when you try to perform an operation on incompatible data types.

Here is an example of an `IndexError`:

```py
my_list = [1, 2, 3]
print(my_list[5])
# IndexError: list index out of range
```

You're trying to access an index that doesn't exist in the list. Python raises an `IndexError` when you go out of bounds.

Here is an example of an `AttributeError`:

```py
num = 42
num.append(5)
# AttributeError: 'int' object has no attribute 'append'
```

The `int` object doesn't have an `append()` method. Python raises an `AttributeError` when you try to use a method or property that doesn't exist for that data type.

Recognizing common Python error messages helps you fix problems faster. Instead of guessing, read the error message carefully, it often tells you exactly what went wrong and where to look.


# --questions--

## --text--

What does a `NameError` mean in Python?

## --answers--

A variable is misspelled.

### --feedback--

Refer back to the section of the lesson on `NameError`.

---

A variable is not defined.

---

An index is out of range.

### --feedback--

Refer back to the section of the lesson on `NameError`.

---

A data type is incorrect.

### --feedback--

Refer back to the section of the lesson on `NameError`.

## --video-solution--

2

## --text--

Which error occurs when trying to add an integer to a string?

## --answers--

`NameError`

### --feedback--

Refer back to type errors in the lesson.

---

`SyntaxError`

### --feedback--

Refer back to type errors in the lesson.

---

`TypeError`

---

`AttributeError`

### --feedback--

Refer back to type errors in the lesson.

## --video-solution--

3

## --text--

What causes an `IndexError`?

## --answers--

A function is missing.

### --feedback--

Refer back to the section on `IndexError` in the lesson.

---

A string is not formatted correctly.

### --feedback--

Refer back to the section on `IndexError` in the lesson.

---

Accessing an element outside the bounds of an iterable.

---

Using an undefined variable.

### --feedback--

Refer back to the section on `IndexError` in the lesson.

## --video-solution--

3
