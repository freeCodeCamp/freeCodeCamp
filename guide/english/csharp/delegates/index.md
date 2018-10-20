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


## Predicates

A predicate is also a delegate. It represents a method that contains a set of criteria and checks whether the passed parameter meets those criteria or not. A predicate delegate methods must take one input parameter and it then returns a boolean value - true or false.

Predicates can be extremely useful if we want to check for something and expect a boolean answer, especially when using them in other functions (predicate is still a delegate so we can pass it as an argument) like ` public T Find (Predicate<T> match) `  

## Examples

Example using lambda expression:
```csharp
    Predicate<string> LengthIsGreaterThan5 = (x) => (x.Length > 5); 
    
	Console.WriteLine(LengthIsGreaterThan5("Sample")); // returns True
```

This predicate could also be rewritten using delegate keyword:
```csharp
    Predicate<string> LengthIsGreaterThan5 = delegate(string x) { return x.Length > 5; };
    
    Console.WriteLine(LengthIsGreaterThan5("Sample")); // returns True
```

## More information about predicates

Read more about predicates [here](http://www.tutorialsteacher.com/csharp/csharp-predicate).


## Func

`Func` is a generic delegate. It has zero or more input parameters and one out parameter. The last parameter is considered as an out parameter. For example, a Func delegate that takes one input parameter and one out parameter is defined in the System namespace as below:
`public delegate TResult Func<in T, out TResult>(T arg);`

## Examples

Example using lambda expression:
```csharp
    Func<double, double> Squared = (num) => (num * num); // input will be double, output will be double
	Console.WriteLine(Squared(5)); // return 25
```

Func delegate could also be assigned like a regular delegate:
```csharp
    static int Sum(int x, int y)
    {
        return x + y;
    }

    static void Main(string[] args)
    {
        Func<int,int, int> add = Sum;

        Console.WriteLine(add(10, 10)); // returns 20
    }
```

## More information about Func

Read more about Func [here](http://www.tutorialsteacher.com/csharp/csharp-func-delegate).
