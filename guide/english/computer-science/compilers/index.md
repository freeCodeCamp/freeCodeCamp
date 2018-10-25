---
title: Compilers
---
## Compilers

### Programming
At its heart, a barebones computer (aka a stored program computer) is nothing but a machine which knows how to read steps written in a fixed instruction set and execute the same. The set of instructions a computer understands is very specific to it. This is also known as machine language (**opcodes**). Machine Language is often referred to as Binary Code.

Humans interact with computers using **Programs**. A program is simply a sequence of opcodes provided to the computer along with data that is necessary for executing the opcodes. 

For example,
```
ADD 10, 20  // ADD is the Opcode 
            // and 10, 20 are the two operands(data) 
            // needed for the ADD instruction to be executed successfully
```
Humans develop programs to solve complex problems. Looking at how simple opcodes are, if we try to develop programs using opcodes alone, it will be very cumbersome and difficult to debug. To solve this problem, high level languages like C/C++, Python, Java, Javascript, etc were developed. 

Now, high level languages aren't suitable for execution by computers. Hence, the need arose for a translator that can digest the high-level language programs and convert them to machine language instructions suitable for execution by a computer.

#### [HUMANS] -> [Highlevel language programs] -> [Translator] -> [Machine Language] -> [Computer]

A **compiler** is a type of translator program, that translates high level languages into binary code, which is nothing but 1s and 0s. When you run your source code, a compiler translates all the code first, then produces the binary code. Then the computer takes the binary code and runs it.

If there are errors in your source code, the compiler detects and flags them. This stops the compilation process. Once all errors are fixed, the compiler converts the code and generates an executable program.

## Parts of a compiler
Most compilers break down into three primary stages: Parsing, Transformation, and Code Generation

1. *Parsing* is taking raw code and turning it into a more abstract representation of the code.
2. *Transformation* takes this abstract representation and manipulates to do whatever the compiler wants it to.
3. *Code Generation* takes the transformed representation of the code and turns it into new code.

#### Parsing
Parsing typically gets broken down into two phases: **Lexical Analysis** and **Syntactic Analysis**.

*Lexical Analysis* takes the raw code and splits it apart into these things called tokens by a thing called a tokenizer (or lexer).
```
Tokens are an array of tiny little objects that describe an isolated piece of the syntax. 
They could be numbers, labels, punctuation, operators, etc.
```

*Syntactic Analysis* takes the tokens and reformats them into a representation that describes each part of the syntax 
and their relation to one another. This is known as an intermediate representation or Abstract Syntax Tree.
```
An Abstract Syntax Tree, or AST for short, is a deeply nested object.
It represents code in a way that is both easy to work with and tells us a lot of information.
```
#### Transformation
The next type of stage for a compiler is transformation. Again, this just takes the AST from the last step and makes changes to it. 
It can manipulate the AST in the same language or it can translate it into an entirely new language.

#### Code Generation
The final phase of a compiler is code generation. Sometimes compilers will do things that overlap with transformation, but for the most part code generation just takes the AST and converts it to binary code.

All compilers need to perform these steps. Most modern compilers also carry out other steps such as checking for type errors and optimizing the resulting compiled code.

#### More Information:
<a href='https://medium.freecodecamp.org/a-gentler-introduction-to-programming-707453a79ee8' target='_blank' rel='nofollow'>Matt Adesanya's "A Gentler Introduction to Programming"</a> covers compilers vs. interpreters, along with other basic programming concepts.
