---
title: Jump Statements
---
# Jump Statements

Jump statements are a type of <a href='https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html' target='_blank' rel='nofollow'><i>control flow</i></a> statements. Basically, you can use them to change the order in which statements are executed from the normal course of execution. In essence, these statements cause the program control to 'jump' away from the next expected point of execution to another place in the program.

The following jump statements are commonly used with loops:

*   <a href='http://forum.freecodecamp.com/t/java-loops-break-control-statement' target='_blank' rel='nofollow'>break</a>
*   <a href='http://forum.freecodecamp.com/t/java-loops-continue-control-statement' target='_blank' rel='nofollow'>continue</a>

The 'break' control statement breaks out of the loop when the condition is met. This means the rest of the loop will not run.
For example, in the loop below if i reaches 5, the loop breaks, so it does not continue on.

```java
for(int i=0; i < 10; i++){

  if(i == 5){ //if i is 5, break out of the loop.
    break;
  }

System.out.println(i);
}

```

Output:
```
    0 1 2 3 4 
```

The 'continue' control statement is the less intense version of 'break'. It only breaks out of the current instance of the loop and continues on. In the loop below, if i is 5, the loop continues, so it will skip over the print statement below and move on until i reaches 10 and the loop stops.

```java
for(int i=0; i < 10; i++){

  if(i == 5){ //if i is 5, break out of the current instance loop.
    continue;
  }

System.out.println(i);
}

```

Output:
```
    0 1 2 3 4 6 7 8 9
```
