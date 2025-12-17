---
id: 69413cbce2d6c74f61d3f7e5
title: What Are Strings and What Is String Immutability?
challengeType: 19
dashedName: what-are-strings-and-what-is-string-immutability
---

# --description--

A string is a sequence of characters surrounded by either single or double quotation marks. In some programming languages, characters surrounded by single quotes are treated differently than characters surrounded by double quotes, but in Python, they're treated equally. So, you can use either when working with strings. Here are some examples of strings:

```python
my_str_1 = 'Hello'
my_str_2 = "World"
```

If you need a multi-line string, you can use triple double quotes or single quotes:

```python
my_str_3 = """Multiline
string"""
my_str_4 = '''Another
multiline
string'''
```

If your string contains either single or double quotation marks, then you have two options:

- Use the opposite kind of quotes. That is, if your string contains single quotes, use double quotes to wrap the string, and vice versa:
    

```python
msg = "It's a sunny day"
quote = 'She said, "Hello World!"'
```

- Escape the single or double quotation mark in the string with a backslash (`\`). With this method, you can use either single or double quotation marks to wrap the string itself:
    

```python
msg = 'It\'s a sunny day'
quote = "She said, \"Hello!\""
```

Sometimes, you may need to check if a string contains one or more characters. For that, Python provides the `in` operator, which returns a boolean that specifies whether the character or characters exist in the string or not.

Here are some examples:

```python
my_str = 'Hello world'

print('Hello' in my_str)  # True
print('hey' in my_str)    # False
print('hi' in my_str)    # False
print('e' in my_str)  # True
print('f' in my_str)  # False
```

Now, let's look at how you can get the length of a string and work with the individual characters in a string, a process called **indexing**. To get the length of a string, you can use the built-in `len()` function. Here's an example:

```python
my_str = 'Hello world'
print(len(my_str))  # 11
```

Each character in a string has a position called an index. The index is zero-based, meaning that the index of the first character of a string is `0`, the index of the second character is `1`, and so on. To access a character by its index, you use square brackets (`[]`) with the index of the character you want to access inside. Here are some examples:

```python
my_str = "Hello world"

print(my_str[0])  # H
print(my_str[6])  # w
```

Negative indexing is also allowed, so you can get the last character of any string with `-1`, the second-to-last character with `-2`, and so on:

```python
my_str = 'Hello world'
print(my_str[-1])  # d
print(my_str[-2]) # l
```

Many other programming languages group data types broadly as either primitive or reference types. Primitive types are simple and immutable, meaning they can't be changed once declared. Reference types can hold multiple values, and are either mutable or immutable. But Python doesn't draw a hard line between those two groups. Instead, all data gets treated as objects, and some objects are immutable while others are mutable.

Immutable data types can't be modified or altered once they're declared. You can point their variables at something new, which is called reassignment, but you can't change the original object itself by adding, removing, or replacing any of its elements. 

Strings are immutable data types in Python. This means that you can reassign a different string to a variable:

```python
greeting = 'hi'
greeting = 'hello'
print(greeting) # hello
```

But direct modification of a string isn't allowed:

```python
greeting = 'hi'
greeting[0] = 'H' # TypeError: 'str' object does not support item assignment
```

Examples of other immutable data types in Python are integer, float, boolean, tuple, and range. You'll get to know each of these types in upcoming lessons.

# --questions--

## --text--

How do you get the length of a string `s`?

## --answers--

`len(s)`

---

`s.length`

### --feedback--

Go back to the part of the lesson about getting the length of a string.

---

A string does not have a length.

### --feedback--

Go back to the part of the lesson about getting the length of a string.

---

`s.len()`

### --feedback--

Go back to the part of the lesson about getting the length of a string.

## --video-solution--

1

## --text--

How do you define a multiline string in Python?

## --answers--

Using parentheses `()` around the string.

### --feedback--

Python allows special quotes for multiline strings.

---

Using triple double quotes `"""` or triple single quotes `'''`.

---

Using a backslash `\` at the end of each line.

### --feedback--

Python allows special quotes for multiline strings.

---

Using square brackets `[]` to enclose the string.

### --feedback--

Python allows special quotes for multiline strings.

## --video-solution--

2

---

## --text--

What does it mean that a string is immutable?

## --answers--

A variable cannot be reassigned to a different string.

### --feedback--

Immutable refers to something that doesn't change.

---

Variable reassignment directly modifies the original string.

### --feedback--

Immutable refers to something that doesn't change.

---

A string cannot be directly modified by changing its individual characters.

---

String characters can be directly modified only under specific conditions.

### --feedback--

Immutable refers to something that doesn't change.

## --video-solution--

3
