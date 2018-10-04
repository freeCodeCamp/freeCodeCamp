---
title: Exceptions
---

# Exceptions

An exception is an unexpected error that occurs while a program is running, such as an attempt to access a file that does not exist. It will stop the program if not handled.

## Example
If we try to read the text of a file that does not exist:
```
using System.IO;

string content = File.ReadAllText(@"C:\DoesNotExist.txt");
```

A `FileNotFoundException` will be raised.

Some other common exceptions:

* `IndexOutofRangeException`: Attempted to access an array with an invalid index.
* `NullReferenceException`: Attempted to use an unassigned reference variable.
* `DivideByZeroException`: Attempted to divide by 0.
