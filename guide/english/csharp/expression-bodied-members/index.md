---
title: Expression Bodied Methods and Properties
---

# Expression Bodied Methods and Properties

You can declare methods and properties as a lambda expression, without the need for a statement block. Intended for simple implementations, this syntax is more concise than declaring a regular method or property in that it eliminates the need for some of the curly braces and the use of an explicit return statement.

Here is an example of a regular method declaration:
```csharp
public Point CreatePoint(int x, int y)
{
    return new Point(x, y);
}
```

The following gives the same result, but is written as an expression bodied method:
```csharp
public Point CreatePoint(int x, int y) => new Point(x, y);
```

You can also declare properties with this syntax. The following code is how we declare a get-only property without a lambda expression:
```csharp
public Point Location
{
    get
    {
        return _location;
    }
}
```

Through an expression-bodied method, we can shrink this code down to only one line:
```csharp
public Point Location => _location
```
