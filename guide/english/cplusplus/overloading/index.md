---
title: C++ Overloading
---

C++ allows you to specify more than one definition for a function name or an operator in the same scope, which is called function overloading and operator overloading respectively.

An overloaded declaration is a declaration that is declared with the same name as a previously declared declaration in the same scope, except that both declarations have different arguments and obviously different definition (implementation).

When you call an overloaded function or operator, the compiler determines the most appropriate definition to use, by comparing the argument types you have used to call the function or operator with the parameter types specified in the definitions. The process of selecting the most appropriate overloaded function or operator is called overload resolution.

### Function Overloading in C++
You can have multiple definitions for the same function name in the same scope. The definition of the function must differ from each other by the types and/or the number of arguments in the argument list. You cannot overload function declarations that differ only by return type.

Following is the example where same function print() is being used to print different data types −

```cpp
#include <iostream>
#include <string>
using namespace std;
 
class printData {
   public:
      void print(int i) {
        cout << "Printing int: " << i << endl;
      }
      void print(double  f) {
        cout << "Printing float: " << f << endl;
      }
      void print(const string& s) {
        cout << "Printing string: " << s << endl;
      }
};

int main() {
   printData pd;
 
   // Call print to print integer
   pd.print(5);
   
   // Call print to print float
   pd.print(500.263);
   
   // Call print to print string
   pd.print("Hello C++");
 
   return 0;
}
```

When the above code is compiled and executed, it produces the following result −

```
Printing int: 5
Printing float: 500.263
Printing string: Hello C++
```

### Operator Overloading in C++
Most of the built in operators can also be overloaded in C++. This allows programmers to assign different implementation to operators depending on the arguments. These overloaded operators can work for user defined class.

```

#include<iostream> 
using namespace std; 
  
class Complex_Number{ 
private: 
    int real;
    int imag; 
public: 
    Complex_Number(int i = 0, int j =0)  
    {
        real = i;   
        imag = j;
    } 
    //Here the operator '+' is being overloaded
    Complex_Number operator + (Complex_Number const &a) 
    { 
         Complex_Number x; 
         x.real = real + a.real; 
         x.imag = imag + a.imag; 
         return x; 
    } 
    void print() 
    { 
         cout<<real<<" + i"<<imag<<endl; 
    } 
}; 
  
int main() 
{ 
    Complex_Number c1(3, 2), c2(1, 1); 
    //Here, the overloaded operator is called. The numbers get added according to the function defined
    Complex_Number c3 = c1 + c2; 
    c3.print(); 
} 
```

Output for the above program

```
4 + i3
```
## Unary Operators Overloading in C++

The unary operators operate on a single operand and following are the examples of Unary operators −

    The increment (++) and decrement (--) operators.
    The unary minus (-) operator.
    The logical not (!) operator.

The unary operators operate on the object for which they were called and normally, this operator appears on the left side of the object, as in !obj, -obj, and ++obj but sometime they can be used as postfix as well like obj++ or obj--.

Following example explain how minus (-) operator can be overloaded for prefix as well as postfix usage.
Example:
 
      //
      #include <iostream>
      using namespace std;
      class Distance {
      private:
      int feet;             // 0 to infinite
      int inches;           // 0 to 12
      public:
      // required constructors
      Distance()
      {
         feet = 0;
         inches = 0;
      }
      Distance(int f, int i) 
      {
         feet = f;
         inches = i;
      }
      
      method to display distance
      void displayDistance()
      {
         cout << "F: " << feet << " I:" << inches <<endl;
      }
      
      // overloaded minus (-) operator
      Distance operator- ()
      {
         feet = -feet;
         inches = -inches;
         return Distance(feet, inches);
      }};
      int main()
      {
      Distance D1(11, 10), D2(-5, 11);
      -D1;                     // apply negation
      D1.displayDistance();    // display D1
      -D2;                     // apply negation
      D2.displayDistance();    // display D2
      return 0;
      }

      

Output:

F: -11 I:-10
F: 5 I:-11












