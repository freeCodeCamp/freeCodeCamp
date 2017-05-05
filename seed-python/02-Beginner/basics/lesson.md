## Python Basics

## Printing to the Screen
Like every good tutorial, the first thing we've got to learn is how to print to
the screen.

In *Python 3.3+, `print` is a function (you'll learn about those later) that
takes an argument and prints it to the screen.
```
>>> print('Hello, World!')
Hello, World!
```

*In Legacy Python, `print` was a keyword meaning it was used like this:
```
print 'Hello, World!'
```
The two styles are functionally the same, just know that you might see both
styles occasionally. `print()` as a function is backwards compatible, but
`print` as a keyword is not forwards compatible. That means you should always
use `print()` as a function.

## Variables
A variable in Python is a way to make an item have a name.
```
>>> x = 3
>>> x
3
```

## comments
```
>>> # this won't be evaluated
>>> print('that')  # this. 'that' will be printed, but not this
that
>>> """This is a multiline
comment that wont
be
evaulated either.
"""
```

## documentation
```
""" This style of comment is also used for Documentation.

You can write full paragraphs inside of this style of comment which makes it
great for documenting a module, funciton, method, class, or any other thing in
Python.
"""
```
