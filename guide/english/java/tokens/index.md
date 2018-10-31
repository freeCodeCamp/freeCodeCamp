---
title: tokens
---
# Tokens in Java
These are the fundamental building blocks of a program or the smallest unit of a program.
Java supports five types of tokens:
## 1. Keywords 
These are the words which have their predefined definitions in the compiler and cannot be used as the names of the identifiers.There are 51 keywords and 2 reserved words in Java.
## 2. Identifiers
These are the various names given to different components of the program. These includes the names of variables, methods, class, etc. They must not begin with a digit but can contain digits, letters, underscore, currency symbols.
## 3. Literals
These provide a way to express specific values in a program.These are of following types:
### Numeric Literals
These are of three types in Java.
 * #### Integer Literals
 * #### Floating Point Literals
 * #### Character Literals
### Boolean Literals 
These are of two types
 * #### true 
 * #### false
### String Literals
## 4. Operators
These are the special types of symbols used to perform certain operations. For example +, -, *, /, % 
## 5. Seperators
These include tab, enter, space bar.
##### Now let us consider a program
```java
       //Printing Hello World

public class Hello

{

public static void main(String args[])

{

System.out.println(“Hello World”);

}

}
```

The source code contains tokens such as _public_, _class_, _Hello_, {, _public_, _static_, _void_, _main_, (, _String_, [], _args_, {, _System_, _out_, _println_, (, _"Hello World"_, }, }. The resulting tokens· are compiled into Java bytecodes that is capable of being run from within an interpreted java environment. Token are useful for compiler to detect errors. When tokens are not arranged in a particular sequence, the compiler generates an error message.


