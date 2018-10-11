---
title: Break statement
---

# Break statement

The `break` statement terminates the enclosing loop or switch statement in which it appears. The control is passed to the statement that follows the loop or the switch block.

In the first example, when the value of i is 3, the break statement is executed, which causes the execution of the loop to be terminated.

## Example
```
int[] array = { 1, 2, 3, 4, 5 };
for (int i = 0; i < array.Length; i++)
{
  if(i == 3)
  {
    break;
  }
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

## Example
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
```
> case 1
> This only shows in example 1
>
> case  2
> This only shows in example 2
> This also only shows in example 2
>
> default
> This only shows in the Default Example
>
```
