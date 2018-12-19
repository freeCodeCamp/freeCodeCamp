---
title: Break statement
---

# Break statement

The `break` statement terminates the enclosing loop or switch statement in which it appears. The control is passed to the statement that follows the loop or the switch block.

In the first example, when the value of i is 3, the break statement is executed, which causes the execution of the loop to be terminated.

## Example 1
```
int[] array = { 1, 2, 3, 4, 5 };
for (int i = 0; i < array.Length; i++)
{
    if(i == 3) break;
    Console.WriteLine("Item on index {0} is {1}", i, array[i]);
}
```

## Output:
```
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 2 is 3
```
In the second example, a break statement is included at the end of each case. This executes the statements in the case without continuing to the next case. Without the break statement, the program would continue to execute the next case and would not function as intended.

## Example 2
```
switch (exampleVariable)
{
    case 1:
        Console.WriteLine("case 1");
        Console.WriteLine("This only shows in example 1");
        break;
        
    case 2:
        Console.WriteLine("case 2");
        Console.WriteLine("This only shows in example 2");
        Console.WriteLine("This also only shows in example 2");
        break;
        
	Console.WriteLine("This would not show anywhere, as it is after the break line and before the next case");
    
    default:
        Console.WriteLine("default");
        Console.WriteLine("This only shows in the Default Example");
        break;
}

```

## Output:
#### Executed with `exampleVariable = 1`
```
> case 1
> This only shows in example 1
```
#### Executed with `exampleVariable = 2`
```
> case  2
> This only shows in example 2
> This also only shows in example 2
```
#### Executed with `exampleVariable = 3` or any other number
```
> default
> This only shows in the Default Example
```
In the third example, we make use of an infinite `while` loop, which prompts the user for the best song of all time. When the user finally enters "Ocean Man", a `break` statement is used, and the infinite `while` loop is exited.

## Example 3
```
while (true)
{
    Console.WriteLine("What is the greatest song of all time? Be honest--I can wait all day!");
    string response = Console.ReadLine();
    if (response == "Ocean Man")
    {
        Console.WriteLine("Good, I agree!");
        break;
    }
    else Console.WriteLine("That's not the greatest song! Try again!");
}

```

## Output (if the user enters "Ocean Man" right away):
```
> What is the greatest song of all time? Be honest--I can wait all day!
Ocean Man
> Good, I agree!
```

## Output (if the user enters "Darude Sandstorm" the first time, then "Ocean Man"):
```
> What is the greatest song of all time? Be honest--I can wait all day!
Darude Sandstorm
> That's not the greatest song! Try again!
> What is the greatest song of all time? Be honest--I can wait all day!
Ocean Man
> Good, I agree!
```
