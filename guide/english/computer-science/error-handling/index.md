---
title: Error Handling
---

## Error Handling
Error Handling, and to a larger extent, Exception Handling, are functions/methods written to return important information about the manipulation of data. Error handling is often used alongside Promises and Callbacks.
Error handling is a very important thing every developer should care about while programming. Here I'll explain how to handle errors which occur in run-time using try-catch blocks with an example in C# programs. Try-catch statements are available in all the major programming languages with similar syntax.
  
### How the try-catch block works.

The try-catch statement consists of a **try** block and a **catch** block and an optional **finally** block. Code that could throw an exception should be put in the try block. The catch block takes the exception that could be thrown as a parameter and then handles that exception inside the block. During runtime, the code in the try block is first executed. If an exception is thrown, it will be thrown to the catch block to be handled. If there is no catch block, the program will display an unhandled exception error and stop running. Multiple catch blocks are used if code in the try block could throw more than one exception. There is also an optional **finally** block that will execute the code in it regardless of whether or not an exception is thrown.

Below is an example program that handles the divide by zero exception using predefined class in C# library. Exception is the base class for all the exceptions.

```c#
using System;
namespace ErrorHandling
{
   class DivideByZero
    {
       int result;
       DivideByZero()
       {
          result = 0;
       }
       public void division(int num1, int num2)
       {
          try
          {
             result = num1 / num2;
          }
          catch (DivideByZeroException e)
          {
             Console.WriteLine("Exception caught: {0}", e);
          }
          catch(Exception ex)
          {
              Console.WriteLine("Exception caught: {0}", ex);
          }
          finally
          {
             Console.WriteLine("Result: {0}", result);
          }
       }
       static void Main(string[] args)
       {
          DivideByZero d = new DivideByZero();
          d.division(10, 0);
          Console.ReadKey();
       }
    }
 }
 ```
 * In the above program passing 0 as second parameter will throw DivideByZeroExceptions. 
 * This exception will handled by the catch block which has DivideByZeroException class. If any exceptions other than DivideByZeroExceptions occur, they will be handled by Exception catch block.
 
 
 Exception is the base class for all the exceptions classes available in C# library. Even if you want to write your own exception, you have to inherit the Exception base class into your program.

#### Error handling in SQL Server
 Error handling in SQL Server give us control over Transact-SQL code. For example when things go wrong we get a chance to do something about it and possibly make it right again. SQL Server error handling can be as simple as just logging that something happened or it could be us trying to fix an error. It can even be translating the error in SQL language because we all know how technical SQL Server error messages could get making no sense and hard to understand. Luckily we have a chance to translate those messages into something more meaningful to pass on to the users, developers, etc.

In this article, we’ll take a closer look at the TRY…CATCH statement: the syntax, how it looks, how it works and what can be done when an error occurs. Furthermore, the method will be explained in a SQL Server case using a group of T-SQL statements/blocks which is basically SQL Server way of handling errors. This is a very simple, yet structured way of doing it and once you get the hang of it, can be quite helpful in many cases.

On top of that, there is a RAISERROR function that can be used to generate our own custom error messages which is a great way to translate confusing error messages into something a little bit more meaningful that people would understand.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://quizlet.com/135129010/computer-science-error-handling-flash-cards/
https://en.wikipedia.org/wiki/Exception_handling
