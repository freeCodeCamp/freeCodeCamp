---
title: Python Import Statements
---
While learning programming and reading some resources you'd have come across this word 'abstraction' which simply means to reduce and reuse the code as much as possible.

Functions and Modules facilitate abstraction. You create functions when you want to do something repeatedly within a file.

Modules come into picture when you want to reuse a group of functions in different source files. Modules are also useful in structuring the program well.

*   Using Standard Libraries and other third party modules:
*   Structuring the program

## Using Standard Libraries

Example: You can read about the methods/functions of all the standard libraries in the official Python Docs in detail.

    import time
    for i in range(100):
        time.sleep(1)   # Waits for 1 second and then executes the next command
        print(str(i) + ' seconds have passed')  # prints the number of seconds passed after the program was started

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CS6C' target='_blank' rel='nofollow'>Run Code</a>

    # To calculate the execution time of a part of program
    import time
    start = time.time()
    # code here
    end = time.time()
    print('Execution time:' , end-start)

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CS6C/1' target='_blank' rel='nofollow'>Run Code</a>

    # Using math Module
    import math
    print(math.sqrt(100))   # prints 10

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CS6C/2' target='_blank' rel='nofollow'>Run Code</a>

## Using third party Modules

Third party modules don't come bundled with python , but we have to install it externally using package managers like <a href='https://bootstrap.pypa.io/get-pip.py' target='_blank' rel='nofollow'>`pip`</a> and <a href='https://bootstrap.pypa.io/ez_setup.py' target='_blank' rel='nofollow'>`easy install`</a>

    # To make http requests
    import requests
    rq = requests.get(target_url)
    print(rq.status_code)

Find out more about python-requests module <a href='http://docs.python-requests.org/en/master/' target='_blank' rel='nofollow'>here</a>

## Local imports

Files/Modules in the same project can be imported just by their name. import also supports relative references to files/modules as shown below:

    # to relatively import a file in adjacent module
    import '../adjacent_module/file_to_import'
    
However, as a good practice, it is recommended not to use relative paths in imports.

## To structure programs

We want to make a program that has various functions regarding prime numbers. So lets start. We will define all the functions in `prime_functions.py`

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

Now we want to use the functions that we just created in `prime_functions.py` so we create a new file `playground.py` to use those functions.

> _Please note that this program is far too simple to make two separate files, it is just to demonstrate. But when there are large complex programs, making different files is really useful._

    # playground.py
    import prime_functions
    print(prime_functions.isPrime(29)) # returns True
    
## Sorting Imports

Good practice is to sort `import` modules in three groups - standard library imports, related third-party imports, and local imports.  Within each group it is sensible to sort alphabetically by module name. You can find [more information in PEP8](https://www.python.org/dev/peps/pep-0008/?#imports).

One of the most important thing for Python language is legibility, and alphabetically sorting modules are quicker to read and search. Also it is easier to verify that something is imported, and avoid duplicated imports.
