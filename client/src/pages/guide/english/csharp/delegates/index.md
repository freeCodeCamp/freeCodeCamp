---
title: Delegates
---
## Delegates

A C# delegate represents a reference to a method that has a given set 
of parameters and a given return type. When you instantiate the delegate, you can associate it with
any method that is compatible with the delegate type: has the same amount of parameters, each is of the
same type and the type of the return value is also the same.

You can either use an instance method or a static method when you assign it to a delegate.

Delegate allow you to pass methods as parameters to other methods. 

Delegates are often used to implement callback functions. The most typical example are event handlers: you register
a method that is to be called whenever a certain event happens (the mouse button is clicked, for example).

### Short explanation for developers

Delegates are like function pointers in C type languages like C or C++. However, they are type safe. 
Unlike simple function pointers they 
contain information about the object instance whose method will be called when invoking the delegate, and have
strict type checks for the arguments and return value of the function.

## Example

You declare a delegate similar to how you declare a function, but add the `delegate` keyword. For example:

```csharp
    public delegate string StringOperation ( string s1, string s2 );
```

Any method that takes two `string` arguments and returns `string` can be assigned to a variable of this delegate type.

After you have created the delegate type, you can use it just like any other type. You can declare a local variable, 
other class members or pass them as parameters to other methods.

```csharp
    StringOperation a;
```    

Before invoking the delegate, you will need to assign a value to it. Let's assume we have a concatenation method 
that has the following implementation:

```csharp
    private string Concatenate ( string one, string two ) {
        return one + " " + two;
    }
```    

You can then assign this to the delegate variable and invoke it like a function.

```csharp
    StringOperation op = Concatenate;
    
    string result = op("Hello", "World");
    
    Console.WriteLine ( result ); // print "Hello World" to the console
```

## More information

Read more about delegates [here](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/).
