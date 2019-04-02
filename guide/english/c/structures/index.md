---
title: Structures
---
## Structures in C

### What are Structures?
* A **structure** is a user-defined type in C. It is based on the idea that certain times, programmer wants to manage not just primitive data-types but also programmer-defined data-types.
* **Structure**, as the name suggests, consists of various primitive data-types, like character, integers, floating point variables, arrays, etc.
* **Structure** can also contain various other user-defined data types. You would learn about nested-structures next.
* **Structures** form the basis of **_object-oriented-programming_** as the concept of *class* originates from structures.
### struct keyword
* `struct` keyword can help us in defining a user-defined data type.
```C
struct StudentRecord
{
  char Name[20];
  int Class;
  char Address[30];
  char Phone[10];
};
```
* We can also define a **structure** using **typedef** which makes initializing a structure later in our program easier.
```C
typedef struct StudentRecord
{
  char Name[20];
  int Class;
  char Address[30];
  char Phone[10];
}Record;
```
In `main()`, the user-defined data-type **StudentRecord** is defined as:
```C
int main(void)
{
  struct StudentRecord student1;
}
```
And using **typedef**, the user-defined data-type looks like:
```C
int main(void)
{
  Record student1;
}
```
To access the data stored in **student1**, we use dot( **.** ) operator to access the contents of the structure type variable.
```C
int main(void)
{
  struct StudentRecord student1;
  student1.Class = 10;
  printf("Enter Name of Student\n");
  scanf("%s",&student1.Name);
  printf("Enter Address of Student\n");
  scanf("%s",&student1.Address);
  printf("Enter Phone Number of Student\n");
  scanf("%s",&student1.Phone);
  // Printing the Data
  printf("Name: %s \n, Class: %d \n, Address: %s \n, Phone: %s \n",student1.Name, student1.Class, student1.Address, student1.Phone);
}
```
### More Information  
https://www.tutorialspoint.com/cprogramming/c_structures.htm
