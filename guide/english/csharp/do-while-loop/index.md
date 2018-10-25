---
title: Do while loop
---

# Do while Loop

The `do while` loop executes a block of code once and until a condition is false. They are a particular case of <a href='https://guide.freecodecamp.org/csharp/while-loop' target='_blank' rel='nofollow'>`while` loops</a>: they execute a block of code one time and then until the condition is false. A common use of `do while` loops are input checks.

## Example
```
do
{
    //execute code block


} while(boolean expression);


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

#### More Information:

* [Microsoft C# - do](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)
* [Dot Net Perls - do](https://www.dotnetperls.com/do)
