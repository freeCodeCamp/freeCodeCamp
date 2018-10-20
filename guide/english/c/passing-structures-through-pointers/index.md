---
title: Passing structures through pointers
---
## Passing structures through pointers

### Why pointers for passing structure?
* Passing large structures to functions using the call by value method is very inefficient. Therefore, it is preferred to pass structures through pointers.
* It is possible to create a pointer to almost any
type in C, including the user-defined types.
* It is extremely common to create pointers to structures. Like in other cases, a pointer to a structure is never itself a structure, but merely a variable that holds the address of a structure.
* a structure is never itself a structure, but merely a variable that
holds the address of a structure. The syntax to declare a pointer to a structure can be given as,
```
struct student
{
    int roll_no;
    char name[80];
}*stud;
```
* We can also define a **structure** using **typedef** which makes initializing a structure later in our program easier.
* For student structure, we can declare a pointer variable by writing struct student *ptr_stud, stud;
* The next thing to do is to assign the address of stud to the pointer using the address operator
(&), as we would do in case of any other pointer. So to assign the address, we will write
```
ptr_stud = &stud;
```
To access the members of a structure, we can write
```
/* get the structure, then select a member */
(*ptr_stud).roll_no;
```
* Since parentheses have a higher precedence than *, writing this statement would work well. But
this statement is not easy to work with, especially for a beginner. So, C introduces a new operator
to do the same task. This operator is known as ‘pointing-to’ operator
(->). It can be used as:
```
/* the roll_no in the structure ptr_stud points to */
ptr_stud -> roll_no = 01;
```
This statement is far easier than its alternative.

```
\\Program to initialize the members of a structure by using a pointer to the structure.
#include <stdio.h>
#include <conio.h>
struct student
{
    int r_no;
    char name[20]; 
};
int main()
{
    struct student stud1, *ptr_stud1;
    clrscr();   //to clear the screen (for turbo C)
    ptr_stud1 = &stud1;
    printf("\n Enter the details of the student :");
    printf("\n Enter the Roll Number =");
    scanf("%d", &ptr_stud1 -> r_no);
    printf("\n Enter the Name = );
    gets(ptr_stud1 -> name);
    printf("\n DETAILS OF THE STUDENT");
    printf("\n ROLL NUMBER = %d", ptr_stud1 –> r_no);
    printf("\n NAME = %s", ptr_stud1 –> name);
    return 0;
}
```

Reference:  [Reema Thareja](https://www.amazon.in/PROGRAMMING-C-THAREJA/dp/B00BG6P3L8?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=fb20a22a-4f46-4cb8-9372-b7cf7b3107fb)


