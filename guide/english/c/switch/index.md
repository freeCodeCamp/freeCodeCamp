---
title: Switch Case
---

# Switch Case

The switch statement is like a set of `if statements`.

It's a list of possibilities, with an action for each possibility, and an optional default action, in case nothing else evaluates to true. Sometimes we want to compare one input to many booleans and that is when we would prefer to use a switch statement instead of an `if statement`.

We exit from the switch by `break`. If the `break` statement is not reached before the beginning of the next case, the execution will fall through and begin executing the code in the next case, which means if you have no break statement in code, when first case is detected to be true, all the other cases below the one that is detected to be true (including itself) will be executed, which is often undesirable.

Each case must be a digit or a character i.e.. a constant but not a variable.

Note:- `break` and `continue` are applicable only with for, while and switch code blocks.

## Syntax of switch...case

```c
switch (n)
{
    case constant1:
        // code to be executed if n is equal to constant1;
        break;

    case constant2:
        // code to be executed if n is equal to constant2;
        break;
    
    case constant3:
    case constant4:
        // code to be executed if n is either equal to constant3 or constant4
        break;
        .
        .
        .
    default:
        // code to be executed if n doesn't match any constant
}
```

## Example

Using a switch statement over multiple if/else statements can contribute to more speed and readability.

```c
# include <stdio.h>

int main() {

    char operator;
    double a, b;

    printf("Enter an operator (+, -, *, /): ");
    scanf("%c", &operator);

    printf("Enter two operands: ");
    scanf("%lf %lf",&a, &b);

    switch (operator) {
        case '+':
            printf("%.1lf + %.1lf = %.1lf", a, b, a+b);
            break;
        case '-':
            printf("%.1lf - %.1lf = %.1lf",a, b, a-b);
            break;
        case '*':
            printf("%.1lf * %.1lf = %.1lf",a, b, a*b);
            break;
        case '/':
            printf("%.1lf / %.1lf = %.1lf",a, b, a/b);
            break;
        // If the operator doesn't match any case constant (+, -, *, /)
        default:
            printf("Error! operator is not correct");
    }

    return 0;
}
```

## Output:
```c
-> Enter an operator (+, -, *,): -
-> Enter two operands: 32.5
-> 12.4
-> 32.5 - 12.4 = 20.1
```

## Example

The below code depicts how to handle switch case when single piece of code runs for multiple values.

```c
#include <stdio.h>

int main()
{
    for (int i=1; i<=4; i++) {
        switch (i) {
            case 1:
              printf("Hello World 1\n");
              break;
            
            case 2:
            case 3:
              printf("Hello World 2 or 3\n");
              break;
            
            case 4:
              printf("Hello World 4\n");
              break;
        }
    }

    return 0;
}
```

## Output
```c
Hello World 1
Hello World 2 or 3
Hello World 2 or 3
Hello World 4
```


## Nested Switch Case 
    
  Like nested if, we can use nested switch case in C programming. A switch case statement enclosed inside another switch case statement is called nested switch case. Nested switch is used at high level where we require sub conditions or cases. The inner and outer switch() case constant may be same.
    
## Syntax for Nested Switch Case

```c
  switch (variable or expression)
{
    case value1:
        statement(s);
        switch (variable or expression)
        {
            [body of nested switch]
        }
        break;
    ... ... ...
    ... ... ...
    case valueN:
        statement(s);
        switch (variable or expression)
        {
            [body of nested switch]
        }
        break;
    default:
        statement(s);         
        switch (variable or expression)
        {
            [body of nested switch]
        }
        break;
}
```

## Example
    
C program to check for head/tail using nested switch case statement 
```c
#include<stdio.h>
int main()
{
    int ch1,ch2;
    printf("H/h for head, T/t for tail\n");
    printf("Enter first choice-");
    scanf("%c",&ch1);
    fflush(stdin);
    printf("Enter second choice-");
    scanf("%c",&ch2);
    switch(ch1)
    {
        case 'h':
        case 'H':
            switch(ch2)
            {
                case 'h':
                case 'H':
                    printf("2 Heads");
                    break;
                default:
                    printf("Head and Tail");
            }
            break;
        default:
            switch(ch2)
            {
                case 'h':
                case 'H':
                    printf("Tail and Head");
                    break;
                default:
                    printf("2 Tails");
            }
    }
    return 0;
}
```

Here, a switch case is inserted inside another switch case. User needs to enter two characters, H/h for head and T/t for tail. Both switch case (outer and inner) tests whether the input entered by user is Head or Tail. According to the combination of inputs entered by user, the output is displayed.

## Output

```
H/h for head, T/t for tail
Enter first choice-h
Enter second choice-t
Head and Tail

H/h for head, T/t for tail
Enter first choice-t
Enter second choice-t
2 Tails
```

## Switch-Case Fall-through

As was previously mentioned, switch statement's use of case allows for fall though.  This fall-through possibility can add to the readability of your code and allows for simplified logic. 

#### Fall-through Example

```c
# include <stdio.h>

int main() {

    char* valueString;
    
    printf("Animals of Alaska\n");
    valueString = "Kodiak";
    
    printf("A %s is a type of ", valueString);    
    
    switch (valueString) {
        case "Black Bear":
        case "Kodiak":
        case "Brown Bear":
            printf("bear!\n");
            break;
        case "Salmon":
        case "King Salmon":
        case "Halbut":
            printf("fish!\n");
            break;
        case "Qalupalik":
        case "Tornit":
        case "Tizheruk":
            printf("mythical Alaskan creature! Watch out!\n");
        // valueString doesn't match our list of animals
        default:
            printf("Error! This animal is not known!\n");
    }
}
```

#### Output
```c
-> Animals of Alaska
-> A Kodiak is a type of bear!
->
```

## Review : Switch vs if else
* Check the Testing Expression: An if-then-else statement can test expressions based on ranges of values or conditions, whereas a switch statement tests expressions based only on a single integer, enumerated value, or String object.
* Switch better for Multi way branching: When compiler compiles a switch statement, it will inspect each of the case constants and create a “jump table” that it will use for selecting the path of execution depending on the value of the expression. Therefore, if we need to select among a large group of values, a switch statement will run much faster than the equivalent logic coded using a sequence of if-elses. The compiler can do this because it knows that the case constants are all the same type and simply must be compared for equality with the switch expression, while in case of if expressions, the compiler has no such knowledge.
* if-else better for boolean values: If-else conditional branches are great for variable conditions that result into a boolean, whereas switch statements are great for fixed data values.
* Speed: A switch statement might prove to be faster than ifs provided number of cases are good. If there are only few cases, it might not effect the speed in any case. Prefer switch if the number of cases are more than 5 otherwise, you may use if-else too.
* If a switch contains more than five items, it’s implemented using a lookup table or a hash list. This means that all items get the same access time, compared to a list of if:s where the last item takes much more time to reach as it has to evaluate every previous condition first.
* Clarity in readability: A switch looks much cleaner when you have to combine cases. Ifs  are quite vulnerable to errors too. Missing an else statement can land you up in havoc. Adding/removing labels is also easier with a switch and makes your code significantly easier to change and maintain.
* Default case: In a switch statement, the requirement of a default case is necessary otherwise the program will crash for a non label match category. This situation doesn't exist in if statements as the else part is considered as the default case handler
* Break statement: After each label, a break keyword is required due to lack of namespace distinction.
