---
title: Break Control Statement
---
# Break Control Statement

Terminates the loop and starts the execution of the code that immediately follows the loop. If you have nested loops, the `break` statement will only end the loop in which it is placed.

```java
// Loop 1
for (int i = 0; i < 10; i++)
{     
    // Loop 2
    for (int j = 0; j < 10; j++)
    {
        if (i == 5 && j == 5)
        {
            break; // Will terminate Loop 2, but Loop 1 will keep going
        }
    }
}
```

But if you do want to break out of the outer loop too, you can use a label to exit:

```java
loop1: // This is a label
for (int i = 0; i < 10; i++)
{    
    // Loop 2
    for (int j = 0; j < 10; j++)
    {         
        if (i == 5 && j == 5)
        {
            break loop1; // Will break out of Loop 1, instead of Loop 2
        }
    }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJZA/0' target='_blank' rel='nofollow'>Run Code</a>

`break` statements can be particulary useful while searching for an element in an array. Using `break` in the following code improves efficiency as the loop stops as soon as the element we are looking for (`searchFor`) is found, instead of going on till the end of `arrayInts` is reached.

```java
int j = 0;
int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
int searchFor = 5;

for (int i : arrayOfInts)
{
    if (arrayOfInts[j] == searchFor)
    {
        break;
    }
    j++;
}

System.out.println("j = " + j);
```
Break statement can also be used under while statement.
```java
int i = 0;
int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
int searchFor = 5;

while(i < 10){
 System.out.println("i = " + j);
 if(arrayOfInts[i] > 7){
  break;
  }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJZC/0' target='_blank' rel='nofollow'>Run Code</a>
