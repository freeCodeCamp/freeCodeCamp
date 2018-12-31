---
title: Pointers
---
# Pointers in C
By now you should be aware that C is a low-level language, and nothing shows that better than pointers. Pointers are variables that get you the variable value by "pointing" to a memory location rather than storing the value of the variable itself. This allows for some handy tricks, and is also what gives us access to arrays and file handling, among other things.

#
```
type *var-name;
```

## Making and Using a Pointer
```c
#include <stdio.h>

int main(void){
    double my_double_variable = 10.1;
    double *my_pointer;

    my_pointer = &my_double_variable;

    printf("value of my_double_variable: %f\n", my_double_variable);

    ++my_double_variable;

    printf("value of my_pointer: %f\n", *my_pointer);

    return 0;
}
```
Output:
```
value of my_double_variable: 10.100000
value of my_pointer: 11.100000
```

In this code, there are two declarations. The first is a typical variable initialization which creates a `double` and sets it equal to 10.1. New in our declarations is the usage of `*`. The asterisk (`*`) is usually used for multiplication, but when we use it by placing it in front of a variable it tells C that this is a pointer variable.  

The next line tells the compiler where that somewhere else actually is. By using `&` in this way, it becomes the 'dereferencing operator', and returns the memory location of the variable it's looking at.

With that in mind, let's take another look at this chunk of code:
```c
double *my_pointer;
// my_pointer now stored the address of my_double_variable
my_pointer = &my_double_variable;
```
`my_pointer` has been declared, and it's been declared as a pointer. The C compiler now knows that `my_pointer` is going to point to a memory location. The next line assigns `my_pointer` a memory location value using the `&`.

Now let's take a look what referring to a memory location means for your code:
```c
    printf("value of my_double_variable: %f\n", my_double_variable);
    
    // Same as my_double_variable = my_double_variable + 1
    // In human language, adding one to my_double_variable 
    ++my_double_variable;

    printf("value of my_pointer: %f\n", *my_pointer);
```
Notice that in order to get the value of the data at `*my_pointer`, you'll need to tell C that you want to get the value the variable is pointing at. Try running this code without that asterisk, and you'll be able to print the memory location, because that's what the `my_variable` variable is actually holding.

You can declare multiple pointer in a single statement as with standard variables, like so: 
```c
int *x, *y;
```
Notice that the `*` is required before each variable. This is because being a pointer is considered as part of the variable and not part of the datatype.

## Practical Uses of Pointers
### Arrays
The most common application of a pointer is in an array. Arrays, which you'll read about later, allow for a group of variables. You don't actually have to deal with `*` and `&` to use arrays, but that's what they're doing behind the scenes. A commonly used array is for strings. Since strings are not defined in C, they are simply created as a character array, commonly denoted by `char * stringName;`

### Functions
Sometimes you want to adjust the value of a variable inside of a function, but if you simply pass in your variable by-value, the function will work with a copy of your variable instead of the variable itself. If, instead, you pass in the pointer pointing to the memory location of the variable, you can access and modify it from outside of its normal scope. This is because you are touching the original memory location itself, allowing you to adjust something in a function and having it make changes elsewhere. In contrast to "call by value", this is called "call by reference".

The following program swaps the values of two variables inside of the dedicated `swap` function. To achieve that, the variables are passed in by reference.

```c
 /* C Program to swap two numbers using pointers and function. */
#include <stdio.h>
void swap(int *n1, int *n2);

int main()
{
    int num1 = 5, num2 = 10;

    // address of num1 and num2 is passed to the swap function
    swap( &num1, &num2);
    printf("Number1 = %d\n", num1);
    printf("Number2 = %d", num2);
    return 0;
}

void swap(int * n1, int * n2)
{
    // pointer n1 and n2 points to the address of num1 and num2 respectively
    int temp;
    temp = *n1;
    *n1 = *n2;
    *n2 = temp;
}
```

Output
```
Number1 = 10
Number2 = 5

```
The addresses, or memory locations, of `num1` and `num2` are passed to the function `swap` and are represented by the pointers `*n1` and `*n2` inside of the function. So, now the pointers `n1` and `n2` point to the addresses of `num1` and `num2` respectively.

