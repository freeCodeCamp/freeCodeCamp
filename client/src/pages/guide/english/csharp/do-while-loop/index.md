---
title: Do while loop
---

# Do while Loop

The `do while` loop executes a block of code once and until a condition is false. They are a particular case of <a href='https://guide.freecodecamp.org/csharp/while-loop' target='_blank' rel='nofollow'>`while` loops</a>: they execute a block of code one time and then until the condition is false. A common use of `do while` loops are input checks.

## Example
```
string input = "";
do
{
	Console.WriteLine("Type A to continue: ");
	input = Console.ReadLine();
} while(input != "A");

Console.WriteLine("Bye!");
```

## Output:
```
> Type A to continue: b
> Type A to continue: g
> Type A to continue: A
> Bye!
```
