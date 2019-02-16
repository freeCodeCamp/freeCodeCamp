---
title: Basic Operators
---
## Basic Operators

Operators are symbols that tell the interpreter to do a specific operation (e.g. arithmetic, comparison, logical, etc.)

The different types of operators in Python are listed below:

1. Arithmetic Operators
2. Comparison (Relational) Operators
3. Bitwise Operators
4. Assignment Operators
5. Logical Operators
6. Membership Operators
7. Identity Operators

#### Arithmetic Operators

An arithmetic operator takes two operands as input, performs a calculation and returns the result. 

Consider the expression, <b>“a = 2 + 3”</b>. Here, `2` and `3` are the <i>operands</i> and `+` is the <i>arithmetic operator</i>. The result of the operation is stored in the variable a. (This is because `=` is an assignment operator. See below.)

<table style="width:100%">
  <tr>
    <th>Operator</th>
    <th>Description</th> 
    <th>Usage</th>
  </tr>
  <tr>
    <td align="center">+</td>
    <td>Performs Addition on the operands</td> 
    <td>12 + 3 = 15</td>
  </tr>
  <tr>
    <td align="center">-</td>
    <td>Performs Subtraction on the operands. <br>Subtracts the right operand from the left operand</td> 
    <td>12 - 3 = 9</td>
  </tr>
  <tr>
    <td align="center">*</td>
    <td>Performs Multiplication on the operands</td> 
    <td>12 * 3 = 36</td>
  </tr>
  <tr>
    <td align="center">/</td>
    <td>Performs Division on the operands. <br>Divides the left operand by the right operand</td> 
    <td>12 / 3 = 4</td>
  </tr>
  <tr>
    <td>Note: When two integers are used, the result differs between Python 2 and Python 3.</td> 
    <td>5 / 2 = 2 in Python 2</td>
    <td>5 / 2 = 2.5 in Python 3</td>
  </tr>
  <tr>
    <td align="center">%</td>
    <td>Performs a Modulus on the operands. <br>Returns the remainder obtained while dividing the left operand by the right operand</td> 
    <td>16 % 3 = 1</td>
  </tr>
  <tr>
    <td align="center">**</td>
    <td>Performs an Exponentiation operation. <br>The left operand is raised to the power of right operand</td> 
    <td>12 ** 3 = 1728</td>
  </tr>
  <tr>
    <td align="center">//</td>
    <td>Performs a Floor Division operation. <br>Returns the integral part of the quotient obtained after diving the left operand by the right operand</td> 
    <td>18 // 5 = 3</td>
  </tr>
</table>

Notes: 
- To get the result in floating type, one of the operands must also be of float type.
- Python arithmetic operations follow the PEMDAS order of precedence.

#### Comparison (Relational) Operators

A comparison or relational operator is used to compare two operands to determine the relationship between them. It returns a boolean value based on the condition.

<table style="width:100%">
  <tr>
    <th>Operator</th>
    <th>Description</th> 
    <th>Usage</th>
  </tr>
  <tr>
    <td align="center">></td>
    <td>Returns True if the left operand is greater than the right operand<br>Returns False otherwise</td> 
    <td>12 > 3 returns True</td>
  </tr>
  <tr>
    <td align="center"><</td>
    <td>Returns True if the right operand is greater than the left operand<br>Returns False otherwise</td> 
    <td>12 < 3 returns False</td>
  </tr>
  <tr>
    <td align="center">==</td>
    <td>Returns True if both the operands are equal<br>Returns False otherwise</td> 
    <td>12 == 3 returns False</td>
  </tr>
  <tr>
    <td align="center">>=</td>
    <td>Returns True if the left operand is greater than or equal to the right operand<br>Returns False otherwise</td> 
    <td>12 >= 3 returns True</td>
  </tr>
  <tr>
    <td align="center"><=</td>
    <td>Returns True if the right operand is greater than or equal to the left operand<br>Returns False otherwise</td> 
    <td>12 <= 3 returns False</td>
  </tr>
  <tr>
    <td align="center">!=</td>
    <td>Returns True if both the operands are not equal<br>Returns False otherwise</td> 
    <td>12 != 3 returns True</td>
  </tr>
</table>

#### Bitwise Operators

A bitwise operator performs operations on the operands bit by bit.

Consider a = 2 (in binary notation, 10) and b = 3 (in binary notation, 11) for the below usages.

<table style="width:100%">
  <tr>
    <th>Operator</th>
    <th>Description</th> 
    <th>Usage</th>
  </tr>
  <tr>
    <td align="center">&</td>
    <td>Performs bitwise AND operation on the operands</td> 
    <td>a & b = 2<br>Binary: 10 & 11 = 10</td>
  </tr>
  <tr>
    <td align="center">|</td>
    <td>Performs bitwise OR operation on the operands</td> 
    <td>a | b = 3<br>Binary: 10 | 11 = 11</td>
  </tr>
  <tr>
    <td align="center">^</td>
    <td>Performs bitwise XOR operation on the operands</td> 
    <td>a ^ b = 1<br>Binary: 10 ^ 11 = 01</td>
  </tr>
  <tr>
    <td align="center">~</td>
    <td>Performs bitwise NOT operation on the operand<br>Flips every bit in the operand</td> 
    <td>~a = -3<br>Binary: ~(00000010) = (11111101)</td>
  </tr>
  <tr>
    <td align="center">>></td>
    <td>Performs a bitwise right shift. Shifts the bits of left operand, right by the number of bits specified as the right operand </td> 
    <td>a >> b = 0<br>Binary: 00000010 >> 00000011 = 00000000</td>
  </tr>
  <tr>
    <td align="center"><<</td>
    <td>Performs a bitwise left shift. Shifts the bits of left operand, left by the number of bits specified as the right operand </td> 
    <td>a << b = 16<br>Binary: 00000010 << 00000011 = 00001000</td>
  </tr>
