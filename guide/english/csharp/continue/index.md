---
title: Continue statement
---

# Continue statement

The `continue` statement passes control to the next iteration inside a loop. 

In this example, when the value of i is 2, the next statement within the loop is skipped.

Note: When you execute a `continue` statement, you're effectively bypassing whatever code comes after it (in terms of execution) within the loop. This, along with the `break` statement, are very useful when working with loops.
## Example
```
int[] array = { 1, 2, 3, 4, 5 };
for (int i = 0; i < array.Length; i++)
{
  if( i == 2)
  {
    continue;
  }
  Console.WriteLine("Item on index {0} is {1}", i, array[i]);
}
```

## Output:
```
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 3 is 4
> Item on index 4 is 5
```
