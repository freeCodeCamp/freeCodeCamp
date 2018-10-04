---
title: Try Catch Finally
---
# Try Catch Finally

A Try-Catch-Finally block is used to avoid unhandled exceptions breaking your application. When your code ```throws``` an exception which sits between the ```try``` section it will be caught in the ```catch``` part of the statement, where you can handle it as you wish. The ```finally``` statement is always run at the end and is usually used to clean up unmanaged resources. You don't always need to have the three blocks present, below are the valid options.
* Try-Catch-Finally 
* Try-Catch 
* Try-Finally

## Syntax

```csharp
try
{
   // Code which could potentially throw an exception
   var parsedValue = Int32.Parse("abcde");
}
catch(Exception e)
{
    // Code to handle the exception
    Console.WriteLine("Exception: " + e.Message);
}
finally
{
    // Code which will always run no matter what.
    Console.WriteLine("Try-Catch block has finished execution");
}
```
In the example above we are trying to convert 'abcde' into a numerical value. This line will throw an exception because it cannot be converted to a number successfully. The execption will be caught in the catch block and the exception message and other details will be stored in the variable assigned in the catch block (The letter 'e' in the example above). After all this has been executed the "finally" section will be executed to finish it off.

## Try block

The try block should be placed around code which could behave out of the ordinary and cause an ```Exception``` and break your application. By having a try block you protect yourself from a fatal application crash. It is important to note as soon as your application has an error and an exception is thrown, the rest of the code in the ```Try``` block will **not** be executed.

A try block has its own method scope, so any variables which are declared inside the try block will not be accessible outside of the try block.

```csharp
try
{
    // Read user input from the console.
    var userInput = Console.ReadLine();
}
catch(Exception e)
{
    Console.WriteLine("Exception: " + e.Message);
}

//Outside the Try block 
var parsedUserInput = Int32.Parse(userInput);  // Not correct 
```
The above will give you a compile time error as the value 'userInput' is not accessible. If you need access to a variable outside the try-catch block you will need to declare the variable before the try block.

```csharp
var userInput = "";
try
{
    // Read user input from the console.
    userInput = Console.ReadLine();
}
catch(Exception e)
{
    Console.WriteLine("Exception: " + e.Message);
}

//Outside the Try block 
var parsedUserInput = Int32.Parse(userInput);  // Correct 
```

## Catch block
This block is where you specify what type of ```Exception``` you want to catch. If you want to catch ALL possible exceptions you can use the ```Exception``` base class. If you want to only catch a specific type of exception you can specify that instead. Some examples of other exception types are ```ArgumentException```, ```OutOfMemoryException ``` and ```FormatException```.

```csharp
try
{
   var parsedValue = Int32.Parse("abcde");
}
// Only FormatExceptions will be caught in this catch block.
catch(FormatException exceptionVariable)
{
    Console.WriteLine(exceptionVariable.Message);
}
```
The variable declared after the type of exception will contain all the data of the exception and can be used within the ```Catch``` block.

## Finally block
The finally block is **always** run at the end after the ```Try``` and ```Catch``` blocks. This section is usually used to when something **must** happen at the end regardless if an exception was thrown or not.
For example, say we need a variable to always be re-initalised back to a specific number after it has been manipulated all the time.
```csharp
int initalValue = 12;
try
{
    // Code which manipulates 'initialValue'
}
finally
{
    Console.WriteLine("re-initalising value back to 12");
    initialValue = 12;
}
```
