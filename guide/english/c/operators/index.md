---
title: Operators
---
# Operators in C

## 1. Arithmetic Operators
- `+` Adds to operands (values) 
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
// C Program to demonstrate the working of arithmetic operators
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
     
Misc Operators ↦ sizeof & ternary
Besides the operators discussed above, there are a few other important operators including sizeof and ? : supported by the C Language.

Operator	               Description	                                        Example
sizeof()	               Returns the size of a variable.	                    sizeof(a), where a is integer, will return 4.
&	                    Returns the address of a variable.	                    &a; returns the actual address of the variable.
*	                    Pointer to a variable.	                              *a;
? :	                    Conditional Expression.	                              If Condition is true ? then value X : otherwise value Y


## 6. Operator precedence in C
Operators with the highest precedence appear at the top of the list. Within an expression, operators
with higher precedence will be evaluated first.
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

Operator precedence determines which operator is performed first in an expression with more than one operators with different precedence. For example 10 + 20 * 30 is calculated as 10 + (20 * 30) and not as (10 + 20) * 30.

Associativity is used when two operators of same precedence appear in an expression. Associativity can be either Left to Right or Right to Left. For example ‘*’ and ‘/’ have same precedence and their associativity is Left to Right, so the expression “100 / 10 * 10” is treated as “(100 / 10) * 10”.

Precedence and Associativity are two characteristics of operators that determine the evaluation order of subexpressions in absence of brackets.

1) Associativity is only used when there are two or more operators of same precedence.
The point to note is associativity doesn’t define the order in which operands of a single operator are evaluated. For example consider the following program, associativity of the + operator is left to right, but it doesn’t mean f1() is always called before f2(). The output of following program is in-fact compiler dependent. See this for details.

// Associativity is not used in the below program. Output  
// is compiler dependent. 
int x = 0;  
int f1() { 
  x = 5; 
  return x; 
}  
int f2() { 
  x = 10; 
  return x; 
} 
int main() { 
  int p = f1() + f2(); 
  printf("%d ", x); 
  return 0; 
}


2) All operators with same precedence have same associativity
This is necessary, otherwise there won’t be any way for compiler to decide evaluation order of expressions which have two operators of same precedence and different associativity. For example + and – have same associativity.



 

3) Precedence and associativity of postfix ++ and prefix ++ are different
Precedence of postfix ++ is more than prefix ++, their associativity is also different. Associativity of postfix ++ is left to right and associativity of prefix ++ is right to left. See this for examples.

4) Comma has the least precedence among all operators and should be used carefully For example consider the following program, the output is 1. See this and this for more details.

#include<stdio.h>  
int main() 
{ 
    int a; 
    a = 1, 2, 3; // Evaluated as (a = 1), 2, 3 
    printf("%d", a); 
    return 0; 
}

5) There is no chaining of comparison operators in C
In Python, expression like “c > b > a” is treated as “a > b and b > c”, but this type of chaining doesn’t happen in C. For example consider the following program. The output of following program is “FALSE”.

#include <stdio.h> 
int main() 
{ 
  int a = 10, b = 20, c = 30; 
  
  // (c > b > a) is treated as ((c > b) > a), associativity of '>'  
  // is left to right. Therefore the value becomes ((30 > 20) > 10)  
  // which becomes (1 > 20) 
  if (c > b > a)   
   printf("TRUE"); 
  else
    printf("FALSE"); 
  return 0; 
}

Please see the following precedence and associativity table for reference.

OPERATOR

DESCRIPTION	
ASSOCIATIVITY

( )
[ ]
.
->
++ —	Parentheses (function call) (see Note 1)
Brackets (array subscript)
Member selection via object name
Member selection via pointer
Postfix increment/decrement (see Note 2)	
left-to-right

++ —
+ –
! ~
(type)
*
&
sizeof	Prefix increment/decrement
Unary plus/minus
Logical negation/bitwise complement
Cast (convert value to temporary value of type)
Dereference
Address (of operand)
Determine size in bytes on this implementation	right-to-left
*  /  %	Multiplication/division/modulus	left-to-right
+  –	Addition/subtraction	left-to-right
<<  >>	Bitwise shift left, Bitwise shift right	left-to-right
<  <=
>  >=	Relational less than/less than or equal to
Relational greater than/greater than or equal to	left-to-right
==  !=	Relational is equal to/is not equal to	left-to-right
&	Bitwise AND	left-to-right
^	Bitwise exclusive OR	left-to-right
|	Bitwise inclusive OR	left-to-right
&&	Logical AND	left-to-right
| |	Logical OR	left-to-right
? :	Ternary conditional	right-to-left
=
+=  -=
*=  /=
%=  &=
^=  |=
<<=  >>=	Assignment
Addition/subtraction assignment
Multiplication/division assignment
Modulus/bitwise AND assignment
Bitwise exclusive/inclusive OR assignment
Bitwise shift left/right assignment	right-to-left
,

Comma (separate expressions)	left-to-right
It is good to know precedence and associativity rules, but the best thing is to use brackets, especially for less commonly used operators (operators other than +, -, *.. etc). Brackets increase readability of the code as the reader doesn’t have to see the table to find out the order.
