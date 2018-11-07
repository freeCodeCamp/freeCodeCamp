---
title: Coding standards
---

### Outline
* Why coding standards?
* Intro to PEP 8
* Commands

### Why coding standards?
The global python community is rapidly growing, and almost everyone uses python. This is where readability of code and uniform standards matter. *Anyone on the planet should be able to read your code and understand what it does*. There are a lot of aspects to understanding other's code, for example comments about what a function does, logically dividing tasks among modules and functions, good variable names, etc.

### Intro to PEP 8
We love sticking to conventions. The python user community has come up with a set of standards, which are now taken as convention. PEP stands for Python Enhancement Proposal. Any industry level code that you write is run through the PEP 8 checker. It is therefore a good practice to start writing docstrings for your classes and functions, and naming variables in lower case with appropriate underscores. It may be worthwhile to have a look at these standards before you begin coding.

[Here is the exhaustive link](https://www.python.org/dev/peps/pep-0008/ "PEP 8 standards")

### Commands

Here's how you check if your python code meets he standards.

```console
:~$ pip install pep8
:~$ pep8 --first myCode.py
```

This will give all those lines which violate the standards, along with a short description of the fixes.
