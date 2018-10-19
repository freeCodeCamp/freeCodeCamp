---
title: Basic Math
---
# Math in C
C provides a lot of options for doing math. We'll start with some of the more common ones first.

## The basic stuff
These following examples aren't complete code, they're just examples of what a piece of code looks like. Remember that in C, we'll need to have everything declared before we're using it- `result`, `a`, and `b` will need to have already been initialized and set to a value. Whether they are `int`, `double`, or whatever is important to prevent errors and loss of information- we'll get to that later.

#### Addition: `+`
Addition is performed with a `+`, like so:
```C
result = a + b;
```
In the above example, the variable `result` will be equal to a + b.

#### Subtraction: `-`
Addition is performed with a `-`, like so:
```C
result = a - b;
```
In the above example, the variable `result` will be equal to a - b.

#### Multiplication: `*`
Multiplication is performed with a `*`, like so:
```C
result = a * b;
```
In the above example, the variable `result` will be equal to a multiplied by b.

#### Division: `/`
Division is performed with a `/`, like so:
```C
result = a / b;
```

In the above example, the variable `result` will be equal to a divided by b. This is not always a fraction of a over b, however. When dealing with integers, things get a little different- more on that later.
When dividing always check that the divisor (in this example variable b) is not equal to 0 , dividing with 0 will cause your program to crash.

# The not-so-basic stuff
## Modulo: '%'
Okay, now things start getting a little weird.

Modulo allows you to find the remainder in division. Remember that with integers, we can't have a decimal. Division is about finding how many times one number will fit into another, modulo is about finding what's left over. Take 27 divided by 4: 4 fits into 27 6 times. 6 times 4 is 24, which means there is 3 left over. As a result, 27%4 is 3. 10 divided by 5 is 2, 2 times 5 is 10, so there is 0 left over. As a result, 10%5 is 0.

The modulo operator is more important than you may think, especially in C where the difference between floating point and integer numbers is enforced. It's worth being comfortable with. Here's an example:
```C
result = a % b;
```
In the above example, `result` will be equal to a modulo b.

## Integers and math
Integers can't have decimals. As a result, when you perform division with integers, any sort of decimal will be truncated. For example, 17 divided by 10 is 1.7. However, if we're only dealing with integers, that result will be 1, not 1.7. 10 fits into 17 1 time, so the answer is 1.

When dealing with floating point numbers, this isn't an issue. Floating point numbers can take decimal places, so we don't have to worry about things getting truncated.

### Why does C do this?
C, as discussed earlier, is a low-level language. There are big differences between floating point and integer numbers in the hardware of a computer, and they require that certain data types have certain properties (like not accepting decimals, for example). C makes no assumptions as to what you want, and forces you to think about it yourself.

### Why don't we just use floating point numbers all the time?
This also comes down to C being a low-level language. C is much, much faster and much, much lighter than many other languages, and one of the reasons it is this way because of the programmer being able to make intelligent decisions about data types. Remember that floating point numbers take up a lot more memory than integers. As a result, it's important to use the appropriate data type, and deal with integer to floating point conversions whenever needed.

### How do we get around this?
Casting (described later) is one solution. The other is using floating point numbers. If one or both of the numbers being operated on are a floating point number, the result will be a floating point number. This becomes more complex when we start dealing with order of operations, but for now, be aware that this works:
```C
double result = 23.0 / 2;

```

# A full example
```C
#include <stdio.h>

// This is a comment. It gets ignored by the compiler, so we can write notes after the double slashes.

int main(void) {
    int a = 3;
    int b = 5;
    int result = 0;

    // Doing things with variables:
    result = a + b;
    printf("a plus b = %i \n", result);

    // You can also do the operation inside the printf.
    // Here's an example of that with subtraction:
    printf("a minus b = %i \n", a-b);

    // You don't need to do this with variables at all.
    // Here's an example of that with multiplication:
    printf("10 times 5 = %i \n", 10*5);

    // Here's a look at division.
    // Notice that the decimals are truncated because we're dealing with integers.
    printf("12 divided by 5 = %i \n", 12/5);

    // Now let's force floating point numbers by including a decimal.
    // Notice that even though these are integers, the decimal forces them to be
    // treated as floating point numbers, so they aren't truncated.
    // Note that I'm printing a double with %d, not an int with %i.
    printf("12.0 divided by 5 = %d \n", 12.0/5);

    return 0;
}
```
Give that a run to see what happens, and be sure to play with the operators and values to see what and how things change.

# Math library
C provides a math library (`math.h`) that provides multiple useful math functions. As an example, the power of a number can be calculated as:

```#include<math.h>
int result = pow(2,3) // will result in 2*2*2 or 8
```

Some other (`math.h`) library functions that may prove useful are:

```#include <math.h>
double angle = cos(90.00); // Givs us 0.00
int result = sqrt(16); // Gives us 4
double result = log(10.00) // Gives us 2.30 (note this is ln(10), not log base 10)
```
```c
// C code to illustrate 
// the use of ceil function. 
#include <stdio.h> 
#include <math.h> 
  
int main () 
{ 
  float val1, val2, val3, val4; 
  
  val1 = 1.6; 
  val2 = 1.2; 
  val3 = -2.8; 
  val4 = -2.3; 
  
  printf ("value1 = %.1lf\n", ceil(val1)); 
  printf ("value2 = %.1lf\n", ceil(val2)); 
  printf ("value3 = %.1lf\n", ceil(val3)); 
  printf ("value4 = %.1lf\n", ceil(val4)); 
      
  return(0); 
} 
```
# Before you go on...
## A review
* There are several basic operators:
  * `+` for addition
  * `-` for subtraction
  * `*` for multiplication
  * `/` for division
  * `%` for modulo
  * There are also a bunch more operators, but we'll get into detail with them later.
* Integer math is a thing that C is pretty strict about.
* C is very strict about data types
* If only integers are involved, an integer will be returned
* If a floating point number is involved in an operation, that part of the operation becomes floating point
* C provides a `math.h` library with multiple functions like `pow` for calculating the power of a number. 
