---
title: Object Oriented Programming using C++
---

## Object Oriented Programming using C++

Object oriented programming, OOP for short, aims to implement real world entities like inheritance, hiding and polymorphism in programming. The main aim of OOP is to bind together the data and the functions that operates on them so that no other part of code can access this data except that function.

Let us learn about different characteristics of an Object Oriented Programming language:

### Object:
Objects are basic run-time entities in an object oriented system, objects are instances of a class these are defined user defined data types.

```cpp
class person
{
    char name[20];
    int id;
public:
    void getdetails(){}
};
 
int main()
{
   person p1; //p1 is an object 
}
```
Objects take up space in memory and have an associated address like a record in pascal or structure or union in C.

When a program is executed the objects interact by sending messages to one another.

Each object contains data and code to manipulate the data. Objects can interact without having to know details of each others data or code. It is sufficient to know the type of message accepted and type of response returned by the objects.

### Class: 
Class is a blueprint of data and functions or methods. Class does not take any space.
```cpp
class class_name
{
  private:
     //data members and member functions declarations
  public:
     //data members and member functions declarations
  protected:
     //data members and member functions declarations
};
```
Class is a user defined data type like structures and unions in C.

By default class variables are private but in case of structure it is public. in above example person is a class.

### Encapsulation and Data abstraction:
Wrapping up (combining) of data and functions into a single unit is known as encapsulation. The data is not accessible to the outside world and only those functions which are wrapping in the class can access it. This insulation of the data from direct access by the program is called data hiding or information hiding.

Data abstraction refers to providing only needed information to the outside world and hiding implementation details. For example, consider a class Complex with public functions as getReal() and getImag(). We may implement the class as an array of size 2 or as two variables. The advantage of abstractions is, we can change implementation at any point, users of Complex class won't be affected as our method interface remains same. Had our implementation be public, we would not have been able to change it.

### Inheritance:
Inheritance is the process by which objects of one class acquire the properties of objects of another class. It supports the concept of hierarchical classification. Inheritance provides reusability. This means that we can add additional features to an existing class without modifying it.

Here is an example of using inheritance to create a hierarchy, which can be refered to as an 'IS A' relationship between the classes.
```
class animal { 
    private:
    public:
        void sleep();
    protected: 
        int amt_legs;
};

class cat: public animal {
    private:
    public:
        void purr();
    protected:
        char * color_of_fur;
};
```
In the above code, the `cat` class derives from the `animal` class, which means that a cat IS AN animal, plus some other features. The `cat` class explicitly has a variable for the color of its fur and a function for purring, but it also implicitly has a variable for the amount of legs it has and a function for sleeping.

### Polymorphism:
Polymorphism means ability to take more than one form. An operation may exhibit different behaviors in different instances. The behavior depends on the types of data used in the operation.

C++ supports operator overloading and function overloading. Operator overloading is the process of making an operator to exhibit different behaviors in different instances. Function overloading is using a single function name to perform different types of tasks. Polymorphism is extensively used in implementing inheritance.

### Dynamic Binding:
In dynamic binding, the code to be executed in response to function call is decided at runtime. C++ has virtual functions to support this.

### Message Passing: 
Objects communicate with one another by sending and receiving information to each other. A message for an object is a request for execution of a procedure and therefore will invoke a function in the receiving object that generates the desired results. Message passing involves specifying the name of the object, the name of the function and the information to be sent.