So, now the pointer n1 and n2 points to the address of num1 and num2 respectively.

When, the value of pointers are changed, the value in the pointed memory location also changes correspondingly.

Hence, changes made to *n1 and *n2 are reflected in num1 and num2 in the main function.


### POINTERS AS PARAMETERS TO FUNCTION
when we pass any parameter to function we are making a copy of the parameter. let see with the example
```C
#include <stdio.h>

void func(int);

int main(void) {
    int a = 11;
    func(a);
    printf("%d",a);// print 11
    

    return 0;
}
void func(int a){
 a=5
 printf("%d",a);//print 5
}
```
In the example above we are changinging the value of integer a in function func, but we still geting 11 in the main function. This happens because in the function copy of integer a has passed as parameter, so in this function we have not access to the 'a' which is in main function.

So how could you change the value of integer defined in main , by using another function? Here POINTERS comes in to role.
when we supply pointer as a parameter , we have access to address of that parameter and we could to any thig with this parameter and result will be shown everywhere.
Below is an example which does exactly the same thing we want...

By dereferencing `n1` and `n2`, we now can modify the memory to which `n1` and `n2` point. This allows us to change the value of the two variables `num1` and `num2` declared in the `main` function outside of their normal scope. After the function is done, the two variables now have swapped their values, as can be seen in the output.

### Tricks with Memory Locations
Whenever it can be avoided, it's a good idea to keep your code easy to read and understand. In the best case scenario, your code will tell a story- it will have easy to read variable names and make sense if you read it out loud, and you'll use the occasional comment to clarify what a line of code does.

Because of that, you should be careful when using pointers. It's easy to make something confusing for you to debug or for someone else to read. However, it is possible to do some pretty neat things with them.

