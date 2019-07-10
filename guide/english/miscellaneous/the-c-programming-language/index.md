---
title: The C Programming Language
---
## Basics

*   Setup
*   Your First C# Program
*   Types and Variables
*   Flow Control Statements
*   Operators
*   Strings
*   Classes, Objects, Interface and Main Methods
*   Fields and Properties
*   Scope and Accessibility Modifiers
*   Handling Exceptions

## Intermediate

*   Generics
*   Events, Delegates and Lambda Expressions
*   Collection Framework
*   LINQ

## Advanced

*   Asynchronous Programming (Async and Await)
*   Task Parallel Library

## What's New in C# 6

*   Null-Conditional Operator
*   Auto-Property Initializers
*   Nameof Expressions
*   Expression Bodied Functions and Properties
*   Other Features

## Object-Oriented principles (OOP)

*   Encapsulation
*   Abstraction
*   Inheritance
*   Polymorphism

## Solid principles

*   Single Responsibility Principle
*   Open Closed Principle
*   Liskov Substitution Principle
*   Interface Segregation Principle
*   Dependency Inversion Principle

## C# Best practices, Design Patterns & Test Driven Development (TDD)

## Setup

<a href='http://www.linqpad.net/' target='_blank' rel='nofollow'>LinqPad</a> is an .NET scratchpad to quickly test your C# code snippets.The standard edition is free and a perfect tool for beginners to execute language statements, expressions and programs.

Alternatively, you could also download <a href='https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx' target='_blank' rel='nofollow'>Visual Studio Community 2015</a> which is an extensible <a href='https://en.wikipedia.org/wiki/Integrated_development_environment' target='_blank' rel='nofollow'>IDE</a> used by most professionals for creating enterprise applications.

## Your First C# Program

```csharp
//this is the single line comment

/** This is multiline comment,
compiler ignores any code inside comment blocks.
**/

//This is the namespace, part of the standard .NET Framework Class Library
using System;
// namespace defines the scope of related objects into packages
namespace Learning.CSharp
{  
  // name of the class, should be same as of .cs file
  public class Program
  {
    //entry point method for console applications
   public static void Main()
    {
      //print lines on console
      Console.WriteLine("Hello, World!");
      //Reads the next line of characters from the standard input stream.Most common use is to pause program execution before clearing the console.
      Console.ReadLine();
    }
  }
}
```

Every C# console application must have a <a href='https://msdn.microsoft.com/en-gb/library/acy3edy3.aspx' target='_blank' rel='nofollow'>Main method</a> which is the entry point of the program.

Edit <a href='https://dotnetfiddle.net/kY7QRm' target='_blank' rel='nofollow'>HelloWorld</a> in .NET Fiddle, a tool inspired by <a href='http://jsfiddle.net' target='_blank' rel='nofollow'>JSFiddle</a> where you can alter the code snippets and check the output for yourself. Note, this is just to share and test the code snippets, not to be used for developing applications.

If you are using visual Studio, follow this <a href='https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx' target='_blank' rel='nofollow'>tutorial</a> to create console application and understand your first C# program.

## Types and Variables

C# is a strongly typed language. Every variable has a type. Every expression or statement evaluates to a value. There are two kinds of types in C#

*   Value types
*   Reference types.

**Value Types** : Variables that are value types directly contain values. Assigning one value type variable to another copies the contained value.

<a href='https://dotnetfiddle.net/JCkTxb' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a>

```csharp
int a = 10;
int b = 20;
a=b;
Console.WriteLine(a); //prints 20
Console.WriteLine(b); //prints 20
```

Note that in other dynamic languages this could be different, but in C# this is always a value copy. When value type is created, a single space most likely in <a href='http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2' target='_blank' rel='nofollow'>stack</a> is created, which is a "LIFO" (last in, first out) data structure. The stack has size limits and memory operations are efficient. Few examples of built-in data types are `int, float, double, decimal, char and string`.

Type | Example | Description  
--------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------  
_Integer_ | `int fooInt = 7;` | **Signed 32-bit** Integer  
_Long_ | `long fooLong = 3000L;` | **Signed 64-bit** integer.**L is used to specify that this variable value is of type long/ulong**  
_Double_ | `double fooDouble = 20.99;` | Precision: **15-16 digits**  
_Float_ | `float fooFloat = 314.5f;` | Precision: **7 digits**.**F is used to specify that this variable value is of type float**  
_Decimal_ | `decimal fooDecimal = 23.3m;` | Precision: **28-29 digits**.Its more precision and smaller range makes it appropriate for **financial and monetary calculations**  
_Char_ | `char fooChar = 'Z';` | A single **16-bit Unicode character**  
_Boolean_ | `bool fooBoolean = false;` | Boolean - **true & false**  
_String_ | `string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs);` | **A string of Unicode characters.**

For complete list of all built-in data types see <a href='https://msdn.microsoft.com/en-us/library/ms228360' target='_blank' rel='nofollow'>here</a>

