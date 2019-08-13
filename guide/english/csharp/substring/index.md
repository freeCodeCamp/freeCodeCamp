---
title: Substring 
---

# String.Substring Method

A substring is a contiguous sequence of characters within a string. The `String.Substring` method retrieves those characters. In c# string characters are zero-indexed which means that the first character of a string starts at the 0th position.

## Overloads

* Substring(int32)
* Substring(int32, int32)

The first overload retrieves a substring that starts at a specified character position and continues to the end of the string. The second overload retrieves a substring that starts at a specified character position and has a specified length.

## Example

```csharp
string firstSentence = "Apple, I have.";
string secondSentence = "I have a Pen.";
string thirdSentence = "I am having Fun";

string apple1 = firstSentence.Substring(9);
string pen1 = secondSentence.Substring(7);

string apple2 = firstSentence.Substring(0,5);
string pen2 = secondSentence.Substring(9,3);


Console.WriteLine(apple1);
Console.WriteLine(pen1);
Console.WriteLine(apple2);
Console.WriteLine(pen2);
Console.ReadLine();

```

## Output:

```
>have.
>a Pen.
>Apple
>Pen

```
