---
title: Loops of all kinds
---
# Loops of all kinds in C
Loops are what you use when you have code that you want to loop, meaning that after it runs, you might want it to loop around to the beginning and run again. There are a few of these in C.


They can be categorized as:

(a) Entry controlled loops- Loops in which the condition is checked before every iteration. e.g. for loop, while loop
(b) Exit controlled loop- Loops in which the execution takes place once even if the condition is false. e.g. for do-while loop


## While loops
The simplest of the bunch are while loops. While loops will run while the condition within the parenthesis is true. They should be used when you want something to happen until a certain condition takes place.

### Syntax
```
while(condition) {
   statement(s);
}
```

Here's an example:
```C
#include <stdio.h>

int main(void) {
    int my_number = 0;

    while(my_number != 10){
        ++my_number;
    }

    printf("my_number = %i", my_number);

    return 0;
}
```
While the statement within the while loop is true, the content within the brackets will be run. When the program hits the `while(my_number)`, it checks the statement within the parenthesis. If that statement is false, it won't run the while loop. Instead, it will skip over the code between the two brackets and will pick up where it left off.

If the statement is true, the code within the brackets will be run. Once the code within the brackets has run, the statement within the parenthesis will be checked again. Just like before, if the statement is true, the code will be run, if it's false, the code will be skipped.

Something that you may run into when playing with this or any other loop is the idea of an infinite loop- a loop that will run an infinite amount of times because there's nothing to stop it. Sometimes this can happen on purpose:

```C
while(1) {
    printf("This will get printed forever unless the program is stopped!");
}
```
Of course, it can also happen accidentally. Here's the same code as before, but with a subtle difference that turns it into an infinite loop:
```C
#include <stdio.h>

int main(void) {
    int my_number = 11;

    while(my_number != 10){
        ++my_number;
    }

    printf("my_number = %i", my_number);

    return 0;
}
```
When this while loop is evaluated, `my_number` will be checked to see if it isn't 10. It isn't, because it's been initialized at 11, so the code within the while loop will run and `my_number` will be 12. 12 does not equal 10, so the code within the while loop will be run and `my_number` will be 13. This will keep running forever because this condition will never become false- the only way for it to stop is for the program to be forced to stop running. This is an example of an infinite loop, because if left alone, it will run an infinite amount of times.

## Do-while loops
Do-while loops are a less commonly used version of a while loop. While loops start with an evaluation, so if that evaluation is false, the code within the brackets will not be run. With a do-while loop, however, the code within the brackets gets run once, then the evaluation is performed to see if it should be run again.

### Syntax
```
do {
   statement(s);
} while( condition );
```

Here's a look at that:
```C
#include <stdio.h>

int main(void){
    int a = 0;

    do {
        a++
    } while(a == -123);

    printf("%i\n", a);

    return 0;
}
```
If this were a while loop, the code within the brackets would never get run because this condition isn't true when the evaluation is performed. However, because this is a do-while loop, the code will be performed once, and then the evaluation is done to see if it should be done again. Do-while loops are useful for when you know you want something to be done once, but you may need it to be run additional times after that.

## For loops
For loops are for when we want something to run a set number of times.

### Syntax
```
for(initialisation; condition; changer)
{
   statement(s);
}
```

Here's an example of that:
```C
#include <stdio.h>                                                          

int main(void) {
    int a = 4;
    int b = 2;
    int result = 0;

    for(int count = 0; count != b; count++) {
        result = result + a;
    }

    printf("a times b is %i\n", result);

    return 0;
}
```
Multiplication is just repeated addition, so this is doing addition on `a`, `b` times. Let's a take a look at the `for` bit in particular:
```C
for(int count = 0; count != b; count++)
```
Unlike the for loop, there are three things in our parenthesis that are separated by semicolons. The first section is for initialization, and is referred to as 'initialization': it allows you to make a new variable and set it a value, or set an existing variable to a different value, or you can not set anything and just put a semicolon down.

The next section is a boolean condition that will be checked for true or false, just like our while loop. It's referred to as a 'condition', because it's the condition that will get checked before starting a loop.

The final section is referred to as the 'increment/decrement'. Its job is to perform some operation every loop - usually adding or subtracting from the initial variable - after the code within the brackets has been run through. In this case, it's just adding one to the count. This is the most common way for the increment to be used, because it lets you keep count of how many times you've run through a for loop.

