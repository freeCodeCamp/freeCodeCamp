---
title: Python
---
![alt text](https://www.python.org/static/community_logos/python-logo-master-v3-TM.png)

## What is Python?

<a href='https://www.python.org' target='_blank' rel='nofollow'>Python</a> is a general purpose programming language which is dynamically typed, interpreted, and known for its easy readability with great design principles. It was created by Guido van Rossum and released in 1991. Since then, the language has exploded in popularity.  

To learn more about Python, check out these pages on python.org:

<a href='https://www.python.org/doc/essays/blurb/' target='_blank' rel='nofollow'>What is Python?</a>

<a href='https://docs.python.org/3/faq/general.html' target='_blank' rel='nofollow'>Python FAQ</a>.

## Python 2 or Python 3

*   The two versions are similar, with knowledge of one switching to writing code for the other is easy.
*   <a href='https://wiki.python.org/moin/Python2orPython3' target='_blank' rel='nofollow'>Python 2 or Python 3</a>
    *   <a href='https://www.python.org/dev/peps/pep-0373/' target='_blank' rel='nofollow'>Python 2.x will not be maintained past 2020.</a> 
    * 3.x is under active development. This means that all recent standard library improvements, for example, are only available by default in Python 3.x.
    *   Python ecosystem has amassed a significant amount of quality software over the years. The downside of breaking backwards compatibility in 3.x is that some of that software (especially in-house software in companies) still doesn't work on 3.x yet.

## Installation

Most *nix based operating systems come with Python installed (usually Python 2, Python 3 in most recent ones). Replacing the system Python is not recommended and may cause problems. However, different versions of Python can be safely installed alongside the system Python. See <a href='https://docs.python.org/3/using/index.html' target='_blank' rel='nofollow'>Python Setup and Usage</a>.

Windows doesn't come with Python, the installer and instructions can be found <a href='https://docs.python.org/3/using/windows.html' target='_blank' rel='nofollow'>here</a>

## Python Interpreter

The Python interpreter is used to run Python scripts.

If it is available and in Unix shell’s search path makes it possible to start it by typing the command `python` followed by the script name will invoke the interpreter and run the script.

`hello_campers.py`

```python
print('Hello campers!')
```

From terminal:

    $ python hello_campers.py
    Hello campers!

When multiple versions of Python are installed, calling them by version is possible depending on the install configuration. In the Cloud9 IDE custom environment, they can be invoked like:

    $ python --version
    Python 2.7.6
    $ python3 --version
    Python 3.4.3
    $ python3.5 --version
    Python 3.5.1
    $ python3.6 --version
    Python 3.6.2 
    $ python3.7 --version
    Python 3.7.1

## Python Interpreter Interactive Mode

Interactive mode can be started by invoking the Python interpreter with the `-i` flag or without any arguments.

Interactive mode has a prompt where Python commands can be entered and run:

    $ python3.5
    Python 3.5.1 (default, Dec 18 2015, 00:00:00)
    GCC 4.8.4 on linux
    Type "help", "copyright", "credits" or "license" for more information.
    >>> print("Hello campers!")
    Hello campers!
    >>> 1 + 2
    3
    >>> exit()
    $

## The Zen of Python

Some of the principles that influenced the design of Python are included as an Easter egg and can be read by using the command inside Python interpreter interactive mode:

    >>> import this
    The Zen of Python, by Tim Peters

    Beautiful is better than ugly.
    Explicit is better than implicit.
    Simple is better than complex.
    Complex is better than complicated.
    Flat is better than nested.
    Sparse is better than dense.
    Readability counts.
    Special cases aren't special enough to break the rules.
    Although practicality beats purity.
    Errors should never pass silently.
    Unless explicitly silenced.
    In the face of ambiguity, refuse the temptation to guess.
    There should be one-- and preferably only one --obvious way to do it.
    Although that way may not be obvious at first unless you're Dutch.
    Now is better than never.
    Although never is often better than *right* now.
    If the implementation is hard to explain, it's a bad idea.
    If the implementation is easy to explain, it may be a good idea.
    Namespaces are one honking great idea -- let's do more of those!


## Pros and Cons of Python
### Pros
1. Interactive language with a module support for almost all functionality.
2. Open Source: So, you can contribute to the community, the functions you have developed for future use and to help others.
3. A lot of good interpreters and notebooks available for better experience like jupyter notebook.
4. It is a very easy language to learn and debug too. To check if a small bit of code works or not, you can just open up the interpreter and test.
5. There are multiple libraries available for Python, like numpy, pandas, etc., to make doing complex operations easy!

#### Cons
1. Being open source, many different ways have developed over the year for same function. This sometimes, creates chaos for others to read someone else code.
2. It is a slow language. So, a very bad language to use for developing general algorithms.

## Documentation

<a href='https://docs.python.org/3/' target='_blank' rel='nofollow'>Python is well documented</a>. These docs include tutorials, guides, references and meta information for language.

Another important reference is the Python Enhancement Proposals (<a href='https://www.python.org/dev/peps/' target='_blank' rel='nofollow'>PEPs</a>). Included in the PEPs is a style guide for writing Python code, <a href='https://www.python.org/dev/peps/pep-0008/' target='_blank' rel='nofollow'>`PEP 8`</a>.

## Debugging

Inline `print` statements can be used for simple debugging:

> **... often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.**
> 
> --<a href='https://www.python.org/doc/essays/blurb/' target='_blank' rel='nofollow'>Executive Summary</a>

Python also includes more powerful tools for debugging, such as:

*   logging module, <a href='https://docs.python.org/3/library/logging.html' target='_blank' rel='nofollow'>_logging_</a>
*   debugging module, <a href='https://docs.python.org/3/library/pdb.html' target='_blank' rel='nofollow'>_pdb_</a>

Just note that these exist for now.

## Hello World!

Going back to the docs, we can read about the <a href='https://docs.python.org/3/library/functions.html#print' target='_blank' rel='nofollow'>`print`</a> function, a <a href='https://docs.python.org/3/library/functions.html' target='_blank' rel='nofollow'>_built-in function_</a> of the <a href='https://docs.python.org/3/library/index.html' target='_blank' rel='nofollow'>Python Standard Library</a>.

    print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)

