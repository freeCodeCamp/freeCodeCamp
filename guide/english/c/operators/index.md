---
title: Operators
---
# Operators in C

## 1. Arithmetic Operators

- `+` Adds two operands (values) 
     ```C
     int a = 6;
     int c = a + 1; // c = 7
     ```
- `-`Subtracts the second operand from the first
     ```C
     int a = 8;
     int b = 9;
     int c = a - b; // c = -1
     ```
- `*` Multiplies two operands
     ```C
     int a = 8;
     int b = 9;
     int c = a * b; // c = 72
     ```
- `/` Divides the first operand by the second
     ```C
     int a = 8;
     int b = 4;
     int c = a / b; // c = 2
     ```
- `%` Gives the remainder after an integer division
     ```C
     int a = 8;
     int b = 9;
     int c = b % a; // c = 1 because b = 1*a + 1 = 8 + 1
     ```
- `++` Increases int value by one
     ```C
     int a = 8;
     a++; // a = 9
     int b = a++; // postfix operator; a = 10, b = 9
     int c = ++a; // prefix operator; a = 11, c = 11
     ```
- `--` Decreases int value by one
     ```C
     int a = 8;
     a--; // a = 7
     int b = a--; // postfix operator; a = 6, b = 7
     int c = --a; // prefix operator; a = 5, c = 5
     ```

 C Program to demonstrate the working of arithmetic operators
```C
#include <stdio.h>
int main()
{
    int a = 9,b = 4, c;

    c = a+b;
    printf("a+b = %d \n",c);

    c = a-b;
    printf("a-b = %d \n",c);

    c = a*b;
    printf("a*b = %d \n",c);

    c=a/b;
    printf("a/b = %d \n",c);

    c=a%b;
    printf("Remainder when a divided by b = %d \n",c);

    return 0;
}
```
## 2. Relational Operators

- `==` Equal - true when the two operands are equal
  ```C
  int a = 5, b = 5;
  bool c = (a == b); // c = true
  ```
- `!=` Not equal - true when the two operands are NOT equal
  ```C
  int a = 5, b = 6;
  bool c = (a != b); // c = true
  ```
- `>` Greater than - True when first operand is bigger than the second.
  ```C
  int a = 8, b = 5;
  bool c = (a > b); // c = true
  ```
- `<` Less than - True when the first operand is smaller then the second.
  ```C
  int a = 5, b = 8;
  bool c = (a < b); // c = true
  ```
- `>=` Greater than or equal - True when the first operand is bigger, or equal to the second.
  ```C
  int a = 8, b = 5;
  bool c = (a >= b); // c = true
  bool d = (a >= 8); // d = true
  ```
- `<=` Less than or equal - True when the first operand is smaller or equal to the second.
  ```C
  int a = 5, b = 8;
  bool c = (a <= b); // c = true
  ```

## 3. Logical Operators

- `&&` AND operator - True when **both** of the operands are true.
  ```C
  bool c = (5 < 6) && (8!=7); // both operands true, therefore c = true
  ```
- `||` OR operator - True when either the first or the second operands are true (or both)
  ```C
  bool c = (5 < 6) || (8 == 7) // first operand is true, therefore c = true
  ```
- `!` NOT operator - True when the operand is false.
  ```C
  bool c = !(8 == 7) // translate: NOT (false), therefore c = true
  ```

## 4. Bitwise Operators

- `&` AND operator - If at a place there is a bit in both operands, then it is copied to the result
  ```C
  A = 11001
  B = 01000
  RESULT = 01000
  ```
- `|` OR operator - If at a place there is a bit in either operands, then it is copied to the result
  ```C
  A = 11001
  B = 01000
  RESULT = 11001
  ```
- `^` XOR (exclusive OR) operator - If at a place there is a bit in one of the operands (not both), then it is copied to the result
  ```C
  A = 11001
  B = 01000
  RESULT = 10001
  ```
- `~` Negation operator - Reverses the bits. 1 -> 0, 0 -> 1
  ```C
  C = 01000
  RESULT = 10111
  ```
