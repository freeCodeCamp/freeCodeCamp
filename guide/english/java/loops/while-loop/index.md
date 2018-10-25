---
title: While Loop
---
# While Loop

The `while` loop repeatedly executes the block of statements until the condition specified within the parentheses evaluates to `false`. For instance:

```java
while (some_condition_is_true)
{
    // do something
}
```

Each 'iteration' (of executing the block of statements) is preceeded by the evaluation of the condition specified within the parentheses - The statements are executed only if the condition evaluates to `true`. If it evaluates to `false`, the execution of the program resumes from the the statement just after the `while` block.

**Note**: For the `while` loop to start executing, you'd require the condition to be `true` initially. However, to exit the loop, you must do something within the block of statements to eventually reach an iteration when the condition evaluates to `false` (as done below). Otherwise the loop will execute forever. (In practice, it will run until the <a href='https://guide.freecodecamp.org/java/the-java-virtual-machine-jvm' target='_blank' rel='nofollow'>JVM</a> runs out of memory.)

## Example
In the following example, the `expression` is given by `iter_While < 10`. We increment `iter_While` by `1` each time the loop is executed. The `while`loop breaks when`iter_While`value reaches `10`.

```java
int iter_While = 0;
while (iter_While < 10)
{
    System.out.print(iter_While + " ");
    // Increment the counter
    // Iterated 10 times, iter_While 0,1,2...9
    iter_While++;
}
System.out.println("iter_While Value: " + iter_While);
```

Output:
```
0 1 2 3 4 5 6 7 8 9
iter_While Value: 10
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJYj/0)
