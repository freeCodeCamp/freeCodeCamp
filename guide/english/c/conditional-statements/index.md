---
title: Conditional Statements
---
# Conditional Statements in C
Conditional Statements are also known as Branching Statements. They are so called because the program chooses to follow one branch or another.

## 1. if statement
This is the most simple form of the conditional statements. It consists of a Boolean expression followed by one or more statements. If the Boolean expression evaluates to **true**, then the block of code inside the 'if' statement will be executed. If the Boolean expression evaluates to **false**, then the first set of code after the end of the 'if' statement (after the closing curly brace) will be executed.

C programming language **_assumes any non-zero and non-null values as true_** and if it is **_either zero or null, then it is assumed as false_** value.

#### Syntax
```C
if(boolean_expression)
{
    //Block of Statements executed when boolean_expression is true
}
```
#### Example
```C
int a = 100;
if(a < 200) 
{
    printf("a is less than 200\n" );
}
```
#### Result

`a is less than 200`


## 2. if...else statement
If the Boolean expression evaluates to **true**, then the if block will be executed, otherwise, the else block will be executed.
#### Syntax
```C
if(boolean_expression) 
{
    //Block of Statements executed when boolean_expression is true
}
else
{
    //Block of Statements executed when boolean_expression is false
}
```
#### Example
```C
int a = 300;
if(a < 200)
{
    printf("a is less than 200\n");
}
else
{
    printf("a is more than 200\n");
}
```
#### Result

`a is more than 200`

## 3. if...else if...else statement
When using if...else if..else statements, there are few points to keep in mind -
- An **if** can have **zero or one else**'s and it **must come after any else if**'s.
- An **if** can have **zero to many else if**'s and they **must come before the else**.
- Once an **else if** succeeds, none of the remaining else if's or else's will be tested.

#### Syntax
```C
if(boolean_expression_1)
{
    //Block of Statements executed when boolean_expression_1 is true
}
else if(boolean_expression_2)
{
    //Block of Statements executed when boolean_expression_1 is false and boolean_expression_2 is true
}
else if(boolean_expression_3) 
{
    //Block of Statements executed when both boolean_expression_1 and boolean_expression_2 are false and boolean_expression_3 is true
}
else
{
    //Block of Statements executed when all boolean_expression_1, boolean_expression_2 and boolean_expression_3 are false
}
```
#### Example
```C
int a = 300;
if(a == 100)
{
    printf("a is equal to 100\n");
}
else if(a == 200)
{
    printf("a is equal to 200\n");
}
else if(a == 300)
{
    printf("a is equal to 300\n");
}
else
{
    printf("a is more than 300\n");
}
```
#### Result

`a is equal to 300`

## 4. Nested if statement
It is always legal in C programming to nest if-else statements, which means you can use one if or else if statement inside another if or else if statement(s).
#### Syntax
```C
if(boolean_expression_1)
{
    //Executed when boolean_expression_1 is true
    if(boolean_expression_2)
    {
      //Executed when both boolean_expression_1 and boolean_expression_2 are true
    }
}

```
#### Example
```C
int a = 100;
int b = 200;
if(a == 100)
{
    printf("a is equal to 100\n" );
    if(b == 200)
    {
        printf("b is equal to 200\n");
    }
}

```
#### Result

```bash
a is equal to 100
b is equal to 200
```
## 5. Switch Case Statement
The switch statement is often faster than nested if...else (not always). Also, the syntax of switch statement is cleaner and easy to understand.

### Syntax of switch case
```
switch (n)
{
    case constant1:
        // code to be executed if n is equal to constant1;
        break;

    case constant2:
        // code to be executed if n is equal to constant2;
        break;
        .
        .
        .
    default:
        // code to be executed if n doesn't match any constant
}
```
When a case constant is found that matches the switch expression, control of the program passes to the block of code associated with that case.

In the above pseudocode, suppose the value of n is equal to constant2. The compiler will execute the block of code associate with the case statement until the end of switch block, or until the break statement is encountered.

The break statement is used to prevent the code running into the next case.

### Example:
```C
// Program to create a simple calculator
// Performs addition, subtraction, multiplication or division depending the input from user

# include <stdio.h>

int main()
{

    char operator;
    double firstNumber,secondNumber;

    printf("Enter an operator (+, -, *, /): ");
    scanf("%c", &operator);

    printf("Enter two operands: ");
    scanf("%lf %lf",&firstNumber, &secondNumber);

    switch(operator)
    {
        case '+':
            printf("%.1lf + %.1lf = %.1lf",firstNumber, secondNumber, firstNumber+secondNumber);
            break;

        case '-':
            printf("%.1lf - %.1lf = %.1lf",firstNumber, secondNumber, firstNumber-secondNumber);
            break;

        case '*':
            printf("%.1lf * %.1lf = %.1lf",firstNumber, secondNumber, firstNumber*secondNumber);
            break;

        case '/':
            if(secondNumber==0){
                printf("division with zero is not allowed\n");
                break;
                //Avoid runtime error of division with zero
            }
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/secondNumber);
            break;

        // operator is doesn't match any case constant (+, -, *, /)
        default:
            printf("Error! operator is not correct");
    }

    return 0;
}
```
### Output
```
Enter an operator (+, -, *,): -
Enter two operands: 32.5
12.4
32.5 - 12.4 = 20.1
```
The '-' operator entered by the user is stored in operator variable. And, two operands 32.5 and 12.4 are stored in variables firstNumber and secondNumber respectively.

Then, control of the program jumps to
```
printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber);
```
Finally, the break statement ends the switch statement.

If break statement is not used, all cases after the correct case is executed. 

## finding the Bigger among two numbers using if else statement.
```C
int a,b;
printf("Enter the first number: \n");
scanf("%d",&a);
printf("Enter the second number: \n");
scanf("%d",&b);
//comparing the numbers
if(a>b)
{
  printf("A is the Bigger number");
}
else
{
  printf("B is the bigger number");
}
```
## 6. Ternary operation

The ternary operator (AKA conditional operator) is an operator that takes three arguments. The first argument is a comparison argument, the second is the result upon a true comparison , and the third is the result upon a flase comparison .It can be thought of as a shortened way of writing an if-else statement. It is often used to to assign variables based on the result of a comparison.

#### Syntax
```C
v = (conditional_statement) ? value_if_true : value_if_false

```
#### Example 
```C
int a, b = 10, c = 100;
a = (b > c) ? 1 : 2;
printf("%d", a);
```

#### Result

`2`