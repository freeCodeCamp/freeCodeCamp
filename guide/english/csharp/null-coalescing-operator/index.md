---
title: Null-coalescing Operator
---

# Null-coalescing Operator

The null-coalescing operator in C# is used to help assign one variable to another and specify an alternate value if the source value is `null`. The null-coalescing operator in C# is `??`.

## Example 1

Since `name` is `null`, `clientName` will be assigned the value "John Doe".

```csharp
string name = null;

string clientName = name ?? "John Doe";

Console.WriteLine(clientName);
```

```csharp
> John Doe
```

## Example 2

Since `name` is not `null`, `clientName` will be assigned the value of `name`, which is "Jane Smith".

```csharp
string name = "Jane Smith";

string clientName = name ?? "John Doe";

Console.WriteLine(clientName);
```

```csharp
> Jane Smith
```

## Alternative to if...else Statement

You could use an `if...else` statement to test for the presence of `null` and assign a different value.

```csharp
string clientName;

if (name != null)
	clientName = name;
else
	clientName = "John Doe";
```

However, this can be greatly simplified using the null-coalescing operator.

```csharp
string clientName = name ?? "John Doe";
```

## Alternative to Conditional (Ternary) Operator

It is also possible to use the conditional operator to test for the presence of `null` and assign a different value.

```csharp
string clientName = name != null ? name : "John Doe";
```

Again, this can be simplified using the null-coalescing operator.

```csharp
string clientName = name ?? "John Doe";
```

## References

* [?? Operator (C# Reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-conditional-operator)