---
title: Infinite Loops
---
# Infinite Loops

An infinte loop is a loop statement (`for`, `while`, `do-while`) which does not end on its own.

The test condition of a looping statement decides whether the loop body will execute or not. So a test condition which is always true will keep on executing the body of the loop, forever. That's the case in an infinte loop.

Examples:

```java
// Infinite For Loop
for ( ; ; )
{
    // some code here
}

// Infinite While Loop
while (true)
{
    // some code here
}

// Infinite Do While Loop
do
{
    // some code here
} while (true);
```

Normally, if your loop is running infinitely, it is an error that should not occur as an infinite loop does not stop and prevents the rest of the program from running.

```java
for(int i=0;i<100;i++){

    if(i==49){
    i=0;
    }

}
```

The loop above runs infinitely because every time i approaches 49, it is set to be 0.This is to say that i never reaches 100 to terminate the loop, so the loop is an infinite loop. 

But a program stuck in such a loop will keep using computer resources indefinitely. This is undesirable, and is a type of 'run-time error'.


#### Infinite Loop by opposite iteration
Another example of an Infinite Loop can be seen below:
```java
for(int i=0;i<=10;i--)
    System.out.println(i);
```

In the above example, the initial value of `i` is 0. Since value of `i` is less than equal to 10, we decrement the value of `i` by 1, so `i` will now be -1. Hence, the loop will be infinite.

Similarly, an example of an infinite while loop example can be seen below:

```java
int i=1;
while(i>=1)
{
    System.out.println(i);
    i+=1;
}
```

Here, `i` will always be greater than 1, so the program will be in an infinite loop.

To prevent the error, programmers use a `break` statement to break out of the loop. The `break` executes only under a particular condition. Use of a selection statement like `if-else` ensures the same.

```java
while (true)
{
    // do something
    
    if(conditionToEndLoop == true)
        break;
    
    // do more
}
```

The main advantage of using an infinite loop over a regular loop is readability.

Sometimes, the body of a loop is easier to understand if the loop ends in the middle, and not at the end/beginning. In such a situation, an infinite loop will be a better choice.
