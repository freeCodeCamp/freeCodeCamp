---
title: Substring
---

# Substring

`Substring` extracts a portion of a string value. It is used with 2 integer parameters, the first is location of the first character(starts with index 0) and the second is the desired character length. If only one parameter is used, it will be the location
of the first character, and the rest of the string is returned from the starting position.

## Example
```
string firstSentence = "Apple, I have.";
string secondSentence = "I have a Pen.";
string thirdSentence = "I am having Fun";

string apple = firstSentence.Substring(0,5);
string pen = secondSentence.Substring(9,3);
string fun = thirdSentence.Substring(12);

Console.WriteLine(apple);
Console.WriteLine(pen);
Console.WriteLine(fun)

```

## Output:
```
>Apple
>Pen
>Fun
```