<a href='https://msdn.microsoft.com/en-us/library/490f96s2.aspx' target='_blank' rel='nofollow'>**Reference types**</a> : Variables of reference types store references to their objects, which means they store the address to the location of data on the <a href='http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2' target='_blank' rel='nofollow'>stack</a>, also known as pointers. Actual data is stored on the <a href='http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3' target='_blank' rel='nofollow'>heap</a> memory. Assigning reference type to another doesn't copy the data, instead it creates the second copy of reference which points to the same location on the heap.

In heap, objects are allocated and deallocated in random order that is why this requires the overhead of memory management and <a href='https://msdn.microsoft.com/en-us/library/hh156531(v=vs.110' target='_blank' rel='nofollow'>garbage collection</a>.aspx).

Unless you are writing <a href='https://msdn.microsoft.com/en-us/library/t2yzs44b.aspx' target='_blank' rel='nofollow'>unsafe code</a> or dealing with <a href='https://msdn.microsoft.com/en-us/library/sd10k43k(v=vs.100' target='_blank' rel='nofollow'>unmanaged code</a>.aspx), you don't need to worry about the lifetime of your memory locations. .NET compiler and CLR will take care of this, but it's still good to keep this mind in order to optimize performance of your applications.

More information <a href='http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_memory01122006130034PM/csharp_memory.aspx?ArticleID=9adb0e3c-b3f6-40b5-98b5-413b6d348b91' target='_blank' rel='nofollow'>here</a>

## Flow Control Statements

*   <a href='https://msdn.microsoft.com/en-us/library/5011f09h.aspx' target='_blank' rel='nofollow'>If else</a> statement : <a href='https://dotnetfiddle.net/IFVB33' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a>

    ```csharp
    int myScore = 700;
    if (myScore == 700)
    {
        Console.WriteLine("I get printed on the console");
    }
    else if (myScore > 10)
    {
        Console.WriteLine("I don't");
    }
    else
    {
        Console.WriteLine("I also don't");
    }

    /** Ternary operators
     A simple if/else can also be written as follows
     <condition> ? <true> : <false> **/
    int myNumber = 10;
    string isTrue = myNumber == 10 ? "Yes" : "No";
    ```

*   <a href='https://msdn.microsoft.com/en-GB/library/06tc147t.aspx' target='_blank' rel='nofollow'>Switch</a> statement : <a href='https://dotnetfiddle.net/lPZftO' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a>

    ```csharp
    using System;

    public class Program
    {
        public static void Main()
        {
            int myNumber = 0;
            switch (myNumber)
            {
                // A switch section can have more than one case label.
                case 0:
                case 1:
                {
                    Console.WriteLine("Case 0 or 1");
                    break;
                }

                // Most switch sections contain a jump statement, such as a break, goto, or return.;
                case 2:
                    Console.WriteLine("Case 2");
                    break;
                // 7 - 4 in the following line evaluates to 3.
                case 7 - 4:
                    Console.WriteLine("Case 3");
                    break;
                // If the value of myNumber is not 0, 1, 2, or 3 the
                //default case is executed.*
                default:
                    Console.WriteLine("Default case. This is also optional");
                    break; // could also throw new Exception() instead
            }
        }
    }
    ```

*   <a href='https://msdn.microsoft.com/en-us/library/ch45axte.aspx' target='_blank' rel='nofollow'>For</a> & <a href='https://msdn.microsoft.com/en-gb/library/ttw7t8t6.aspx' target='_blank' rel='nofollow'>Foreach</a> : <a href='https://dotnetfiddle.net/edxtvq' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a>

    ```csharp
    for (int i = 0; i < 10; i++)
    {
      Console.WriteLine(i); //prints  0-9
    }

    Console.WriteLine(Environment.NewLine);
    for (int i = 0; i <= 10; i++)
    {
      Console.WriteLine(i); //prints  0-10
    }

    Console.WriteLine(Environment.NewLine);
    for (int i = 10 - 1; i >= 0; i--) //decrement loop
    {
      Console.WriteLine(i); //prints 9-0
    }

    Console.WriteLine(Environment.NewLine);
    for (; ; )
    {
    // All of the expressions are optional. This statement
    //creates an infinite loop.*
    }
    ```

*   <a href='https://msdn.microsoft.com/en-us/library/2aeyhxcd.aspx' target='_blank' rel='nofollow'>While</a> & <a href='https://msdn.microsoft.com/en-us/library/370s1zax.aspx' target='_blank' rel='nofollow'>do-while</a> : <a href='https://dotnetfiddle.net/O5hOF1' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a>

    ```csharp
    // Continue the while-loop until index is equal to 10.
    int i = 0;
    while (i < 10)
    {
        Console.Write("While statement ");
        Console.WriteLine(i);// Write the index to the screen.
        i++;// Increment the variable.
    }

    int number = 0;
    // do work first, until condition is satisfied i.e Terminates when number equals 4.
    do
    {
        Console.WriteLine(number);//prints the value from 0-4
        number++; // Add one to number.
    } while (number <= 4);
    ```
        
