---
id: 694147fe940154f20992261b
title: What Is String Slicing and How Does It Work?
challengeType: 19
dashedName: what-is-string-slicing-and-how-does-it-work
---

# --description--

In a previous lesson, you learned how each character in a string can be identified by its index (starting from zero), and accessed using the bracket notation:

```python
my_str = "Hello world"

print(my_str[0])  # H
print(my_str[6])  # w
print(my_str[-1]) # d
```

**String slicing** lets you extract a portion of a string or work with only a specific part of it. Here's the basic syntax:

```python
string[start:stop]
```

If you want to extract characters from a certain index to another, you just separate the `start` and `stop` indices with a colon:

```python
my_str = 'Hello world'
print(my_str[1:4]) # ell
```

Note that the `stop` index is non-inclusive, so `[1:4]` just extracted the characters from index `1`, and up to, but not including, the character at index `4`.

You can also omit the `start` and `stop` indices, and Python will default to `0` or the end of the string, respectively. For example, here's what happens if you omit the `start` index:

```python
my_str = 'Hello world'
print(my_str[:7])  # Hello w
```

This extracts everything from index `0` up to (but not including), the character at index `7`. And here's what happens if you omit the `stop` index:

```python
my_str = 'Hello world'
print(my_str[8:])  # rld
```

This extracts everything from the character at index `8` until the end of the string.

Note that slicing a string does not modify the original string:

```py
my_str = 'Hello world'
print(my_str[8:])  # rld
print(my_str)  # Hello world
```

You can also omit both the `start` and `stop` indices, which will extract the whole string:

```python
my_str = 'Hello world'
print(my_str[:])  # Hello world
```

Apart from the `start` and `stop` indices, there's also an optional `step` parameter, which is used to specify the increment between each index in the slice.

Here's the syntax for that:

```python
string[start:stop:step]
```

In the example below, the slicing starts at index `0`, stops before `11`, and extracts every second character:

```python
my_str = 'Hello world'
print(my_str[0:11:2])  # Hlowrd
```

A helpful trick you can do with the `step` parameter is to reverse a string by setting step to `-1`, and leaving `start` and `stop` blank:

```python
my_str = 'Hello world'
print(my_str[::-1]) # dlrow olleH
```

# --questions--

## --text--

How do you extract a specific portion of a string in Python?

## --answers--

Using parentheses with start and end positions.

### --feedback--

This operation relies on character positions and uses bracket notation.

---

Using curly braces with start and stop positions.

### --feedback--

This operation relies on character positions and uses bracket notation.

---

Using square brackets with start and stop positions.

---

Using angle brackets with start and stop positions.

### --feedback--

This operation relies on character positions and uses bracket notation.

## --video-solution--

3

## --text--

What is the outcome of `'Hello'[2:]`?

## --answers--

`llo`

---

`lo`

### --feedback--

Go back to the part of the lesson that talks about omitting start and stop indices.

---

`el`

### --feedback--

Go back to the part of the lesson that talks about omitting start and stop indices.

---

`l`

### --feedback--

Go back to the part of the lesson that talks about omitting start and stop indices.

## --video-solution--

1

## --text--

What is the purpose of the optional `step` parameter in string slicing?

## --answers--

It specifies if the sliced string should be changed in place or not.

### --feedback--

Go back to the part of the lesson that talks about the `step` parameter.

---

It specifies the increment between each character to extract.

---

It ensures that all characters are extracted.

### --feedback--

Go back to the part of the lesson that talks about the `step` parameter.

---

It specifies a maximum number of repeated characters to extract.

### --feedback--

Go back to the part of the lesson that talks about the `step` parameter.

## --video-solution--

2

