---
title: Inline Functions in C++
---

## Inline Functions in C++

When the program executes the function call instruction, the CPU stores the memory address of the instruction following the function call, copies the arguments of the function on the stack, and finally transfers control to the specified function. The CPU then executes the function code, stores the function return value in a predefined memory location/register and returns control to the calling function. This can become overhead if the execution time of function is less than the switching time from the caller function to called function (callee). For functions that are large and/or perform complex tasks, the overhead of the function call is usually insignificant compared to the amount of time the function takes to run. However, for small, commonly-used functions, the time needed to make the function call is often more than the time needed to actually execute the function’s code. This overhead occurs for small functions because execution time of small function is less than the switching time.

C++ provides an inline functions to reduce the function call overhead for small functions. An inline function substitutes the code of the function where the call is being made (inline) instead of passing to the function. This substitution is performed by the C++ compiler at compile time. 

The syntax for defining the function inline is:

```cpp
inline return-type function-name(parameters)
{
    // function code
}
```
Note that inlining is only a request to the compiler, not a command. The compiler can ignore the request for inlining. The compiler may not perform inlining in the following circumstances:  
* If a function contains a loop (for, while, do-while).
* If a function contains static variables.
* If a function is recursive.
* If a function return type is other than void, and the return statement doesn’t exist in function body.
* If a function contains switch or goto statement.

### When to use inline functions:
* When the function performs small tasks and is called very often.
* When performance is important.
* Instead of a macro.

``` c++
#include<iostream>

using namespace std;

class MathOperation{

  public:
  
    inline int add(int x, int y){
    
      return(x+y);
    }
    
    inline float div(int n1, float n2){
    
      return(n1/n2);
    }
};

int main(){

  MathOperation obj;
  
  cout << "Addition is :" << obj.add(34,12) << <"\n";
  cout << "Division is :" << obj.div(12,3.4) << "\n";
  
  return 0;
  
}
```

### Advantages:

* It saves the overhead of return call from a function.
* It increases locality of reference by utilizing instruction cache.
* It speeds up your program by avoiding function call overheads.
* It saves overhead of variables push/pop operations on the stack, when function calls happen.
* It is possible to put a function definition in a header file, i.e. it can be included in multiple compilation unit, without the linker complaining.
* When you inline a function, you may enable compiler to perform context specific optimization on the body of function. Such optimizations are not possible for normal function calls. Other optimizations can be obtained by considering the flows of calling context and the called context.
* Inline function may be useful (if it is small) for embedded systems because inline can yield less code than the function call preamble and return.


### Disadvantages:

* When used in a header, it makes your header file larger with information which users don’t care.
* It increases the executable size due to code expansion.
* C++ inlining is resolved at compile time. If you change the code of the inlined function, you would need to recompile all the code using it to make sure it will be updated.
* Inline functions may not be useful for embedded systems when optimizing for memory (versus speed).
* Inline functions might cause thrashing because inlining might increase size of the binary executable file. Thrashing in memory causes performance of computer to degrade.
* The added variables from expanding the inlined function consumes additional registers potentially causing an overhead on register utilization if the number of variables increases drastically.
* Too much inlining can also reduce your instruction cache hit rate, thus reducing the speed of instruction fetch from that of cache memory to that of primary memory.

The following program demonstrates this concept:
```cpp
#include <iostream>
using namespace std;
class operation
{
    int a,b,add,sub,mul;
    float div;
public:
    void get();
    void sum();
    void difference();
    void product();
    void division();
};
inline void operation :: get()
{
    cout << "Enter first value:";
    cin >> a;
    cout << "Enter second value:";
    cin >> b;
}
 
inline void operation :: sum()
{
    add = a+b;
    cout << "Addition of two numbers: " << a+b << "\n";
}
 
inline void operation :: difference()
{
    sub = a-b;
    cout << "Difference of two numbers: " << a-b << "\n";
}
 
inline void operation :: product()
{
    mul = a*b;
    cout << "Product of two numbers: " << a*b << "\n";
}
 
inline void operation ::division()
{
    div=a/b;
    cout<<"Division of two numbers: "<<a/b<<"\n" ;
}
 
int main()
{
    cout << "Program using inline function\n";
    operation s;
    s.get();
    s.sum();
    s.difference();
    s.product();
    s.division();
    return 0;
}
```
Output:
```
Enter first value: 45
Enter second value: 15
Addition of two numbers: 60
Difference of two numbers: 30
Product of two numbers: 675
Division of two numbers: 3 
```
