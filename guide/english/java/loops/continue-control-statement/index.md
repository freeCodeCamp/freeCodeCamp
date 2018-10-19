---
title: Continue Control Statement
---
# Continue Control Statement

The `continue` statement makes a loop skip all the following lines after the continue and jump ahead to the beginning of the next iteration. In a `for` loop, control jumps to the update statement, and in a `while` or `do while` loop, control jumps to the boolean expression/condition.

```java
for (int j = 0; j < 10; j++)
{
    if (j == 5)
    {
        continue;
    }
    System.out.print (j + " ");
}
```

The value of `j` will be printed for each iteration, except when it is equal to `5`. The print statement will get skipped because of the `continue` and the output will be:

    0 1 2 3 4 6 7 8 9

Say you want to count the number of `i`s in a the word `mississippi`. Here you could use a loop with the `continue` statement, as follows:

```java
String searchWord = "mississippi";

// max stores the length of the string
int max = searchWord.length();
int numPs = 0;

for (int i = 0; i < max; i++)
{
    // We only want to count i's - skip other letters
    if (searchWord.charAt(i) != 'i')
    {
        continue;
    }

    // Increase count_i for each i encountered
    numPs++;
}

System.out.println("numPs = " + numPs);
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJZH/0' target='_blank' rel='nofollow'>Run Code</a>

Additionally, you can use labels to choose a specific loop out of a nested set to skip to the next iteration. 