- `<<` Left shift operator - The left operand is moved left by as many bits, as the right operand
  ```C
  A = 11001
     A << 2
  RESULT = 00100
  ```
- `>>` Right shift operator - The left operand is moved right by as many bits, as the right operand
  ```C
  A = 11001
     A >> 2
  RESULT = 00110
  ```

## 5. Assignment Operators
- `=`
  ```C
  int a = 7; // 'a' is going to be equal to 7
  ```
- `+=`
  ```C
  int a = 7;
  a += 5; // equivalent to a = a + 5 = 7 + 5 = 12
  ```
- `-=`
  ```C
  int a = 7;
  a -= 2; // equivalent to a = a - 2 = 7 - 2 = 5
  ```
- `*=`
  ```C
  int a = 7;
  a *= 3; // equivalent to a = a * 3 = 7 * 3 = 21
  ```
- `/=`
  ```C
  int a = 21;
  a /= 3; // equivalent to a = a / 3 = 21 / 3 = 7
  ```
- `%=`  
  ```C
  int a = 21;
  a %= 5; // equivalent to a = a % 5 = 21 % 5 = 1
  ```

## 6. Misc Operators, sizeof(), Address, Value at Address and Ternary

- `sizeof()`  Returns the amount of memory allocated.
  ```C
  int a;
  sizeof(a);  // result is 4

  double b;
  sizeof(b);  // result is 8

  // note the result of sizeof() may vary depending on the type of machine.
  ```
- `&`  Address Operator, Gives the address of a variable.
  ```C
  int a;
  &a;  // result an address such as 860328156
  ```
- `*`  Value at Address Operator, gives the value at an address.
  ```C
  int a = 50;
  int *b = &a;
  &a; // result is the address of 'a' such as 1152113732
  *b; // result is 50, the value stored at the address
  ```
- `? :`  Ternery Operator, simplifies a typical if-else conditional.  condition ? value_if_true : value_if_false 
  ```C
  // a typical if-else statement in c
  if (a > b) {
     result = x;
  }
  else {
     result = y;
  }
  // can be rewritten with the ternary operator as
  result = a > b ? x : y;
  ```

## 6. Operator precedence and associativity in C
Operators with the highest precedence appear at the top of the list. Within an expression, operators
with higher precedence will be evaluated first. When two or more operators of the same precedence is
present in an expression, then the associativity of the operator tells us the order in which the operators
must be evaluated. The associativity in the given list is from left to right i.e, operators in the left are
evaluated first. 

- Postfix `() [] -> . ++ --`
- Unary `+ - ! ~ ++ -- (type)* & sizeof`
- Multiplicative `* / %`
- Additive `+ -`
- Shift `<< >>`
- Relational `< <= > >=`
- Equality `== !=`
- Bitwise AND `&`
- Bitwise XOR `^`
- Bitwise OR `|`
- Logical AND `&&`
- Logical OR `||`
- Conditional `?:`
- Assignment `= += -= *= /= %= >>= <<= &= ^= |=`
- Comma `,`

## 7. Conditional Operators

## Syntax
   ```conditionalExpression ? expression1 : expression2```
   
The conditional operator works as follows:

The first expression conditionalExpression is evaluated first. This expression evaluates to 1 if it's true and evaluates to 0 if it's false.
1. If conditionalExpression is true, expression1 is evaluated.
2. If conditionalExpression is false, expression2 is evaluated.

## Example
```c
#include <stdio.h>
int main(){
   char February;
   int days;
   printf("If this year is leap year, enter 1. If not enter any integer: ");
   scanf("%c",&February);

   // If test condition (February == 'l') is true, days equal to 29.
   // If test condition (February =='l') is false, days equal to 28. 
   days = (February == '1') ? 29 : 28;

   printf("Number of days in February = %d",days);
   return 0;
}
```
## Output

```
If this year is leap year, enter 1. If not enter any integer: 1
Number of days in February = 29
```
