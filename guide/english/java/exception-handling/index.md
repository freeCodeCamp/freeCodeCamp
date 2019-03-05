---
title: Exceptions in Java
---
## What is an Exception?

An exception is an unwanted or unexpected event, which occurs during the execution of a program (i.e, at run time) that disrupts the normal flow of the program’s instructions. Exceptions can be thrown either during run-time or during compile-time.

## Exceptions Types
1. Checked Exceptions: Exceptions that are checked during the compile-time.
2. Unchecked Exceptions: Exceptions that are checked during the run-time.

## Customized Exception Handling
Java exception handling is managed via five keywords: `try`, `catch`, `throw`, `throws`, and `finally`. Any exception that is thrown out of a method must be specified as such by a `throws` clause. Any code that absolutely must be executed after a `try` block completes is put in a `finally` block.

## Error vs Exception

* Error: An Error indicates serious problem that a reasonable application should not try to catch.
* Exception: Exception indicates conditions that a reasonable application might try to catch.

Note: It is usually hard to reocover from errors, compared to Exceptions.

## Checked versus Unchecked exception
A checked exception is an exception class that extends `Exception` in its signature. For a checked exception, each method that calls the method that throws a checked exception, will either to handle the exception (with a `try-catch` clause) or declare `throws` in its method signature. The compiler will complain if the exception is not handled by any method. 

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

All exception and errors types are sub classes of class `Throwable`, which is base class of hierarchy. One branch is headed by `Exception`. This class is used for exceptional conditions that user programs should catch. `NullPointerException` is an example of such an exception. Another branch, `Error` are used by the Java run-time system(JVM) to indicate errors having to do with the run-time environment itself (JRE). `StackOverflowError` is an example of such an error.

![alt text](https://github.com/AmilaIndika789/Images/blob/master/Java%20Exceptions%20and%20Errors.png "Part of the Java Exceptions and Error Hierarchy")

## Exception Handling
* Use `try-catch` (or `try-catch-finally`): Exceptions can be handled by catching specific exceptions using catch clause and handling each exception separately.
* Use `throws` clause: Exceptions can be thrown without being handled. If an exception happens, it has to be caught by the calling function.

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

### Example
Here is a practical example.  Suppose you are using a Scanner object to input an integer.  If the user enters a decimal instead of an integer, an error would normally occur, causing the program to end. However, if you add an exception clause as shown below, the error can be caught and allow your program to continue running. 

```
Scanner input = new Scanner(System.in);
try
{
    System.out.print("Enter an integer: ");
    int num1 = input.nextInt(); 
    System.out.printf("You entered the number %d%n", num1); 
}
catch(InputMismatchException e)  
{
    System.out.println("Must enter a valid integer.");
    input.nextLine(); //clear the input line of previous input
}   
```

If an integer is entered, the "try" code block will execute successfully.  If something other than an integer is entered, the "catch" code block will execute.

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

## How to use throws clause

```java
public methodName throws ExceptionType1, ExceptionType2 {
  //some block of code
}

```

However, it is not recommended to throw exceptions without being handled.

## Advantage of Exception Handling
The core advantage of exception handling is to maintain the normal flow of the application. An exception normally disrupts the normal flow of the application which is why we use exception handling.

Tip: If you are not really sure of what kind of exceptions your application may throw, use the `Exception` parent class to catch any anomaly and use the `stacktrace()` function on the `Exception` object to debug what went wrong.

#### More Information:
- [Oracle Java Docs : Exception](https://docs.oracle.com/javase/specs/jls/se7/html/jls-11.html)
