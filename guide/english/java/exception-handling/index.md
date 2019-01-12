---
title: Exceptions in Java
---
## What is an Exception?

An exception is an unwanted or unexpected event, which occurs during the execution of a program i.e at run time, that disrupts the normal flow of the program’s instructions. Exceptions can be thrown either during run-time or during compile-time.

## Exceptions Types
1. Checked Exceptions: Exceptions that are checked during the compile-time.
2. Unchecked Exceptions: Exceptions that are checked during the run-time.

## Error vs Exception

* Error: An Error indicates serious problem that a reasonable application should not try to catch.
* Exception: Exception indicates conditions that a reasonable application might try to catch.

Note: It is usually hard to reocover from errors, compared to Exceptions.

## Checked versus Unchecked exception
A checked exception is an exception class that extends `Exception` in its signature. For a checked exception, each method that calls the method that throws a checked exception, will either to handle the exception (with a try-catch clause) or declare `throws` in its method signature. The compiler will complain if the exception is not handled by any method. 

Example of a checked exception signature: 
```java
public class TooManyItemsException extends Exception { }
```

An unchecked exception is an exception class that extends `RuntimeException` is its signature. For an unchecked exception, if a method throws it and even no other methods catch it, then the compiler won't complain. However, while running the program, if the unchecked exception is thrown and not handled, it will crash the program. 

Examples of unchecked exception signature:
```java
public class TooManyItemsException extends RuntimeException { }
```

## Exception Hierarchy

All exception and errors types are sub classes of class Throwable, which is base class of hierarchy.One branch is headed by Exception. This class is used for exceptional conditions that user programs should catch. NullPointerException is an example of such an exception.Another branch,Error are used by the Java run-time system(JVM) to indicate errors having to do with the run-time environment itself(JRE). StackOverflowError is an example of such an error.

![alt text](https://github.com/AmilaIndika789/Images/blob/master/Java%20Exceptions%20and%20Errors.png "Part of the Java Exceptions and Error Hierarchy")

## Exception Handling
* Use try-catch (or try-catch-finally): Exceptions can be handled by catching specific exceptions using catch clause and handling each exception separately.
* Use throws clause: Exceptions can be thrown without being handled. If an exception happens, it has to be caught by the calling function.

## How to use try-catch clause

```java
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

## How to use throws clause

```
public methodName throws ExceptionType1, ExceptionType2{
  //some block of code
}

```
However, it is not recommended to throw exceptions without being handled.

## Advantage of Exception Handling
The core advantage of exception handling is to maintain the normal flow of the application. An exception normally disrupts the normal flow of the application which is why we use exception handling.

Tip: If you are not really sure of what kind of exceptions your application may throw, use the `Exception` parent class to catch any anomaly and use the `stacktrace()` function on the `Exception` object to debug what went wrong.

#### More Information:
- [Oracle Java Docs : Exception](https://docs.oracle.com/javase/specs/jls/se7/html/jls-11.html)
