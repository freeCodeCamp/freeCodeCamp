---
title: Logical Operators and If Statements
---

# If Statements in C

The ability to change the behavior of a piece of code which is based on certain information in the environment is known as conditional code flow. Sometimes, you want your code to run according to certain conditions. In such situations we can use **If** statements. It is also known as a decision making statement, as it makes the decision on the basis of a given expression (or on a given condition). If the expression evaluates to true, then the block of code inside the 'if' statement will be executed. If the expression evaluates to false, then the first set of code after the end of the 'if' statement (after the closing curly brace) will be executed. An expression is something that has relational and/or logical operators operating on boolean variables. Expressions evaluate to either true or false.

## Syntax of *if statement*
```
if (testExpression) {
   // statements
}
```

## A Simple Example
Let's look at an example of this in action:

```C
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    if(true) {
        printf("Statement is True!\n");
    }

    return 0;
}
```
```
output:
Statement is True!
```

Just like helloworld.c, stdio.h has been included. New in this program is stdbool.h, which is the standard boolean library- it contains code that gives us access to 'true' and 'false'.

Also new in the above example is that 'if' statement. If the statement within the parenthesis is true, the code within the brackets of the if statement will be run. In the case of this example, true is true, so the code will run the `printf` function.

## If-else
In the 'If-else' statement, If the statement within the parenthesis is true, the code within the brackets of the 'if' statement will be executed and if the statement within the parenthesis is false, the code within the brackets of the 'else' statement will be executed.

Of course, that example wasn't very useful, because true is always true. Here's another one that's a bit more practical:

```C
#include <stdio.h>

int main(void) {
    int n = 2;

    if(n == 3) { // comparing n with 3
        printf("Statement is True!\n");
    } 
    else { // if first condition is not true, then comes to this block of code.
        printf("Statement is False!\n");
    }

    return 0;
}
```
```
output:
Statement is False!
```

There are a few important things that are different here. First, `stdbool.h` hasn't been included. That's okay, because `true` and `false` aren't being used. In C, we have statements that are treated as true and false even though the words true or false aren't involved in the operation.

Within the parenthesis of the if statement is something new, too: `n == 3`. This is a comparison between `n` and the number 3. `==` is the comparison operator, and is one of several comparison opertations in C.

## Nested if-else
The if-else statement allows a choice to be made between two possible alternatives. Sometimes a choice must be made between more than two possibilities. For example the sign function in mathematics returns -1 if the argument is less than zero, returns +1 if the argument is greater than zero and returns zero if the argument is zero. The following C statement implements this function:

```C
if (x < 0)
   sign = -1;
else
   if (x == 0)
      sign = 0;
   else
      sign = 1;
```
This is an if-else statement in which the statement following the else is itself an if-else statement. If x is less than zero then sign is set to -1, however if it is not less than zero the statement following the else is executed. In that case if x is equal to zero then sign is set to zero and otherwise it is set to 1.
Novice programmers often use a sequence of if statements rather than use a nested if-else statement. That is they write the above in the logically equivalent form:

```C
if (x < 0)
   sign = -1;
if (x == 0)
   sign = 0;
if (x > 0)
   sign = 1;
```
This version is not recommended since it does not make it clear that only one of the assignment statements will be executed for a given value of x. Also it is inefficient since all three conditions are always tested.

## Comparison Operators
Operator Name               |  Usage    | Operator Result
----------------------------|:---------:|-----------------
Equal To                    | a == b    | True if a is equal to b, false otherwise
Not Equal To                | a != b    | True if a is not equal to b, false otherwise
Greater Than                | a > b     | True if a is greater than b, false otherwise
Greater Than or Equal To    | a >= b    | True if a is greater than or equal to b, false otherwise
Less Than                   | a < b     | True if a is less than b, false otherwise
Less Than or Equal To       | a <= b    | True if a is less than or equal to b, false otherwise

That example also has a new word: `else`. The code within the `else` block runs only if the code within the `if` doesn't run.

There's a lot we can do with all of those operators! Consider the following, where we'll use an if-else statement:
```C
#include <stdio.h>

int main(void) {
    int n = 5;

    if(n == 5) {
        printf("n is equal to 5!\n");
    } 
    else if (n > 5) {
        printf("n is greater than 5!\n");
    }

    return 0;
}
```
```
output:
n is equal to 5!
```

