---
title: Break statement
---

# Break statement

The `break` statement terminates the enclosing loop or switch statement in which it appears. The control is passed to the statement that follows the loop or the switch block.

In the below example, when the value of i is 3, the break statement is executed, which causes the execution of the loop to be terminated.

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
