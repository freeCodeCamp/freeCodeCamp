---
title: How to Convert Strings into Integers in Python
---
## How to Convert Strings into Integers in Python

Just like the `str()` built-in, Python also offers a handy built-in which takes a string object as an argument and returns the corresponding integer object.

#### Example Usage:

```py
# Here age is a string object
age = "18"
print(age)
# Converting string to integer
int_age = int(age)
print(int_age)
```
Output
```py
18
18
```
Here although the output is visually similar but you should keep in mind that the first line prints a string object while the line next to it prints a integer object which is further illustrated in the next example:

```py
age = "18"
print(age+2)
```
Output:
```py
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: cannot concatenate 'str' and 'int' objects
````
The error should make it clear to you that you need to convert the `age` object to an integer before adding something to it.

Both Code Below will give same output.
```py
age = "18"
age_int = int(age)
print(age_int+2)
```
or 

```py
age = "18"
print(int(age_int)+2)
```

Output:
```py
20
```

But you should keep in mind some special cases:

1. A floating point(an integer with fractional part) as an argument will return the float rounded down to the nearest whole integer.
   For example : `print(int(7.9))` will print `7`.
   Also `print(int("7.9"))` will result an error since the string is an invalid argument to convert to an integer.

   ```py
   Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: invalid literal for int() with base 10: '7.9'
   ```

2. Also any integer in words if given as an argument will return the same error as above:
   `print(int("one"))` will give an error as follows:
   
    ```py
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: invalid literal for int() with base 10: 'one'
    ```

#### More Information:
Official documentation for `int()` built-in can be found <a href='https://docs.python.org/3.6/library/functions.html#int' target='_blank' rel='nofollow'>here</a>


