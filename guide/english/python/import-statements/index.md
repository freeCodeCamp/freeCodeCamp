---
title: Python Import Statements
---
While learning programming and reading some resources you undoubtedly came across the word _abstraction_, which simply means to reduce and reuse code as much as possible.

Functions and modules facilitate abstraction. You create functions when you want to do something repeatedly within a file.

Modules come into the picture when you want to reuse a group of functions in different source files. Modules are also useful in structuring the program well.

## Using Standard Libraries

Example: You can read about the methods/functions of all the standard libraries in the official Python Docs in detail.

```python
import time
for i in range(100):
    time.sleep(1)   # Waits for 1 second and then executes the next command
    print(str(i) + ' seconds have passed')  # prints the number of seconds passed after the program was started
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CS6C' target='_blank' rel='nofollow'>Run Code</a>

```python
# To calculate the execution time of a part of program
import time
start = time.time() # Returns the number of seconds that have elapsed since the epoch
# code here
end = time.time()
print('Execution time:' , end-start)
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CS6C/1' target='_blank' rel='nofollow'>Run Code</a>

```python
# Using math Module
import math
print(math.sqrt(100))   # prints 10
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CS6C/2' target='_blank' rel='nofollow'>Run Code</a>

## Using third party Modules

Sometimes third party modules do not come bundled with Python, but need to be installed using package managers like [pip](https://bootstrap.pypa.io/get-pip.py), [easy install](https://bootstrap.pypa.io/ez_setup.py), and [pipenv](https://github.com/pypa/pipenv).

```python
# To make http requests
import requests
rq = requests.get(target_url)
print(rq.status_code)
```

Find out more about python-requests module <a href='http://docs.python-requests.org/en/master/' target='_blank' rel='nofollow'>here</a>

## Local imports

Files/Modules in the same project can be imported just by their name. `import` also supports relative references to files/modules as shown below:

```python
# To import a file within a project from "adjacent module"
import '../adjacent_module/file_to_import'
```

However, as a good practice, it is recommended not to use relative paths in imports.

## To structure programs

We want to make a program that has various functions regarding prime numbers. So lets start. We will define all the functions in `prime_functions.py`:

```python
# prime_functions.py
from math import ceil, sqrt
def isPrime(a):
    if a == 2:
        return True
    elif a % 2 == 0:
        return False
    else:
        for i in range(3,ceil(sqrt(a)) + 1,2):
            if a % i == 0:
                return False
        return True

def print_n_primes(a):
    i = 0
    m = 2
    while True:
        if isPrime(m) ==True:
            print(m)
            i += 1
        m += 1
        if i == a:
            break
```

Now we want to use the functions that we just created in `prime_functions.py`, so we create a new file called `playground.py` to use those functions.

> _Please note that this example is far too simple to need two separate files -- it is just to demonstrate. But when there are large, complex programs, splitting the code into different files is really useful._

```python
# playground.py
import prime_functions
print(prime_functions.isPrime(29)) # returns True
```

## Sorting Imports

A good practice is to sort `import` modules into three groups - standard library imports, related third-party imports, and local imports.  Within each group it is sensible to sort alphabetically by module name. You can find [more information in PEP8](https://www.python.org/dev/peps/pep-0008/?#imports).

```python
# Order of importing modules
import time # Standard library modules
from package import calculate_duration # Related third-party modules
from package.sibling import example # Local modules within the project
```

## Variations of Import statements

A good practice is to import only those modules or submodules that are being directly used in our program. Also we can rename the modules imported for a better use in our program. (Actual name of the module isn't changed, just by which name it is being referenced in our program is changed.)

1. **import my_module** - This imports the entire module as `my_module`. To use submodules, functions or classes of this module, we use the dot (associative) operator. For example - `a = my_module.my_sub_module.my_module_function()`

2. **import my_module.my_sub_module** - This allows us to only import the sub module `my_sub_module` from `my_module`. To use submodules, functions or classes of this module, we use the dot (associative) operator. For example - `a = my_module.my_sub_module.my_module_function()`

3. **from my_module import my_sub_module** - This allows us to only import the sub module `my_sub_module` from `my_module`. Rest sub modules aren't imported. To use functions or classes in this submodules or access its further sub module, we use the dot operator. Furthermore, this allows to access the sub module directly. This means that instead of `a = my_module.my_sub_module.my_module_function()`, we now use `a = my_sub_module.my_module_function()`

4. **import my_module as m** - This imports the entire module but now we can reference it as `m`. This means that instead of `a = my_module.my_sub_module.my_module_function()`, we now use `a = m.my_sub_module.my_module_function()`

5. **from my_module import my_sub_module as m** - This imports only the sub module which can be now referenced as `m`. This means that instead of `a = my_module.my_sub_module.my_module_function()`, we now use `a = m.my_module_function()`


One of the most important things to keep in mind when writing Python is legibility, and alphabetically sorting modules makes them faster to read and search through. Also, it is easier to verify that something is imported, and avoid duplicated imports.

