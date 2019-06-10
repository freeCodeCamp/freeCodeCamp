---
title: C++ Compilers
---

# Intro to C++ Compilers

In order to get started with C++, you will need to learn a little about compilers and how C++ runs on your computer.

When all is said and done, computers only understand one language, machine language. Machine language is entirely made up of
binary bits, or 0s and 1s. While it would be possible to program in binary, it would be incredibly tedious and time consuming. 
So, we humans developed programming languages to make it easier to develop software. Assembly language is a direct 1 to 1 with machine
language. Languages like C, C++, and COBOL are a little higher and need to be compiled down. It goes even higher. Languages
like JavaScript and Python have components that get translated into C++ or other low level languages before they get compiled, 
effectively making them "higher" languages than C or C++.
Because computer architecture is made up of electronic switches and cables that can only work with binary 1s and 0s,
you need a compiler to translate your code from high level C++ to machine language that the CPU can understand.

Compilers are utility programs that take your code and transform it into executable machine code files. When you run a compiler
on your code, first, the preprocessor reads the source code (the C++ file you just wrote). The preprocessor searches for any
preprocessor directives (lines of code starting with a #). Preprocessor directives cause the
preprocessor to change your code in some way (by usually adding some library or another C++ file). 
Next, the compiler works through the preprocessed code line by line translating
each line into the appropriate machine language instruction. This will also uncover any syntax errors that are present in your
source code and will throw an error to the command line. Finally, if no errors are present, the compiler creates an object 
file with the machine language binary necessary to run on your machine. While the object file that the compiler just created
is likely enough to do something on your computer, it still isn't a working executable of your C++ program. There is a final
important step to reach an executable program.

C++ contains a vast library to aid in performing difficult tasks like I/O and hardware manipulation. You can include these 
libraries with preprocessor directives, but the preprocessor doesn't automatically add them to your code. In order for you to have 
a final executable program, another utility known as the linker must combine your object files with the library functions
necessary to run the code. Think of it as having all the necessary blocks
to build a house. The compiler made all the blocks but the linker is the one that sticks them all together to finally create a house.
Once this is done, you now have a functioning executable file!


## How to Compile a file
Let's say you have a C++ file called `helloWorld.cpp` ...

### If you are on Windows -- 

#### Using and IDE like CodeBlocks

It is as simple as clicking the build and run buttons, they will create a file in the project folder.
![img](https://i.imgur.com/FwZuFGy.png)

#### Using Command Prompt
1. Open a Developer Command Prompt - For this step, you will need to have Microsoft Visual Studio or some other IDE that 
enables you to compile your program from the command line. You can also search online for C++ compilers.

2. Navigate to the source code directly.

3. Run the Compiler on your source code (assuming you are using the Microsoft Visual Studio compiler)
`cl /EHsc helloWorld.cpp`

This will now create an object file and automatically link it for you. If you look in that same folder, you will see a 
hellWorld.exe executable file (note the exe extension) is now present.

4. Type `helloWorld` into the prompt to run the executable.

Alternatively, many IDEs allow for quick building and viewing of your program. This may be easier since your version of 
windows may not come pre packaged with a compiler utility. 

### If you are on Linux or OSX -- 
1. Open up a terminal window and navigate to the source code directory.
2. Run the Compiler on your source code.
`g++ helloWorld.cpp -o helloWorld`

This will create an object file and automatically link it for you. Look in the folder and you will see a helloWorld.exe 
executable file (note the exe extension). 

3. Type `./helloWorld` in the terminal window to run the executable file.

g++ is the standard Linux compiler and is a great utility. It comes packaged with the operating system.

NOTE:
To compile and execute your code directly, run
`g++ -o helloWorld helloWorld.cpp; ./helloWorld`
so when you need to compile and run your code multiple times,
up arrow-enter 

### Adding Flags
You can also add flags to the compiler to your custom and favor. For example:
`g++ -O2 helloWorld.cpp -o helloWorld`

Some common flags are :
1. -O2 : Optimize your code, so it may run faster.
2. -std=c++11 : use c++11 instead of gnu++14 (the GNU implementation of the C++14 standard) which is defaulted.<sup>1</sup>
3. -Wall: prompt some warning about some common mistakes which can bug your program.
4. -Wextra: prompt some extra warning.
____________

There are a number of different types of compilers. The two listed are the two that are usually packaged with the Windows
or Linux/OSX.

### Sources
1. ["Using the GNU Compiler Collection(GCC): Standards." GNU Project. 25 April, 2019. Accessed: 17 May, 2019. ](https://gcc.gnu.org/onlinedocs/gcc-9.1.0/gcc/Standards.html#Standards)
