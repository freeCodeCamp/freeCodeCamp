---
title: Basic Operations
---
# Basic Operations

Java supports the following operations on variables:

*   __Arithmetic__ : `Addition (+)`, `Subtraction (-)`, `Multiplication (*)`, `Division (/)`, `Modulus (%)`,`Increment (++)`,`Decrement (--)`.
*   __String concatenation__: `+` can be used for String concatenation, but subtraction `-` on a String is not a valid operation.
 **In java ***+*** operator is overloaded on functionality to concatenate strings and to perform addition information**
*   __Relational__: `Equal to (==)`, `Not Equal to (!=)`, `Greater than (>)`, `Less than (<)`, `Greater than or equal to (>=)`, `Less than or equal to (<=)`
**Always remember sign of greater and less than always come before assign i.e "="**
*   __Bitwise__: `Bitwise And (&)`, `Bitwise Or (|)`, `Bitwise XOR (^)`, `Bitwise Compliment (~)`, `Left shift (<<)`, `Right Shift (>>)`, `Zero fill right shift (>>>)`.
**Bitwise operators are used to perform bitwise operation in places where calculation on binary numbers are required like-in ciphers,and to design virtual electronic circut replication etc. **
*   __Logical__: `Logical And (&&)`, `Logical Or (||)`, `Logical Not (!)`

*   __Assignment__: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `&=`, `^=`, `|=`

*   __Others__: `Conditional/Ternary(?:)`, `instanceof`
**Ternary because it work on the functionality of If Then Else i.e If condition is right then first alternative anotherwise the second one **
While most of the operations are self-explanatory, the Conditional (Ternary) Operator works as follows:

`expression that results in boolean output ? return this value if true : return this value if false;`

Example:
True Condition:

```java
    int x = 10;
    int y = (x == 10) ? 5 : 9; // y will equal 5 since the expression x == 10 evaluates to true
    
```

False Condition:

```java
    int x = 25;
    int y = (x == 10) ? 5 : 9; // y will equal 9 since the expression x == 10 evaluates to false
```

The instance of operator is used for type checking. It can be used to test if an object is an instance of a class, a subclass or an interface. General format-
*object **instance** of class/subclass/interface*

Here is a program to illustrate instanecof operator:
```Java
  Person obj1 = new Person();
        Person obj2 = new Boy();
 
        // As obj is of type person, it is not an
        // instance of Boy or interface
        System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*it returns true since obj1 is an instance of person */
                           
       
 ```
 
 
 ## Operation of ASSIGNMENT Operators explained:
 ----------------------------------------------
 
 Often times students come across questions in exam/quizes involving complex equations/relations between different variables established with different combinations of assignmen operators. On face, they look preety ambiguous. But follwoing a simpe rule might make solving them preety straigh forward.
 The rule itself is simple... On any circumstance, first one must deal with PRE-operations, then 'Assignment' operator and then finally comes with 'POST - operations'.
 
 In summary, the order of operation is - 
 
 step 1. PRE-operations
 step 2. Assignment
 step 3. POST - operations.
 
 For example-
 ----------------------------------------------------------------
 int a = 1;
 int b;
 int b = a-- + ++a ;
 what will be the value of a & b after the program compiles?
 ----------------------------------------------------------------
 step 1. PRE-operations: 
 a is assigned value 1. 
 Upon pre-assignment, it becomes 2(since it is '+' here)
 
 step 2. Assignment:
 At this point, 
 a = 2 
 and for b ,  
     b =a-- + ++a
 or, b = 2-- + 2 =  4. [Note:POST - operations has not yet come to play yet]
 
 step 3. POST - operations:
 At this point, 
 b = 4 
 a = 2. But WAIT, there's still one 'post operation' on a to deal with... i.e. a--
 
 So it follows-
    a--
 =  2--
 =  1 (since it is '-' here).
 
 
 
Again, consider this example-
---------------------------------------------
int num1 = 10;
int num2 = 0;
int num3 = 4;
int num4 = 6;

num3 = ++num1 - num4++;

what will be the value of num3 & num4 ?
---------------------------------------------------------------

num3 = 5
num4 = 7




