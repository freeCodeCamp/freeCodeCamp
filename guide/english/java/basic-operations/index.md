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

The `instanceof` operator is used for type checking. It can be used to test if an object is an instance of a class, a subclass or an interface. General format-
*object **instance** of class/subclass/interface*

Here is a program to illustrate the `instanceof` operator:
```Java
  Person obj1 = new Person();
        Person obj2 = new Boy();
 
        // As obj is of type person, it is not an
        // instance of Boy or interface
        System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*it returns true since obj1 is an instance of person */
                           
       
 ```
 

