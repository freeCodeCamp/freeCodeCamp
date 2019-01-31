---
title: Variables in C
---
# Using Variables in C
Now you know what your options with data types are. Let's apply it with a simple example here:

```C
#include <stdio.h>

int main(void) {
    int my_first_variable = 12;
    double my_second_variable = 983.9;

    printf("My int is %i\n", my_first_variable);
    printf("My double is %f\n", my_second_variable);

    return 0;
}
```

There's a lot of new things to take a look at here! You've already seen the `#include` and `int main(void)`, so that's not worth dwelling on. What is new is `int my_first_variable = 12;`.

From earlier, you should recall that `int` allows us to store integer values. After the word `int` comes `my_first_variable`. This is a variable- it can store values, and you can change what values are being stored in it. We start with a declaration, where we tell the computer that the initial value of this variable is 12. It's important to tell the computer that we want a variable to exist before we try to use it. Otherwise, the variable won't exist, and the compiler won't know what to do when you try to tell it to use a variable that doesn't exist.

The next line is `double my_second_variable = 983.9`. The similar structure from before should make it clear that you're telling the computer to create a variable called 'my_second_variable' that can hold `double` values, and that you want it to be set to 983.9.

The actual name of the variable isn't important. It can be whatever you want, as long as it isn't any of the words that C has reserved for the actual language, and it can only include numbers and letters, never any spaces.The variable name cannot start with a number. By convention, C uses clear variable names that substitute underscores for spaces. The variable could also be camelCase, like this:
```C
double myFirstVariable = 983.9
```
In fact, it would be this way in other languages. However, in C this is not typically done.

After the variables are created, we start actually using them:
```C
    printf("My int is %i\n", my_first_variable);
    printf("My double is %f\n", my_second_variable);
```

This is the same printf() that you used earlier, but now it has a few different features. First, notice that there are now two things within the parenthesis: the text to be printed to the screen, and the variable. Also notice the `%i` and the `%f`. This is called a *format specifier*, and is used to specify what format something should be printed in. Whenever printf() comes across one of these, it will try to insert the variable given into that point.

Because the data types of our variables are represented in a computer in several different ways, there are several different ways for C to display them:

Data Type       | Format Specifier
----------------|------------------
char            | %c, or %hhi to print as a number when signed, %hhu to print as a number when unsigned
short           | %hi, or %hu when unsigned
int             | %i, %d can also be used
long            | %li, or %lu when unsigned
long long       | %lli, or %llu when unsigned
float           | %f
double          | %f
long double     | %Lf
unsigned int    | %lu

In order to print a variable, you must have a format specifier, and then a variable to format. Several format specifiers can be together in the same printf(), as well:
```C
    printf("%i and %f", my_first_variable, my_second_variable);
```
In order to scan a variable, you must have a format specifier, and then the address of the  variable(denoted by adding '&' sign before the variable name) to be taken as input. Several format specifiers can be together in the same scanf(), as well:
```C
    scanf("%i and %f", &my_first_variable, &my_second_variable);
```

Now let's start changing the values within our variables. Here's the same examples from before, but with a few more lines:
```C
#include <stdio.h>

int main(void) {
    int my_first_variable = 12;
    double my_second_variable = 983.9;

    printf("My int is %i\n", my_first_variable);
    printf("My double is %f\n", my_second_variable);

    my_second_variable = -18.2 + my_first_variable;

    printf("Now my double is %f\n", my_second_variable);

    return 0;
}
```

Now there's a line that reads `my_second_variable = -18.2 + my_first_variable;`. This equation assigns a new value to the variable on the left. Whenever a new value is being assigned, the variable that it is being assigned to must always be on the left, and must always be there alone. Your program will find the result of the right hand side, and assign it to the variable on the left. In this case, we've added my_first_variable to -18.2. my_first_variable is 12, and -18.2 + 12 is -6.2, so my_second_variable becomes -6.2 after this step. We'll get more into math in a little bit!

## A little more on floats and doubles
When printing out floats and doubles, a lot of times we need precision after the decimal point. If we have 
```C
float var1 = 15.3;
printf("%f");
```
We get `15.300000`. So, say we just want two places after the decimal to give us `15.30`. We would use %.2f. Notice, we use a decimal point in front of the amount of decimal places we want followed by the f, signifing we want to print a float or double. 

# Names for Variables
* The only characters you can use in names are alphabetic characters, numeric digits, and
  the underscore (_) character.
* The first character in a name cannot be a numeric digit. It can be a letter from A to Z or a to z or the underscore character.
* Uppercase characters are considered distinct from lowercase characters.
* You can’t use a C keyword for a name.

# Before you go on...
## A review
* Variables need to be created before they are used.
* Variables are created in the following format: `datatype variable_name = number`.
* Format specifiers allow for variables to be printed.
* The equals sign `=` allows for values to be assigned to variables.



## Program to show variables

```C
#include<stdio.h>

int main() {
  int i;
  float f;
  printf ("enter integer value\n");
  scanf ("%d", &i);
  printf ("enter float value\n");
  scanf ("%f", &f);
  printf ("integer value: %d \nfloat value: %f\n", i, f);
  return 0;
}
```

#OUTPUT
```sh
enter integer value
1
enter float value
2.2
integer value: 1
float value: 2.200000
```
