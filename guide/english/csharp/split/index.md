---
title: Split
---

# Split Method

The `String.Split` method parses a string: As input, it takes a character indicating the separator, and generates an array of sub strings.

## Example
```csharp
string myText = "I like pizza";

// Split the string by ' '(space) character.
string[] splitResult = myText.Split(' ');

// The array splitResult, now contains three substrings.

// Now print the array of substrings
foreach(string x in splitResult)
{
    // Write On Console
    Console.WriteLine(x);
}

```

## Output:
```
> I
> like
> pizza
```
