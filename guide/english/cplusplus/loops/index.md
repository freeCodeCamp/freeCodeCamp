---
title: Loops
---

# Loops

## Introduction

Now let's discuss something known as loop. Suppose you want to print the even numbers from 1 to 1000 on the screen. One way 
to do this is to write the following lines

``` c++
cout << 0 << endl;
cout << 2 << endl;
cout << 4 << endl;
....
....
....
cout << 1000 << endl;

```
But the problem with this approach is that you have to write the same line again and again. And if suppose you have to print 
prime numbers from 1 to 1000 then this will be more hectic.
Therefore, in order to solve such problems loops are introduced.

There are different types of loop functions:
### While and do while loops

While and do while loops allow you to run the loop until a condition finishes.
The difference between While and Do while is that Do while loop always executes at least once.
The very use of Do while loop can be seen in the scenarios when the number of times that the loop will run depends upon the first iteration of the loop.
Here you can see an example:
``` c++
while (condition){
    // Code that will execute while condition is true
}
do { 
    // Will execute once and until the condition is false
} while (condition);
```
### For loops

For loops are usually used when you know how many times the code will execute.
The flow can be seen in this [graph](https://www.tutorialspoint.com/cplusplus/images/cpp_for_loop.jpg).

They are declared this way:
``` c++
for ( initialize a variable; check a condition; increment the initialized variable ) {
   //Code to execute
}
```

Let's write a program which will print numbers from 0 to 1000 including 1000 on the screen using a for loop.

``` c++
for (int i = 0;i<=1000;i++)
{
  cout << i << endl;
}
```

When you execute this code in a c++ program numbers from 1 to 1000 will be printed.
Now let's discuss how the for loop works.

* You start a for loop by typing the keyword 'for'. It means you are starting a for loop
` for `
* Next you open and close a round bracket. In this brackets you write some conditions which will be discussed later
` for()`
* Inside the brackets first you write the initial condition i.e. the value from where the loop will start. Like in the
  above program we write int i = 0
 ` for(int i = 0)`
 * Then you write the semicolon and then condition until when the loop will be executed. In the above code you define
   i < 1000. It means until value of i is less then 1000 execuete the loop.
   ` for(int i=0;i<=1000) `
 * Then you define the incremented value that is how much i has to be incremented in each iteration. In the above code 
   we write i++. It means value of i will be incremented by 1 every time.
    ` for(int i=0;i<=1000;i++) `
 * If there is only one statement inside the loop then the curly bracket is optional but its better to write loop code 
   within brackets so that you don't get confused.
    ``` c++
    for(int i=0;i<=1000;i++)
    	{
        }
     ```
 * Then inside the loop you write what do you want to do. In the above program we output the value of i.
 
 So, in this way the for loop works
 
 If you want to print even numbers from 1 to 1000 then your program will look like this
 
 
``` c++
for (int i = 0;i<=1000;i=i+2)
{
  cout << i << endl;
}

```
* The difference between the first program and second is the increment part. The rest of the code is the same. This program will print 0 and
   then add 2 to it and print 2 on console and so on upto value of i becomes equal to 1000.
   
   Our final program to print even numbers from 0 to 1000 will look like this.
   
 ``` c++
 #include<iostream>
using namespace std;
int main()
{
	for (int i = 0;i<=1000;i=i+2)
	{
	  cout << i << endl;
	}
	return 0;
}
 ```