The built-in functions are listed in alphabetical order. The name is followed by a parenthesized list of formal parameters with optional default values. Under that is a short description of the function and its parameters are given and occasionally an example.

The <a href='https://docs.python.org/3/library/functions.html#print' target='_blank' rel='nofollow'>`print`</a> function in Python 3 replaces the <a href='https://docs.python.org/2/reference/simple_stmts.html#print' target='_blank' rel='nofollow'>`print`</a> statement in Python 2.

    >>> print("Hello world!")
    Hello world!

A function is called when the name of the function is followed by `()`. For the Hello world! example, the print function is called with a string as an argument for the first parameter. For the rest of the parameters the defaults are used.

The argument that we called the `print` function with is a `str` object or _string_, one of Python's <a href='https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str' target='_blank' rel='nofollow'>_built-in types_</a>.
Also the most important thing about python is that you don't have to specify the data type while declaring a variable, python's compiler
will do that itself based on the type of value assigned.

The `objects` parameter is prefixed with a `*` which indicates that the function will take an arbitrary number of arguments for that parameter.

## Things you can do with python
As stated python is a general purpose language. You can use it to do anything you like but one of the major uses of python is in machine learning and artificial intelligence. It is also a popular language in web development with some amazing frameworks like [Django](https://www.djangoproject.com/) and [flask](http://flask.pocoo.org/). It is also a popular scripting language. With its easy to read syntax it is becoming one the most popular programming languages growing rapidly in different fields.

## Want to learn more?

Free Code Camp has some great resources. The web is a big place, there's plenty more to explore:
* [Python Practice Book](http://anandology.com/python-practice-book/index.html)
* [Think Python](http://greenteapress.com/thinkpython/html/index.html)
* [Practical Business Python](http://pbpython.com/)
* [Real Python](https://realpython.com)
* [Full Stack Python](https://www.fullstackpython.com/)
* Learn the Basics [[codecademy](https://www.codecademy.com/learn/learn-python)]
* Computer science using Python [[edX](https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11)]
* Intro to Computer Science CS101 [[Udacity](https://www.udacity.com/course/intro-to-computer-science--cs101)]
* List of more resources for learning python [Awesome Python](https://awesome-python.com)
* [Interactive Python - How to Think Like a Computer Scientist](http://interactivepython.org/runestone/static/thinkcspy/index.html)
* [Everyday Python Project](http://interactivepython.org/runestone/static/everyday/index.html)
* [Python Developer’s Guide](https://devguide.python.org)
* [Learn Python the Hard Way book](https://learnpythonthehardway.org/python3)
* Introduction to Python Programming [[Udacity](https://www.udacity.com/course/introduction-to-python--ud1110)]
