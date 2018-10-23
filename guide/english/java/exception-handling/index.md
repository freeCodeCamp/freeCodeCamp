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
change by infitake.

# improving exception handling 
 java SE add some new feature in java which can increase the mechanism of exception handling in java for better use by the programmer;
 
 these are as follow:
 1: catching multiple exception in same catch block;
 2: the try-with-resource statement;
 
1: //first we use that type of coding :
 /*
 
   try
   {
     //code that may throw exception.
    }
   catch(ExceptionType1 e)
   {  
     // ex_handle(e);
   }
   catch(ExceptionType2 e)
   {  
     // ex_handle(e);
   }
   */
   
   by these enhancements in exception handling:
    this code should be written as:
/*    try
   {
     //code that may throw exception.
    }
    catch(ExceptionType1 |ExceptionType2 e)
   {  
     // ex_handle(e);
   }
    */
  2:using try-with-resources statement
  it automatically close all the opened files and resources at the end of the try block, thus there is no need for explicit closure statement;
  
     
