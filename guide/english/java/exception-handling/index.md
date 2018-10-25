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

## Example
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
