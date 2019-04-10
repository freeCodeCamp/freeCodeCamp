---
title: Is There a Way to Substring a String in Python
---

## Is There a Way to Substring a String in Python

Python offers many ways to substring a string. It is often called 'slicing'.

It follows this template:

```python
string[start: end: step]
```
Where,

`start`: The starting index of the substring. The character at this index is included in the substring. If _start_ is not included, it is assumed to equal to 0.

`end`: The terminating index of the substring. The character at this index is _NOT_ included in the substring. If _end_ is not included, or if the specified value exceeds the string length, it is assumed to be equal to the length of the string by default.

`step`: Every 'step' character after the current character to be included. The default value is 1. If the _step_ value is omitted, it is assumed to equal to 1.

#### Template

`string[start:end]`: Get all characters from index _start_ to _end-1_

`string[:end]`: Get all characters from the beginning of the string to _end-1_

`string[start:]`: Get all characters from index _start_ to the end of the string

`string[start:end:step]`: Get all characters from _start_ to _end-1_ discounting every _step_ character


#### Examples

* **Get the first 5 characters of a string**

```python
string = "freeCodeCamp"
print(string[0:5])
```
Output:
```shell
> freeC
```

Note: `print(string[:5])` returns the same result as `print(string[0:5])`

* **Get a substring of length 4 from the 3rd character of the string**

```python
string = "freeCodeCamp"
print(string[2:6])
```
Output:
```shell
> eeCo
```

Please note that the start or end index may be a negative number. A negative index means that you start counting from the end of the string instead of the beginning (i.e from the right to left). Index -1 represents the last character of the string, -2 represents the second to last character and so on...

* **Get the last character of the string**

```python
string = "freeCodeCamp"
print(string[-1])
```
Output:
```shell
> p
```

* **Get the last 5 characters of a string**

```python
string = "freeCodeCamp"
print(string[-5:])
```
Output:
```shell
> eCamp
```

* **Get a substring which contains all characters except the last 4 characters and the 1st character**

```python
string = "freeCodeCamp"
print(string[1:-4])
```
Output:
```shell
> reeCode
```

#### More examples
```py
str = “freeCodeCamp”

print str[-5:-2] # prints ‘eCa’
print str[-1:-2] # prints ‘’ (empty string)
```

* **Get every other character from a string**

```python
string = "freeCodeCamp"
print(string[::2])
```
Output:
```shell
> feCdCm
```
