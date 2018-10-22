---
title: Exceptions in Java
---
## What is an Exception?

An exception is an unwanted or unexpected event, which occurs during the execution of a program i.e at run time, that disrupts the normal flow of the program’s instructions.

## Error vs Exception

Error: An Error indicates serious problem that a reasonable application should not try to catch.
Exception: Exception indicates conditions that a reasonable application might try to catch.

## Checked versus Unchecked exception
A checked exception is an exception class that extends Exception in its signature. For a checked exception, each method that calls the method that throws a checked exception will need to either throws the exception in its signature or catch the exception. The compiler will complain if the exception is not catched by any method. 

Example of a checked exception signature: 
```
public class TooManyItemsException extends Exception { }
```

A unchecked exception is an exception class that extends Runtime Exception is its signature. For an unchecked exception, if a method throws it and even if no other methods are catching it then the compiler won't complain. However, while running the program and the unchecked exception is thrown and not catched it will crash the program. 

Examples of unchecked exception signature:
```
public class TooManyItemsException extends RuntimeException {}
```

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
// block of code to be executed either if the exception is catch or not. 
}
```
