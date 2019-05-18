---
title: Do while loop
---

# Do while Loop

The `do while` loop executes a block of code atleast once and until a condition is false. It is a particular case of <a href='https://guide.freecodecamp.org/csharp/while-loop' target='_blank' rel='nofollow'>`while` loop</a> in which the code is executed atleast once irrespective of the while condition. A common use of `do while` loops are input checks.

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
