---
title: Substring
---

# Substring

`Substring` extracts a portion of a string value. It is used with 2 integer parameters, the first is location of the first character(starts with index 0) and the second is the desired character length.

## Example
```
string firstSentence = "Apple, I have.";
string secondSentence = "I have a Pen.";

string apple = firstSentence.Substring(0,5);
string pen = secondSentence.Substring(9,3);

Console.WriteLine(apple);
Console.WriteLine(pen);

```

## Output:
```
>Apple
>Pen
```
