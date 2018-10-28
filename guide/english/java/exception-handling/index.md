---
title: Exceptions in Java
---
## What is an Exception?

An exception is an unwanted or unexpected event, which occurs during the execution of a program i.e at run time, that disrupts the normal flow of the program’s instructions.

## Error vs Exception

Error: An Error indicates serious problem that a reasonable application should not try to catch.
Exception: Exception indicates conditions that a reasonable application might try to catch.

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
## Throw vs Throws

Throw keyword is used to throw an exception explicitly. This can be used only inside a method and multiple exceptions cannot be thrown.

```
public int divide(int a,int b) {
  if(b==0) {
  // The throw indicates that a division cannot be performed when divisor = 0.
    throw new ArithmeticException("Cannot divide a number with 0");
  } else {
    return a/b ;
  }
}
```
Throws keyword on the other hand is used to declare an exception. It is used in the method signature to inform about the possible problems that may occur during the execution of the statements within the method.

```
public void fileOperation() throws FileNotFoundException
// The throws indicates that this method may throw an exception in case the file you are trying to operate on is not found.
{
  FileInputStream fis = new FileInputStream("abc.txt");
}
```
