---
id: 69414623940154f209922619
title: What Are String Concatenation and String Interpolation?
challengeType: 19
dashedName: what-are-string-concatenation-and-string-interpolation
---

# --description--

When working with strings, combining different pieces of text together is a common operation you'll often find yourself dealing with.

In Python, you can combine multiple strings together with the plus (`+`) operator. This process is called **string concatenation**. Here's how to concatenate two strings with the plus operator:

```python
my_str_1 = 'Hello'
my_str_2 = "World"

str_plus_str = my_str_1 + ' ' + my_str_2
print(str_plus_str) # Hello World
```

But note that this only works with strings. If you try to concatenate a string with a number, you'll get a `TypeError`:

```python
name = 'John Doe'
age = 26

name_and_age = name + age
print(name_and_age) # TypeError: can only concatenate str (not "int") to str
```

This happens because Python does not automatically convert other data types like integers into strings when you concatenate them. Python requires all elements to be strings before it can concatenate them. To fix that, you can convert the number into a string with the built-in `str()` function, which returns the string representation of the given object without modifying the original object:

```python
name = 'John Doe'
age = 26

name_and_age = name + str(age)
print(name_and_age) # John Doe26
```

You can also use the augmented assignment operator for concatenation. This is represented by a plus and equals sign (`+=`), and performs both concatenation and assignment in one step. Here's it in action:

```py
name = 'John Doe'
age = 26

name_and_age = name  # Start with the name
name_and_age += str(age)  # Append the age as string

print(name_and_age)  # John Doe26
```

The process of inserting variables and expressions into a string is called **string interpolation**. Python has a category of string called **f-strings** (short for formatted string literals), which allows you to handle interpolation with a compact and readable syntax.

F-strings start with `f` (either lowercase or uppercase) before the quotes, and allow you to embed variables or expressions inside replacement fields indicated by curly braces (`{}`). Here's an example:

```python
name = 'John Doe'
age = 26
name_and_age = f'My name is {name} and I am {age} years old'
print(name_and_age) # My name is John Doe and I am 26 years old

num1 = 5
num2 = 10
print(f'The sum of {num1} and {num2} is {num1 + num2}') # The sum of 5 and 10 is 15
```

Note how you don't need to convert non-string types with the `str()` function. In the example above, the value of the `age`, `num1`, and `num2` variables is converted under the hood into a string during the interpolation process.

# --questions--

## --text--

How can you concatenate strings in Python?

## --answers--

By using the `+` operator.

---

By using the `*` operator for joining strings.

### --feedback--

There's a simple operator and a special string format for this.

---

By using the `&` operator to merge strings.

### --feedback--

There's a simple operator and a special string format for this.

---

By assigning multiple strings to a list and printing them together.

### --feedback--

There's a simple operator and a special string format for this.

## --video-solution--

1

## --text--

What does the `str()` function do?

## --answers--

It concatenates two strings together.

### --feedback--

Go back to the part of the lesson that talks about the `str()` function.

---

It returns a string version of the given object.

---

It extracts numeric characters from an alphanumeric sequence.

### --feedback--

Go back to the part of the lesson that talks about the `str()` function.

---

It replaces the provided characters within a string.

### --feedback--

Go back to the part of the lesson that talks about the `str()` function.

## --video-solution--

2

---

## --text--

What is string interpolation?

## --answers--

The process of parsing a string to extract specific portions.

### --feedback--

String interpolation allows you to substitute placeholders with specific values.

---

The process of splitting a string into substrings.

### --feedback--

String interpolation allows you to substitute placeholders with specific values.

---

The process of inserting variables and expressions into a string.

---

The process of joining two or more strings together.

### --feedback--

String interpolation allows you to substitute placeholders with specific values.

## --video-solution--

3
