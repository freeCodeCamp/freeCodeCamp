---
title: Compiled Versus Interpreted Languages
---
## Compiled Versus Interpreted Languages

Every program is a set of instructions, whether it's to add two numbers or send a request over the internet. Compilers and interpreters take human-readable code and convert it to computer-readable machine code. In a compiled language, the target machine directly translates the program. In an interpreted language, the source code is not directly translated by the target machine. Instead, a *different* program, aka the interpreter, reads and executes the code.

### Okay... but what does that *actually* mean?

So let's say you have an hummus recipe that you want to make, but it's in Ancient Greek. There are two ways you, as a non-Ancient-Greek speaker, could follow its directions.

The first is if someone had translated it into English for you already. You (and anyone else who could speak English) could get the English version and make hummus. This is the compiled version.

The second is if you had a friend who knows Ancient Greek. Your friend can sit next to you and translate the Ancient Greek into English, line by line, as you go. In this case, your friend is the interpreter. This is the interpreted version.

### Compiled Languages

Compiled languages are converted directly into machine code that the processor can execute. As a result, they tend to be faster and more efficient to execute than interpreted languages. They also give the developer more control over hardware aspects, like memory management and CPU usage. It also gives the compiler a chance to perform some optimizations that would not be possible on interpreted programs, like removing unused functions, variables and classes.

Compiled languages need a "build" step - they need to be manually compiled first. You need to "rebuild" the program every time you need to make a change. In our hummus example, the entire translation is written before it gets to you. If the original author decided he wanted to use a different kind of olive oil, the entire recipe would need to be translated again and then sent to you.

Examples of pure compiled languages are C, C++, Erlang, Haskell, Rust, and Go.

### Interpreted Languages

Interpreters will run through a program line by line and execute each command. Now, if the author decided he wanted to use a different kind of olive oil, he could scratch the old one out and add the new one. Your translator friend can then convey that change to you as it happens.

Interpreted languages were once known to be significantly slower than compiled languages. But, with the development of <a href='https://guide.freecodecamp.org/computer-science/just-in-time-compilation' target='_blank' rel='nofollow'>just-in-time compilation</a>, that gap is shrinking.

Examples of common interpreted languages are PHP, Ruby, Python, and JavaScript.

### A Small Caveat

Most programming languages can have both compiled and interpreted implementations. The language itself is not necessarily compiled or interpreted. However, for simplicity's sake, they're typically referred to as such.

Strictly speaking, the terms interpreted language and compiled language are not well defined because, in theory, any programming language can be either interpreted or compiled. In modern programming language implementation it is increasingly popular for a platform to provide both options.
e.g. Python can be executed either as a compiled program, or as an interpreted language in interactive mode.

One of the criteria used to distinguish between a compiled and interpreted language is the presence of a function or statement equivalent to ***eval***, that are absent in stricter, more traditional compiled languages like Java, C and C++. eval is a special function in almost all interpreted languages that accepts valid code in that language as a String, and executes the code as if it had been written in the program normally.

##### Example in JavaScript:
```JavaScript
let x = 0;
eval("x = 'Hello World'");
console.log(x); //prints Hello World, because x was assigned that value in the eval function
```
The use of eval in programs is usually frowned upon, as it can lead to hard to fix errors, and difficult to understand code. From a security standpoint, it can allow the execution of malicious code, so is avoided on websites.
Modern programs should not need to use the eval function. The behaviour can usually be replicated using a switch statement.

**Most command line tools, CLIs, and shells can theoretically be classified as interpreted languages.**

### Semantic error handling

#### Compiled Languge
A Compiled program is guaranteed to be free of syntax and semantic, but not logical errors. If a program has a syntax or semantic error, it ***WILL NOT*** compile. Note that it is still possible to make logic, or other kinds of errors.
For Example:
```Java
String a = "xyz";

void f(){
  a.sqrt();
}
```
The above program in Java will throw an error, because obviously, there is no way to find the square root of a string. The compiler will detect the error in the function f, even before the program is executed. In fact, there is no way to execute such code in a compiled language. 

#### Interpreted Languge
An Interpreted program may have such errors, because while a compiler checks ***ALL*** errors, an interpreter only throws an error if a statement is ***EXECUTED***.
```JavaScript
let a = "xyz";

function f(){
  a.sqrt();
}
```
The above program in JavaScript would run fine, untill the function f is called, at which point the program will stop and throw an error. In fact, if there was code before and after the snippet, it would execute with no problems at all. The main disadvantage is that if there is such an obvious error in the program, it may escape detection if the code is not througly tested. Some developer tools may detect such simple errors, but more complex cases may escape detection. Another way to check for such errors is to use Unit Tests, but even they are not perfect, and are time consuming to write. 

Compiled languages are ***NOT a shortcut*** to writing error free code. Nor is it impossible, or even too difficult to write error free code in Interpreted languages. But Compiled languages weed out all the obvious little syntax errors, and reduce some effort for the programmer.

### Advantages and Disadvantages

#### Advantages of Compiled Languages
* Programs compiled into native code at compile time usually tend to be faster (sometimes 4 to 5 times as fast) than those translated at run time, due to the overhead of the translation process.
* All the errors are provided to you at once. This allows the programmer to correct all the mistakes at once and recompile the code for execution.

#### Disadvantages of Compiled Languages
The most notable disadvantages are :-
* Additional time needed to complete the entire compilation step before testing, and 
* Platform dependence of the generated binary code.

#### Advantages of Interpreted Languages
An Interpreted language gives implementations some additional flexibility over compiled implementations. Because interpreters execute the source program code themselves, the code itself is platform independent (Java's byte code, for example). Other features include dynamic typing, and smaller executable program size.

#### Disadvantages of Interpreted Languages
* The most notable disadvantage is typical execution speed compared to compiled languages.
* The program stops executing when the first error is encountered; the program (script) continues to execute until the next error is encountered or till program termination.

#### More Information:

<a href='https://en.wikipedia.org/wiki/Compiled_language' target='_blank' rel='nofollow'>Wikipedia - Compiled language</a>

<a href='https://en.wikipedia.org/wiki/Interpreted_language' target='_blank' rel='nofollow'>Wikipedia - Interpreted language</a>

<a href='http://www.programmerinterview.com/index.php/general-miscellaneous/whats-the-difference-between-a-compiled-and-an-interpreted-language/' target='_blank' rel='nofollow'>programmerinterview.com article - What’s the difference between a compiled and interpreted language?</a>
