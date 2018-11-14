---
title: Python Commenting Code
---
Comments are used to annotate, describe, or explain code that is complex or difficult to understand. Python will intentionally ignore comments when it compiles to bytecode by the interpreter. <a href='https://www.python.org/dev/peps/pep-0008/#comments' target='_blank' rel='nofollow'>`PEP 8`</a> has a section dealing with comments.They also increases the readablity of code by adding easy and descriptive language for better understanding.

**Block** and **inline** comments start with a `#`, followed by a space before the comment:

```python
    # This is a block comment.
    print('Hello world!') # This is an inline commment.
```

Python does not include a formal way to write multiline comments. Each line of a comment spanning multiple lines should start with `#` and a space:
```python
    # This is the first line of a multiline comment.
    # This is the second line.
```
Alternatively you could use `'''` to write a a comment that spans multiple lines to avoid having to use the `#`.
For example:
```python
    '''
    This is a multiline comment, 
    everything inside the three 
    apostrophes will be regarded 
    by Python as a comment and 
    ignored when running a program
    '''
```

Another type of comment is the **docstring**, documented in [`PEP 257`](https://www.python.org/dev/peps/pep-0257/). Docstrings are a specific type of comment that becomes the `__doc__` attribute.

For a string literal to be a docstring, it must start and end with `"""` and be the first statement of the module, function, class, or method definition it is documenting:

```python
    class SomeClass():
        """Summary line for SomeClass.

        More elaborate descriptions may require using a
        a multiline docstring.
        """

        def method_a(self):
            """Single line summary of method_a."""
            pass
```

String literals that start and end with `"""` that are not docstrings (not the first statement), can be used for multiline strings. They will not become `__doc__` attributes. If they are not assigned to a variable, they will not generate bytecode. There is some discussion about using them as multiline comments found [Multiline Comments in Python - Stack Overflow](http://stackoverflow.com/questions/7696924/multiline-comments-in-python).
