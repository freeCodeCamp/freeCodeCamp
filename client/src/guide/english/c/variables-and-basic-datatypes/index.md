---
title: Variables and Basic Data Types 
---

# Variables and Basic Data Types
## What is a variable?
Variables store values. Basically you give a name to a stored value, which you want to use later. It is important to note that one variable can store only one value at once. However later on, you can change the stored values 	later on in the code and you can also assign the value of one variable to another.

>When you create a variable, it is called `declaring`, and when you give it a value to store, it is called `assignment`. If you give the variable a value at the same time as declaring it, it is called `initializing`. 
>C is very fussy about how you create variables and what you store in them. C is a `strongly typed` language, which means you have to define the type and name for each variable when you declare it. The name of a variable can be composed of letters, digits, and the underscore character.

## Basic types
In Standard C there are four important basic data types: `int`, `float`, `double`, `char`.

### Integers
For whole number values, the `int` keyword is used (short for integer).
Lets's look at a simple program:
```C
#include <stdio.h>
int main(void){

 int a; // Declaring a variable which stores integer values and is called 'a'	
 int b = 5; //Initializing an int called 'b' with the value 5
 a = 6; // Assigning the value 6 to the variable 'a'
 int c;
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c
 int d = a + c; //But we could also initialize it right away. 
 
 //Some shiny things
 printf("%d \n", c); 
 printf("%d %d \n", a, b); 
	
 return 0;
}
```

Let's break down what we did under the `Some shingy things`:
```C
printf("%d \n", c); 
```
To print out the value of the variable `c`, you can use the `printf()` function. Note the `%d` enclosed in the double quotes. This tells the computer to expect a **d**ecimal value, and that it is after the comma.
```C
printf("%d %d \n", a, b); 
```
You can print out several integers in the order given after the comma.

Note that when you try to store a decimal value in an `int`, you will only get the whole part of it, because they will be truncated.

we can also write the program in the manner below:
```
#include <stdio.h>
int main(void){

 int a=3,b=4,c; // we can also assign and declare the values in 1 line
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c
 
 printf("%d %d \n", a, b); 
 printf("%d \n", c); 

 return 0;
}
```
### Floats and doubles
To store decimal values, you can use the `float` and `double` keywords. The difference between them is the precision, `double` has about 13 digits while `float` has about 7, but this differs from CPU to CPU.
 ```C
 #include <stdio.h>
int main(void){
	double a = 3.23;
	printf("The variable a has the value: %f \n", a); //Double values can be printed with %f
return 0;
}
```

### Characters
You can store a single character with the `char` keyword. You will learn about storing multiple characters later, when we introduce `arrays`. Let's look at some code:
```C
#include <stdio.h>
int main(void){
 char a = 'A'; // Initializing a char with the value 'A', note the simple quotes!
 printf("The character was: %c ", a) //Chars can be printed with %c
return 0;
}
```

## The Boolean type
Later in C a new type was added, called `bool`. Bool stores true/false values, which comes in handy when you have to make decisions in the code. To use it though, you have to inlcude another header next to `<stdio.h>` called `<stdbool.h>`.
```C
#include <stdio.h>
#include <stdbool.h>
int main(void){
 bool a = true;
 bool b = false;

 return 0;
}
```

## Comments
The type of a variable tells the compiler how much space to create (allocate) for the variable. Now you have seen the basic data types, but there are modifiers for them to modify the amount of space allocated for a variable. Modifiers can increase or decrease the default values. C has 5 modifiers: `short`, `long`, `signed`, `unsigned`, `long long`. They are prefixed to the basic types. 

	