### Syntax Comparison
```C

int main()                            
{                          
  int i = 1;
  while(i<=5)
  {
     printf(“While”);
     i++;
   }
  getch();
  return 0;
}


int main()            
{
  int i = 1;
  do
  {
     printf(“do-while”);
     i++;
   } while(i<=5);
  getch();
  return 0;
}


int main()                
{
  int i
  for(i=1;i<=5;i++)
  {
     printf(“for”);
   }
  getch();
  return 0;
}
```


# Loop Control Statements
Loop control statements change execution form its normal sequence. When execution leaves a scope, all automatic objects that were created in that scope are destroyed.

C supports the following control statements:

#### 1. Break statement
Terminates the <b>loop</b> or <b>switch</b> statement and transfers execution to the statement immediately following the loop or switch.

#### 2. Continue statement
Causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating.

#### 3. Goto statement
Transfers control to the labeled statement.

# Some Fun and Useful Quirks

## Infinite looping with for loops
Take a moment to consider what this code will do:
```C
for(;;){
    printf("hello, world! \n");
}

while("Free Code Camp"){
    printf("hello, world! \n");
}
```
There's nothing in the initialization section, so nothing has been initialized. That's fine, and that is done sometimes because you don't always want or need to initialize anything.

Next is the condition, which is blank. That's a little odd. This means that no condition will be tested, so it's never going to be false, so it will run through the loop, perform the afterthought (which is to do nothing), and then check the condition again, which will make it run again. As you've probably realized, this is an infinite loop. As it turns out, this is actually useful. When creating performing an infinite loop, the method of doing `while(1)` is perfectly legitimate, but performs a comparison every time. `for(;;)`, on the other hand, does not. For that reason, `for(;;)` has a legitimate use in that it is a hair more efficient than other methods of infinite looping. Thankfully, many compilers will take care of this for you.

The loop in second code while("Free Code Camp") will also execute infinitely.The reason is because C considers any non-zero value as true and hence will execute the loop infinitely.

## Not using brackets
Throughout this page, you've read that the code 'within the brackets' is what gets run, and that's mostly true. However, what if there are no brackets?
```C
while(true)
    printf("hello, world! \n");
```
In cases like this, C will treat the next line as the only content that needs to be looped. C ignores whitespace, so that indent is just there for clarity. Only that one line will be treated as though it is in the loop, and this is a property that if statements, for loops, and while loops all share. Because the whitespace is ignored, the placement doesn't matter: it could be on the same line, the next line, or 300 lines and two spaces down as long as there's no other lines of code in between. This feature can make your code look a bit cleaner when you only have one line of code to run in a statement.

## Semicolons instead of brackets
If there are no brackets, the compiler will look only at the next line and have that be the content of the loop. Semicolons tell the compiler that a line is over. With these things combined, we can have C wait until something becomes true. Let's say we have a method called `is_button_pressed` that returns false if a button is not pressed, and true if a button is pressed:
```C
while(!is_button_pressed());
```
Nothing happens in this loop, because the only line it will look at is a semicolon. As a result, the `is_button_pressed` method will be called, and its return value will be evaluated. If the button is not pressed and the return value is false, the `!` will flip it to true so the function is run again and evaluated again. If the return value is true, the `!` will flip it to false and the while loop will be exited.

This has the effect of putting a pause in your code. In this case, the code reached the while loop, and didn't go any further. Instead, it kept checking for the status of the button to change. This would be useful for when you want nothing to happen until a certain condition has been met.

# Before you go on...
## A review
* Loops allow your code to be run more than once, when certain conditions are met.
* There are a couple of loops available to us in C:
 * While loops, which allow us to run code while a condition is true
 * Do-while loops, which run code and then continue running it if a condition is true
 * For loops, which run code while a condition is true and allow us to perform an operation every loop.
 
 
## Using loops for designing patterns.
#### Example 1: Program to print half pyramid using *

```
*
* *
* * *
* * * *
* * * * *
```

**Source Code**

```c
#include <stdio.h>

int main()
{
    int i, j, rows;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=1; i<=rows; ++i)
    {
        for(j=1; j<=i; ++j)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
```

#### Example 2: Program to print half pyramid a using numbers

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```


**Source Code**

```c
#include <stdio.h>

