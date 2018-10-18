---
title: Coding standards
---

### Outline
* Why coding standards?
* Intro to PEP 8
* Commands

### Why coding standards?
The global python community is rapidly growing, and almost everyon uses python. This is where readability of code and uniform standards matter. Anyone on the planet should be able to read your code and understand what it does. There are a lot of aspects to understanding other's code, for example comments about what a function does, logically dividing tasks amongst modules and functions, good variable names, etc.

### Intro to PEP 8
We love sticking to conventions. The python user community has come up with a set of standards, which are now taken as convention. Any industry level code that you write is run through the PEP 8 checker. It is therefore a good practice to start writing docstrings for your classes and functions, and naming variables in lower case with approrpiate underscores. It may be worthwhile to have a look at these standards before you begin coding.

[Here is the exhaustive link](https://www.python.org/dev/peps/pep-0008/ "PEP 8 standards")

### Commands

Here's how you check if your python code meets he standards.

```console
:~$ pip install pep8
:~$ pep8 --first myCode.py
```

This will give all those lines which violate the standards, along with a short description of the fixes.

### Docstring Conventions - PEP 257
In addition to PEP 8, there is another set of conventions created by the python community for docstrings. It's important to know these conventions because, as described in the [docstring section](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/python/docstring/index.md) of FCC's Python Guide, it is a way for developers to communicate the purpose, parameters, requirements, and usage of a function in Python to other developers. It allows for ease of code maintenance and understanding. 

[Take a look at PEP-257 -- Docstring Conventions for more information](https://www.python.org/dev/peps/pep-0257/ "PEP 257 -- Docstring Conventions")
