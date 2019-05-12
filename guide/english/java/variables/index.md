---
title: Variables
---
# Variables

Variables store values. They are the most basic entity used to store data such as text, numbers, etc. in a program. 
These are case sensitive ,i.e, small letter nd capital letter must be same as when declared.

In <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java' target='_blank' rel='nofollow'>Java</a>, variables are <a href='https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22' target='_blank' rel='nofollow'>_strongly typed_</a>, which means you have to define the type for each variable whenever you declare it. Otherwise, the compiler will throw an error at <a href='https://en.wikipedia.org/wiki/Compile_time' target='_blank' rel='nofollow'>compile time</a>. Therefore, each variable has an associated '<a href='https://guide.freecodecamp.org/java/data-types' target='_blank' rel='nofollow'>data-type</a>' of one of the following:

*   Primitive Type: `int`, `short`, `char`, `long`, `boolean`, `byte`, `float`, `double`
*   Wrapper Type: `Integer`, `Short`, `Char`, `Long`, `Boolean`, `Byte`, `Float`, `Double`
*   Reference Type: `String`, `StringBuilder`, `Calendar`, `ArrayList`, etc.

You may have noticed that the **Wrapper Type** consists of types spelled exactly like the **Primitive Type**, except for the capitalised alphabet in the begining (like the **Reference Type**). This is because the Wrapper Types are actually a part of the more general Reference Types, but <i>closely linked</i> with their primitive counterparts via <a href='https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html' target='_blank' rel='nofollow'>autoboxing and unboxing</a>. For now, you just need to know that such a 'Wrapper Type' exists.

Typically, you can <i>declare</i> (i.e., create) variables as per the following syntax: <<i>data-type</i>> <<i>variableName</i>>;

```java
// Primitive Data Type
int i;

// Reference Data Type
Float myFloat;
```

You can <i>assign</i> a value to the variable either simultaneously when you are declaring it (which is called <i>initialisation</i>), or anywhere in the code after you have declared it. The symbol **=** is used for the same.

```java
// Initialise the variable of Primitive Data Type 'int' to store the value 10
int i = 10;
double amount = 10.0;
boolean isOpen = false;
char c = 'a'; // Note the single quotes
String s = "Hello World"; // String is created with double quotes

//Variables can also be declared in one statement, and assigned values later.
int j;
j = 10;

// initiates an Float object with value 1.0
// variable myFloat now points to the object
Float myFloat = new Float(1.0);

//Bytes are one of the data types in Java and can be
//represented with this code
int byteValue = 0B101;
byte anotherByte = (byte)0b00100001;

```
## Variable Data Types

As evident from the above example, variables of Primitive type behave slightly differently from variables of Reference (& Wrapper) type - while Primitive variables <i>store</i> the actual value, Reference variables <i>refer to</i> an 'object' containing the actual value.

Java Programming language defines mainly three kind of variables.

1. Local Variable:
It is declared inside the method and can only be used within the method itself.

2. Static variable:
Any variable which has the keyword static is called a static variable .
It cannot be created as a local variable. Once created , it can be used among all the instances of the class.

3. Instance Variable:
It is declared inside a class but not in a specific method body.

You can find out more in the sections linked below.
## Rules for naming Variable

 -> All variable names must begin with a letter of the alphabet, an underscore, or ( _ ), or a dollar sign ($).  The convention is to always use a letter of the alphabet.  The dollar sign and the underscore are discouraged.

 -> After the first initial letter, variable names may also contain letters and the digits 0 to 9.  No spaces or special characters are allowed. 

 -> The name can be of any length, but don't get carried away.  Remember that you will have to type this name.

 -> Uppercase characters are distinct from lowercase characters.  Using ALL uppercase letters are primarily used to identify constant variables.  Remember that variable names are case-sensitive.

 -> You cannot use a java keyword (reserved word) for a variable name.
 
## Other Resources
* <a href='https://guide.freecodecamp.org/java/data-types' target='_blank' rel='nofollow'>Data Types</a>
* <a href='https://guide.freecodecamp.org/java/classes-and-objects' target='_blank' rel='nofollow'>Classes and Objects</a>
