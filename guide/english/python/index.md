---
title: Python
---
![alt text](https://www.python.org/static/community_logos/python-logo-master-v3-TM.png)

## Python

[Python](https://www.python.org) is a general purpose programming language that is dynamically typed, interpreted, and is known for its easy readability with great design principles. It was created by Guido van Rossum and released in 1991. Since then, the language has exploded in popularity.  

To learn more about Python from its source check out these pages on python.org:

[What is Python?](https://www.python.org/doc/essays/blurb/)

[Python FAQ](https://docs.python.org/3/faq/general.html)

## Why Python?

> If you're new to programming, you've made the right choice. Python is the perfect beginners' language. It has a clear and simple syntax that will get you writing useful programs in short order. Python even has an interactive mode, which offers immediate feedback, allowing you to test out new ideas almost instantly.
If you've done some programming before, you've still made the right choice. Python has all the power and flexibility you'd expect from a modern, object-oriented programming language. But even with all of its power, you may be surprised how quickly you can build programs. In fact, ideas translate so quickly to the computer, Python has been called "programming at the speed of thought".
> - Michael Dawson

## Python 2 or Python 3
Python 3 was released on [December 3, 2008](https://www.python.org/download/releases/3.0/).
The two versions are similar and, with knowledge of one, writing code for the other is not difficult.
Three changes most commonly encountered in going from 2.x to 3.x include:
- the `print()` function (it is now a function and requires parentheses)
- the `input()` function (is no longer `raw_input()`)
- integer division (Python 3 no longer floors this operation but always creates a float)
A full list of changes can be found [here](https://sebastianraschka.com/Articles/2014_python_2_3_key_diff.html).

Other considerations include: 
- [Python 2.x will not be maintained past 2020](https://www.python.org/dev/peps/pep-0373/)
- 3.x is under active development. This means that all recent standard library improvements, for example, are only available by default in Python 3.x
- The Python ecosystem has amassed a significant amount of quality software over the years. The downside of breaking backwards compatibility in 3.x is that some of that software (especially in-house software in companies) still doesn't yet work on 3.x

For more information see [Python 2 or Python 3](https://wiki.python.org/moin/Python2orPython3).

## Installation
Most *nix based operating systems (including Mac OS) come with Python installed. Replacing a system’s native Python, whatever its version is, is not recommended and may cause problems because the version installed could be being used for some necessary internal services or tools. However, different versions of Python can be safely installed alongside the system Python. See [Python Setup and Usage](https://docs.python.org/3/using/index.html).

Python doesn't ship with Windows. The installer and instructions can be found <a href='https://docs.python.org/3/using/windows.html' target='_blank' rel='nofollow'>here</a>.

Linux operating systems come with different versions of Python pre-installed. However to install Python 3.x on Linux, follow this [link](https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-linux-python.html).

MacOS doesn't come with Python 3 (however Python 2.7 pre-installed by Apple), the installer and instructions can be found [here](https://docs.python.org/3/using/mac.html).

Windows doesn't typically come with Python, the installer and instructions can be found [here](https://docs.python.org/3/using/windows.html).

### The Python Interpreter
The Python interpreter is used to run Python scripts, it translates Python code for the operating system.

In your terminal, type the command `python` followed by the script name to invoke the interpreter and run the script. This will determine whether the interpreter is available and in Unix shell’s search path.

To execute a script this would be followed by the script name to invoke the interpreter and run the script.

The file: `hello_campers.py` contains the following code:

```python
print('Hello campers!')
```

From a terminal:

```bash
$ python hello_campers.py
Hello campers!
```

When multiple versions of Python are installed, calling them by version may be possible depending on the install configuration. In the Cloud9 IDE custom environment, they can be invoked as shown below:

```bash
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
```

### Python Interpreter Interactive Mode

Interactive mode can be started by invoking the Python interpreter with the `-i` flag or without any arguments.

Interactive mode provides a prompt where Python commands can be entered and run, this is commonly used for learning Python or trying out statements:

```bash
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
```

There are many common applications for interactive Python including the one built in to your Python version, available at the command prompt by invoking the version name, as well downloadable applications such as Idle, Spyder and many more.

## The Zen of Python
The principles that influenced the design of Python are included as an Easter egg, and can be read by using the following command inside the Python interpreter interactive mode:

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

### Pros and Cons of Python

## Pros and Cons of Python
### Pros
- Easy to read, learn, and write.
- Interactive language with module support for almost all functionality.
- Open Source: You can contribute to the community and help others with the functions you have developed.
- A lot of good interpreters and notebooks available for better experience like Jupyter notebook.
- It is a very easy language to debug. To check if a small bit of code works or not, you can just open up the interpreter and test.
- There are multiple libraries available for Python, like numpy, pandas, etc., to make doing complex operations easy!
- Don't have to worry about range of data types.  For instance, in the C language, we have to specify data types such as `int`, `long int`, `long long int`.

### Cons
- Being open source, many different ways have developed over the years for the same function. This can sometimes create chaos for others when reading someone else's code.
- It can be a slow language in some implementations because it is interpreted. This can be a deficit for developing some general algorithms.
- Python is dynamically typed, so the errors in code only show up after running an application.
- Python is not the best language to use if your project requires efficient memory management.
- White space can confuse beginners, as spaces may change depending on the program.

## Documentation
[Python](https://docs.python.org/3) is well documented. These docs include tutorials, guides, references, and meta information for the language.

Another important reference is the Python Enhancement Proposals [PEPs](https://www.python.org/dev/peps/). Included in the PEPs is a style guide for writing Python code, [`PEP 8`](https://www.python.org/dev/peps/pep-0008/).

## Debugging
Inline `print` statements can be used for simple debugging:

> **... often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.**
> 
> --[Executive Summary](https://www.python.org/doc/essays/blurb/)

Python also includes more powerful tools for debugging, such as:

* logging module, [_logging_](https://docs.python.org/3/library/logging.html)
* debugging module, [_pdb_](https://docs.python.org/3/library/pdb.html)

Just note that these exist for now.

### A Hello World Exercise 
Going back to the docs, we can read about the [`print`](https://docs.python.org/3/library/functions.html#print) function, a ['nofollow'](https://docs.python.org/3/library/functions.html) of the [Python Standard Library](https://docs.python.org/3/library/index.html.

    print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)

The built-in functions are listed in alphabetical order. The name is followed by a parenthesized list of formal parameters with optional default values. Under that is a short description of the function and its parameters are given. Occasionally, an example is provided.

The [`print`](https://docs.python.org/3/library/functions.html#print) function in Python 3 replaces the [`print`](https://docs.python.org/2/reference/simple_stmts.html#print) statement in Python 2.

    >>> print("Hello, World!")
    Hello, World!

A function is called when the name of the function is followed by `()`. For the 'Hello, World!' example, the print function is called with a string as an argument for the first parameter. For the rest of the parameters, default values are used.

The argument that we called the `print` function with is a `str` object or _string_, one of Python's [_built-in data types_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str).
Also the most important thing about python is that you don't have to specify the data type while declaring a variable Python's compiler will do that itself, based on the type of value assigned.

The `objects` parameter is prefixed with a `*`, which indicates that the function will take an arbitrary number of arguments for that parameter.

## Things you can do with Python
As stated, Python is a general purpose language. You can use it to do anything you like but one of the major uses of Python is in machine learning and artificial intelligence. It is also a popular language in web development with some amazing frameworks like [Django](https://www.djangoproject.com/) and [flask](http://flask.pocoo.org/). It is also a popular scripting language. With its easy to read syntax it is becoming one the most popular programming languages, growing rapidly in different fields.

For security professionals, Python can be used for but not limited to:
- Penetration testing
- Information gathering
- Scripting tools
- Automating stuff
- Forensics


## Want to learn more?
Free Code Camp has some great resources. The web is a big place, there's plenty more to explore:
* [Python Practice Book](http://anandology.com/python-practice-book/index.html)
* [Think Python](http://greenteapress.com/thinkpython/html/index.html)
* [Practical Business Python](http://pbpython.com/)
* [Real Python](https://realpython.com)
* [Full Stack Python](https://www.fullstackpython.com/)
* [Learn the Basics on codecademy](https://www.codecademy.com/learn/learn-python)
* [Computer science using Python on edX](https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11)
* [Intro to Computer Science CS101 on Udacity](https://www.udacity.com/course/intro-to-computer-science--cs101)
* [List of more resources for learning python on Awesome Python](https://awesome-python.com)
* [Interactive Python - How to Think Like a Computer Scientist](http://interactivepython.org/runestone/static/thinkcspy/index.html)
* [Everyday Python Project](http://interactivepython.org/runestone/static/everyday/index.html)
* [Python Developer’s Guide](https://devguide.python.org)
* [Learn Python the Hard Way book](https://learnpythonthehardway.org/python3)
* [Introduction to Python Programming on Udacity](https://www.udacity.com/course/introduction-to-python--ud1110)
* [Profiling in Python](https://docs.python.org/2/library/profile.html)
* [Python for Everybody Specialization](https://www.coursera.org/specializations/python)

## Additional Resources
* [Python2](https://docs.python.org/2/tutorial/)
* [Python3](https://docs.python.org/3/tutorial/)
* [Google's Python class](https://developers.google.com/edu/python/)
* [Python Package Index](https://pypi.org/) Find, install and publish Python Packages
