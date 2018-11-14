---
title: Structured data types
---
# Structured data types in C
During your programming experience you may feel the need to define your own type of data. In C this is done using two keywords: `struct` and `typedef`.
Structures and unions will give you the chance to store non-homogenous data types into a single collection.
## Declaring a new data type

```C
typedef struct student_structure{
    char* name;
    char* surname;
    int year_of_birth;
}student;
```

After this little code `student` will be a new reserved keyword and you will be able to create variables of type `student`.
Please mind that this new kind of variable is going to be structured which means that defines a physically grouped list of variables to be placed under one name in a block of memory.

## New data type usage
Let's now create a new `student` variable and initialize its attributes:

```C
   student stu;
 
   strcpy( stu.name, "John");
   strcpy( stu.surname, "Snow"); 
   stu.year_of_birth = 1990;
 
   printf( "Student name : %s\n", stu.name);
   printf( "Student surname : %s\n", stu.surname);
   printf( "Student year of birth : %d\n", stu.year_of_birth);

```

As you can see in this example you are required to assign a value to all variables contained in your new data type.
To access a structure variable you can use the point like in `stu.name`.
There is also a shorter way to assign values to a structure:

```C
typedef struct{
   int    x;
   int    y;
}point;

point image_dimension = {640,480};
```

Or if you prefer to set its values following a different order:

```C
point img_dim = { .y = 480, .x = 640 };
```

## Unions vs Structures

Unions are declared in the same was as structs, but are different because only one item within the union can be used at any time.

```C
typedef union{
      int circle;
      int triangle;
      int ovel;
}shape;
```
You should use `union` in such case where only one condition will be applied and only one variable will be used.
Please do not forget that we can use our brand new data type too:

```C
typedef struct{
      char* model;
      int year;
}car_type;

typedef struct{
      char* owner;
      int weight;
}truck_type;

typedef union{
  car_type car;
  truck_type truck;
}vehicle;
```

## A few more tricks

* When you create a pointer to a structure using the `&` operator you can use the special `->` infix operator to deference it. This is used for example when working with linked lists in C
* The new defined type can be used just as other basic types for almost everything. Try for example to create an array of type `student` and see how it works.
* Structs can be copied or assigned but you can not compare them!
