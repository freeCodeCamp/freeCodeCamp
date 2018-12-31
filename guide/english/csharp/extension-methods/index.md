---
title: Extension Mehods
---
## Extension Methods

Extension methods enable you to "add" methods to existing types without creating a new derived type, recompiling, or otherwise modifying the original type. For client code written in C# there is no apparent difference between calling an extension method and the methods that are actually defined in a type. 

The most common extension methods are the LINQ standard query operators that add query functionality to the existing System.Collections.IEnumerable and System.Collections.Generic.IEnumerable<T> types.

### Usage
Extension methods are defined as static methods but are called by using instance method syntax. Their first parameter specifies which type the method operates on, and the parameter is preceded by the this modifier. Extension methods are only in scope when you explicitly import the namespace into your source code with a **using** directive.

### Example
The following example shows an extension method defined for the **System.String** class.
```
namespace ExtensionMethods
{
    public static class MyExtensions
    {
        public static int WordCount(this String str)
        {
            return str.Split(new char[] { ' ', '.', '?' }, 
                             StringSplitOptions.RemoveEmptyEntries).Length;
        }
    }   
}
```

Now you can bring the **WordCount** method to the scope by **using** directive:
```
using ExtensionMethods; 
```
And you can call it from an application by using this syntax:
```
string s = "Hello Extension Methods";  
int i = s.WordCount(); 
```



#### More Information:

<a href='https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-implement-and-call-a-custom-extension-method' target='_blank' rel='nofollow'>How to: Implement and Call a Custom Extension Method (C# Programming Guide)</a>
