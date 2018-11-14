---
title: Arrays and Strings
---
# Arrays in C
Arrays allow for a set of variables of the same type to be grouped together as one variable. This is useful in its own right, but also because strings fall into this category. Strings, which are how we represent words and sentences in computer languages, are just collections of character variables. Therefore, we represent strings using arrays in C.

## Making an Array
A normal integer variable would be declared like so:
```C
int my_variable;
```
To declare this as an array, and make it an array of 5 integers, it can be declared like this:
```C
int my_array[5];
```
This will produce an array called `my_array` that can hold 5 integers. However, none of the positions in the array have been set (yet). You could declare the array, and have the values be set at the beginning:
```C
int my_array[] = {1, 5, 3, 6, 2};
```
Notice that in this example, we didn't bother specifying a number in the square brackets. This is because the curly brackets have values in them that will be assigned to each position in the array. You could put a number in the brackets anyway, as long as you made sure to create enough memory locations to store the values you've passing in.

When initializing an array, you can provide fewer values than array elements. For example, the
following statement initializes only the first two elements of my_array:

float my_array[5] = {5.0, 2.5};

If you partially initialize an array, the compiler sets the remaining elements to zero.

Now that the array has been declared with 5 values, it has 5 memory locations. Consider this table for a visual example of that:

| Position | 0 | 1 | 2 | 3 | 4 |
|----------|---|---|---|---|---|
| Value    | 1 | 5 | 3 | 6 | 2 |

Notice that even though there are 5 memory locations, the array positions only go up to 4. This is because arrays in C (and most other languages) start at 0, because arrays are implemented using pointers. When you call a position in an array, you're really calling that memory location plus a certain number. To get the beginning of the array, move 0 places in memory, to get the position after that, move one place in memory, and so on.

Here's an example of setting the array to 9 at position 1:
```C
my_array[1] = 9;
```
So it's just like any other variable, except it has multiple values to access using the number within the square brackets. Values can be returned that way, too:
```C
int variable = my_array[4];
```
This will declare `variable` to be an integer equal to the value at position 4 of `my_array`. However, because `variable` is a single `int`, and not an array, this is **not** code that will have the right outcome:
```C
// This code will NOT work properly!
int variable = my_array;
```

Any integer can be placed in the square brackets to get a position in the array. Those integers can be variables, too. Take a look at this example, which prints the contents of an array:

```C
#include <stdio.h>

int main(void) {
    int my_array[] = {1, 1, 2, 3, 5, 7, 12};

    for(int count = 0; count < 7; count++) {
        printf("%i, \n", my_array[count]);
    }

    return 0;
}
```
## Memory Allocation In Array
Normally variables occupy memory in a Random Manner, i.e. if I declare 
```C
int a;
float b;
```
`a` and `b` are each assigned a random memory address (e.g. 3004 and 5006). That doesn't happen in the case of an array.

Let's consider an example:
If the first element is assigned memory address 2000, then the second will be assigned 2002 if it is an `int` array.
Memory allocation is continuous in Arrays, not random like variables.

As an example, consider an array `a[4]`, which contains 5 elements:

| Position | 0  | 1  | 2  | 3  |
|:---------|:--:|:--:|:--:|:--:|
| Value    | 1  | 5  | 3  | 6  |
|  Address |2000|2002|2004|2006|

## Strings
Arrays are sets of variables of the same data type, and strings are sets of characters. As a result, we can represent strings with an array. You _can_ declare something in the same way as before, but you'll need to place '\0' as one of your values (more on that in a minute!):
```C
char hello_world[] = {'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!', '\0'};
```
Yikes. That's not really a great solution. Thankfully, C provides a better way with strings in mind:
```C
char hello_world[] = "Hello world!";
```
That's much nicer. It doesn't even require you to place the '\0' at the end, either. So what was that?

### Null Termination
Strings in C are null terminated, meaning that they end with the null character. This way, the compiler (and your and everyone else's) code will know where the string ends: once the character is null, the string is over.

Of course, there is no 'null' button on your keyboard, but you still need to type it out somehow. That's what \0 does. Whenever the C compiler sees \0, it will insert a null character. It's just like how \n prints a newline.

### Printing Strings
Another thing C makes easier for us is the printing of strings. Rather than forcing you to print out every character in the array, you can just use the %s format specifier, and treat the string like you would any `int` or `double` value. Here's an example of the hello, world program from the very beginning, made slightly more complicated with strings:

```C
#include <stdio.h>

int main(void) {
    char hello_world[] = "Hello, World!\n";
    printf("%s", hello_world);

    return 0;
}
```

### Playing with Strings
Printing strings is easy, but other operations are slightly more complex. Thankfully, the `string.h` library has some helpful functions to use for a number of situations.
#### Copying: `strcpy`
`strcpy` (from 'string copy') copies a string. For example, this code snippet will copy the contents of the string `second` into the string `first`:
```C
strcpy(first, second);
```
Here is an example of how manual implementation of the strcpy function looks like: 

void copy_string(char [] first_string, char [] second_string) 
{ 
    int i; 
     
    for(i = 0; first_string[i] != '\0'; i++) 
    { 
        first_string[i] = second_string[i]; 
    } 
} 

#### Concatenate: `strcat`
`strcat` (from 'string concatenate') will concatenate a string, meaning it will take the contents of one string and place it on the end of another string. In this example, the contents of `second` will be concatenated onto `first`:
```C
strcat(first, second);
```
Here is an example of manual implementation of function strcat:

void string_concatenate(char [] s1, char [] s2)
{
    int i = strlen(s1), j;
    for(j = 0; s2[j]; j++, i += 1)
    {
        s1[i] = s2[j];
    }
}

#### Get length: `strlen`
`strlen` (from 'string length') will return an integer value corresponding to the length of the string. In this example, an integer called `string_length` will be assigned the length of `my_string`:
```C
string_length = strlen(my_string);
```
Here is an manual implementation of fuction strlen:

int string_length(char [] string)
{
    int i;
    
    for(i = 0; string[i]; i++);
    
    return i;
}

#### Compare: `strcmp`
`strcmp` (from 'string compare') compares two strings. The integer value it returns is 0 if they are the same, but it will also return negative if the value of the first (by adding up characters) is less than the value of the second, and positive if the first is greater than the second. Take a look at an example of how this might be used:
```C
if(!strcmp(first, second)){
    printf("These strings are the same!\n");
} else {
    printf("These strings are not the same!\n");
}
```
Notice the `!`, which is needed because this function returns 0 if they are the same. Placing the exclamation point here will make that comparison return true.

#### Split a string: `strtok`
`strtok` (from 'string token') breaks a string into a series of tokens using a  delimiter. In this example, strtok breaks  string str into a series of tokens using the delimiter delim:
```C
char *strtok(char *str, const char *delim);
```

# Before you go on...
## A Review
* Arrays are collections of variables.
* Arrays have separate positions that can be declared with brackets, and accessed with square brackets.
* Strings are arrays too, but we can treat them a little differently: they can be declared using double quotes, and printed using %s.
* Strings have their own library, `string.h`, which has some handy functions to use.
