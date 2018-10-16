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

Compiled languages are converted directly into machine code that the processor can execute. As a result, they tend to be faster and more efficient to execute than interpreted languages. They also give the developer more control over hardware aspects, like memory management and CPU usage.

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

**Most command line tools, CLIs, and shells can theoretically be classified as interpreted languages.**

### Advantages and Disadvantages

#### Advantages of Compiled Languages
* Programs compiled into native code at compile time usually tend to be faster than those translated at run time, due to the overhead of the translation process.
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
