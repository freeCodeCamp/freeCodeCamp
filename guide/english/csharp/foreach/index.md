---
title: Foreach Loop
---

## Foreach Loop

The `foreach` loop executes a block of code for each item in a collection. The benefit of the `foreach` loop is you need not know how many items are within the collection to iterate through it; you simply tell your `foreach` loop to loop through the collection, as long as there are items within it. It is useful for iterating through lists, arrays, datatables, IEnumerables and other list-like data structures. It can be less efficient than a very well designed `for` loop, but the difference is negligible in most cases.

### Example
```csharp

// syntax
foreach (element in iterable-item)
{
    // body of foreach loop
}

// sample code
List<string> Names = new List<string>{ "Jim", "Jane", "Jack" }

foreach(string name in Names)
{
    Console.WriteLine("We have " + name);    
}
```

### Output:
```sh
> We have Jim
> We have Jane
> We have Jack
```