Take a look at this code, which turns something from uppercase to lowercase:
```c
#include <stdio.h>
#include <ctype.h>

char *lowerCase (char *string) {
    char *p = string;
    while (*p) {
        if (isupper(*p)) *p = tolower(*p);
        p++;
    }
    return string;
}
```
This starts by taking a string (something you'll learn about when you get into arrays) and runs through each location. Notice the p++. This increments the pointer, which means that it is looking at the next memory location. Each letter is a memory location, so in this way the pointer is looking at every letter and deciding what to do for each one.

### Const Qualifer
The qualifier const can be applied to the declaration of any variable to specify that its value will not be changed ( Which depends upon where const variables are stored, we may change value of const variable by using pointer ).

### Pointer to variable
We can change the value of ptr and we can also change the value of object ptr pointing to.
Following code fragment explains pointer to variable
```c
#include <stdio.h>
int main(void)
{
    int i = 10;
    int j = 20;
    int *ptr = &i;        /* pointer to integer */
    printf("*ptr: %d\n", *ptr);
  
    /* pointer is pointing to another variable */
    ptr = &j;
    printf("*ptr: %d\n", *ptr);
  
    /* we can change value stored by pointer */
    *ptr = 100;
    printf("*ptr: %d\n", *ptr);
  
    return 0;
}
```
### Pointer to constant
We can change pointer to point to any other integer variable, but cannot change value of object (entity) pointed using pointer ptr.
```c
#include <stdio.h> 
int main(void)
{
    int i = 10;   
    int j = 20;
    const int *ptr = &i;    /* ptr is pointer to constant */
  
    printf("ptr: %d\n", *ptr); 
    *ptr = 100;        /* error: object pointed cannot be modified
                     using the pointer ptr */
  
    ptr = &j;          /* valid */
    printf("ptr: %d\n", *ptr);
  
    return 0;
}
```
### Constant pointer to variable
In this we can change the value of the variable the pointer is pointing to. But we can't change the pointer to point to 
another variable.
```c
#include <stdio.h>
int main(void)
{
   int i = 10;
   int j = 20;
   int *const ptr = &i;    /* constant pointer to integer */
  
   printf("ptr: %d\n", *ptr);
  
   *ptr = 100;    /* valid */
   printf("ptr: %d\n", *ptr);
  
   ptr = &j;        /* error */
   return 0;
}
```
### Constant pointer to constant
Above declaration is constant pointer to constant variable which means we cannot change value pointed by pointer as well as we cannot point the pointer to other variable.
```c
#include <stdio.h>
  
int main(void)
{
    int i = 10;
    int j = 20;
    const int *const ptr = &i; /* constant pointer to constant integer */
  
    printf("ptr: %d\n", *ptr);
  
    ptr = &j;            /* error */
    *ptr = 100;        /* error */
  
    return 0;
}
```


## Null Pointer
Consider following line 
```c
int  *p;
```
We have created a pointer which contain garbage value. If we try to dereference it, we will read the value stored at the garbage address and this can lead to unexpected results, such as segmentation fault. Hence we should never leave a pointer uninitialized and instead initialize it to NULL, to avoid unexpected results.
```c
int *p = NULL; // NULL is a constant with value 0
int *q = 0; // same as above
```


### Void Pointer
A void pointer is a pointer variable declared using the reserved word in C ‘void’.
Lets illustrate this with a void pointer declaration below:
```C
void  *ptr;
```
A pointer variable with the keyword `void`is a general purpose pointer variable. 
The pointer can hold an address of any variable of any data type (`int`, `char`...etc).

As illustrated earlier on, the * operator serves its own purpose.
But in the case of a void pointer we need to typecast the pointer variable to dereference it mainly because a void pointer has no specific data type associated with it. 
There is no other way the compiler can tell what type of data is pointed to by the void pointer. 
So to take the data pointed to by a void pointer we typecast it with the correct type of the data that is held inside the void pointer's location. 

Below is an example to illustrate how a void pointer coild be used in a program:

```C
#include<stdio.h>

void main() {
    int a = 10;
    float b = 35.75;
    void *ptr; // Declaration of a void pointer
    ptr = &a; // Assigning address of integer to void pointer.
    printf("The value of integer variable is = %d",*( (int*) ptr) );// (int*)ptr - is ype typecasting, to point to an int type. Where as *((int*)ptr) dereferences the typecasted void pointer variable.
}
```
The output becomes
```output
The value of integer variable is = 10
```

A void pointer can be useful if the programmer is not sure about the data type of data inputted by the end user. 
In such a case the programmer can use a void pointer to point to the location of the unknown data type. 
The program can be set in such a way to ask the user to inform the type of data and type casting can be performed according to the information inputted by the user.

Another important point you should keep in mind about void pointers is that pointer arithmetic can not be performed in a void pointer. 

Example:
```C
    void *ptr;
    int a;
    ptr=&a;
    ptr++; // This statement is invalid and will result in an error because 'ptr' is a void pointer variable.
```
Credits: <http://www.circuitstoday.com/void-pointers-in-c>

# Before you go on...
## A review
* Pointers are variables, but instead of storing a value, they store a memory location.
* `*` and `&` are used to access values at memory locations and to access memory locations, respectively.
* Pointers are useful for some of the underlying features of C.

#Pointer vs Array in C
Most of the time, pointer and array accesses can be treated as acting the same, the major exceptions being:

1) the sizeof operator
* `sizeof(array)` returns the amount of memory used by all elements in array
* `sizeof(pointer)` only returns the amount of memory used by the pointer variable itself

2) the & operator
* &array is an alias for &array[0] and returns the address of the first element in array
* &pointer returns the address of pointer

3) a string literal initialization of a character array
* `char array[] = “abc”` sets the first four elements in array to ‘a’, ‘b’, ‘c’, and ‘\0’
* `char *pointer = “abc”` sets pointer to the address of the “abc” string (which may be stored in read-only memory and thus unchangeable)

4) Pointer variable can be assigned a value whereas array variable cannot be.
```c
    int a[10];
    int *p; 
    p = a; /*legal, pointer p, points the starting memory address of array a that is a[0]*/
    a = p; /*illegal, a is not an individual variable*/ 
```
5) Arithmetic on pointer variable is allowed.
```c
    p++; /*Legal, p points the next memory address*/
    a++; /*illegal*/ 
```
