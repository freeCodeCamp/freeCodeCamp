---
title: Variables
---
# Variables

Variables store values. They are the most basic entity used to store data such as text, numbers, etc. in a program. 

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

//Variables can also be declared in one statement, and assigned values later.
int j;
j = 10;

// initiates an Float object with value 1.0
// variable myFloat now points to the object
Float myFloat = new Float(1.0);

//Bytes are one of types in Java and can be
//represented with this code
int byteValue = 0B101;
byte anotherByte = (byte)0b00100001;

```

As evident from the above example, variables of Primitive type behave slightly differently from variables of Reference (& Wrapper) type - while Primitive variables <i>store</i> the actual value, Reference variables <i>refer to</i> an 'object' containing the actual value.
Java Programming language defines mainly three kind of variables.
1) Instance variables
2) Static Variables
3) Local Variables

You can find out more in the sections linked below.

# Other Resources
* <a href='https://guide.freecodecamp.org/java/data-types' target='_blank' rel='nofollow'>Data Types</a>
* <a href='https://guide.freecodecamp.org/java/classes-and-objects' target='_blank' rel='nofollow'>Classes and Objects</a>
