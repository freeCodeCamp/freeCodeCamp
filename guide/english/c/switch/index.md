---
title: Switch Case
---

# Switch Case

The switch statement is like a set of `if statements`.

It's a list of possibilities, with an action for each possibility, and an optional default action, in case nothing else evaluates to true.

We exit from the switch by `break`. If the `break` statement is not reached before the beginning of the next case, the execution will fall through and begin executing the code in the next case.

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
    double firstNumber,secondNumber;

    printf("Enter an operator (+, -, *, /): ");
    scanf("%c", &operator);

    printf("Enter two operands: ");
    scanf("%lf %lf",&firstNumber, &secondNumber);

    switch (operator) {
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
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber);
            break;
        // Operator is doesn't match any case constant (+, -, *, /)
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

## Multiple similar possibilities

```c
switch (x) {
    case consta1: // leave case blank, without break statement.
    .
    .
    .
    case constaN:
        // code to be executed if x is any number in range of a1-aN
        break;

    case constb1: // leave case blank, without break statement.
    .
    .
    .
    case constbN: 
        // code to be executed if x is any number in range of b1-bN
        break;
        .
        .
        .
    default:
        // code to be executed if n doesn't match any constant
}
```


## Review : Switch vs if else
* Check the Testing Expression: An if-then-else statement can test expressions based on ranges of values or conditions, whereas a switch statement tests expressions based only on a single integer, enumerated value, or String object.
* Switch better for Multi way branching: When compiler compiles a switch statement, it will inspect each of the case constants and create a “jump table” that it will use for selecting the path of execution depending on the value of the expression. Therefore, if we need to select among a large group of values, a switch statement will run much faster than the equivalent logic coded using a sequence of if-elses. The compiler can do this because it knows that the case constants are all the same type and simply must be compared for equality with the switch expression, while in case of if expressions, the compiler has no such knowledge.
* if-else better for boolean values: If-else conditional branches are great for variable conditions that result into a boolean, whereas switch statements are great for fixed data values.
* Speed: A switch statement might prove to be faster than ifs provided number of cases are good. If there are only few cases, it might not effect the speed in any case. Prefer switch if the number of cases are more than 5 otherwise, you may use if-else too.
* If a switch contains more than five items, it’s implemented using a lookup table or a hash list. This means that all items get the same access time, compared to a list of if:s where the last item takes much more time to reach as it has to evaluate every previous condition first.
* Clarity in readability: A switch looks much cleaner when you have to combine cases. Ifs  are quite vulnerable to errors too. Missing an else statement can land you up in havoc. Adding/removing labels is also easier with a switch and makes your code significantly easier to change and maintain.
