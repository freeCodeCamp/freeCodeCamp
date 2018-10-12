---
title: Do...While Loop
---
# Do...While Loop

The `do while` is similar to the `while` loop, but the group of statements is guranteed to run at least once before checking for a given condition.
An important thing to note is 'while' loop is an exit control loop. while(it will not necessarily be executed), 'do while' is an entry controlled loop(it will be executed at least once , even if the conditon is not true).


```java
do
{
    // Statements
}
while (condition);
```

## Example

```java
int iter_DoWhile = 20;
do
{
    System.out.print (iter_DoWhile + " ");

    // Increment the counter
    iter_DoWhile++;
}
while (iter_DoWhile < 10);
System.out.println("iter_DoWhile Value: " + iter_DoWhile);
```

Output:
```
    20
    iter_DoWhile Value: 21
```

**Remember**: The condition of a `do-while` loop is checked after the code body is executed once.

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYl/0' target='_blank' rel='nofollow'>Run Code</a>

## Exercise
Can you guess the output of the following code snippet?

```java
int i = 10;
do
{
    System.out.println("The value of i is " + i);
    i--;
}
while (i >= 10);
```