</table>


#### Assignment Operators
An assignment operator is used to assign values to a variable. This is usually combined with other operators (like arithmetic, bitwise, etc.) where the operation is performed on the operands and the result is assigned to the left operand.

Consider the following examples,
<br>
<b>a = 18</b>. Here `=` is an assignment operator, and the result is stored in variable a.
<br>
<b>a += 10</b>. Here `+=` is an assignment operator, and the result is stored in variable a. This is same as a = a + 10.

<table style="width:100%">
  <tr>
    <th>Operator</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td align="center">=</td>
    <td>a = 5. The value 5 is assigned to the variable a</td>
  </tr>
  <tr>
    <td align="center">+=</td>
    <td>a += 5 is equivalent to a = a + 5</td>
  </tr>
  <tr>
    <td align="center">-=</td>
    <td>a -= 5 is equivalent to a = a - 5</td>
  </tr>
  <tr>
    <td align="center">*=</td>
    <td>a *= 3 is equivalent to a = a * 3</td>
  </tr>
  <tr>
    <td align="center">/=</td>
    <td>a /= 3 is equivalent to a = a / 3</td>
  </tr>
  <tr>
    <td align="center">%=</td>
    <td>a %= 3 is equivalent to a = a % 3</td>
  </tr>
  <tr>
    <td align="center">**=</td>
    <td>a **= 3 is equivalent to a = a ** 3</td>
  </tr>
  <tr>
    <td align="center">//=</td>
    <td>a //= 3 is equivalent to a = a // 3</td>
  </tr>
  <tr>
    <td align="center">&=</td>
    <td>a &= 3 is equivalent to a = a & 3</td>
  </tr>
  <tr>
    <td align="center">|=</td>
    <td>a |= 3 is equivalent to a = a | 3</td>
  </tr>
  <tr>
    <td align="center">^=</td>
    <td>a ^= 3 is equivalent to a = a ^ 3</td>
  </tr>
  <tr>
    <td align="center">>>=</td>
    <td>a >>= 3 is equivalent to a = a >> 3</td>
  </tr>
  <tr>
    <td align="center"><<=</td>
    <td>a <<= 3 is equivalent to a = a << 3</td>
  </tr>
</table>

#### Logical Operators

A logical operator is used to make a decision based on multiple conditions. The logical operators used in Python are 
`and`, `or` and `not`

<table style="width:100%">
  <tr>
    <th>Operator</th>
    <th>Description</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td align="center">and</td>
    <td>Returns True if both the operands are True<br>Returns False otherwise</td>
    <td>a and b</td>
  </tr>
  <tr>
    <td align="center">or</td>
    <td>Returns True if any one of the operands are True<br>Returns False otherwise</td>
    <td>a or b</td>
  </tr>
  <tr>
    <td align="center">not</td>
    <td>Returns True if the operand is False<br>Returns False otherwise</td>
    <td>not a</td>
  </tr>
  <tr>
</table>

#### Membership Operators

A membership operator is used to identify membership in any sequence (e.g. lists, strings, tuples). 
<br>`in` and `not in` are membership operators

<br>`in` returns True if the specified value is found in the sequence. Returns False otherwise.
<br>`not in` returns True if the specified value is not found in the sequence. Returns False otherwise.

###### Example Usage

```py
a = [1,2,3,4,5]
  
#Is 3 in the list a?
print 3 in a # prints True 
  
#Is 12 not in list a?
print 12 not in a # prints True
  
str = "Hello World"
  
#Does the string str contain World?
print "World" in str # prints True
  
#Does the string str contain world? (note: case sensitive)
print "world" in str # prints False  

print "code" not in str # prints True
```
#### Identity Operators

An identity operator is used to check if two variables share the same memory location.
<br>`is` and `is not` are identity operators

<br>`is` returns True if the operands refer to the same object. Returns False otherwise.
<br>`is not` returns True if the operands do not refer to the same object. Returns False otherwise.

Please note that two values being equal does not necessarily require they be identical.

###### Example Usage

```py
a = 3
b = 3  
c = 4
print a is b # prints True
print a is not b # prints False
print a is not c # prints True

x = 1
y = x
z = y
print z is 1 # prints True
print z is x # prints True
print y is x # prints True

str1 = "FreeCodeCamp"
str2 = "FreeCodeCamp"

print str1 is str2 # prints True
print "Code" is str2 # prints False

a = [10,20,30]
b = [10,20,30]

print a is b # prints False (since lists are mutable in Python)  
```