int main()
{
    int i, j, rows;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=1; i<=rows; ++i)
    {
        for(j=1; j<=i; ++j)
        {
            printf("%d ",j);
        }
        printf("\n");
    }
    return 0;
}
```

#### Example 3: Program to print half pyramid using alphabets

```
A
B B
C C C
D D D D
E E E E E
```

**Source Code**

```c
#include <stdio.h>

int main()
{
    int i, j;
    char input, alphabet = 'A';

    printf("Enter the uppercase character you want to print in last row: ");
    scanf("%c",&input);

    for(i=1; i <= (input-'A'+1); ++i)
    {
        for(j=1;j<=i;++j)
        {
            printf("%c", alphabet);
        }
        ++alphabet;

        printf("\n");
    }
    return 0;
}
```

Programs to print inverted half pyramid using * and numbers

#### Example 4: Inverted half pyramid using *

```
* * * * *
* * * *
* * * 
* *
*
```

**Source Code**

```c
#include <stdio.h>

int main()
{
    int i, j, rows;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=rows; i>=1; --i)
    {
        for(j=1; j<=i; ++j)
        {
            printf("* ");
        }
        printf("\n");
    }
    
    return 0;
}
```

#### Example 5: Inverted half pyramid using numbers

```
1 2 3 4 5
1 2 3 4 
1 2 3
1 2
1
```

**Source Code**

```c
#include <stdio.h>

int main()
{
    int i, j, rows;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=rows; i>=1; --i)
    {
        for(j=1; j<=i; ++j)
        {
            printf("%d ",j);
        }
        printf("\n");
    }

    return 0;
}
```

#### Example 6: Program to print full pyramid using *

```
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
```

**Source Code**

```c
#include <stdio.h>

int main()
{
    int i, space, rows, k=0;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=1; i<=rows; ++i, k=0)
    {
        for(space=1; space<=rows-i; ++space)
        {
            printf("  ");
        }

        while(k != 2*i-1)
        {
            printf("* ");
            ++k;
        }

        printf("\n");
    }
    
    return 0;
}
```

#### Example 7: Program to print pyramid using numbers

```
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5
```

**Source Code**

```c
#include <stdio.h>

int main()
{
    int i, space, rows, k=0, count = 0, count1 = 0;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=1; i<=rows; ++i)
    {
        for(space=1; space <= rows-i; ++space)
        {
            printf("  ");
            ++count;
        }

        while(k != 2*i-1)
        {
            if (count <= rows-1)
            {
                printf("%d ", i+k);
                ++count;
            }
            else
            {
                ++count1;
                printf("%d ", (i+k-2*count1));
            }
            ++k;
        }
        count1 = count = k = 0;

        printf("\n");
    }
    return 0;
}
```

#### Example 8: Inverted full pyramid using *

```
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
```

**Source Code**

```c
#include<stdio.h>

int main()
{
    int rows, i, j, space;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=rows; i>=1; --i)
    {
        for(space=0; space < rows-i; ++space)
            printf("  ");

        for(j=i; j <= 2*i-1; ++j)
            printf("* ");

        for(j=0; j < i-1; ++j)
            printf("* ");

        printf("\n");
    }

    return 0;
}
```

#### Example 9: Print Pascal's triangle

```
           1
         1   1
       1   2   1
     1   3   3    1
   1  4    6   4   1
 1  5   10   10  5   1
```

**Source Code**

```c
#include <stdio.h>

int main()
{
    int rows, coef = 1, space, i, j;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=0; i<rows; i++)
    {
        for(space=1; space <= rows-i; space++)
            printf("  ");

        for(j=0; j <= i; j++)
        {
            if (j==0 || i==0)
                coef = 1;
            else
                coef = coef*(i-j+1)/j;

            printf("%4d", coef);
        }
        printf("\n");
    }

    return 0;
}
```

#### Example 10: Print Floyd's Triangle.

```
1
2 3
4 5 6
7 8 9 10
```

**Source Code**

```c
#include <stdio.h>

int main()
{
    int rows, i, j, number= 1;

    printf("Enter number of rows: ");
    scanf("%d",&rows);

    for(i=1; i <= rows; i++)
    {
        for(j=1; j <= i; ++j)
        {
            printf("%d ", number);
            ++number;
        }

        printf("\n");
    }

    return 0;
}
```
