---
title: Switch Case
---

# Switch Case

Switch is a selection statement that chooses a switch case section depending on the value matched with the expression/value being evaluated.<sup>1</sup>  If none of the case statements match the value of the switched variable, the default path is chosen. The switch statement is like a set of `if statements`. We exit from the switch by `break`.

## Example
```
public enum Colors { Red, Blue, Green, Orange }

Colors myColor;

... myColor is set to one of the enum values ...

switch(myColor){
  case Colors.Red: 
    Console.WriteLine("How you like them apples?");
    break;
  case Colors.Blue: 
    Console.WriteLine("Ice Ice Baby...");
    break;
  case Colors.Green: 
    Console.WriteLine("Fore!");
    break;
  default:
    Console.WriteLine("I have a hard time when I try to rhyme.");
}
```

## Output
```
If myColor is Colors.Red:
> How you like them apples?

If myColor is Colors.Blue:
> Ice Ice Baby...

If myColor is Colors.Green:
> Fore!

If myColor is Colors.Orange:
> I have a hard time when I try to rhyme.

```

### Sources:
- 1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/switch
