---
title: Docstring
---
## Docstring

Docstring is a way for developers to communicate the purpose, parameters, requirements, and usage of a function in Python to other developers. It allows for ease of code maintenance and understanding.

Unlike conventional source code comments the docstring should describe what the
function does, not how.

A similar example to Docstring is @Javadoc in Java.

Docstring is written as a multi-line comment just after the declaration header in Python. There are 4 different parts to a docstring:

1. Type of input, and type of output
    * Input/output can be ```obj, list, bool, int, str, float```
2. Description of function
    * Brief, but thorough description of what your function does
3. Requirements 
    * This is read by a human, so it does not have to be code
4. Test cases (normally 2-3)

The general format is listed below.

## Format of Docstring

```python
def my_examplefunc(input_type1, input_type2):
  '''(input_type1, input_type2) -> output_type        # Your first line will be the input/output. Remember the space around the arrow!
  Here is a description of my example function        # Your second line will be the description
  REQ: type(input_type1) == list                      # Your next line (or lines) will be the requirements for the input of your function
  REQ: type(input_type2) == str                       
  >>> my_example_func([2, 3], "Hello World!")         # After the requirements come test cases
  [2, 3] "Hello World"
  >>> my_example_func([7, 2], "Another test case")    # Your first line of the test case is an example of the usage, prefaced by >>>
  [7, 2] "Another test case"                          # Your second line of the test case is the output
  >>> my_example_func([5, 6], "Last test case")
  [5, 6] "Last test case"
  '''
  # Your code goes here, underneath the Docstring
```

Docstring is best understood with examples, so take a look at the below example program where the program outputs True if a number is less than 5, and False if a number is greater than 5.

## Example 1
```python
def is_less_than_five(some_number):
  '''(int) -> bool
  Returns True if the given number is less than 5, and False is the given number is greater than 5.
  REQ: some_number != 5
  >>> is_less_than_five(4)
  True
  >>> is_less_than_five(6)
  False
  >>> is_less_than_five(100000)
  False
  '''
  # Your code goes here
```

### Some useful links:
Numpy and Google Docstrings are two commonly used approaches:
   * Google: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html
   * Numpy: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_numpy.html
Also, refer to some good old PEP commentary: https://www.python.org/dev/peps/pep-0257/
