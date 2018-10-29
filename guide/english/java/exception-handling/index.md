---
title: Exceptions in Java
---
## What is an Exception?

An exception is an unwanted or unexpected event, which occurs during the execution of a program i.e at run time, that disrupts the normal flow of the program’s instructions.

## Error vs Exception

Error: An Error indicates serious problem that a reasonable application should not try to catch.
Exception: Exception indicates conditions that a reasonable application might try to catch.

## Types of Exceptions

There are 2 types of exceptions in java:

1) Checked Exceptions
2) Unchecked Exceptions

1) Checked Exceptions: These exceptions should be handled by the programmer otherwise the java compiler would throw an exception.
These are handled by using try catch block or throws Keyword. 

Some of the Checked Exceptions are ClassNotFoundException, EOFException, IllegalAccessException etc.

2) Unchecked Exceptions: These exceptions will occur during the runtime and not handling them would cause the interruption to program run. 
These exceptions won't cause the compile time errors. 

Some of the Unchecked Exceptions are ArithmeticException, NullPointerException, ArrayIndexOutOfBoundException etc. 

## Exception Hierarchy

All exception and errors types are sub classes of class Throwable, which is base class of hierarchy.One branch is headed by Exception. This class is used for exceptional conditions that user programs should catch. NullPointerException is an example of such an exception.Another branch,Error are used by the Java run-time system(JVM) to indicate errors having to do with the run-time environment itself(JRE). StackOverflowError is an example of such an error.

## How to use try-catch clause

```
try {
// block of code to monitor for errors
// the code you think can raise an exception
}
catch (ExceptionType1 exOb) {
// exception handler for ExceptionType1
}
catch (ExceptionType2 exOb) {
// exception handler for ExceptionType2
}
// optional
finally {
// block of code to be executed after try block ends
}
```

In using try, catch and finally blocks, try should always be accompained by either catch or finally. We can't have only try or catch or finally blocks.