The if-else statement has an 'else if' attached to it. This code runs if the condition within the previous if was false, but adds a condition within its own parenthesis that must be true before the code is run.

## Logical Operators
Of course, we might want something to happen if it is not true, or if it and something else are true. For that, we have logical operators: ! for not, && for and, and || for or. Let's take a look at this in action:

```C
#include <stdio.h>

int main(void) {
    int n = 5;
    int m = 10;

    if(n > m || n == 15) {
        printf("Either n is greater than m, or n is equal to 15\n");
    } 
    else if( n == 5 && m == 10 ) {
        printf("n is equal to 5 and m is equal to 10!\n");
    } 
    else if ( !(n == 6)) {
        printf("It is not true that n is equal to 6!\n");
    }
    else if (n > 5) {
        printf("n is greater than 5!\n");
    }

    return 0;
}
```
```
output:
n is equal to 5 and m is equal to 10!
```

Here's the first set of parenthesis: `n > m || n == 5`. This will be true if n is greater than m, or if n is equal to 5. n is not greater than m, but n is equal to 5. Because one of these things are true, and they are joined by an or, this statement will be true and the code within will be printed.

Because the previous code was executed, it won't check the other else statements- those only get checked if the ones previous don't get checked. Just for the sake of exercise, though, consider what the rest of the code would be checking. `n == 5 && m == 10` will be true if n is equal to 5 and m is equal to 10. This is true, but if n was 6 it would no longer be true and the code within that else would not be run.

`!(n == 6)` uses parenthesis to make the operation more obvious. Just like in math, parenthesis can be used for order of operations: things within the parenthesis will be performed before things that are not within parenthesis. So in this case, `n == 6` will be evaluated, and is false. The `!`, 'not', flips this from false to true, so this operation returns true. Like before, however, it will not run only because one of the previous statements was true that this is attached to would have already run.

Finally, does `n > 5` evaluate to true? The answer is no, because n *is* 5, and so it is not greater than 5. As a result, this code will not evaluate to true. In order to make this evaluate to true, the `>=` operator should be used.

## A Detail about C Comparisons
Earlier you read that the comparisons are checking if something is true or false, but that's really only half true. Remember that C is about being light and close to the hardware- in hardware, it's easy to check if something is 0, and anything else takes more work. Because of this, what the comparisons are really doing is checking if something is false, which is assigned the value of 0, or checking if it isn't false (any other value).

As a result, this if statement is true and valid:

```C
if(12452) {
    printf("This is true!\n")
}
```

By design, 0 is false, and by convention, 1 is true. In fact, here's a look at the `stdbool.h` library described earlier:

```C
#define false   0
#define true    1
```
There's actually a bit more to it, but this is the part that does all the work.

These two lines of code tell the compiler that the word 'false' should be replaced with '0', and the word 'true' should be replaced by '1'. `stdbool.h` also has some documentation and compiler instructions that will be discussed later, but those two lines are all there really is to it.

# Tips and Tricks 
Consider the code below:

```C
#include <stdio.h>

int main() {
    int i=3;
    
    if(i=4) {
      printf("This block is executed");
    }
    else {
      printf("NO! I am boss");
    }
}
```

What will be the Output? "NO! I am boss"? if you are guessing this output then you are wrong.
Why did this happen? because in the if statement you used "=" instead of "==" operator.
"==" is comparator . 

It will compare between two variables but "=' is assignment operator 
when we said i=4, we simply assigning value 4 to the integer i, and since in "C" every NON-ZERO value is true so
if(i=4) is true statement and instructions under this will executed

# Before you go on...
## A review
* 'if' statements check if expression is true, then it run the code within the curly brackets.
* 'else' can be added to the end of an 'if', and will run only if the previous if(s) statement were false.
* 'else if' can also be added to the end of an 'if', and will run only if the previous if(s) statement were false.
* Everything in a computer is represented by numbers, so every comparison in C can be done by treating values like numbers- even true, false, and characters.
* There are a bunch of comparison operators:
 * == is equal to
 * != is not equal to
 * \> is greater than
 * < is less than
 * \>= is less than or equal to
 * <= is less than or equal to
* We also have some logical operators, which allow us to chain together logical operations:
 * ! is called NOT operator-It reverses the state of the operand
 * && is called AND operator-It returns true when both conditions are true
 * || is called OR operator-It returns true when at-least one of the condition is true
