---
title: Input and Output
---

## Input and Output with Streams

To print things to the console, or read from it, you use `cout` and `cin`, which are so-called `streams`. This metaphor is used because you use streams like you would use a sink, or a tap: you either flush data into a sink (`cout`), or get data out of a tap (`cin`).

### Output with cout

The "Hello World" program uses `cout` to print "Hello World!" to the console:

```C++
#include<iostream>
using namespace std; 

int main()
{
  cout << "Hello world!" << endl;
}
```
The first two lines at the top are necessary for you to use `cout` and other streams. `#include<iostream>` makes the stream objects available, and `using namespace std;` lets you type `cout` directly instead of having to type `std::cout`, that is, having to specify that we want to use `cout` from the `std` namespace.

`cout` stands for "Console Output", and is a so-called _output stream_ that represents the console. When you want to print something to the console, you can put it into `cout`; imagine it as a hole that leads to the terminal. To put things into this hole, one at a time, you use the `<<` operator, a.k.a. the _insertion operator_<sup>1</sup>. The operator can be chained, that is, you can put several things in one after the other. The following will print "The cake is a lie.":

`cout << "The cake " << "is " << "a " << "lie." << endl;`

`endl` stands for "End Line" and is another item that comes from `<iostream>`. When you put `endl` into `cout`, it will print a newline character ("\n") to the console, and also _flush_ `cout`, which means that it will force `cout` to print everything you have put into it *right now*. If you don't put `endl` into `cout`, `cout` might keep the data you've put into it but wait for more data before actually printing it all. This is called _buffering_ and is very good for performance, but if you've already given it everything it's supposed to print, you want `cout` to print it immediately. Therefore it is very good practice to end with `endl` in places where it makes sense.

Almost everything can be put into a stream: strings, numbers, variables, expressions, etc. Here area some examples of valid stream insertions:

```C++
// Notice we can use the number 42 and not the string "42". 
cout << "The meaning of life is " << 42 << endl;` // Output: The meaning of life is 42
```

```C++
string name = "Tim";
cout << "Except for you, " << name << endl;`// Output: Except for you, Tim
```

```C++
string name = "Tim";
cout << name;
cout << " is a great guy!" << endl;`
// Output: Tim is a great guy!
```

```C++
int a = 3;
cout << a*2 + 18/a << endl;`// Output: 12
```

### A note about whitespace

C++ always puts *you* in control, and only does exactly the things you tell it to do. This can sometimes be surprising, as in the following example:

```C++
string name = "Sarah";
cout << "Good morning" << name << "how are you today? << endl;
```
You might expect it to print "Good morning Sarah how are you today?", but actually, the output would be "Good morningSarahhow are you today?". The reason for this bug is that you did not write spaces in the strings surrounding `name`, and so, since you didn't specify any spaces, `cout` didn't print any. The correct version would be: `cout << "Good morning " << name << " how are you today? << endl;`.

Line breaks don't happen by themselves, either. You might think this would print a recipe on four lines:

```C++
cout << "To make bread, you need:";
cout << "* One egg";
cout << "* One water";
cout << "* Two wheat";
```
but the output is actually all on one line: "To make bread, you need:* One egg* One water* Two wheat". This is because there are no newline characters at the end of the lines, so naturally, C++ assumes we don't want it to print newline characters.

You could fix this by adding `endl`s after every line, because as discussed earlier, `endl` inserts a newline character into the output stream. However, it also forces the buffer to be flushed, which loses us a little performance since we could have printed all the lines in one go. Therefore the best would be to add actual newline characters at the end of the lines, and only use `endl` at the end:
```C++
cout << "To make bread, you need:\n";
cout << "* One egg\n";
cout << "* One water\n";
cout << "* Two wheat" << endl;
```
If you're just printing a small recipe, the time you save is miniscule and not worth the hassle, but if you're printing millions of items, the difference could be very noticeable.

### Input with cin

To read from the console, you use the _input stream_ `cin` in the same way as you would `cout`, but instead of putting things into `cin`, you "take them out". The following program reads two numbers from the user and adds them together:
```C++
#include<iostream>
using namespace std; 

int main()
{
  int a, b; // Variables to hold the two numbers.
  
  cout << "Please enter the first number:" << endl;
  cin >> a;
  cout << "Please enter the second number:" << endl;
  cin >> b;

  cout << "The sum of your numbers is: " << a + b << endl;
}
```

`cin` stands for "Console Input" and is an _input stream_ that represents input from the console. In the expression `cin >> a;`, data is read from `cin` and saved into the variable `a`, using the operator `>>`, the _extraction operator_<sup>2</sup>. The extraction operator reads exactly as much data as required to write into the variable we specify, and skips any whitespace, so if the user types "       6" that will just be read as the value `6`.

It's worth noting that `cin` will stop the whole program to wait for the user to type in their value. The program will not continue until the user has pressed enter, and there is some data to be written into the variable. If the user just presses enter without typing anything, `cin` will keep waiting for a value.

The extraction operator `<<` can be chained too. Here is the same program as last time, but written in a more concise manner:
```C++
#include<iostream>
using namespace std; 

int main()
{
  int a, b; // Variables to hold the two numbers.
  
  cout << "Please enter two numbers:" << endl;
  cin >> a >> b;
  cout << "The sum of your numbers is: " << a + b << endl;
}
```
When chained, the extraction operator will first read data from `cin` to fill `a`, and then read data to fill `b`.


C's standard printf and scanf statements can also be used with c++ by importing '<cstdio>' header file.


## Sources
1. http://www.cplusplus.com/reference/ostream/ostream/operator%3C%3C/
2. http://www.cplusplus.com/reference/istream/istream/operator%3E%3E/
